"use client";

import styles from "./FinalCTA.module.css";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section id="contact" className={`section container`}>
      <ScrollReveal distance={50}>
        <div className={styles.ctaWrapper}>
          {/* CSS-animated glow orbs — no JS overhead */}
          <div className={styles.glowOrb1} />
          <div className={styles.glowOrb2} />

          <div className={styles.content}>
            <ScrollReveal delay={100}>
              <h2 className={styles.headline}>
                Let&apos;s Build Something That{" "}
                <span className="text-gradient-shimmer">Scales</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className={styles.subtext}>
                If you&apos;re serious about performance and real-world systems, we should talk.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <MagneticButton
                className={`glow-btn ${styles.ctaBtn}`}
                href="mailto:hello@tayyab.dev"
              >
                Start a Conversation
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className={styles.focus}>
                Currently open for AI-driven infrastructure projects.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
