"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface FlashlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
}

export default function FlashlightCard({
  children,
  className = "",
  glowColor = "rgba(124, 58, 237, 0.15)",
  glowSize = 250,
}: FlashlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const springOpacity = useSpring(opacity, { stiffness: 200, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => opacity.set(1)}
      onMouseLeave={() => opacity.set(0)}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Spotlight glow that follows cursor */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: glowSize,
          height: glowSize,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: springOpacity,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Border glow that follows cursor */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          opacity: springOpacity,
          pointerEvents: "none",
          zIndex: 0,
          boxShadow: `inset 0 0 0 1px rgba(124, 58, 237, 0.2)`,
        }}
      />
      {/* Content on top */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}
