import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildBreadcrumbSchema } from "@/components/site/SeoHead";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sathyaveda Herbals LLP" }, { name: "description", content: "Get in touch with Sathyaveda Herbals LLP, Pokkotumbadam, Kerala." }] }),
  component: function ContactPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const text = `Hello Sathyaveda Herbals,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const whatsappUrl = `https://wa.me/917481031003?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className="min-h-screen bg-background">
        <SeoHead
          path="/contact"
          title="Contact — Sathyaveda Herbals LLP"
          description="Contact Sathyaveda Herbals LLP at Pokkotumbadam, Kerala. Reach us on WhatsApp, phone or email for orders and inquiries."
          jsonLd={[
            buildBreadcrumbSchema([
              { name: "Home", url: "https://sathyavedaherbals.in/" },
              { name: "Contact", url: "https://sathyavedaherbals.in/contact" },
            ]),
          ]}
        />
        <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16">

        {/* Page heading */}
        <Reveal as="div" className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Order on WhatsApp</span>
          <h1 className="mt-2 font-display text-3xl text-brand-green-dark sm:text-4xl lg:text-5xl">Reach Us</h1>
          <p className="mt-2 max-w-md text-sm text-foreground/70 leading-relaxed">
            We'd love to hear from you. Drop us a note and we'll respond within a day.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">

          {/* Left column: Info cards & Map */}
          <div className="flex flex-col gap-6">
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

            {/* Map */}
            <Reveal as="div" animation="slide-right" delay={150} className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Sathyaveda Herbals LLP Location"
                src="https://maps.google.com/maps?q=11.2299547,76.282323&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Reveal>
          </div>

          {/* Right column: Contact form */}
          <Reveal as="form" onSubmit={handleSubmit} animation="slide-left" delay={200} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6 h-fit">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">Send a message</p>
            </div>
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background outline-none focus:border-brand-green transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background outline-none focus:border-brand-green transition-colors"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              rows={4}
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background outline-none focus:border-brand-green resize-none transition-colors"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-brand-green-dark text-primary-foreground py-2.5 text-sm font-semibold hover:bg-brand-green transition-colors"
            >
              Send Message
            </button>
          </Reveal>

        </div>
      </section>
      <Footer />
    </div>
    );
  },
});
