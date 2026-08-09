import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Leaf, Shield, Truck, Sparkles, Star, ArrowRight } from "lucide-react";
import { products as shopProducts } from "@/lib/products";

const abcVideo = "https://res.cloudinary.com/dafifet3i/video/upload/v1786081693/IMG_8455_gaxvox.mov";
const badamVideo = "https://res.cloudinary.com/dafifet3i/video/upload/v1786080467/IMG_8451_sd4ey0.mov";
const cashewVideo = "https://res.cloudinary.com/dafifet3i/video/upload/v1786080461/IMG_8450_pllfre.mov";
const chargeXVideo = "https://res.cloudinary.com/dafifet3i/video/upload/v1786080462/IMG_8449_h4kfe3.mov";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import offerABC from "@/assets/offers/ABC.jpg";
import offerVeda from "@/assets/offers/vedachargeX.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sathyaveda Herbals LLP — Authentic Ayurveda from Kerala" },
      { name: "description", content: "Authentic ayurvedic herbal products from Pokkotumbadam, Kerala. Skin care, hair care, pain relief and immunity." },
    ],
  }),
  component: Home,
});



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

  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeroText(true), 5000);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="relative h-[88svh] w-full overflow-hidden bg-black sm:h-[92svh] lg:h-screen">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center scale-105"
            src="https://res.cloudinary.com/dafifet3i/video/upload/v1786080685/IMG_8400_rkfi4t.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="relative flex h-full w-full items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">              <div ref={heroRef} className={`w-full max-w-xl lg:max-w-2xl ${heroInView ? "animate-fade-in" : ""}`}>
                {/* Hero text — hidden on load, fades in after 5 seconds */}
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: showHeroText ? 1 : 0,
                    transform: showHeroText ? "translateY(0)" : "translateY(20px)",
                    pointerEvents: showHeroText ? "auto" : "none",
                  }}
                >

                <h1 className="max-w-3xl font-display font-semibold leading-[0.95] text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="block"><span className="text-white italic">India's First ABC & Wellness Herbal Capsules.</span></span>
                  <span className="mt-3 block text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90">
                   Nature-powered nutrition for your everyday well-being.
                  </span>
                </h1>
                <p className="mt-3 text-xs leading-6 text-white/80 italic whitespace-nowrap">
                  Powered by the goodness of Apple, Beetroot, Carrot & Drumstick.
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
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="space-y-6">
          <Reveal as="div" className="space-y-2 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Real product reveal</span>
            <h2 className="mx-auto max-w-3xl font-display text-2xl text-brand-green-dark sm:text-4xl">Preview product videos instantly</h2>
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

          <div className="mx-auto w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-black shadow-lg">
              <div ref={videoRef} className={`relative overflow-hidden ${videoInView ? "animate-fade-in" : ""}`} style={{ aspectRatio: '16/9' }}>
                <video
                  key={selectedProductId}
                  src={videoMap[selectedProductId]}
                  poster={selectedProduct?.image}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-2 right-2 bottom-2 mx-auto max-w-3xl rounded-lg border border-white/10 bg-black/30 p-2 text-white sm:left-4 sm:right-4 sm:bottom-4 sm:p-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-white sm:text-lg">{selectedProduct?.name}</h3>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white sm:px-2 sm:py-1 sm:text-sm">{selectedProduct?.rating} ★</span>
                  </div>
                  <p className="mt-1 text-xs text-white/80 sm:mt-2 sm:text-sm">{selectedProduct?.shortDescription}</p>
                  <div className="mt-2 flex items-center gap-2 sm:mt-3 sm:gap-3">
                    <Link to="/product/$productId" params={{ productId: selectedProductId }} className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-dark px-2.5 py-1 text-xs font-semibold text-white sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm">
                      View details <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 sm:px-3 sm:py-1.5 sm:text-sm">{selectedProduct?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="about" className="bg-secondary/50 py-6 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 md:gap-12 items-center">

          {/* Left: heading + description */}
          <Reveal as="div" animation="slide-right" className="flex flex-col gap-3">
            <span className="inline-flex self-start items-center text-brand-green bg-brand-green/10 font-semibold tracking-widest text-[10px] uppercase px-3 py-1">Special Offer</span>
            <h2 className="font-display text-2xl md:text-4xl text-brand-green-dark">Free American Tourister Bag</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Buy both <strong>ABC</strong> and <strong>Veda ChargeX</strong> together and receive a complimentary American Tourister bag with your order. Limited time offer.
            </p>
            <div>
              <h3 className="text-sm font-semibold text-brand-green-dark">Offer applies to:</h3>
              <ul className="mt-1.5 list-disc list-inside text-sm text-foreground/80">
                <li>ABC</li>
                <li>Veda ChargeX</li>
              </ul>
              <a href="#products" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-4 py-2 text-white text-sm font-semibold hover:bg-brand-green">Shop ABC & Veda ChargeX <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>

          {/* Right: carousel image */}
          <Reveal as="div" animation="slide-left" delay={150} className="rounded-3xl overflow-hidden lg:max-w-xs lg:mx-auto">
            <Carousel opts={{ loop: true }} setApi={setOfferCarouselApi} className="w-full h-full">
              <CarouselContent className="flex">
                <CarouselItem>
                  <img src={offerABC} alt="Offer - ABC" loading="lazy" className="aspect-[2/3] w-full object-contain" />
                </CarouselItem>
                <CarouselItem>
                  <img src={offerVeda} alt="Offer - Veda ChargeX" loading="lazy" className="aspect-[2/3] w-full object-contain" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
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
      <section className="bg-brand-green-dark text-primary-foreground py-10 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="font-display text-2xl text-center sm:text-3xl">Launch Preview</Reveal>
          <Reveal as="p" delay={100} className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/80">
            Our products are launching soon. Here’s a preview of the kind of feedback we are aiming for from early testers and friends who have experienced our formulations.
          </Reveal>
          <div className="mt-6 space-y-3">
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
