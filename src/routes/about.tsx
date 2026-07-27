import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import aboutImg1 from "@/assets/about/photo_1_2026-07-28_00-23-13.jpg";
import aboutImg2 from "@/assets/about/photo_2_2026-07-28_00-23-13.jpg";
import aboutImg3 from "@/assets/about/photo_3_2026-07-28_00-23-13.jpg";
import aboutImg4 from "@/assets/about/photo_4_2026-07-28_00-23-13.jpg";
import { ArrowRight } from "lucide-react";

const aboutImages = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];

function AboutPage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;
    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal as="div" animation="slide-right">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-green">About Sathyaveda</p>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-green-dark mt-4">Ayurveda shaped by Kerala, made for today.</h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              We craft potent herbal formulas from responsibly sourced ingredients, grounded in tradition and designed with clarity for modern wellness.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-green">
                Shop collection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#why" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-foreground hover:border-brand-green">
                Why choose us
              </a>
            </div>
          </Reveal>

          <Reveal as="div" animation="slide-left" delay={150} className="rounded-[2rem] overflow-hidden shadow-xl border border-border bg-[#f7f5ee]">
            <Carousel className="relative" opts={{ loop: true }} setApi={setCarouselApi}>
              <CarouselContent className="flex">
                {aboutImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <img src={src} alt={`Sathyaveda about ${index + 1}`} className="w-full h-80 object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid gap-8 lg:grid-cols-3">
          {[
            { title: "Heritage in every bottle", body: "We preserve Kerala’s Ayurvedic roots through transparent sourcing and clean, natural formulations." },
            { title: "Modern clarity", body: "Clear ingredient statements, gentle processing and practical wellness rituals that fit daily life." },
            { title: "Community first", body: "From local farms to your home, we support trusted partners and meaningful craftsmanship." },
          ].map((card, index) => (
            <Reveal key={card.title} as="div" delay={index * 100} className="rounded-3xl border border-border bg-background p-8 shadow-sm">
              <h2 className="font-display text-xl text-brand-green-dark">{card.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <Reveal as="div" animation="slide-right" className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-green">Our promise</span>
            <h2 className="mt-4 font-display text-3xl text-brand-green-dark">Pure, potent and proven by trust.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Every product is crafted to feel premium, perform reliably and honor the wisdom of Ayurveda without confusion.</p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { stat: "25+", label: "Years of Ayurvedic lineage" },
              { stat: "100%", label: "Natural herb-forward formulas" },
              { stat: "Trusted", label: "By customers seeking effective herbal solutions" },
              { stat: "Locally made", label: "In Kerala with sustainable care." },
            ].map((item, index) => (
              <Reveal key={item.stat} as="div" animation="zoom-in" delay={index * 100} className="rounded-3xl border border-border bg-card p-6">
                <div className="text-3xl font-display text-brand-green-dark">{item.stat}</div>
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

