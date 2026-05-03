"use client";

import styles from './AmbientBackground.module.css';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* Grid pattern */}
      <div className={styles.gridOverlay}></div>

      {/* Floating orbs */}
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 25, -35, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb3}`}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise texture overlay */}
      <div className={styles.noise}></div>
    </div>
  );
}
