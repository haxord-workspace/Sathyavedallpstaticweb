import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildBreadcrumbSchema } from "@/components/site/SeoHead";
import { CertBadgeMarquee } from "@/components/site/CertBadgeMarquee";
import { Leaf, Shield, Truck, Sparkles, Star, ArrowRight, CheckCircle2, FlaskConical, Droplets, ShieldCheck, Dna, Activity } from "lucide-react";
import { products as shopProducts } from "@/lib/products";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import offerABC from "@/assets/offers/ABC.jpg";
import offerVeda from "@/assets/offers/vedachargeX.jpg";

import bannerAbc from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/abc.png";
import bannerAlmonds from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/almonds.png";
import bannerCashews from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/cashews.png";
import bannerVeda from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/veda.png";
import bannerVedaMob from "@/assets/SATHYAVEDA HERBALS BANNERS MOBILE/vedaformob.png";
import bannerAbcMob from "@/assets/SATHYAVEDA HERBALS BANNERS MOBILE/abcmob.png";
import bannerAlmondsMob from "@/assets/SATHYAVEDA HERBALS BANNERS MOBILE/almondsmob.png";
import bannerCashewsMob from "@/assets/SATHYAVEDA HERBALS BANNERS MOBILE/cashewsmob.png";
import bannerAllMob from "@/assets/SATHYAVEDA HERBALS BANNERS MOBILE/allmob.png";
import bannerAll from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/all.png";

import imgApple from "@/assets/apple.jpg";
import imgBeetroot from "@/assets/beetroot.jpg";
import imgCarrot from "@/assets/carrot.jpg";
import imgAshwagandha from "@/assets/Ashwagandha.jpg";

const heroBanners = [
  bannerAbc,
  bannerAlmonds,
  bannerCashews,
  bannerVeda,
  bannerAll, // Must be last
];

/** Mobile-specific portrait variants (null = use desktop image on mobile too) */
const heroBannersMob: (string | null)[] = [
  bannerAbcMob,
  bannerAlmondsMob,
  bannerCashewsMob,
  bannerVedaMob,
  bannerAllMob,
];

