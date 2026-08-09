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
      className="flex flex-row lg:flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-white/80 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-24px_rgba(0,0,0,0.3)]"
    >
      {/* Image */}
      <div className="w-36 shrink-0 overflow-hidden bg-[#f7f4eb] p-2.5 sm:w-44 lg:w-full lg:shrink">
        <img src={product.image} alt={product.name} className="aspect-square lg:aspect-[4/5] w-full rounded-[1rem] object-contain" />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-green">{product.brand}</div>
          <div className="mt-1 font-display text-base text-brand-green-dark lg:text-lg">{product.name}</div>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">{product.shortDescription}</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-green-dark">{product.price}</span>
          <Link to="/product/$productId" params={{ productId: product.id }} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green-dark transition hover:gap-2.5">
            View details <ArrowRight className="h-3.5 w-3.5" />
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-10 lg:pt-28 lg:pb-16">
        <div className="animate-fade-in" style={{ animationDuration: "600ms" }}>
          <h1 className="font-display text-3xl md:text-6xl text-brand-green-dark text-center mb-3">Premium Wellness Products</h1>
          <p className="text-center text-muted-foreground text-base max-w-2xl mx-auto sm:text-lg">
            Discover our carefully curated collection of authentic Ayurvedic products, sourced from Kerala and crafted for your well-being.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  ),
});
