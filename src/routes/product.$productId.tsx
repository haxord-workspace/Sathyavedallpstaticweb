import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
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
  const whatsappUrl = `https://wa.me/919999999999?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark transition hover:gap-3">
          <ArrowLeft className="h-4 w-4" /> Back to collection
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
          <Reveal as="div" animation="slide-right" className="overflow-hidden rounded-[2rem] border border-border/70 bg-[#f7f4eb] p-3 shadow-sm lg:p-4">
            <img src={product.image} alt={product.name} className="aspect-[4/5] w-full rounded-[1.5rem] object-contain" />
          </Reveal>

          <Reveal as="div" animation="slide-left" delay={150}>
            <div className="inline-flex rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-green">
              {product.badge}
            </div>
            <h1 className="mt-3 font-display text-3xl text-brand-green-dark sm:text-5xl">{product.name}</h1>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg">{product.description}</p>

            <div className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-sm lg:p-5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-green">{product.brand}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold text-brand-green-dark sm:text-2xl">{product.price}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-brand-green">
                  <ShoppingBag className="h-4 w-4" /> Buy on WhatsApp
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand-green-dark hover:text-brand-green-dark">
                  Contact us <ArrowRight className="h-4 w-4" />
                </a>
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
