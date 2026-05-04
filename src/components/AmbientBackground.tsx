"use client";

import styles from './AmbientBackground.module.css';

export default function AmbientBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* Grid pattern */}
      <div className={styles.gridOverlay}></div>

      {/* Floating orbs — pure CSS animation, no JS overhead */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      {/* Noise texture overlay */}
      <div className={styles.noise}></div>
    </div>
  );
}
