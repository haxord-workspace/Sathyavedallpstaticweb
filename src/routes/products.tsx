import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import pOil from "@/assets/product-oil.jpg";
import pPowder from "@/assets/product-powder.jpg";
import pTablets from "@/assets/product-tablets.jpg";

interface ProductVariant {
  size: string;
  price: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  variants?: ProductVariant[];
  price?: string;
  image: string;
  category: string;
}

const items: Product[] = [
  {
    id: 1,
    brand: "Sathyaveda Glow Rich",
    name: "ABC Powder",
    description: "Premium herbal formulation for skin health and vitality",
    category: "Wellness",
    image: pPowder,
    variants: [
      { size: "60 Capsules 500 mg", price: "₹599" },
      { size: "Powder 200 grams", price: "₹799" },
      { size: "Powder 500 grams", price: "₹1,499" },
    ],
  },
  {
    id: 2,
    brand: "EnergeXMax",
    name: "Drumstick Extract + Musli Powder",
    description: "Energy and vitality capsules with natural herb extracts",
    category: "Energy & Vitality",
    price: "₹699",
    image: pTablets,
    variants: [
      { size: "Capsules 500mg", price: "₹699" },
    ],
  },
  {
    id: 3,
    brand: "Sathyaveda Rich",
    name: "Cashew Nuts",
    description: "180 grade export quality premium cashew nuts",
    category: "Premium Nuts",
    price: "₹1,299",
    image: pOil,
    variants: [
      { size: "1 Kg", price: "₹1,299" },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <div
      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-105"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="text-xs text-brand-green font-medium uppercase tracking-wider">{product.brand}</div>
        <div className="font-display text-lg mt-2 text-brand-green-dark">{product.name}</div>
        <p className="text-sm text-muted-foreground mt-2">{product.description}</p>

        {product.variants && product.variants.length > 0 && (
          <div className="mt-4">
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">Select Variant:</label>
            <div className="flex flex-col gap-2">
              {product.variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVariant(idx)}
                  className={`text-xs px-3 py-2 rounded-lg border transition-all duration-300 ${
                    selectedVariant === idx
                      ? "bg-brand-green-dark text-primary-foreground border-brand-green-dark"
                      : "border-border hover:border-brand-green-dark"
                  }`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="font-bold text-brand-green-dark">{product.variants[selectedVariant].price}</span>
              <button className="text-xs px-4 py-2 rounded-full bg-brand-green-dark text-primary-foreground hover:bg-brand-green transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {!product.variants && (
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-brand-green-dark">{product.price}</span>
            <button className="text-xs px-4 py-2 rounded-full bg-brand-green-dark text-primary-foreground hover:bg-brand-green transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Sathyaveda Herbals LLP" }, { name: "description", content: "Authentic ayurvedic products from Kerala." }] }),
  component: () => (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="animate-fade-in" style={{ animationDuration: "600ms" }}>
          <h1 className="font-display text-5xl md:text-6xl text-brand-green-dark text-center mb-4">Premium Wellness Products</h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated collection of authentic Ayurvedic products, sourced from Kerala and crafted for your well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {items.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  ),
});
