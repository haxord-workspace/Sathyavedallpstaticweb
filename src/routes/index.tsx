import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Leaf, Shield, Truck, Sparkles, Star, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import catSkin from "@/assets/cat-skin.jpg";
import catHair from "@/assets/cat-hair.jpg";
import catPain from "@/assets/cat-pain.jpg";
import catImmunity from "@/assets/cat-immunity.jpg";
import pOil from "@/assets/product-oil.jpg";
import pPowder from "@/assets/product-powder.jpg";
import pTablets from "@/assets/product-tablets.jpg";
import pHair from "@/assets/product-haircare.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sathyaveda Herbals LLP — Authentic Ayurveda from Kerala" },
      { name: "description", content: "Authentic ayurvedic herbal products from Pokkotumbadam, Kerala. Skin care, hair care, pain relief and immunity." },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Skin Care", img: catSkin },
  { name: "Hair Care", img: catHair },
  { name: "Pain Relief", img: catPain },
  { name: "Immunity", img: catImmunity },
];

const products = [
  { name: "Sathyaveda Glow Rich ABC Powder", brand: "Sathyaveda Glow Rich", tag: "Premium Wellness", price: "₹599", img: pPowder, rating: 4.8 },
  { name: "EnergeXMax Drumstick Extract", brand: "EnergeXMax", tag: "Energy & Vitality", price: "₹699", img: pTablets, rating: 4.7 },
  { name: "Sathyaveda Rich Cashew Nuts", brand: "Sathyaveda Rich", tag: "Premium Nuts", price: "₹1,299", img: pOil, rating: 4.9 },
];

const concerns = ["Hair Fall", "Sleep", "Joint Pain", "Immunity", "Respiratory", "Skin Glow", "Diabetes", "Liver", "Bone Health", "Stress"];

