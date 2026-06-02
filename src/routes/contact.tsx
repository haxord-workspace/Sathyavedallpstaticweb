import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sathyaveda Herbals LLP" }, { name: "description", content: "Get in touch with Sathyaveda Herbals LLP, Pokkotumbadam, Kerala." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-display text-5xl text-brand-green-dark">Reach Us</h1>
          <p className="mt-4 text-foreground/70">We'd love to hear from you. Drop us a note and we'll respond within a day.</p>
          <div className="mt-8 space-y-4 text-foreground/80">
            <div className="flex gap-3"><MapPin className="text-brand-green-dark" /> Pokkotumbadam, Kerala, India</div>
            <div className="flex gap-3"><Phone className="text-brand-green-dark" /> +91 00000 00000</div>
            <div className="flex gap-3"><Mail className="text-brand-green-dark" /> info@sathyavedaherbals.com</div>
          </div>
        </div>
        <form className="bg-card border border-border rounded-2xl p-8 space-y-4">
          <input placeholder="Your Name" className="w-full rounded-lg border border-border px-4 py-3 bg-background outline-none focus:border-brand-green" />
          <input placeholder="Email" className="w-full rounded-lg border border-border px-4 py-3 bg-background outline-none focus:border-brand-green" />
          <textarea placeholder="Message" rows={5} className="w-full rounded-lg border border-border px-4 py-3 bg-background outline-none focus:border-brand-green" />
          <button type="button" className="w-full rounded-full bg-brand-green-dark text-primary-foreground py-3 font-medium hover:bg-brand-green">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  ),
});