const bannerAlts = [
  "Sathyaveda ABC Capsules Ayurvedic Wellness Banner",
  "Sathyaveda Premium Almonds Kerala Banner",
  "Sathyaveda Cashew Premium Nuts Kerala Banner",
  "Sathyaveda Veda ChargeX Herbal Vitality Tonic Banner",
  "Sathyaveda Herbals Full Product Collection Banner",
];

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
  const { ref: heroRef, inView: heroInView } = useInView<HTMLDivElement>({ rootMargin: "-10%" });
  const { ref: togglesRef, inView: togglesInView } = useInView<HTMLDivElement>({ rootMargin: "-10%" });
  const [offerCarouselApi, setOfferCarouselApi] = useState<CarouselApi | null>(null);
  const [offerCarouselApiDesktop, setOfferCarouselApiDesktop] = useState<CarouselApi | null>(null);
  const [heroCarouselApi, setHeroCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);
  const [offerBenefitsCarouselApi, setOfferBenefitsCarouselApi] = useState<CarouselApi | null>(null);
  const [offerBenefitsCarouselApiDesktop, setOfferBenefitsCarouselApiDesktop] = useState<CarouselApi | null>(null);

  const offerBenefits = [
    // ABC (Index 0)
    [
      { icon: Activity, label: "Helps in Natural Skin Glow" },
      { icon: Droplets, label: "Healthy &amp; Radiant Skin" },
      { icon: ShieldCheck, label: "Boosts Immunity" },
      { icon: Sparkles, label: "Improves Overall Well-being" },
      { icon: Dna, label: "Rich in Vitamins &amp; Antioxidants" },
      { icon: Leaf, label: "100% Natural" },
    ],
    // Veda ChargeX (Index 1)
    [
      { icon: Activity, label: "Supports Natural Energy &amp; Vitality" },
      { icon: ShieldCheck, label: "Helps Maintain Strength &amp; Stamina" },
      { icon: Shield, label: "Supports Immunity" },
      { icon: Sparkles, label: "Promotes Overall Well-being" },
      { icon: Dna, label: "Supports Men's &amp; Women's Wellness" },
      { icon: Leaf, label: "Made with Drumstick Extract &amp; Musli" },
      { icon: Leaf, label: "Whole Herb Nutrition" },
    ]
  ];

  const homeJsonLd = [
    buildBreadcrumbSchema([
      { name: "Home", url: "https://sathyavedaherbals.in/" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Sathyaveda Herbals LLP — Authentic Ayurveda from Kerala",
      description: "Authentic ayurvedic herbal products from Pokkotumbadam, Kerala. Skin care, hair care, pain relief and immunity.",
      url: "https://sathyavedaherbals.in/",
      isPartOf: { "@type": "WebSite", url: "https://sathyavedaherbals.in" },
    },
  ];

  useEffect(() => {
    if (!heroCarouselApi) return;
    
    const onSelect = () => {
      setCurrentSlide(heroCarouselApi.selectedScrollSnap());
    };
    
    // Initialize state
    onSelect();
    
    heroCarouselApi.on("select", onSelect);
    heroCarouselApi.on("reInit", onSelect);
    
    const interval = window.setInterval(() => {
      heroCarouselApi.scrollNext();
    }, 5000);
    
    return () => {
      heroCarouselApi.off("select", onSelect);
      heroCarouselApi.off("reInit", onSelect);
      window.clearInterval(interval);
    };
  }, [heroCarouselApi]);

  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBanners[0];
    img.onload = () => setHeroImageLoaded(true);
    // Fallback timeout just in case
    const timeout = setTimeout(() => setHeroImageLoaded(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!offerCarouselApi) return;
    const onSelect = () => setCurrentOfferSlide(offerCarouselApi.selectedScrollSnap());
    offerCarouselApi.on("select", onSelect);
    offerCarouselApi.on("reInit", onSelect);
    const interval = window.setInterval(() => offerCarouselApi.scrollNext(), 5000);
    return () => {
      offerCarouselApi.off("select", onSelect);
      offerCarouselApi.off("reInit", onSelect);
      window.clearInterval(interval);
    };
  }, [offerCarouselApi]);

  useEffect(() => {
    if (!offerCarouselApiDesktop) return;
    const onSelect = () => setCurrentOfferSlide(offerCarouselApiDesktop.selectedScrollSnap());
    offerCarouselApiDesktop.on("select", onSelect);
    offerCarouselApiDesktop.on("reInit", onSelect);
    const interval = window.setInterval(() => offerCarouselApiDesktop.scrollNext(), 5000);
    return () => {
      offerCarouselApiDesktop.off("select", onSelect);
      offerCarouselApiDesktop.off("reInit", onSelect);
      window.clearInterval(interval);
    };
  }, [offerCarouselApiDesktop]);

  useEffect(() => {
    if (offerBenefitsCarouselApi) offerBenefitsCarouselApi.scrollTo(currentOfferSlide);
    if (offerBenefitsCarouselApiDesktop) offerBenefitsCarouselApiDesktop.scrollTo(currentOfferSlide);
  }, [currentOfferSlide, offerBenefitsCarouselApi, offerBenefitsCarouselApiDesktop]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <SeoHead
        path="/"
        title="Sathyaveda Herbals LLP — Authentic Ayurveda from Kerala"
        description="Authentic ayurvedic herbal products from Pokkotumbadam, Kerala. ABC Capsules, Veda ChargeX, Premium Almonds and Cashews for skin, hair and immunity."
        jsonLd={homeJsonLd}
      />
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[70svh] w-full overflow-hidden bg-[#fdf8f0] sm:h-[70svh] lg:h-[93vh]">
          {/* Loading Animation Overlay */}
          {!heroImageLoaded && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#fdf8f0]">
              <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-green/20 border-t-brand-green"></div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-green/70">Loading Experience</span>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 h-full w-full z-0">
            <Carousel setApi={setHeroCarouselApi} className="h-full w-full [&>.overflow-hidden]:h-full" opts={{ loop: true }}>
              <CarouselContent className="h-full ml-0">
                {heroBanners.map((img, i) => {
                  const mobSrc = heroBannersMob[i];
                  return (
                    <CarouselItem key={i} className="h-full relative pl-0">
                      {mobSrc ? (
                        <picture className="h-full w-full block">
                          <source media="(max-width: 1023px)" srcSet={mobSrc} />
                          <img src={img} alt={bannerAlts[i] ?? `Sathyaveda Herbals Banner`} className="h-full w-full object-cover object-center" />
                        </picture>
                      ) : (
                        <img src={img} alt={bannerAlts[i] ?? `Sathyaveda Herbals Banner`} className="h-full w-full object-cover object-center" />
                      )}
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {heroBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => heroCarouselApi?.scrollTo(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-20 flex h-full w-full items-end pb-8 sm:pb-0">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
              <div ref={heroRef} className={`w-full max-w-xl lg:max-w-2xl ${heroInView ? "animate-fade-in" : "opacity-0"}`}>
                {/* Hero text */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <span className="hidden sm:block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/90">
                    Authentic Ayurvedic Wellness
                  </span>
                  <h1 className="hidden sm:block  max-w-2xl font-display font-medium leading-[1.1] text-white text-3xl sm:text-5xl lg:text-[56px]">
                    Rooted in Ayurveda.<br />Made for modern wellbeing.
                  </h1>
                  <p className="hidden sm:block max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
                    Thoughtfully formulated herbal wellness essentials inspired by Kerala's wisdom and designed for today's everyday life.
                  </p>
                  <div className="mt-3 sm:mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                    {/* Desktop Buttons */}
                    <div className="hidden sm:flex items-center gap-3 sm:gap-4">
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-brand-green-dark text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-brand-green transition duration-300"
                      >
                          Explore Products  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Link>
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/10 transition duration-300"
                      >
                        Discover Sathyaveda <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Link>
                    </div>

                    {/* Mobile Button */}
                    <Link
                      to="/products"
                      className="sm:hidden inline-flex items-center gap-2 bg-transparent border border-white/40 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white/10 transition duration-300"
                    >
                      Explore Products <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification marquee strip */}
      <CertBadgeMarquee />

      <section id="products" className="py-10 lg:py-16">
        <div className="space-y-6">
          <Reveal as="div" className="space-y-2 text-center px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Real product reveal</span>
            <h2 className="mx-auto max-w-3xl font-display text-2xl text-brand-green-dark sm:text-4xl">Our Products</h2>
          </Reveal>

          {/* Horizontal scrollable product card row */}
          <div
            ref={togglesRef}
            className={`flex flex-nowrap gap-4 overflow-x-auto scroll-smooth px-4 sm:px-1 lg:px-8 pb-4
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              ${togglesInView ? "animate-fade-in" : ""}`}
          >
            {shopProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[44vw] sm:w-[46vw] md:w-[340px] lg:w-[calc(25%-12px)] xl:w-[calc(25%-12px)]
                  rounded-2xl border border-border/70 bg-white shadow-md overflow-hidden
                  flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product image */}
                <div className="relative w-full aspect-square overflow-hidden bg-brand-cream">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
               
                </div>

                {/* Card body */}
                <div className=" bg-secondary/50 flex flex-1 flex-col gap-2 p-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-green">{product.category}</p>
                    <h3 className="mt-0.5 text-base font-semibold text-brand-green-dark leading-snug">{product.name}</h3>
                  </div>
                  <p className="text-xs text-foreground/60 leading-relaxed flex-1">{product.shortDescription}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1.5">
                      {product.originalPrice && (
                        <span className="text-[10px] sm:text-xs text-muted-foreground font-medium line-through decoration-muted-foreground/60">{product.originalPrice}</span>
                      )}
                      <span className="text-sm sm:text-base font-bold text-brand-green-dark">{product.price}</span>
                    </div>
                    <Link
                      to="/product/$productId"
                      params={{ productId: product.id }}
                      className="inline-flex items-center gap-1.5 rounded-full  px-3 py-1.5 text-xs font-semibold text-brand-green-dark "
                    >
                      View details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="about" className="bg-[#fdf8f0] py-8 lg:py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ─── DESKTOP LAYOUT (lg+) ─────────────────────────────── */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1.15fr_0.95fr_1.2fr] items-stretch gap-0">

              {/* Left: Text */}
              <Reveal as="div" animation="slide-right" className="flex flex-col gap-4 py-12 pr-10 min-w-0">
                <span className="inline-flex self-start items-center text-brand-green bg-brand-green/10 font-semibold tracking-widest text-[10px] uppercase px-3 py-1 rounded-sm">Special Offer</span>
                <h2 className="font-display text-4xl xl:text-5xl text-brand-green-dark leading-tight">Free American<br />Tourister Bag</h2>
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand-green-dark/20" />
                  <Leaf className="h-4 w-4 text-brand-green-dark opacity-60" />
                  <div className="h-px w-10 bg-brand-green-dark/20" />
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-[380px]">
                  Buy both <strong className="text-foreground/90">ABC</strong> and <strong className="text-foreground/90">Veda ChargeX</strong> together and receive a complimentary American Tourister bag with your order. Limited time offer.
                </p>
                <div className="mt-1">
                  <h3 className="text-sm font-semibold text-foreground/80">Offer applies to:</h3>
                  <ul className="mt-2 space-y-1.5">
                    {["ABC Capsules", "Veda ChargeX"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#products" className="mt-3 inline-flex items-center gap-2 self-start rounded-full bg-brand-green-dark px-6 py-3.5 text-white text-sm font-semibold hover:bg-brand-green transition-colors shadow-sm">
                  Shop ABC &amp; Veda ChargeX <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>

              {/* Middle: Benefits panel */}
              <Reveal as="div" animation="fade-up" delay={80} className="flex flex-col py-12 px-6 border-x border-border/40 self-stretch justify-center min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-green mb-4 flex items-center gap-2">
                  <Leaf className="h-3.5 w-3.5" /> Benefits You'll Love
                </p>
                <Carousel setApi={setOfferBenefitsCarouselApiDesktop} opts={{ watchDrag: false, loop: true }} className="w-full">
                  <CarouselContent>
                    {offerBenefits.map((benefitsList, idx) => (
                      <CarouselItem key={idx}>
                        {benefitsList.map(({ icon: Icon, label }, i) => (
                          <div key={i} className="flex items-center gap-3 py-3 border-b border-border/40 last:border-0">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                              <Icon className="h-4 w-4 text-brand-green-dark" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm text-foreground/80" dangerouslySetInnerHTML={{ __html: label }} />
                          </div>
                        ))}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </Reveal>

              {/* Right: Product image — auto-cycles every 5s */}
              <Reveal as="div" animation="slide-left" delay={150} className="relative pl-8 pr-2 flex items-center justify-center py-6 min-w-0">
                {/* FREE badge */}
               
                <Carousel opts={{ loop: true }} setApi={setOfferCarouselApiDesktop} className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src={offerABC}
                        alt="ABC Capsules with Free American Tourister Bag — Sathyaveda Special Offer"
                        loading="lazy"
                        className="max-h-[480px] w-full object-contain drop-shadow-xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={offerVeda}
                        alt="Veda ChargeX with Free American Tourister Bag — Sathyaveda Special Offer"
                        loading="lazy"
                        className="max-h-[480px] w-full object-contain drop-shadow-xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </Reveal>
            </div>

            {/* Desktop: Pricing + badge strip */}
            <div className="border-t border-border/30 bg-white/60 rounded-b-3xl">
              <div className="flex flex-wrap items-center justify-between px-8 py-5 gap-6">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">MRP</p>
                    <p className="text-2xl font-bold text-foreground/50 line-through">₹2450/-</p>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center rounded-full bg-rose-500 px-3 py-0.5 text-[10px] font-bold uppercase text-white tracking-wide">Now Only</span>
                    <p className="text-2xl font-bold text-brand-green-dark mt-0.5">₹950/-</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-black uppercase text-brand-green-dark tracking-wider leading-tight">Limited<br />Time Offer</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  {[
                    { icon: Leaf, label: "100% Natural" },
                    { icon: FlaskConical, label: "No Additives" },
                    { icon: Shield, label: "Premium Quality" },
                    { icon: ShieldCheck, label: "Safe &amp; Effective" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-green-dark/30">
                        <Icon className="h-4 w-4 text-brand-green-dark" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-foreground/60 tracking-wide" dangerouslySetInnerHTML={{ __html: label }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── MOBILE LAYOUT (< lg) ─────────────────────────────── */}
          <div className="lg:hidden pb-8">

            {/* Hero grid: text left, image right, FREE badge at top-right */}
            <div className="relative grid grid-cols-[1.15fr_0.85fr] items-start gap-0">
   

              {/* Left: Text */}
              <div className="flex flex-col gap-2.5 pr-2 pt-1 pb-4">
                <span className="inline-flex self-start items-center text-brand-green bg-brand-green/10 font-semibold tracking-widest text-[9px] uppercase px-2.5 py-1 rounded-sm">Special Offer</span>
                <h2 className="font-display text-[1.7rem] leading-tight text-brand-green-dark">Free American Tourister Bag</h2>
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-brand-green-dark/25" />
                  <Leaf className="h-3 w-3 text-brand-green-dark opacity-50" />
                  <div className="h-px w-6 bg-brand-green-dark/25" />
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Buy both <strong className="text-foreground/90">ABC</strong> and <strong className="text-foreground/90">Veda ChargeX</strong> together and receive a complimentary American Tourister bag with your order. Limited time offer.
                </p>
                <div>
                  <h3 className="text-xs font-semibold text-foreground/80">Offer applies to:</h3>
                  <ul className="mt-1.5 space-y-1">
                    {["ABC", "Veda ChargeX"].map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-green shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#products" className="mt-1 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-green-dark px-4 py-2.5 text-white text-xs font-semibold hover:bg-brand-green transition-colors">
                  Shop ABC &amp; Veda ChargeX <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Right: Product image — auto-cycles every 5s */}
              <div className="relative flex items-end justify-center pt-8 overflow-hidden">
                <Carousel opts={{ loop: true }} setApi={setOfferCarouselApi} className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src={offerABC}
                        alt="ABC Capsules with Free American Tourister Bag — Sathyaveda Special Offer"
                        loading="lazy"
                        className="w-full object-contain max-h-[380px] drop-shadow-xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={offerVeda}
                        alt="Veda ChargeX with Free American Tourister Bag — Sathyaveda Special Offer"
                        loading="lazy"
                        className="w-full object-contain max-h-[380px] drop-shadow-xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Benefits grid */}
            <Reveal as="div" animation="fade-up" delay={60} className="mt-5 bg-white/80 rounded-2xl p-5 border border-border/30 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-4 text-center">
                Benefits You'll Love
              </p>
              <Carousel setApi={setOfferBenefitsCarouselApi} opts={{ watchDrag: false, loop: true }} className="w-full">
                <CarouselContent>
                  {offerBenefits.map((benefitsList, idx) => (
                    <CarouselItem key={idx}>
                      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
                        {benefitsList.map(({ icon: Icon, label }, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 text-center">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background">
                              <Icon className="h-5 w-5 text-brand-green-dark" strokeWidth={1.4} />
                            </div>
                            <span className="text-[10px] text-foreground/70 leading-snug" dangerouslySetInnerHTML={{ __html: label }} />
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </Reveal>

            {/* Natural Glow banner */}
            <Reveal as="div" animation="fade-up" delay={80} className="mt-4 rounded-2xl overflow-hidden bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 border border-rose-200/50">
              <div className="flex items-stretch">
                {/* Left fruit stack */}
                <div className="flex flex-col items-center justify-center gap-1 px-3 py-4 bg-rose-100/60 shrink-0">
                  <img src={imgApple} alt="Apple" className="h-10 w-10 object-contain rounded-full" />
                  <img src={imgBeetroot} alt="Beetroot" className="h-10 w-10 object-contain rounded-full" />
                </div>

                {/* Center text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-3 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d0508a]">Unlock Your</p>
                  <p className="text-[1.35rem] font-display font-bold text-[#c0307a] leading-tight">Natural Glow</p>
                  <p className="text-[10px] text-rose-500/90 mt-1 leading-snug">With the goodness of<br /><strong>Apple, Beetroot &amp; Carrot</strong></p>
                </div>

                {/* Right fruit */}
                <div className="flex flex-col items-center justify-center gap-1 px-3 py-4 bg-rose-100/60 shrink-0">
                  <img src={imgCarrot} alt="Carrot" className="h-10 w-10 object-contain rounded-full" />
                  <img src={imgBeetroot} alt="Beetroot" className="h-10 w-10 object-contain rounded-full" />
                </div>
              </div>
            </Reveal>

            {/* Pricing strip */}
            <Reveal as="div" animation="fade-up" delay={100} className="mt-4 rounded-2xl bg-white/90 border border-border/30 shadow-sm flex divide-x divide-border/40">
              <div className="flex-1 py-4 text-center">
                <p className="text-[9px] uppercase text-muted-foreground tracking-widest font-medium">MRP</p>
                <p className="text-xl font-bold text-foreground/40 line-through mt-0.5">₹2450/-</p>
              </div>
              <div className="flex-1 py-4 text-center">
                <span className="inline-flex items-center rounded-full bg-rose-500 px-2.5 py-0.5 text-[9px] font-bold uppercase text-white tracking-wide">Now Only</span>
                <p className="text-2xl font-black text-brand-green-dark mt-0.5">₹950/-</p>
              </div>
              <div className="flex-1 py-4 text-center flex items-center justify-center">
                <p className="text-xs font-black uppercase text-brand-green-dark tracking-wide leading-tight">Limited<br />Time<br />Offer</p>
              </div>
            </Reveal>

            {/* Bottom badges */}
            <Reveal as="div" animation="fade-up" delay={120} className="mt-4 grid grid-cols-4 gap-1 rounded-2xl bg-white/80 border border-border/30 p-4 shadow-sm">
              {[
                { icon: Leaf, label: "100% Natural" },
                { icon: FlaskConical, label: "No Additives" },
                { icon: Shield, label: "Premium Quality" },
                { icon: ShieldCheck, label: "Safe & Effective" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-green-dark/25 bg-background">
                    <Icon className="h-4 w-4 text-brand-green-dark" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] uppercase font-semibold text-foreground/60 tracking-wide leading-tight">{label}</span>
                </div>
              ))}
            </Reveal>
          </div>


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

      {/* Inside Our Formulations */}
      <section className="bg-[#fdfbf7] text-slate-900 pt-16 lg:pt-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-4 relative z-10">
              <Reveal as="div" animation="fade-up">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-green-dark mb-4">Inside Our Formulations</p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl text-brand-green-dark leading-tight">
                  Inspired by nature.<br />Backed by wisdom.
                </h2>
                <div className="mt-6 mb-6 flex items-center">
                  <div className="h-px bg-brand-green-dark/20 w-12"></div>
                  <Leaf className="h-5 w-5 text-brand-green-dark mx-3 opacity-80" />
                  <div className="h-px bg-brand-green-dark/20 w-12"></div>
                </div>
                <p className="text-foreground/80 leading-relaxed max-w-md">
                  From fruits and roots to herbs and botanicals, we choose ingredients with purpose — to create products that support your everyday wellness.
                </p>
                <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark hover:gap-3 transition-all">
                  Learn more about our ingredients <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            {/* Right Content - Cards */}
            <div className="lg:col-span-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { title: "Apple", desc: "A nourishing fruit traditionally valued in everyday wellness.", img:imgBeetroot},
                  { title: "Beetroot", desc: "A natural root known for its vitality and rich nutrients.", img:imgApple},
                  { title: "Carrot", desc: "A wholesome root packed with goodness from nature.", img: imgCarrot },
                  { title: "Botanical Ingredients", desc: "Carefully selected herbs and botanicals to complete the blend.", img: imgAshwagandha },
                ].map((item, i) => (
                  <Reveal key={item.title} as="div" animation="fade-up" delay={i * 100} className="bg-[#f5f1e8] rounded-xl overflow-hidden shadow-sm flex flex-col">
                    <div className="aspect-[4/5] sm:aspect-square relative overflow-hidden bg-[#eeddbb]/20">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="p-4 sm:p-5 text-center flex-1 flex flex-col items-center justify-start">
                      <h3 className="font-display text-lg sm:text-xl text-brand-green-dark">{item.title}</h3>
                      <div className="flex items-center justify-center w-full my-2 opacity-40">
                         <div className="h-px bg-brand-green-dark w-4"></div>
                         <Leaf className="h-3 w-3 text-brand-green-dark mx-1" />
                         <div className="h-px bg-brand-green-dark w-4"></div>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 lg:mt-24 bg-[#f4efe6] py-8 lg:py-10 border-t border-[#e8dfcf]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {[
                { title: "Nature First", desc: "We choose ingredients the way nature intended.", icon: Leaf },
                { title: "Thoughtful Blends", desc: "Carefully balanced for everyday wellness.", icon: Sparkles },
                { title: "Rooted in Ayurveda", desc: "Inspired by timeless Ayurvedic wisdom.", icon: Star },
                { title: "Quality You Can Trust", desc: "Committed to purity, quality and responsibility.", icon: Shield },
              ].map((feature, i) => (
                <Reveal key={feature.title} as="div" animation="fade-up" delay={i * 100} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-green-dark/30 text-brand-green-dark">
                    <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark text-sm sm:text-base">{feature.title}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-foreground/70 leading-snug">{feature.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
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
