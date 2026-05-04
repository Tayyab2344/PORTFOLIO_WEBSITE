"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const gradientWords = [
  { text: "Scale", gradient: true },
  { text: ", ", gradient: false },
  { text: "Intelligence", gradient: true },
  { text: ", and ", gradient: false },
  { text: "Impact", gradient: true },
  { text: ".", gradient: false },
];

export default function Hero() {
  /* ── Sequential stagger variants ── */
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  /* Word-by-word reveal for headline */
  const wordContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.4 },
    },
  };

  const wordReveal: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className={`container ${styles.heroSection}`}>
      {/* ── Left Column ── */}
      <motion.div
        className={styles.leftCol}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div className={styles.label} variants={slideUp}>
          <span className={styles.dot}></span>
          <span className={styles.labelText}>Available for high-impact projects</span>
          <span className={styles.accentLine}></span>
        </motion.div>

        {/* Headline — word-by-word reveal */}
        <motion.h1
          className={styles.headline}
          variants={wordContainer}
          initial="hidden"
          animate="visible"
        >
          <span className={styles.headlineRow}>
            {"Engineering Systems for".split(" ").map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <motion.span className={styles.word} variants={wordReveal}>
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
          <span className={styles.headlineRow}>
            {gradientWords.map((w, i) =>
              w.gradient ? (
                <span key={i} className={styles.wordWrap}>
                  <motion.span
                    className={`${styles.word} text-gradient-shimmer`}
                    variants={wordReveal}
                  >
                    {w.text}
                  </motion.span>
                </span>
              ) : (
                <span key={i} className={styles.wordWrap}>
                  <motion.span className={styles.word} variants={wordReveal}>
                    {w.text}
                  </motion.span>
                </span>
              )
            )}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p className={styles.subtext} variants={slideUp}>
          Backend-focused. AI-driven. Built for real-world complexity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className={styles.btnGroup} variants={slideUp}>
          <MagneticButton className="glow-btn" href="#systems">
            View Systems
          </MagneticButton>
          <MagneticButton className="outline-btn" href="#approach">
            My Approach
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* ── Right Column ── */}
      <div className={styles.rightCol}>
        <div className={styles.glowBg} />
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className={styles.floatingImage}>
            <Image
              src="/mypic.png"
              alt="Tayyab.dev Portrait"
              width={600}
              height={800}
              priority
              className={styles.portrait}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
