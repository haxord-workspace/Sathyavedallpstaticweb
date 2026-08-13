import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SeoHead, buildBreadcrumbSchema, buildArticleSchema } from "@/components/site/SeoHead";
import { ArrowRight } from "lucide-react";
import { getPostBySlug, posts } from "@/lib/blog";

export const Route = createFileRoute("/journals/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return { meta: [{ title: "Article Not Found" }] };
    return {
      meta: [
        { title: `${loaderData.post.title} — Sathyaveda Journal` },
        { name: "description", content: loaderData.post.excerpt },
      ],
    };
  },
  component: JournalArticlePage,
});

function JournalArticlePage() {
  const { post } = Route.useLoaderData();

  // Find 2 related articles for the bottom section
  const relatedPosts = posts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <SeoHead
        path={`/journals/${post.slug}`}
        title={`${post.title} — Sathyaveda Journal`}
        description={post.excerpt}
        jsonLd={[
          buildBreadcrumbSchema([
            { name: "Home", url: "https://sathyavedaherbals.in/" },
            { name: "Journal", url: "https://sathyavedaherbals.in/journals" },
            { name: post.title, url: `https://sathyavedaherbals.in/journals/${post.slug}` },
          ]),
          buildArticleSchema({
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            authorName: "Sathyaveda Herbals",
            image: post.image,
            description: post.excerpt,
            url: `https://sathyavedaherbals.in/journals/${post.slug}`,
          }),
        ]}
      />
      <Header />

      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <Reveal as="header" className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center gap-3 text-sm font-medium mb-6">
              <span className="text-brand-green-dark">{post.tag}</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-muted-foreground">{post.date}</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-muted-foreground">{post.readTime || "5 min read"}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl text-brand-green-dark leading-tight mb-8">
              {post.title}
            </h1>
          </Reveal>

          {/* Hero Image */}
          <Reveal as="div" delay={50} className="w-full aspect-[16/9] sm:aspect-[21/9] bg-secondary/50 rounded-2xl overflow-hidden mb-12 sm:mb-16 border border-border/50 shadow-sm">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover object-center" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">Image Placeholder</div>
            )}
          </Reveal>

          {/* Article Content */}
          <Reveal as="div" delay={100} className="mx-auto max-w-2xl">
            <div className="prose prose-sm sm:prose-base max-w-none text-foreground/80 leading-relaxed space-y-6">
              {post.content?.split("\n\n").map((para, i) => {
                const text = para.trim();
                // Check if it's a pull quote (starts and ends with quotes)
                if (text.startsWith('"') && text.endsWith('"')) {
                  return (
                    <blockquote key={i} className="pl-6 py-1 my-8 border-l-[3px] border-brand-green-dark text-xl sm:text-2xl font-display italic text-brand-green-dark">
                      {text}
                    </blockquote>
                  );
                }
                return (
                  <p key={i} className="leading-8 text-foreground/75 text-[15px] sm:text-[17px]">
                    {text}
                  </p>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-12 mb-8">
              {post.productId ? (
                <Link
                  to="/product/$productId"
                  params={{ productId: post.productId }}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-green-dark px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-green transition-colors duration-200"
                >
                  Explore {post.title.split(":")[0]} <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-green-dark px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-green transition-colors duration-200"
                >
                  Explore {post.title.split(":")[0]} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </Reveal>
        </article>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
           <hr className="border-border/50 mb-16" />
        </div>

        {/* Related Reading */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-8">
            <h3 className="font-display text-2xl text-brand-green-dark">Related reading</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((p, index) => (
              <Reveal key={p.slug} delay={index * 100} className="block">
                <Link to="/journals/$slug" params={{ slug: p.slug }} className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 block">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green/70 mb-3 block">
                    {p.tag}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl text-brand-green-dark leading-snug">
                    {p.title}
                  </h4>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
