/**
 * SeoHead utility — injects canonical, Open Graph, Twitter Card tags, and JSON-LD
 * structured data into the document <head> via React portals.
 *
 * Usage: render <SeoHead ... /> at the top of any page component.
 */
import { useEffect } from "react";

const BASE_URL = "https://sathyavedaherbals.in";
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo.png`;

interface SeoHeadProps {
  /** Canonical path, e.g. "/" or "/products". Must start with /. */
  path: string;
  title: string;
  description: string;
  /** Optional override for the OG image. Defaults to the logo. */
  ogImage?: string;
  /** Additional JSON-LD structured data objects to inject. */
  jsonLd?: Record<string, unknown>[];
}

/** Upserts a <meta> tag in <head> by its property or name attribute. */
function setMeta(attr: "property" | "name", value: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Upserts a <link> tag in <head> by its rel attribute. */
function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Injects or updates a <script type="application/ld+json"> block. Keyed by id. */
function setJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Removes a <script type="application/ld+json"> block by id if it exists. */
function removeJsonLd(id: string) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export function SeoHead({ path, title, description, ogImage, jsonLd }: SeoHeadProps) {
  const canonical = `${BASE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "Sathyaveda Herbals LLP");
    setMeta("property", "og:locale", "en_IN");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Organization schema (always present)
    setJsonLd("schema-org", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Sathyaveda Herbals LLP",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7481031003",
          contactType: "customer service",
          availableLanguage: ["English", "Malayalam"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pokkotumbadam",
        addressLocality: "Kerala",
        addressCountry: "IN",
      },
      email: "sathyavedaherbals@gmail.com",
      sameAs: [],
    });

    // WebSite schema with sitelinks searchbox
    setJsonLd("schema-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Sathyaveda Herbals LLP",
      url: BASE_URL,
    });

    // Per-page JSON-LD blocks
    if (jsonLd) {
      jsonLd.forEach((data, i) => {
        setJsonLd(`schema-page-${i}`, data);
      });
    }

    return () => {
      // Cleanup page-level schemas on route change
      if (jsonLd) {
        jsonLd.forEach((_data, i) => {
          removeJsonLd(`schema-page-${i}`);
        });
      }
    };
  }, [canonical, title, description, image, jsonLd]);

  return null;
}

/** Builds a Product schema object from product data. */
export function buildProductSchema(product: {
  name: string;
  description: string;
  price: string;
  image: string;
  brand: string;
  rating: number;
  id: string;
}) {
  // Strip the rupee symbol for schema numeric price
  const numericPrice = product.price.replace(/[^\d.]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image.startsWith("http") ? product.image : `${BASE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: numericPrice,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Sathyaveda Herbals LLP",
      },
      url: `${BASE_URL}/product/${product.id}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: "24",
    },
  };
}

/** Builds a BreadcrumbList schema. */
export function buildBreadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
