import bannerAbc from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/abc.png";
import bannerVeda from "@/assets/SATHYAVEDA HERBALS BANNERS LAPTOP/veda.png";

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  slug: string;
  content?: string;
  readTime?: string;
  image?: string;
  productId?: string;
};

export const posts: Post[] = [
  {
    title: "ABC Capsules: A Gentle Daily Wellness Ritual",
    excerpt: "How ABC Capsules fits into a simple, everyday wellness routine.",
    date: "Aug 13, 2026",
    tag: "Wellness",
    slug: "abc-capsules-daily-ritual",
    readTime: "4 min read",
    image: bannerAbc,
    productId: "abc-powder",
    content: `For many of us, wellness routines get crowded out by everyday life. ABC Capsules was designed with that in mind — a simple, contemporary format built around Apple, Beetroot and Carrot, meant to sit easily inside a daily routine rather than complicate it.

The idea behind the formulation is straightforward: bring together a small set of familiar, purposeful ingredients in a format that doesn't require preparation or planning. No juicing, no chopping — just a daily capsule.

"A gentle ritual works best when it asks little of you and still shows up, every day."

Apple, Beetroot and Carrot are joined by additional botanical ingredients to round out the formulation. Together, they're positioned as general nutrition support — part of a broader, everyday approach to wellbeing rather than a stand-alone solution.

As with any wellness product, we'd encourage reading the full ingredient and usage information on the packaging, and speaking with a physician if you have specific health considerations.`,
  },
  {
    title: "Veda ChargeX: Natural Energy Support",
    excerpt: "An evidence-informed look at Veda ChargeX's adaptogenic herbs and how to use this Ayurvedic tonic responsibly.",
    date: "2026-07-22",
    tag: "Wellness",
    slug: "veda-chargex-energy-support",
    image: bannerVeda,
    productId: "veda-chargex",
    content: `Veda ChargeX is Sathyaveda's herbal vitality tonic, blending Drumstick (Moringa) extract, Safed Musli, Ashwagandha and Gooseberry (Amla) with Dates Seed to support sustained, natural energy. Ashwagandha and Safed Musli are traditional Ayurvedic adaptogens used to help the body manage everyday stress, while Moringa and Amla add antioxidants and micronutrients that support immunity, digestion and healthy blood sugar balance.

How to use: take one to two teaspoons of Veda ChargeX mixed with warm water or milk each morning, ideally with food. For the best results, pair it with consistent sleep, good hydration and short movement breaks through the day, rather than relying on it alone for energy.

Safety note: because ChargeX supports blood-sugar and thyroid-linked pathways, anyone on diabetes or thyroid medication, or who is pregnant or nursing, should speak with a healthcare professional before starting it. This is a gentle, food-based herbal tonic — not a stimulant — so consistency matters more than dosage.

What to expect: many people notice steadier, more even energy within a few weeks of daily use, without the sharp peaks and crashes associated with caffeine-based energy drinks.
`,
  },
  {
    title: "Travel-Ready Ayurveda: Packing Your Kit",
    excerpt: "What to pack for short trips — essential herbal helpers and how our launch bag helps you stay balanced on the road.",
    date: "2026-07-24",
    tag: "Lifestyle",
    slug: "travel-ready-ayurveda",
    image: "https://res.cloudinary.com/dafifet3i/video/upload/v1786080685/IMG_8400_rkfi4t.mp4",
    content: `When travelling, a few well-chosen herbal allies can help you stay balanced even with disrupted routines, unfamiliar food and long hours in transit. This guide outlines a compact Ayurvedic travel kit built around Sathyaveda's everyday wellness range.

Essentials to pack: single-serve sachets of ABC Powder for digestion and immunity, a small tub of Veda ChargeX for steady energy on long travel days, a pouch of Badam or Cashew for a nourishing snack, and a rehydrating electrolyte sachet for flights or road trips. Our complimentary launch bag is sized to hold these basics alongside a water bottle and small first-aid items.

Tips for staying balanced on the road: keep meal times as regular as possible, sip warm water instead of cold or iced drinks, and take short grounding walks at layovers or rest stops to support digestion and circulation. Even a single teaspoon of ABC Powder in warm water each morning can help anchor the body's rhythm when everything else around you is changing.
`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