function Home() {
  return (
    <div className="bg-red-500 min-h-screen bg-background scroll-smooth">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[540px] md:h-[640px] overflow-hidden">
          <img src={hero} alt="Authentic ayurvedic herbs" className="absolute inset-0 w-full h-full object-cover" width={1920} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl animate-fade-in">
              <span className="inline-block text-brand-green font-medium tracking-widest text-xs uppercase mb-4">From Pokkotumbadam, Kerala</span>
              <h1 className="font-display text-5xl md:text-6xl leading-tight text-foreground">
                Authentic <span className="text-accent italic">Ayurveda</span><br />
                <span className="text-brand-green-dark">for Everyday Wellness</span>
              </h1>
              <p className="mt-5 text-foreground/70 text-lg">
                Crafted from age-old Kerala traditions — pure herbs, time-tested formulations, and a promise of natural healing.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#products" className="inline-flex items-center gap-2 bg-brand-green-dark text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-brand-green transition duration-300 transform hover:scale-105">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#about" className="inline-flex items-center gap-2 border border-brand-green-dark text-brand-green-dark px-7 py-3.5 rounded-full font-medium hover:bg-brand-green-dark hover:text-primary-foreground transition duration-300">
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { i: Leaf, t: "100% Natural", s: "Pure herbs, no chemicals" },
            { i: Shield, t: "GMP Certified", s: "Quality assured" },
            { i: Truck, t: "Free Shipping", s: "On orders over ₹499" },
            { i: Sparkles, t: "Authentic Kerala", s: "Traditional recipes" },
          ].map(({ i: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
              <div className="h-11 w-11 rounded-full bg-brand-green/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-brand-green-dark" />
              </div>
              <div>
                <div className="font-semibold text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Concern */}
      <section id="concern" className="container mx-auto px-4 py-16">
        <h2 className="font-display text-4xl text-center text-brand-green-dark">Shop by Concern</h2>
        <p className="text-center text-muted-foreground mt-2">Find herbal answers for what matters most</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {concerns.map((c) => (
            <button key={c} className="px-5 py-2.5 rounded-full bg-secondary border border-border hover:border-brand-green hover:text-brand-green-dark transition duration-300 text-sm font-medium hover:scale-105 transform">
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="font-display text-4xl text-center text-brand-green-dark mb-10">Explore Our Range</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c) => (
            <a href="#products" key={c.name} className="group block">
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <img src={c.img} alt={c.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="mt-3 text-center font-medium text-foreground group-hover:text-brand-green-dark transition duration-300">
                {c.name}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-10">
          <div className="animate-fade-in" style={{ animationDuration: "600ms" }}>
            <h2 className="font-display text-4xl text-brand-green-dark">Premium Wellness Collection</h2>
            <p className="text-muted-foreground mt-2">Our most sought-after herbal formulations</p>
          </div>
          <a href="/products" className="hidden md:inline-flex items-center gap-2 text-brand-green-dark font-medium hover:gap-3 transition duration-300">
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, index) => (
            <div
              key={p.name}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-brand-green font-medium uppercase tracking-wider">{p.brand}</div>
                <div className="font-display text-lg mt-2 text-brand-green-dark">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.tag}</div>
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(p.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{p.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-brand-green-dark text-lg">{p.price}</span>
                  <button className="text-xs px-4 py-2 rounded-full bg-brand-green-dark text-primary-foreground hover:bg-brand-green transition duration-300 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img src={about} alt="Traditional Kerala ayurveda" loading="lazy" width={1024} height={768} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
          </div>
          <div className="animate-fade-in" style={{ animationDuration: "800ms" }}>
            <span className="text-brand-green font-medium tracking-widest text-xs uppercase">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green-dark mt-3">Rooted in Kerala. Crafted for You.</h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              At Sathyaveda Herbals LLP, we honour the ancient wisdom of Ayurveda passed down through generations in the
              lush hills of Pokkotumbadam. Every product is hand-formulated using locally sourced herbs, traditional methods,
              and the unwavering belief that nature holds the answer to true wellbeing.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div><div className="font-display text-3xl text-brand-green-dark">25+</div><div className="text-xs text-muted-foreground">Years of Tradition</div></div>
              <div><div className="font-display text-3xl text-brand-green-dark">100+</div><div className="text-xs text-muted-foreground">Herbal Formulations</div></div>
              <div><div className="font-display text-3xl text-brand-green-dark">10k+</div><div className="text-xs text-muted-foreground">Happy Customers</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Doshas */}
      <section id="doshas" className="container mx-auto px-4 py-16">
        <h2 className="font-display text-4xl text-center text-brand-green-dark">Shop by Doshas</h2>
        <p className="text-center text-muted-foreground mt-2">Balance your unique constitution</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { n: "Vata", d: "Air & Space — calm restlessness, ground the mind." },
            { n: "Pitta", d: "Fire & Water — cool intensity, soothe the body." },
            { n: "Kapha", d: "Earth & Water — energise, lighten and refresh." },
          ].map((d) => (
            <div
              key={d.n}
              className="rounded-2xl border border-border bg-card p-8 hover:border-brand-green transition duration-300 hover:shadow-lg transform hover:translate-y--2"
            >
              <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Leaf className="h-5 w-5 text-brand-green-dark" />
              </div>
              <h3 className="font-display text-2xl text-brand-green-dark">{d.n}</h3>
              <p className="text-sm text-muted-foreground mt-2">{d.d}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-brand-green-dark mt-4 hover:gap-2 transition duration-300">
                Explore <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-green-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { n: "Anjali R.", t: "The Neelibringadi oil transformed my hair in weeks. Authentic Kerala goodness." },
              { n: "Rahul M.", t: "Genuine ayurveda. The pain relief balm worked when nothing else did." },
              { n: "Priya S.", t: "Beautifully packaged, traditional formulations. I trust them completely." },
            ].map((r) => (
              <div key={r.n} className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-primary-foreground/10">
                <div className="flex gap-1 text-accent">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-3 text-sm opacity-90">"{r.t}"</p>
                <div className="mt-4 font-semibold text-sm">— {r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="bundles" className="container mx-auto px-4 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-secondary to-brand-green/10 p-10 md:p-16 text-center">
          <h2 className="font-display text-4xl text-brand-green-dark">Join the Sathyaveda Circle</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Receive ayurvedic wisdom, seasonal rituals and exclusive offers — straight from Kerala to your inbox.</p>
          <form className="mt-8 flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="your@email.com" className="flex-1 rounded-full px-5 py-3 border border-border bg-background outline-none focus:border-brand-green" />
            <button type="button" className="rounded-full px-6 py-3 bg-brand-green-dark text-primary-foreground font-medium hover:bg-brand-green">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
