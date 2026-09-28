/**
 * Product reviews are collected via a Google Form and stored in a Google
 * Sheet. That sheet is published to the web as CSV (File → Share → Publish
 * to web → select the responses tab → CSV), and this file fetches + parses
 * that CSV client-side. No backend or API key is needed.
 *
 * Setup:
 * 1. Create a Google Form with fields: Product (dropdown/short answer),
 *    Name, Rating (1-5), Review. Link it to a new Google Sheet.
 * 2. In the response sheet, add a column named "Approved" (Yes/No) so you
 *    can moderate reviews before they appear on the site — leave it blank
 *    until you've read the review, then type "Yes" to publish it.
 * 3. File → Share → Publish to web → pick the responses sheet/tab →
 *    format CSV → Publish. Paste the resulting URL below.
 * 4. Paste your Google Form's "send" URL below so the "Write a review"
 *    button can open it (optionally with the product pre-filled — see
 *    REVIEW_FORM_PRODUCT_ENTRY_ID below).
 */

// Published Google Sheet CSV URL, e.g.
// "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv"
export const REVIEWS_SHEET_CSV_URL = "";

// Google Form URL customers fill in, e.g.
// "https://docs.google.com/forms/d/e/1FAIpQLS.../viewform"
export const REVIEW_FORM_URL = "";

// Optional: the Google Form field ID for the "Product" question, so the
// "Write a review" link can pre-fill it with the product name, e.g.
// "entry.123456789" (find it by opening the form, filling a test answer,
// and copying the entry.* param from the pre-filled link it gives you).
export const REVIEW_FORM_PRODUCT_ENTRY_ID = "";

export interface ProductReview {
  /** Raw product value from the sheet (product id or product name — matched loosely). */
  product: string;
  name: string;
  rating: number;
  review: string;
  date?: string;
}

/** Loose match so a form answer of "ABC Capsules" matches the product either
 * by its display name or its internal id ("abc-powder"). */
export function reviewMatchesProduct(
  review: ProductReview,
  product: { id: string; name: string },
): boolean {
  const value = review.product.trim().toLowerCase();
  return value === product.id.trim().toLowerCase() || value === product.name.trim().toLowerCase();
}

// Column names are matched case-insensitively; adjust here if your Google
// Form uses different question titles.
const COLUMN_ALIASES = {
  product: ["product", "product id", "product name"],
  name: ["name", "your name"],
  rating: ["rating", "star rating", "how would you rate this product"],
  review: ["review", "your review", "comments", "feedback"],
  approved: ["approved", "publish", "status"],
  date: ["timestamp", "date"],
};

function findColumn(headers: string[], aliases: string[]): number {
  const normalized = headers.map((h) => h.trim().toLowerCase());
  for (const alias of aliases) {
    const index = normalized.indexOf(alias);
    if (index !== -1) return index;
  }
  return -1;
}

// Minimal CSV parser that handles quoted fields (with embedded commas,
// quotes and newlines) the way Google Sheets exports them.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function isApproved(value: string | undefined): boolean {
  if (!value) return false;
  const v = value.trim().toLowerCase();
  return v === "yes" || v === "y" || v === "true" || v === "approved";
}

export async function fetchProductReviews(): Promise<ProductReview[]> {
  if (!REVIEWS_SHEET_CSV_URL) return [];

  const response = await fetch(REVIEWS_SHEET_CSV_URL, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load reviews (${response.status})`);

  const text = await response.text();
  const rows = parseCsv(text);
  if (rows.length < 2) return [];

  const headers = rows[0];
  const productCol = findColumn(headers, COLUMN_ALIASES.product);
  const nameCol = findColumn(headers, COLUMN_ALIASES.name);
  const ratingCol = findColumn(headers, COLUMN_ALIASES.rating);
  const reviewCol = findColumn(headers, COLUMN_ALIASES.review);
  const approvedCol = findColumn(headers, COLUMN_ALIASES.approved);
  const dateCol = findColumn(headers, COLUMN_ALIASES.date);

  if (productCol === -1 || nameCol === -1 || ratingCol === -1 || reviewCol === -1) {
    return [];
  }

  const reviews: ProductReview[] = [];
  for (const cells of rows.slice(1)) {
    if (approvedCol !== -1 && !isApproved(cells[approvedCol])) continue;

    const product = (cells[productCol] ?? "").trim();
    const name = (cells[nameCol] ?? "").trim();
    const rating = Number.parseFloat(cells[ratingCol] ?? "");
    const review = (cells[reviewCol] ?? "").trim();
    if (!product || !name || !review || Number.isNaN(rating)) continue;

    reviews.push({
      product,
      name,
      rating,
      review,
      date: dateCol !== -1 ? (cells[dateCol] ?? "").trim() : undefined,
    });
  }

  return reviews;
}

export function buildReviewFormUrl(productName: string): string {
  if (!REVIEW_FORM_URL) return "";
  if (!REVIEW_FORM_PRODUCT_ENTRY_ID) return REVIEW_FORM_URL;

  const url = new URL(REVIEW_FORM_URL);
  url.searchParams.set(REVIEW_FORM_PRODUCT_ENTRY_ID, productName);
  return url.toString();
}
