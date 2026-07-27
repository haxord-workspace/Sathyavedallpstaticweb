import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  return (
    <Reveal
      as="div"
      animation="fade-up"
      delay={(index % 4) * 100}
      className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/80 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-24px_rgba(0,0,0,0.3)]"
    >
      <div className="overflow-hidden bg-[#f7f4eb] p-3">
        <img src={product.image} alt={product.name} className="aspect-[4/5] w-full rounded-[1.25rem] object-contain" />
      </div>
      <div className="p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-green">{product.brand}</div>
        <div className="mt-2 font-display text-xl text-brand-green-dark">{product.name}</div>
        <p className="mt-2 text-sm text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-brand-green-dark">{product.price}</span>
          <Link to="/product/$productId" params={{ productId: product.id }} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark transition hover:gap-3">
            View details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Sathyaveda Herbals LLP" }, { name: "description", content: "Authentic ayurvedic products from Kerala." }] }),
  component: () => (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="animate-fade-in" style={{ animationDuration: "600ms" }}>
          <h1 className="font-display text-5xl md:text-6xl text-brand-green-dark text-center mb-4">Premium Wellness Products</h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated collection of authentic Ayurvedic products, sourced from Kerala and crafted for your well-being.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  ),
});
