import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildBreadcrumbSchema } from "@/components/site/SeoHead";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { posts, type Post } from "@/lib/blog";
import { useState } from "react";

// Helper component for the image placeholder
function ImagePlaceholder({ text }: { text: string }) {
  return (
    <div className="w-full h-full min-h-[250px] bg-secondary/40 flex flex-col items-center justify-center text-muted-foreground p-6 text-center border-b border-border/50">
      <ImageIcon className="h-6 w-6 mb-2 opacity-50" />
      <span className="text-xs font-medium">{text}</span>
      <span className="text-[10px] opacity-70 mt-1 hover:underline cursor-pointer">or browse files</span>
    </div>
  );
}

function FeaturedCard({ p }: { p: Post }) {
  return (
    <Reveal as="article" delay={100} className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md col-span-1 lg:col-span-3">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left: Image Placeholder */}
        <div className="lg:w-1/2 min-h-[300px] lg:min-h-[400px] border-b lg:border-b-0 lg:border-r border-border/60 border-dashed">
          <ImagePlaceholder text={`${p.title.split(":")[0]} — daily ritual`} />
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-12">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green/70 mb-3 block">
            {p.tag}
          </span>
          <h2 className="font-display text-2xl lg:text-3xl text-brand-green-dark mb-4 leading-snug">
            {p.title}
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
            {p.excerpt}
          </p>
          <Link to="/journals/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-green transition-colors">
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function StandardCard({ p, index }: { p: Post; index: number }) {
  return (
    <Reveal as="article" delay={150 + index * 50} className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md flex flex-col h-full">
      {/* Top: Image Placeholder */}
      <div className="h-48 border-b border-border/60 border-dashed">
        <ImagePlaceholder text={p.title.split(":")[0]} />
      </div>

      {/* Bottom: Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green/70 mb-6 block">
          {p.tag}
        </span>
        <h3 className="font-display text-lg text-brand-green-dark mb-6 leading-snug">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
          {p.excerpt}
        </p>
        <Link to="/journals/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-dark hover:text-brand-green transition-colors mt-auto">
          Read more <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Reveal>
  );
}

export const Route = createFileRoute("/journals/")({
  head: () => ({ meta: [{ title: "Blog — Sathyaveda Herbals LLP" }, { name: "description", content: "Articles on Ayurveda, product guides, rituals, and wellness tips." }] }),
  component: WellnessPage,
});

function WellnessPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Ayurveda", "Ingredients", "Wellness", "Lifestyle"];

  const filteredPosts = activeFilter === "All" 
    ? posts 
    : posts.filter(p => p.tag === activeFilter);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <SeoHead
        path="/journals"
        title="Journal — Sathyaveda Herbals LLP"
        description="Articles on Ayurveda, product guides, seasonal rituals and wellness tips from Sathyaveda Herbals LLP, Kerala."
        jsonLd={[
          buildBreadcrumbSchema([
            { name: "Home", url: "https://sathyavedaherbals.in/" },
            { name: "Journal", url: "https://sathyavedaherbals.in/journals" },
          ]),
        ]}
      />
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Header Section */}
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green/70 mb-4">
            Sathyaveda Journal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl text-brand-green-dark mb-6 leading-tight">
            Wellness insights<br />for everyday life.
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Thoughtful stories about Ayurveda, ingredients, everyday wellness and modern rituals.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal as="div" delay={50} className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter 
                  ? "bg-brand-green-dark text-white shadow-sm" 
                  : "bg-white text-foreground hover:bg-secondary border border-border/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPost && <FeaturedCard p={featuredPost} />}
            {remainingPosts.map((p, index) => (
              <StandardCard key={p.slug} p={p} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            No articles found for the selected category.
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
