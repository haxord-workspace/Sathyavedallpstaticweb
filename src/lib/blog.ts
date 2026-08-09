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
    title: "ABC Powder: A Gentle Daily Ritual",
    excerpt: "How ABC Powder — our Kerala-inspired herbal blend — fits into a daily Ayurvedic wellness routine.",
    date: "2026-07-20",
    tag: "Product Guide",
    slug: "abc-capsules-daily-ritual",
    content: `ABC Powder is Sathyaveda's signature herbal wellness blend, rooted in traditional Kerala formulations and crafted with Apple, Beetroot, Carrot, Drumstick (Moringa) extract, Safed Musli, Ashwagandha, Gooseberry (Amla) and Dates Seed. Each botanical plays a distinct role — Ashwagandha for adaptogenic balance, Safed Musli for stamina, Moringa for micronutrient density, and Amla for antioxidant support — combined into one daily Ayurvedic tonic for immunity and digestion.

How to use: stir one teaspoon of ABC Powder into a glass of warm water or milk once daily, ideally after a light breakfast. If you're new to herbal supplements, start with a half measure for the first three to four days to assess tolerance before moving to the full dose as part of a consistent morning ritual.

Safety note: ABC Powder is a food-based wellness blend, not a medicine. Anyone who is pregnant, nursing, managing a chronic condition, or taking prescription medication should check with a qualified Ayurvedic practitioner or doctor before adding it to their routine.

What to expect: most people notice gentle improvements in digestion, energy and everyday immunity within two to four weeks of consistent use. Like any natural wellness routine, ABC Powder works best alongside balanced eating, good hydration and gentle daily movement — not as a substitute for medical care.
`,
  },
  {
    title: "Veda ChargeX: Natural Energy Support",
    excerpt: "An evidence-informed look at Veda ChargeX's adaptogenic herbs and how to use this Ayurvedic tonic responsibly.",
    date: "2026-07-22",
    tag: "Product Guide",
    slug: "veda-chargex-energy-support",
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
    content: `When travelling, a few well-chosen herbal allies can help you stay balanced even with disrupted routines, unfamiliar food and long hours in transit. This guide outlines a compact Ayurvedic travel kit built around Sathyaveda's everyday wellness range.

Essentials to pack: single-serve sachets of ABC Powder for digestion and immunity, a small tub of Veda ChargeX for steady energy on long travel days, a pouch of Badam or Cashew for a nourishing snack, and a rehydrating electrolyte sachet for flights or road trips. Our complimentary launch bag is sized to hold these basics alongside a water bottle and small first-aid items.

Tips for staying balanced on the road: keep meal times as regular as possible, sip warm water instead of cold or iced drinks, and take short grounding walks at layovers or rest stops to support digestion and circulation. Even a single teaspoon of ABC Powder in warm water each morning can help anchor the body's rhythm when everything else around you is changing.
`,
  },
  {
    title: "Dosha Basics: Find Your Routine",
    excerpt: "A concise Ayurveda primer on Vata, Pitta and Kapha doshas, with simple daily adjustments to support balance.",
    date: "2026-07-26",
    tag: "Education",
    slug: "dosha-basics",
    content: `Doshas are the core energetic principles in Ayurveda, and understanding your own balance is the foundation of any personalised Ayurvedic routine. This primer explains the basics of Vata, Pitta and Kapha and small daily changes you can make to support wellbeing.

Vata, Pitta and Kapha describe movement, transformation and structure respectively. Vata governs circulation and the nervous system, Pitta governs digestion and metabolism, and Kapha governs structure and immunity. Small, consistent routines — regular meal times, suitable sleep windows and tailored herbs like Ashwagandha or Amla — help keep all three in balance.

Practical steps: for Vata (cool, dry, quick-moving) favour grounding warm foods, oil massage and a steady daily schedule; for Pitta (hot, intense, sharp) prioritise cooling foods, moderate spicy meals and avoid overheating; for Kapha (heavy, slow, steady) incorporate light, warming spices and energising morning movement.

Bringing it together: many Ayurvedic wellness blends, including Sathyaveda's ABC Powder and Veda ChargeX, are formulated to gently support all three doshas — but pairing them with dosha-aware daily habits is what makes an Ayurvedic routine truly effective.
`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
