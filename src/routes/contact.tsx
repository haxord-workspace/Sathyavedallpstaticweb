import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sathyaveda Herbals LLP" }, { name: "description", content: "Get in touch with Sathyaveda Herbals LLP, Pokkotumbadam, Kerala." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16">

        {/* Page heading */}
        <Reveal as="div" className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Get in touch</span>
          <h1 className="mt-2 font-display text-3xl text-brand-green-dark sm:text-4xl lg:text-5xl">Reach Us</h1>
          <p className="mt-2 max-w-md text-sm text-foreground/70 leading-relaxed">
            We'd love to hear from you. Drop us a note and we'll respond within a day.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">

          {/* Contact info cards */}
          <Reveal as="div" animation="slide-right" className="flex flex-col gap-3">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <MapPin className="h-4 w-4 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Address</p>
                <p className="mt-1 text-sm text-foreground/80">Pokkotumbadam, Kerala, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <Phone className="h-4 w-4 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Office</p>
                <p className="mt-1 text-sm text-foreground/80">04931 237003</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <MessageCircle className="h-4 w-4 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">WhatsApp</p>
                <p className="mt-1 text-sm text-foreground/80">7481 031 003</p>
                <p className="text-sm text-foreground/80">9061 936 003</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <Mail className="h-4 w-4 text-brand-green-dark" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Email</p>
                <p className="mt-1 text-sm text-foreground/80 break-all">sathyavedaherbals@gmail.com</p>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal as="form" animation="slide-left" delay={150} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">Send a message</p>
            </div>
            <input
              placeholder="Your Name"
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background outline-none focus:border-brand-green transition-colors"
            />
            <input
              placeholder="Email"
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background outline-none focus:border-brand-green transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background outline-none focus:border-brand-green resize-none transition-colors"
            />
            <button
              type="button"
              className="w-full rounded-full bg-brand-green-dark text-primary-foreground py-2.5 text-sm font-semibold hover:bg-brand-green transition-colors"
            >
              Send Message
            </button>
          </Reveal>

        </div>
      </section>
      <Footer />
    </div>
  ),
});
