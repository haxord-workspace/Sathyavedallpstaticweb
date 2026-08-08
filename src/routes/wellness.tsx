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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <Reveal as="div" className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-green">Sathyaveda Journal</p>
          <h1 className="font-display text-3xl text-brand-green-dark mt-3 sm:text-5xl">Insights & Guides</h1>
          <p className="mt-3 text-sm text-foreground/70 leading-relaxed sm:text-base">Expert articles, product guides and practical Ayurvedic rituals to support modern wellness.</p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-4">
          {posts.map((p, index) => (
            <Reveal key={p.slug} as="article" delay={index * 80} className="rounded-2xl border border-border bg-card hover:shadow-lg transition group">
              <div className="flex flex-col sm:flex-row items-stretch gap-0">
                {/* Left accent bar */}
                <div className="hidden sm:flex flex-col items-center justify-center gap-1 min-w-[110px] px-5 py-5 bg-brand-green/5 rounded-l-2xl border-r border-border/60">
                  <Calendar className="h-4 w-4 text-brand-green mb-1" />
                  <span className="text-xs text-muted-foreground text-center leading-snug">{p.date}</span>
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-green-dark">
                    <Tag className="h-3 w-3" />{p.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  {/* Mobile meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 sm:hidden">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.date}</span>
                    <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" />{p.tag}</span>
                  </div>

                  <div>
                    <h2 className="font-display text-lg text-brand-green-dark group-hover:text-brand-green transition-colors duration-200 sm:text-xl">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  </div>

                  <div className="mt-4">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green transition-colors duration-200">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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
