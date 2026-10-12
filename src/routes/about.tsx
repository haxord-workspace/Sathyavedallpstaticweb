import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildBreadcrumbSchema } from "@/components/site/SeoHead";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import aboutImg1 from "@/assets/about/about1.jpeg";
import aboutImg2 from "@/assets/about/about2.jpeg";
import aboutImg3 from "@/assets/about/about3.jpeg";
import aboutImg4 from "@/assets/about/about4.jpeg";
import aboutImg5 from "@/assets/about/about5.png";
import { ArrowRight, Link2, CheckCircle2 } from "lucide-react";
import imgKudumbashree from "@/assets/Kudumbashree.png";

const aboutImages = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5];
const aboutAlts = [
  "Sathyaveda Herbals Ayurvedic manufacturing",
  "Sathyaveda Herbals natural botanical ingredients",
  "Sathyaveda Herbals Kerala herbal production",
  "Sathyaveda Herbals traditional wellness crafting",
  "Sathyaveda Herbals authentic Ayurvedic products",
];

function AboutPage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const aboutJsonLd = [
    buildBreadcrumbSchema([
      { name: "Home", url: "https://sathyavedaherbals.in/" },
      { name: "About", url: "https://sathyavedaherbals.in/about" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Sathyaveda Herbals LLP",
      description: "Learn about Sathyaveda Herbals LLP — traditional Kerala Ayurveda from Pokkotumbadam, crafted for modern wellness.",
      url: "https://sathyavedaherbals.in/about",
    },
  ];

  useEffect(() => {
    if (!carouselApi) return;
    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        path="/about"
        title="About — Sathyaveda Herbals LLP"
        description="Sathyaveda Herbals LLP — traditional Kerala Ayurveda from Pokkotumbadam. Discover our authentic formulations, natural ingredients, and commitment to modern wellness."
        jsonLd={aboutJsonLd}
      />
      <Header />

      <section className="relative bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-6 lg:pt-32 lg:pb-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          <Reveal as="div" animation="slide-right">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-green">About Sathyaveda</p>
            <h1 className="font-display text-3xl sm:text-4xl text-brand-green-dark mt-3">Ayurveda shaped by Kerala, made for today.</h1>
            <p className="mt-4 max-w-xl text-base text-foreground/80 sm:text-lg">
              We craft potent herbal formulas from responsibly sourced ingredients, grounded in tradition and designed with clarity for modern wellness.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-green">
                Shop collection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#why" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-foreground hover:border-brand-green">
                Why choose us
              </a>
            </div>
          </Reveal>

          <Reveal as="div" animation="slide-left" delay={150} className="rounded-[2rem] overflow-hidden shadow-xl border border-border bg-[#f7f5ee] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[280px] mx-auto lg:mx-0 lg:justify-self-center">
            <Carousel className="relative" opts={{ loop: true }} setApi={setCarouselApi}>
              <CarouselContent className="flex items-stretch">
                {aboutImages.map((src, index) => (
                  <CarouselItem key={index} className="flex">
                    <img 
                      src={src} 
                      alt={aboutAlts[index] ?? `Sathyaveda Herbals Kerala`} 
                      loading="lazy" 
                      className={`w-full block object-cover max-h-[350px] lg:max-h-[450px] ${index === 1 ? "h-full" : ""}`} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* Community Partnership Section */}
      <section className="bg-[#f9f7ef] text-slate-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" animation="fade-up" className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green-dark mb-4">
              Community Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-green-dark leading-tight mb-6">
              Empowered Roots,<br />Authentic Craftsmanship
            </h2>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-12">
              At Sathyaveda Herbals LLP, our commitment to authentic Ayurveda goes hand-in-hand with social impact. We proudly collaborate with <b>Kudumbashree</b>—Kerala's renowned women empowerment and poverty eradication mission—for the manufacturing and processing of our botanical formulas. By bringing rural women artisans and traditional knowledge into our modern production facilities, we ensure that every batch is handled with meticulous care, hygiene, and genuine dedication. This partnership enables us to support sustainable livelihoods locally while delivering pure, uncompromised wellness to your home.
            </p>

            {/* Logos */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-border/60">
                <img src={imgKudumbashree} alt="Kudumbashree" className="w-full h-full object-contain" />
              </div>
              <div className="flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full border border-brand-green/30 bg-brand-green/5 shrink-0">
                <Link2 className="h-5 w-5 text-brand-green-dark opacity-80" />
              </div>
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-border/60">
                <img src="/logo.png" alt="Sathyaveda" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <p className="text-[10px] sm:text-xs text-foreground/60 mb-16">
              Working hand in hand with Kudumbashree, Kerala's women empowerment mission.
            </p>
          </Reveal>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Women-Led Production", desc: "Handcrafted and processed by dedicated Kudumbashree network members." },
              { title: "Community-Centric", desc: "Supporting local families and fostering economic independence across Kerala." },
              { title: "Uncompromised Standards", desc: "Combining traditional heritage with modern hygienic manufacturing practices." }
            ].map((card, i) => (
              <Reveal key={i} as="div" animation="fade-up" delay={i * 100} className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-green/30 mb-4 bg-brand-green/5">
                  <CheckCircle2 className="h-4 w-4 text-brand-green-dark" />
                </div>
                <h3 className="font-semibold text-brand-green-dark mb-2 text-sm">{card.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{card.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Heritage in every bottle", body: "We preserve Kerala’s Ayurvedic roots through transparent sourcing and clean, natural formulations." },
            { title: "Modern clarity", body: "Clear ingredient statements, gentle processing and practical wellness rituals that fit daily life." },
            { title: "Community first", body: "From local farms to your home, we support trusted partners and meaningful craftsmanship." },
          ].map((card, index) => (
            <Reveal key={card.title} as="div" delay={index * 100} className="rounded-3xl border border-border bg-background p-6 shadow-sm lg:p-8">
              <h2 className="font-display text-lg text-brand-green-dark sm:text-xl">{card.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-background py-16 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" animation="fade-up" className="text-center max-w-3xl mx-auto flex flex-col items-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green-dark mb-4">
              Our Accreditations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-green-dark leading-tight mb-4">
              Certified for Quality & Safety
            </h2>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              We adhere to strict manufacturing standards and regulatory guidelines to ensure our products are pure, safe, and effective.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "FSSAI Central License",
                desc: "Certified by the Food Safety and Standards Authority of India for manufacturing health supplements and nutraceuticals.",
                badge: "License: 11326999000432",
                pdf: "/certificates/fssai_license.pdf"
              },
              {
                title: "MSME Udyam Registration",
                desc: "Registered under the Ministry of Micro, Small and Medium Enterprises as a manufacturing unit.",
                badge: "UDYAM-KL-09-0096665",
                pdf: "/certificates/udyam_registration.pdf"
              },
              {
                title: "KSIDC Approval",
                desc: "In-principle approval from the Government of Kerala, Department of Industries & Commerce.",
                badge: "KLMSME-56/2026",
                pdf: "/certificates/ksidc_approval.pdf"
              },
              {
                title: "Pollution Control Board",
                desc: "Consent to Operate from the Kerala State Pollution Control Board under the Green Category.",
                badge: "Valid till 2031",
                pdf: "/certificates/pcb_consent.pdf"
              },
              {
                title: "Ministry of Corporate Affairs",
                desc: "Incorporated as a Limited Liability Partnership under the Government of India.",
                badge: "ACU-1078",
                pdf: "/certificates/mca_incorporation.pdf"
              }
            ].map((cert, i) => (
              <Reveal key={i} as="a" href={cert.pdf} target="_blank" rel="noopener noreferrer" animation="fade-up" delay={i * 100} className="bg-[#f9f7ef] border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-green/40 transition-all flex flex-col items-start text-left cursor-pointer group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-green/30 mb-4 bg-white shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-brand-green-dark" />
                </div>
                <h3 className="font-semibold text-brand-green-dark mb-2 text-base group-hover:text-brand-green">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4 flex-grow">{cert.desc}</p>
                <span className="inline-flex items-center rounded-full border border-brand-green/20 bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green-dark">
                  {cert.badge}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <Reveal as="div" animation="slide-right" className="rounded-3xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-green">Our promise</span>
            <h2 className="mt-3 font-display text-2xl text-brand-green-dark sm:text-3xl">Pure, potent and proven by trust.</h2>
            <p className="mt-3 text-sm text-muted-foreground">Every product is crafted to feel premium, perform reliably and honor the wisdom of Ayurveda without confusion.</p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { stat: "Lab-Verified", label: "Your health is our priority. We lab-test all our herbal ingredients so you can enjoy authentic Ayurvedic care with complete peace of mind." },
              { stat: "Honest Herbal Care", label: "100% transparent sourcing. Zero shortcuts. Discover a fresh, clean approach to natural health and daily wellness." },
              { stat: "Trusted", label: "By customers seeking effective herbal solutions" },
              { stat: "Locally made", label: "In Kerala with sustainable care." },
            ].map((item, index) => (
              <Reveal key={item.stat} as="div" animation="zoom-in" delay={index * 100} className="rounded-3xl border border-border bg-card p-5">
                <div className="text-2xl font-display text-brand-green-dark sm:text-3xl">{item.stat}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sathyaveda Herbals LLP" },
      { name: "description", content: "Sathyaveda Herbals LLP — traditional Kerala ayurveda from Pokkotumbadam." },
    ],
  }),
  component: AboutPage,
});

