import abcPowder from "@/assets/products/ABC POWDER.jpg";
import badam from "@/assets/products/BADAM (2).jpeg";
import cashew from "@/assets/products/CASHEW.jpg";
import chargeX from "@/assets/products/Veda_ChargeX_bottle_on_wooden.jpeg";

export interface ProductVariant {
  size: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  badge: string;
  price: string;
  rating: number;
  variants: ProductVariant[];
  benefits: string[];
  ingredients: string[];
  howToUse: string;
}

export const products: Product[] = [
  {
    id: "abc-powder",
    name: "ABC Powder",
    brand: "Sathyaveda",
    description: "A premium herbal wellness blend inspired by traditional Kerala formulations and crafted for daily vitality.",
    shortDescription: "Premium wellness blend for daily vitality.",
    category: "Wellness",
    image: abcPowder,
    badge: "New Launch",
    price: "₹950",
    rating: 4.8,
    variants: [
      { size: "100g pouch", price: "₹950" },
      { size: "250g pouch", price: "₹1,199" },
    ],
    benefits: [
      "Supports overall wellness and daily balance",
      "Helps boost immunity and digestion",
      "Crafted with Apple, Beetroot, Carrot and traditional Ayurvedic herbs",
    ],
    ingredients: ["Apple", "Beetroot", "Carrot", "Drumstick extract", "Safed Musli", "Ashwagandha", "Gooseberry", "Dates Seed"],
    howToUse: "Mix one teaspoon in warm water or milk once daily, or as recommended by your wellness practitioner.",
  },
  {
    id: "badam",
    name: "Badam",
    brand: "Sathyaveda",
    description: "Carefully selected premium badam with a rich, wholesome character prized for daily nourishment.",
    shortDescription: "Delicately sourced premium badam.",
    category: "Nutrient Rich",
    image: badam,
    badge: "Signature Choice",
    price: "₹350",
    rating: 4.7,
    variants: [
      { size: "250g pack", price: "₹350" },
      { size: "500g pack", price: "₹1,699" },
    ],
    benefits: [
      "Supports strength, stamina and vitality",
      "Rich in nutrients for hair, skin and overall health",
      "Ideal for everyday nourishment and wellness",
    ],
    ingredients: ["Premium almonds", "Natural oils", "Carefully selected kernels"],
    howToUse: "Enjoy a small handful daily as a wholesome snack or part of your energy routine.",
  },
  {
    id: "cashew",
    name: "Cashew",
    brand: "Sathyaveda",
    description: "Premium cashews sourced for their smooth, rich texture and high nutritional value.",
    shortDescription: "180 grade whole cashews, rich in protein and essential minerals.",
    category: "Premium Nuts",
    image: cashew,
    badge: "Best Seller",
    price: "₹1,800",
    rating: 4.9,
    variants: [
      { size: "500g pack", price: "₹1,299" },
      { size: "1kg pack", price: "₹1,800" },
    ],
    benefits: [
      "High in protein, magnesium and phosphorus",
      "Supports bone health, energy and mindful snacking",
      "Sourced for premium whole kernels and freshness",
    ],
    ingredients: ["Premium whole cashews", "Natural nut oils", "Freshly packed"],
    howToUse: "Enjoy as a nourishing snack or add to recipes for an added nutritious boost.",
  },
  {
    id: "veda-chargex",
    name: "Veda ChargeX",
    brand: "Sathyaveda",
    description: "A premium herbal vitality tonic designed with Kerala-inspired botanicals for energy and wellbeing.",
    shortDescription: "Herbal tonic for balance, immunity and daily rejuvenation.",
    category: "Vitality Blend",
    image: chargeX,
    badge: "Wellness Essential",
    price: "₹950",
    rating: 4.8,
    variants: [
      { size: "Bottle 120ml", price: "₹950" },
      { size: "Bottle 250ml", price: "₹1,399" },
    ],
    benefits: [
      "Supports immunity, digestion and energy balance",
      "Blended with Drumstick, Safed Musli, Ashwagandha, Gooseberry and Dates Seed",
      "Helps maintain healthy blood sugar and liver support",
    ],
    ingredients: ["Drumstick extract", "Safed Musli", "Ashwagandha", "Gooseberry", "Gooseberry", "Dates Seed"],
    howToUse: "Take 1-2 teaspoons daily with warm water or milk, or as directed by your practitioner.",
  },
];

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}
