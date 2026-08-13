import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildProductSchema, buildBreadcrumbSchema } from "@/components/site/SeoHead";
import { getProductById } from "@/lib/products";

export const Route = createFileRoute("/product/$productId")({
  head: ({ params }) => {
    const product = getProductById(params.productId);
    return {
      meta: [
        { title: `${product?.name ?? "Product"} — Sathyaveda Herbals LLP` },
        { name: "description", content: product?.description ?? "Premium herbal product from Sathyaveda Herbals." },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-24">
          <div className="text-center">
            <h1 className="font-display text-2xl text-brand-green-dark sm:text-3xl">Product not found</h1>
            <p className="mt-3 text-muted-foreground">The requested product could not be found.</p>
            <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-semibold text-primary-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to products
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hello Sathyaveda Herbals, I would like to purchase ${product.name}.`);
  const whatsappUrl = `https://wa.me/917481031003?text=${whatsappMessage}`;

  const productJsonLd = [
    buildProductSchema(product),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://sathyavedaherbals.in/" },
      { name: "Products", url: "https://sathyavedaherbals.in/products" },
      { name: product.name, url: `https://sathyavedaherbals.in/product/${product.id}` },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        path={`/product/${product.id}`}
        title={`${product.name} — Sathyaveda Herbals LLP`}
        description={product.description}
        ogImage={typeof product.image === "string" ? product.image : undefined}
        jsonLd={productJsonLd}
      />
      <Header />
      <section className="mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-28 lg:pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark transition hover:gap-3">
          <ArrowLeft className="h-4 w-4" /> Back to collection
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
          <Reveal as="div" animation="slide-right" className="overflow-hidden rounded-[2rem] border border-border/70 bg-[#f7f4eb] shadow-sm">
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover object-center" />
          </Reveal>

          <Reveal as="div" animation="slide-left" delay={150}>
            {/* Mobile Layout (Visible only on mobile/tablet) */}
            <div className="lg:hidden">
              <div className="flex items-center flex-wrap gap-3 mb-3">
                <div className="inline-flex rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-green shrink-0">
                  {product.badge}
                </div>
                <h1 className="font-display text-2xl text-brand-green-dark">{product.name}</h1>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground font-medium line-through decoration-red-500">{product.originalPrice}</span>
                )}
                <span className="text-2xl font-bold text-brand-green-dark">{product.price}</span>
              </div>

              <div className="flex items-center gap-2.5 mb-5">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full bg-brand-green-dark px-4 py-3 text-xs font-semibold text-primary-foreground transition hover:bg-brand-green shadow-sm">
                  <ShoppingBag className="h-4 w-4" /> Buy on WhatsApp
                </a>
                <a href="/contact" className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full border border-border bg-white px-4 py-3 text-xs font-semibold text-foreground transition hover:border-brand-green-dark hover:text-brand-green-dark shadow-sm">
                  Contact us <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Desktop Layout (Visible only on laptop/desktop) */}
            <div className="hidden lg:block">
              <div className="inline-flex rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-green">
                {product.badge}
              </div>
              <h1 className="mt-3 font-display text-5xl text-brand-green-dark">{product.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.description}</p>

              <div className="mt-6">
                <div className="flex items-center gap-2.5 mb-5">
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground font-medium line-through decoration-red-500">{product.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-brand-green-dark">{product.price}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-green shadow-sm">
                    <ShoppingBag className="h-4 w-4" /> Buy on WhatsApp
                  </a>
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-brand-green-dark hover:text-brand-green-dark shadow-sm hover:bg-gray-50">
                    Contact us <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:gap-8">
              <Reveal as="div" delay={100}>
                <h2 className="text-base font-semibold text-brand-green-dark sm:text-lg">Why you&apos;ll love it</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal as="div" delay={200}>
                <h2 className="text-base font-semibold text-brand-green-dark sm:text-lg">Key details</h2>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Available sizes</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.variants.map((variant) => (
                        <span key={variant.size} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
                          {variant.size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">How to use</p>
                    <p className="mt-1">{product.howToUse}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ingredients</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-inside list-disc">
                      {product.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
