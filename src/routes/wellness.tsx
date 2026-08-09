import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, Tag, ArrowRight, ChevronUp } from "lucide-react";
import { posts, type Post } from "@/lib/blog";
import { useState } from "react";

function BlogCard({ p, index }: { p: Post; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="article" delay={index * 80} className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
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
            <h2 className="font-display text-lg text-brand-green-dark sm:text-xl">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green transition-colors duration-200"
            >
              {open ? (
                <>Close Article <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Read Article <ArrowRight className="h-4 w-4" /></>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable article content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-border/60 bg-secondary/30 px-5 py-6 sm:px-8">
          <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed space-y-4">
            {p.content?.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm leading-7 text-foreground/75">{para.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export const Route = createFileRoute("/wellness")({
  head: () => ({ meta: [{ title: "Blog — Sathyaveda Herbals LLP" }, { name: "description", content: "Articles on Ayurveda, product guides, rituals, and wellness tips." }] }),
  component: WellnessPage,
});

function WellnessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-10 lg:pt-28 lg:pb-16">
        <Reveal as="div" className="max-w-4xl mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-green">Sathyaveda Journal</p>

          <p className="mt-3 text-sm text-foreground/70 leading-relaxed sm:text-base">Expert articles, product guides and practical Ayurvedic rituals to support modern wellness.</p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {posts.map((p, index) => (
            <BlogCard key={p.slug} p={p} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
