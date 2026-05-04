"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
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
  delay = 0,
  direction = "up",
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  const translateMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setTriggered(true), delay);
          } else {
            setTriggered(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: translateMap[direction].x,
        y: translateMap[direction].y,
      }}
      animate={
        triggered
          ? { opacity: 1, x: 0, y: 0 }
          : {
              opacity: 0,
              x: translateMap[direction].x,
              y: translateMap[direction].y,
            }
      }
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
