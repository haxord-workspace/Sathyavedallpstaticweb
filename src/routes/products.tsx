import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildBreadcrumbSchema } from "@/components/site/SeoHead";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  return (
    <Reveal
      as="div"
      animation="fade-up"
      delay={(index % 4) * 100}
      className="block h-full"
    >
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="group flex h-full flex-row lg:flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-white/80 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-24px_rgba(0,0,0,0.3)]"
      >
        {/* Image */}
        <div className="relative w-36 shrink-0 overflow-hidden bg-[#f7f4eb] sm:w-44 lg:w-full lg:shrink">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`aspect-square lg:aspect-[4/5] w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`} 
          />
          {product.hoverImage && (
            <img 
              src={product.hoverImage} 
              alt={`${product.name} alternate view`} 
              className="absolute inset-0 w-full h-full object-contain object-center transition-all duration-700 opacity-0 group-hover:opacity-100 bg-black" 
            />
          )}
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-green">{product.brand}</div>
            <div className="mt-1 font-display text-base text-brand-green-dark lg:text-lg">{product.name}</div>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">{product.shortDescription}</p>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium line-through decoration-muted-foreground/60">{product.originalPrice}</span>
              )}
              <span className="text-sm font-semibold text-brand-green-dark">{product.price}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green-dark transition-all duration-300 group-hover:gap-2.5">
              View details <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Sathyaveda Herbals LLP" }, { name: "description", content: "Shop authentic Ayurvedic products from Kerala — ABC Capsules, Veda ChargeX, Premium Almonds and Cashews." }] }),
  component: () => (
    <div className="min-h-screen bg-background scroll-smooth">
      <SeoHead
        path="/products"
        title="Products — Sathyaveda Herbals LLP"
        description="Shop authentic Ayurvedic products from Kerala — ABC Capsules, Veda ChargeX, Premium Almonds and Cashews for everyday wellness."
        jsonLd={[
          buildBreadcrumbSchema([
            { name: "Home", url: "https://sathyavedaherbals.in/" },
            { name: "Products", url: "https://sathyavedaherbals.in/products" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Sathyaveda Herbals — Product Collection",
            description: "Browse all authentic Ayurvedic products by Sathyaveda Herbals LLP.",
            url: "https://sathyavedaherbals.in/products",
          },
        ]}
      />
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
