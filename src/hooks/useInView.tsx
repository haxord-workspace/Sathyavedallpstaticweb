import { useEffect, useRef, useState, RefObject } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit): { ref: RefObject<T>; inView: boolean } {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      options
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);

  return { ref, inView };
}
