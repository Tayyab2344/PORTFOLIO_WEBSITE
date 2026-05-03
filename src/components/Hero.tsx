"use client";

import styles from './Hero.module.css';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLenis } from './SmoothScroll';

export default function Hero() {
  const { lenis } = useLenis();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax values driven by Lenis
  const rawTextY = useMotionValue(0);
  const rawImageY = useMotionValue(0);
  const rawGlowScale = useMotionValue(1);

  const textY = useSpring(rawTextY, { stiffness: 100, damping: 30 });
  const imageY = useSpring(rawImageY, { stiffness: 100, damping: 30 });
  const glowScale = useSpring(rawGlowScale, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const scrollY = lenis.scroll;
      // Parallax: text moves slower, image moves slightly faster
      rawTextY.set(scrollY * 0.15);
      rawImageY.set(scrollY * -0.08);
      // Glow scales down as you scroll away
      rawGlowScale.set(1 + scrollY * 0.0003);
    };

    lenis.on("scroll", handleScroll);
    return () => lenis.off("scroll", handleScroll);
  }, [lenis, rawTextY, rawImageY, rawGlowScale]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  return (
    <section ref={sectionRef} className={`container ${styles.heroSection}`}>
      <motion.div 
        className={styles.leftCol}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY }}
      >
        <motion.div className={styles.label} variants={textVariants}>
          <span className={styles.dot}></span> Available for high-impact projects
        </motion.div>
        
        <motion.h1 className={styles.headline} variants={textVariants}>
          Engineering Systems for <br/>
          <span className="text-gradient">Scale</span>, <span className="text-gradient">Intelligence</span>, and <span className="text-gradient">Impact</span>.
        </motion.h1>
        
        <motion.p className={styles.subtext} variants={textVariants}>
          Backend-focused. AI-driven. Built for real-world complexity.
        </motion.p>
        
        <motion.div className={styles.btnGroup} variants={textVariants}>
          <button className="glow-btn">View Systems</button>
          <button className="outline-btn">My Approach</button>
        </motion.div>
      </motion.div>

      <div className={styles.rightCol}>
        <motion.div className={styles.glowBg} style={{ scale: glowScale }}></motion.div>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" as const }}
          style={{ y: imageY }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <Image
              src="/developer_portrait.png"
              alt="Developer Portrait"
              width={600}
              height={800}
              priority
              className={styles.portrait}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
