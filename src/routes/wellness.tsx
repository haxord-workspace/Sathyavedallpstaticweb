import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/wellness")({
  head: () => ({ meta: [{ title: "Wellness — Sathyaveda Herbals LLP" }, { name: "description", content: "Ayurvedic wisdom and daily rituals." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-5xl text-brand-green-dark">Ayurvedic Wisdom</h1>
        <p className="mt-5 text-foreground/70 leading-relaxed">
          Wellness in ayurveda is not a destination, it is a daily rhythm. Discover seasonal rituals, dosha-balancing
          recipes and herbal practices to bring harmony to body, mind and spirit.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {["Morning Dinacharya", "Seasonal Eating", "Herbs for Sleep", "Skin Rituals"].map((t) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-2xl text-brand-green-dark">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2">Coming soon — articles and guides curated by our ayurvedic team.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  ),
});
