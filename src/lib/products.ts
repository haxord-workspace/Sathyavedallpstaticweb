import abcPowder from "@/assets/products/ABC POWDER.jpg";
import badam from "@/assets/products/BADAM (2).jpeg";
import cashew from "@/assets/products/CASHEW.jpg";
import chargeX from "@/assets/products/Veda_ChargeX_bottle_on_wooden.jpeg";
import chargeXHover from "@/assets/products/veda_hover.png";

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
  hoverImage?: string;
  badge: string;
  price: string;
  originalPrice?: string;
  rating: number;
  variantLabel?: string;
  variants: ProductVariant[];
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  longDescriptionHTML?: string;
}

export const products: Product[] = [
  {
    id: "abc-powder",
    name: "ABC Capsules",
    brand: "Sathyaveda",
    description: "Sathyaveda ABC Powder capsule is formulated out of 3 exotic pure fruits that are well documented and tested for heavy metals in compliance with natural standards.",
    shortDescription: "Formulated out of 3 exotic pure fruits for daily harmony.",
    category: "Wellness",
    image: abcPowder,
    badge: "New Launch",
    price: "₹950",
    originalPrice: "₹2450",
    rating: 4.8,
    variants: [
      { size: "100g pouch", price: "₹950" },
      { size: "250g pouch", price: "₹1,199" },
    ],
    benefits: [
      "Supports weight management and heart health",
      "Lowers blood pressure and boosts athletic performance",
      "Improves eye health and regulates blood sugar",
      "Pure, natural, safe and effective with no additives",
    ],
    ingredients: ["Apple", "Beetroot", "Carrot"],
    howToUse: "2 Capsule Daily for 120 days. Take ABC Capsule with 1 glass Water or Milk after food.",
    longDescriptionHTML: `
      <div class="space-y-6 text-sm text-foreground/80 leading-relaxed">
        <p><strong>Sathyaveda ABC Powder capsule</strong> is formulated out of 3 exotic pure fruits that are well documented and tested for heavy metals in compliance with Natural standards. The product is made of natural fruits from selected Apple, Beetroot and Carrot.</p>

        <h3 class="font-display text-xl text-brand-green-dark mt-8 mb-4 border-b border-border/50 pb-2">What ABC Capsule does for you?</h3>

        <div class="space-y-5">
          <div>
            <h4 class="font-bold text-foreground mb-2">1. APPLE</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Weight management</li>
              <li>▪ Heart Health</li>
              <li>▪ Fiber, Vitamin C, Potent antioxidants</li>
              <li>▪ Highly Nutritious</li>
              <li>▪ Blood sugar control</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-2">2. BEETROOT</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Lowers Blood Pressure</li>
              <li>▪ Boosts Athletic Performance</li>
              <li>▪ Supports Brain Health</li>
              <li>▪ Rich in essential Nutrients, Manganese, Potassium, Iron</li>
              <li>▪ Vitamin B1, B2, B3, B5, B6, B9, Vitamin C</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-2">3. CARROT</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Improves eye health</li>
              <li>▪ Glowing Skin</li>
              <li>▪ Supports weight management</li>
              <li>▪ Regulates Blood Sugar levels in body</li>
              <li>▪ Prevents cancer</li>
            </ul>
          </div>
        </div>

        <div class="mt-8 bg-brand-green/10 rounded-2xl p-6 text-center">
          <p class="font-display text-lg text-brand-green-dark font-semibold">NO ADDITIVES • ARTIFICIAL FLAVOURS</p>
          <p class="mt-2 font-medium text-foreground">Pure, Natural Safe and Effective</p>
          <p class="mt-1 text-muted-foreground">Daily Harmony for your mind and body</p>
        </div>
      </div>
    `,
  },
    {
    id: "veda-chargex",
    name: "Veda ChargeX",
    brand: "Sathyaveda",
    description: "VEDA CHARGEX is formulated out of five Exotic Herbs that are well documented in Ayurvedic texts.",
    shortDescription: "Formulated out of five Exotic Herbs that are well documented in Ayurvedic texts.",
    category: "Vitality Blend",
    image: chargeX,
    hoverImage: chargeXHover,
    badge: "Wellness Essential",
    price: "₹950",
    originalPrice: "₹2450",
    rating: 4.8,
    variantLabel: "Available quantity",
    variants: [
      { size: "60 Veg capsules", price: "₹950" },
    ],
    benefits: [
      "Acts as a rejuvenator and good stimulant",
      "Supports vascular health and improves blood circulation",
      "Rich in vitamin C and powerful anti-oxidants",
      "Reduces the ageing process and acts as an allround immunity enhancer",
    ],
    ingredients: ["Drumstick Extract : 300 mg", "Safed Musli : 50 mg", "Ashwagandha : 50 mg", "Gooseberry : 50 mg", "Dates Seed : 50 mg"],
    howToUse: "2 Caps Daily for 120 days. Take Veda ChargeX Capsule with 1 glass Water or Milk after food.",
    longDescriptionHTML: `
      <div class="space-y-6 text-sm text-foreground/80 leading-relaxed">
        <p><strong>VEDA CHARGEX</strong> is formulated out of five Exotic Herbs that are well documented in Ayurvedic texts.</p>
        <p>This product is made of extracts from selected herbs - Drumstick extract, Safed Musli, Ashwagandha, Gooseberry, Dates Seeds and their specific Advantages are rejuvenator, good stimulant, vascular health. improve blood circulation, rich in vitamin c, powerful anti oxidant, reduces the process ageing acts as an allround immunity enhancer, Etc.</p>

        <h3 class="font-display text-xl text-brand-green-dark mt-8 mb-4 border-b border-border/50 pb-2">What VEDA CHARGEX does for you?</h3>

        <div class="space-y-5">
          <div>
            <h4 class="font-bold text-foreground mb-2">1. Drumstick extract</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ 7 times more Vitamin C than Oranges</li>
              <li>▪ 10 times more Vitamin A than Carrots</li>
              <li>▪ 17 times more Calcium than Milk</li>
              <li>▪ 9 times more Protein than Yogurt</li>
              <li>▪ 15 times more Potassium than Bananas</li>
              <li>▪ 25 times more Iron than Spinach</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-2">2. Safed Musli</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Increase Strength and Stamina</li>
              <li>▪ Improves General well being and Vitality</li>
              <li>▪ Increases Libido</li>
              <li>▪ Equally good for Men and Women</li>
              <li>▪ Years of long action with the same intensity</li>
              <li>▪ Experience the return of youthfullness</li>
              <li>▪ Support Digestion</li>
              <li>▪ Immunity Booster</li>
              <li>▪ Hormon balance</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-2">3. Ashwagandha</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Reduce Stress and Anxiety</li>
              <li>▪ Improves Sleep Quality</li>
              <li>▪ Increase Muscular Strength</li>
              <li>▪ Hormon and Reproductive Strength</li>
              <li>▪ Helps Reduce Inflammation and Regulate Blood sugar levels</li>
              <li>▪ Will Experience youthfulness</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-2">4. Gooseberry</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Managing Blood Sugar Control</li>
              <li>▪ Supports Glowing Skin and Hair</li>
              <li>▪ Increasing Good HDL Cholesterol</li>
              <li>▪ Helps Weight Management</li>
              <li>▪ Rich in Vitamin C</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-2">5. Dates Seed Powder</h4>
            <ul class="space-y-1 list-none pl-1 text-muted-foreground">
              <li>▪ Helps Prevent Constipation and Bloating</li>
              <li>▪ Rich in Antioxidants</li>
              <li>▪ Kidney and Liver Protection</li>
              <li>▪ Enhance Immunity</li>
              <li>▪ Regulated Blood Sugar</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "badam",
    name: "Almonds 250g",
    brand: "Sathyaveda",
    description: "Carefully selected premium almonds with a rich, wholesome character prized for daily nourishment.",
    shortDescription: "Delicately sourced premium almonds.",
    category: "Nutrient Rich",
    image: badam,
    badge: "Signature Choice",
    price: "₹350",
    originalPrice: "₹500",
    rating: 4.7,
    variants: [
      { size: "250g pack", price: "₹350" },
    ],
    benefits: [
      "Made with premium California almonds, known for their superior quality",
      "Supports strength, stamina and vitality",
      "Rich in nutrients for hair, skin and overall health",
      "Ideal for everyday nourishment and wellness",
    ],
    ingredients: ["Premium almonds", "Natural oils", "Carefully selected kernels"],
    howToUse: "Enjoy a small handful daily as a wholesome snack or part of your energy routine.",
  },
  {
    id: "cashew",
    name: "Cashew 1kg",
    brand: "Sathyaveda",
    description: "Premium cashews sourced for their smooth, rich texture and high nutritional value.",
    shortDescription: "180 grade whole cashews, rich in protein and essential minerals.",
    category: "Premium Nuts",
    image: cashew,
    badge: "Best Seller",
    price: "₹1,800",
    originalPrice: "₹2,000",
    rating: 4.9,
    variants: [

      { size: "1kg pack", price: "₹1,800" },
    ],
    benefits: [
      "Directly sourced from trusted cashew factories",
      "Freshly packed to preserve quality and taste",
      "Delivered quickly, helping you enjoy fresher cashews",
      "Premium whole kernels selected for freshness and quality",
    ],
    ingredients: ["Premium whole cashews", "Natural nut oils", "Freshly packed"],
    howToUse: "Enjoy as a nourishing snack or add to recipes for an added nutritious boost.",
  },

];

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}
