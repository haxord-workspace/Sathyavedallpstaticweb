export type Post = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  slug: string;
  content?: string;
};

export const posts: Post[] = [
  {
    title: "ABC Capsules: A Gentle Daily Ritual",
    excerpt: "How ABC capsules fit into a daily wellness routine and what herbs make them effective.",
    date: "2026-07-20",
    tag: "Product Guide",
    slug: "abc-capsules-daily-ritual",
    content: `ABC capsules are formulated from time-honoured Kerala herbs. In this post we explore the core botanicals, suggested usage, and how they fit into your morning ritual.

ABC combines three primary botanicals traditionally used to support digestion, immunity and gentle detoxification. Taken after a light breakfast, a daily ABC capsule can complement balanced eating and gentle movement.

How to use: take one capsule with warm water after breakfast. For those new to herbal supplements, start with a half dose for the first three days to assess tolerance. People who are pregnant, nursing, or on prescription medication should consult a practitioner before use.

What to expect: within 2-4 weeks many users report subtle improvements in digestion and energy. These are supportive, not immediate cures — consistent, mindful routines are recommended.
`,
  },
  {
    title: "Veda ChargeX: Natural Energy Support",
    excerpt: "An evidence-informed look at energising herbs and how to use Veda ChargeX responsibly.",
    date: "2026-07-22",
    tag: "Product Guide",
    slug: "veda-chargex-energy-support",
    content: `Veda ChargeX combines adaptogenic herbs to support sustained energy. We cover ingredients, timing, and safety considerations.

Key ingredients such as Ashwagandha, Shankhpushpi and natural extracts provide gentle support without the crash associated with stimulants. ChargeX is designed for daytime use; avoid taking it late in the day to prevent sleep disruption.

Recommended use: one capsule in the morning with food. For sustained results, pair with adequate sleep, hydration and short movement breaks during the day.

Safety note: those with hypertension or on thyroid medication should consult a healthcare professional before using ChargeX.
`,
  },
  {
    title: "Travel-Ready Ayurveda: Packing Your Kit",
    excerpt: "What to pack for short trips — essential herbal helpers and how our launch bag helps you stay balanced.",
    date: "2026-07-24",
    tag: "Lifestyle",
    slug: "travel-ready-ayurveda",
    content: `When travelling, simple herbal allies can help preserve balance. This guide outlines a compact kit for short trips.

Essentials to pack: a small pouch with ABC capsules for digestion, a sachet of rehydrating powder for long journeys, and a small tube of balm for travel aches. The complimentary launch bag is sized to hold these basics, plus a water bottle and small first-aid items.

Tips: maintain regular meal times where possible, sip warm water rather than cold drinks, and pause for short grounding walks at layovers to support digestion and circulation.
`,
  },
  {
    title: "Dosha Basics: Find Your Routine",
    excerpt: "A concise primer on doshas and simple daily adjustments to support balance and wellbeing.",
    date: "2026-07-26",
    tag: "Education",
    slug: "dosha-basics",
    content: `Doshas are the core energetic principles in Ayurveda. This primer explains the basics and small daily changes you can make.

Vata, Pitta and Kapha describe movement, transformation and structure respectively. Small, daily routines — consistent meal times, suitable sleep windows and tailored herbs — can help keep doshas in balance.

Practical steps: for Vata (cool, dry) increase grounding warm foods and oil massage; for Pitta (hot, intense) prioritise cooling herbs and moderation of spicy foods; for Kapha (heavy, slow) incorporate drying spices and light morning movement.
`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
