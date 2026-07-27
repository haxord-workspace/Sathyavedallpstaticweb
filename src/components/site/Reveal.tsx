import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

const animations = {
  "fade-up": { hidden: "opacity-0 translate-y-8", visible: "opacity-100 translate-y-0" },
  "fade-in": { hidden: "opacity-0", visible: "opacity-100" },
  "zoom-in": { hidden: "opacity-0 scale-95", visible: "opacity-100 scale-100" },
  "slide-left": { hidden: "opacity-0 -translate-x-8", visible: "opacity-100 translate-x-0" },
  "slide-right": { hidden: "opacity-0 translate-x-8", visible: "opacity-100 translate-x-0" },
} as const;

type Animation = keyof typeof animations;

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  animation?: Animation;
  delay?: number;
  duration?: number;
}

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
  const { hidden, visible } = animations[animation];

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${inView ? visible : hidden} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
