import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Sathyaveda Herbals LLP" }, { name: "description", content: "Sathyaveda Herbals LLP — traditional Kerala ayurveda from Pokkotumbadam." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={about} alt="Ayurveda" className="rounded-3xl" />
        <div>
          <h1 className="font-display text-5xl text-brand-green-dark">Our Story</h1>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Born in Pokkotumbadam, Kerala, Sathyaveda Herbals LLP carries the soul of ancient ayurveda. We work
            with local farmers, follow classical formulations, and craft every product with patience and reverence.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Our mission is simple — bring authentic, effective ayurvedic care into the rhythm of modern life.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  ),
});
