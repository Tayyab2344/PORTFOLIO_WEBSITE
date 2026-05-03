"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useLenis } from "./SmoothScroll";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Trigger threshold: how many px into the viewport before triggering (from bottom) */
  threshold?: number;
  /** Delay in ms after trigger before starting animation */
  delay?: number;
  /** Direction of entry */
  direction?: "up" | "down" | "left" | "right";
  /** Distance in px the element travels */
  distance?: number;
}

export default function ScrollReveal({
  children,
  className,
  threshold = 120,
  delay = 0,
  direction = "up",
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { lenis } = useLenis();
  const [triggered, setTriggered] = useState(false);

  const translateMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const rawOpacity = useMotionValue(0);
  const rawX = useMotionValue(translateMap[direction].x);
  const rawY = useMotionValue(translateMap[direction].y);

  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 18 });
  const x = useSpring(rawX, { stiffness: 60, damping: 18 });
  const y = useSpring(rawY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (!lenis || !ref.current) return;

    const checkVisibility = () => {
      const el = ref.current;
      if (!el || triggered) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Trigger once the element's top enters the viewport minus threshold
      if (rect.top < windowH - threshold) {
        if (delay > 0) {
          setTimeout(() => setTriggered(true), delay);
        } else {
          setTriggered(true);
        }
      }
    };

    lenis.on("scroll", checkVisibility);
    // Also check on mount (elements already in view)
    checkVisibility();

    return () => {
      lenis.off("scroll", checkVisibility);
    };
  }, [lenis, triggered, threshold, delay]);

  // Once triggered, snap to fully visible
  useEffect(() => {
    if (triggered) {
      rawOpacity.set(1);
      rawX.set(0);
      rawY.set(0);
    }
  }, [triggered, rawOpacity, rawX, rawY]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity, x, y }}>
      {children}
    </motion.div>
  );
}
