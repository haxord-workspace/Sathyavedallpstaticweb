import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Leaf, Shield, Truck, Sparkles, Star, ArrowRight } from "lucide-react";
import { products as shopProducts } from "@/lib/products";
import hero from "@/assets/SATHYAVEDA HERBALS BANNERS/ABC BANNER.jpg";
import catSkin from "@/assets/SATHYAVEDA HERBALS BANNERS/4 IMAGES BANNER.jpg";
import catHair from "@/assets/SATHYAVEDA HERBALS BANNERS/ALMOND BANNER.jpg";
import catPain from "@/assets/SATHYAVEDA HERBALS BANNERS/ABC BANNER.jpg";
import catImmunity from "@/assets/SATHYAVEDA HERBALS BANNERS/CASHEW BANNER.jpg";
import about from "@/assets/SATHYAVEDA HERBALS BANNERS/DRUMSTICK BANNER.jpg";
import abcVideo from "@/assets/Sathiyavedha videos/ABC CAPSULE ANIMATION 1080P.mp4";
import badamVideo from "@/assets/Sathiyavedha videos/California_Almonds_product_animation_1080p.mp4";
import cashewVideo from "@/assets/Sathiyavedha videos/Rich_Cashews_product_animation_1080p.mp4";
import chargeXVideo from "@/assets/Sathiyavedha videos/Veda_ChargeX_product_animation_1080p.mp4";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import offerABC from "@/assets/offers/ABC.jpg";
import offerVeda from "@/assets/offers/vedachargeX.jpeg";

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

const concerns = ["Hair Fall", "Sleep", "Joint Pain", "Immunity", "Respiratory", "Skin Glow", "Diabetes", "Liver", "Bone Health", "Stress"];

