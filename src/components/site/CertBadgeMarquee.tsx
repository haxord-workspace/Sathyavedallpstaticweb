import {
  FlaskConical,
  BadgeCheck,
  MapPin,
  ScrollText,
  Leaf,
  Globe,
  Heart,
  ShieldCheck,
} from "lucide-react";

const badges = [
  { icon: BadgeCheck,   label: "Certified" },
  { icon: MapPin,       label: "Made In Kerala" },
  { icon: ScrollText,   label: "Ayurvedic Drug Certificate" },
  { icon: Leaf,         label: "Pure Natural" },
  { icon: Globe,        label: "Non-Toxic" },
  { icon: Heart,        label: "Cruelty Free" },
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: ShieldCheck,  label: "GMP Certified" },
];

// Duplicate so the second copy fills the gap as the first scrolls off
const allBadges = [...badges, ...badges];

export function CertBadgeMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-[#d4c5a9]/60 bg-[#f5ede0]">
      <div className="flex items-center cert-marquee-track py-3">
        {allBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className="flex flex-none items-center gap-2 px-6 sm:px-8 text-[#4a3728]"
            >
              <Icon
                className="h-4 w-4 flex-none text-[#7a5c3e] sm:h-5 sm:w-5"
                strokeWidth={1.6}
              />
              <span className="whitespace-nowrap text-xs font-semibold tracking-wide sm:text-sm">
                {badge.label}
              </span>
              {/* Subtle separator dot */}
              <span className="ml-4 sm:ml-6 h-1 w-1 flex-none rounded-full bg-[#b8a48a] opacity-70" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
