import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/wellness")({
  head: () => ({ meta: [{ title: "Blog — Sathyaveda Herbals LLP" }, { name: "description", content: "Articles on Ayurveda, product guides, rituals, and wellness tips." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Reveal as="div" className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-green">Sathyaveda Journal</p>
          <h1 className="font-display text-5xl text-brand-green-dark mt-4">Insights & Guides</h1>
          <p className="mt-5 text-foreground/70 leading-relaxed">Expert articles, product guides and practical Ayurvedic rituals to support modern wellness.</p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, index) => (
            <Reveal key={p.slug} as="article" delay={(index % 3) * 100} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="font-display text-xl text-brand-green-dark">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{p.date}</span>
                    <span className="inline-flex items-center gap-1"><Tag className="h-4 w-4" />{p.tag}</span>
                  </div>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-3 py-2 text-sm font-semibold text-white">
                    Read <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  ),
});
