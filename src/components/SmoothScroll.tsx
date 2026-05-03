"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Lenis from "lenis";

interface LenisContextValue {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Custom hook: returns a 0→1 progress value for an element's
 * visibility within the viewport, powered by Lenis scroll events.
 */
export function useScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  offset: number = 200
) {
  const { lenis } = useLenis();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!lenis || !ref.current) return;

    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Element enters from bottom, fully visible at center
      const start = windowH + offset;
      const end = -rect.height - offset;
      const raw = 1 - (rect.top - end) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    lenis.on("scroll", handleScroll);
    // Run once on mount to handle elements already in view
    handleScroll();

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis, ref, offset]);

  return progress;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time);
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = instance;
    setLenis(instance);
    requestAnimationFrame(raf);

    return () => {
      instance.destroy();
      lenisRef.current = null;
    };
  }, [raf]);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}
