import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sathyaveda Herbals LLP" }, { name: "description", content: "Get in touch with Sathyaveda Herbals LLP, Pokkotumbadam, Kerala." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-28 lg:pb-16 grid gap-5 md:grid-cols-2 md:gap-10">
        {/* Contact info */}
        <Reveal as="div" animation="slide-right">
          <h1 className="font-display text-lg sm:text-2xl lg:text-4xl text-brand-green-dark">Reach Us</h1>
          <p className="mt-1.5 text-sm text-foreground/70 leading-snug">
            We'd love to hear from you. Drop us a note and we'll respond within a day.
          </p>
          <div className="mt-4 space-y-2 text-sm text-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin className="text-brand-green-dark shrink-0 mt-0.5 w-4 h-4" />
              <span>Pokkotumbadam, Kerala, India</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="text-brand-green-dark shrink-0 w-4 h-4 mt-0.5" />
              <div>
                <p className="text-xs text-foreground/50">Office</p>
                <p>04931 237003</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="text-brand-green-dark shrink-0 w-4 h-4 mt-0.5" />
              <div>
                <p className="text-xs text-foreground/50">WhatsApp</p>
                <p>7481 031 003</p>
                <p>9061 936 003</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-brand-green-dark shrink-0 w-4 h-4" />
              <span className="break-all">sathyavedaherbals@gmail.com</span>
            </div>
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal as="form" animation="slide-left" delay={150} className="bg-card border border-border rounded-xl p-4 space-y-2.5 sm:p-6">
          <input
            placeholder="Your Name"
            className="w-full rounded-lg border border-border px-3 py-2 text-sm bg-background outline-none focus:border-brand-green"
          />
          <input
            placeholder="Email"
            className="w-full rounded-lg border border-border px-3 py-2 text-sm bg-background outline-none focus:border-brand-green"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-lg border border-border px-3 py-2 text-sm bg-background outline-none focus:border-brand-green resize-none"
          />
          <button
            type="button"
            className="w-full rounded-full bg-brand-green-dark text-primary-foreground py-2 text-sm font-medium hover:bg-brand-green transition-colors"
          >
            Send Message
          </button>
        </Reveal>
      </section>
      <Footer />
    </div>
  ),
});
