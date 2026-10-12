import { useEffect, useState } from "react";
import { Star, MessageSquarePlus, X } from "lucide-react";
import {
  REVIEWS_SHEET_CSV_URL,
  REVIEW_FORM_URL,
  buildReviewFormEmbedUrl,
  fetchProductReviews,
  reviewMatchesProduct,
  type ProductReview,
} from "@/lib/reviews";

function StarRow({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${size} ${n <= Math.round(rating) ? "fill-brand-green text-brand-green" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function ProductReviews({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const [reviews, setReviews] = useState<ProductReview[] | null>(null);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!REVIEWS_SHEET_CSV_URL) return;
    let cancelled = false;

    fetchProductReviews()
      .then((all) => {
        if (cancelled) return;
        setReviews(
          all.filter((r) => reviewMatchesProduct(r, { id: productId, name: productName })),
        );
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [productId, productName]);

  const reviewFormEmbedUrl = buildReviewFormEmbedUrl(productName);
  const average =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : null;

  // Nothing configured yet — render nothing rather than a broken section.
  if (!REVIEWS_SHEET_CSV_URL && !REVIEW_FORM_URL) return null;

  return (
    <section className="mt-12 lg:mt-16 rounded-3xl border border-border bg-[#fdfaf5] p-6 sm:p-10 lg:p-12 shadow-sm max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl text-brand-green-dark">Customer reviews</h2>
          {average !== null && (
            <div className="mt-2 flex items-center gap-2">
              <StarRow rating={average} />
              <span className="text-sm text-muted-foreground">
                {average.toFixed(1)} out of 5 · {reviews!.length} review
                {reviews!.length === 1 ? "" : "s"}
              </span>
            </div>
          )}
        </div>

        {reviewFormEmbedUrl && (
          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand-green-dark hover:text-brand-green-dark shadow-sm"
          >
            {showForm ? (
              <>
                <X className="h-4 w-4" /> Close
              </>
            ) : (
              <>
                <MessageSquarePlus className="h-4 w-4" /> Write a review
              </>
            )}
          </button>
        )}
      </div>

      {showForm && reviewFormEmbedUrl && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white">
          <iframe
            src={reviewFormEmbedUrl}
            title={`Write a review for ${productName}`}
            className="w-full"
            height={900}
            loading="lazy"
          >
            Loading review form…
          </iframe>
        </div>
      )}

      <div className="mt-8 space-y-6">
        {error && (
          <p className="text-sm text-muted-foreground">
            Reviews couldn&apos;t be loaded right now.
          </p>
        )}

        {!error && reviews === null && REVIEWS_SHEET_CSV_URL && (
          <p className="text-sm text-muted-foreground">Loading reviews…</p>
        )}

        {reviews !== null && reviews.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No reviews yet for this product — be the first to share your experience.
          </p>
        )}

        {reviews?.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="border-b border-border/60 pb-6 last:border-0 last:pb-0"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-foreground">{r.name}</p>
              {r.date && <p className="text-xs text-muted-foreground">{r.date}</p>}
            </div>
            <div className="mt-1.5">
              <StarRow rating={r.rating} size="h-3.5 w-3.5" />
            </div>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