function Home() {
  const [selectedProductId, setSelectedProductId] = useState(shopProducts[0]?.id ?? "abc-powder");
  const [offerCarouselApi, setOfferCarouselApi] = useState<CarouselApi | null>(null);

  const videoMap: Record<string, string> = {
    "abc-powder": abcVideo,
    badam: badamVideo,
    cashew: cashewVideo,
    "veda-chargex": chargeXVideo,
  };

  const selectedProduct = shopProducts.find((product) => product.id === selectedProductId) ?? shopProducts[0];

  const { ref: heroRef, inView: heroInView } = useInView<HTMLDivElement>({ rootMargin: "-10%" });
  const { ref: togglesRef, inView: togglesInView } = useInView<HTMLDivElement>({ rootMargin: "-10%" });
  const { ref: videoRef, inView: videoInView } = useInView<HTMLDivElement>({ rootMargin: "-10%" });

  useEffect(() => {
    if (!offerCarouselApi) return;
    const interval = window.setInterval(() => offerCarouselApi.scrollNext(), 3500);
    return () => window.clearInterval(interval);
  }, [offerCarouselApi]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="relative min-h-[70vh] overflow-hidden bg-brand-green-dark sm:min-h-[90svh] lg:min-h-[92svh]">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="https://res.cloudinary.com/oqelcwup/video/upload/v1785063393/ALL_PRODUCTS_ANIMATED_NEW_qtalgb.mp4"
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/6" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[60vh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div ref={heroRef} className={`w-full max-w-xl lg:max-w-2xl ${heroInView ? "animate-fade-in" : ""}`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-subtle" />
                New Launch
              </span>
              <h1 className="mt-5 max-w-3xl font-display font-semibold leading-[0.95] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">India&apos;s first capsule of <span className="text-accent italic">pure Ayurveda</span>.</span>
                <span className="mt-3 block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90">
                  Pure Kerala herbs, refined for modern wellness.
                </span>
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base lg:text-lg">
                A gentle, premium Ayurvedic formulation rooted in tradition.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-x-6">
                <a href="#products" className="inline-flex items-center gap-2 bg-white text-brand-green-dark px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition duration-300">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#about" className="inline-flex items-center gap-1.5 text-white font-medium">
                  Our Story <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-8">
          <Reveal as="div" className="space-y-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Real product reveal</span>
            <h2 className="mx-auto max-w-3xl font-display text-3xl text-brand-green-dark sm:text-4xl">Preview product videos instantly</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-6">
              Tap or hover a product to preview its cinematic clip below.
            </p>
          </Reveal>

          <div ref={togglesRef} className={`rounded-[1.5rem] border border-border/70 bg-white/95 p-4 shadow-sm ${togglesInView ? "animate-slide-up" : ""}`}>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
              {shopProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onMouseEnter={() => setSelectedProductId(product.id)}
                  onFocus={() => setSelectedProductId(product.id)}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 sm:w-auto ${selectedProductId === product.id ? "border-brand-green bg-brand-green/10 text-brand-green-dark shadow" : "border-border/70 bg-slate-50 text-slate-900 hover:border-brand-green/60 hover:bg-brand-green/5"}`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-black shadow-lg">
              <div ref={videoRef} className={`relative rounded-xl lg:h-[480px] h-[300px] bg-black overflow-hidden ${videoInView ? "animate-fade-in" : ""}`}>
                <video
                  key={selectedProductId}
                  src={videoMap[selectedProductId]}
                  poster={selectedProduct?.image}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 mx-auto max-w-3xl rounded-lg border border-white/10 bg-black/30 p-3 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{selectedProduct?.name}</h3>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-sm font-semibold text-white">{selectedProduct?.rating} ★</span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">{selectedProduct?.shortDescription}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <Link to="/product/$productId" params={{ productId: selectedProductId }} className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-3 py-1.5 text-sm font-semibold text-white">
                      View details <ArrowRight className="h-4 w-4" />
                    </Link>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90">{selectedProduct?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="about" className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal as="div" animation="slide-right" className="rounded-3xl overflow-hidden">
            <Carousel opts={{ loop: true }} setApi={setOfferCarouselApi} className="w-full h-full">
              <CarouselContent className="flex">
                <CarouselItem>
                  <img src={offerABC} alt="Offer - ABC" loading="lazy" className="w-full h-[420px] object-cover" />
                </CarouselItem>
                <CarouselItem>
                  <img src={offerVeda} alt="Offer - Veda ChargeX" loading="lazy" className="w-full h-[420px] object-cover" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </Reveal>
          <Reveal as="div" animation="slide-left" delay={150}>
            <span className="text-brand-green font-medium tracking-widest text-xs uppercase">Special Offer</span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green-dark mt-3">Free American Tourist Bag</h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Buy both <strong>ABC</strong> and <strong>Veda ChargeX</strong> together and receive a complimentary American tourist bag with your order. Limited time offer.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-brand-green-dark">Offer applies to:</h3>
              <ul className="mt-3 list-disc list-inside text-foreground/80">
                <li>ABC</li>
                <li>Veda ChargeX</li>
              </ul>
              <a href="#products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-4 py-2 text-white font-semibold hover:bg-brand-green">Shop ABC & Veda ChargeX <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Doshas */}
      {/* <section id="doshas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
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
              className="rounded-2xl border border-border bg-card p-8 hover:border-brand-green transition duration-300 hover:shadow-lg hover:-translate-y-2"
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
      </section> */}

      {/* Launch Preview */}
      <section className="bg-brand-green-dark text-primary-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="font-display text-3xl text-center">Launch Preview</Reveal>
          <Reveal as="p" delay={100} className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/80">
            Our products are launching soon. Here’s a preview of the kind of feedback we are aiming for from early testers and friends who have experienced our formulations.
          </Reveal>
          <div className="mt-10 space-y-4">
            {[
              { n: "Anjali", t: "Excited to try the ABC + Veda ChargeX combo when it launches — the offer bag is a great travel-ready bonus." },
              { n: "Rahul", t: "I can’t wait for the launch. The product preview looks authentic and premium." },
              { n: "Priya", t: "This feels like a thoughtful launch bundle for anyone who values Ayurvedic travel essentials." },
            ].map((r, index) => (
              <Reveal
                key={r.n}
                as="div"
                animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                delay={index * 120}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`relative max-w-[85%] px-4 py-3 text-sm leading-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${
                    index % 2 === 0
                      ? "bg-white text-slate-900 rounded-[22px] rounded-br-[6px]"
                      : "bg-emerald-500 text-white rounded-[22px] rounded-bl-[6px]"
                  }`}
                >
                  <p>{r.t}</p>
                  <div className="mt-2 text-[11px] opacity-80">{r.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section id="bundles" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-secondary to-brand-green/10 p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-green-dark">Join the Sathyaveda Circle</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Receive ayurvedic wisdom, seasonal rituals and exclusive offers — straight from Kerala to your inbox.</p>
          <form className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-2">
            <input type="email" placeholder="your@email.com" className="min-w-0 flex-1 rounded-full px-5 py-3 border border-border bg-background outline-none focus:border-brand-green" />
            <button type="button" className="shrink-0 rounded-full px-6 py-3 bg-brand-green-dark text-primary-foreground font-medium hover:bg-brand-green">Subscribe</button>
          </form>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
