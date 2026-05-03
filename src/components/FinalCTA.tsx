import styles from './FinalCTA.module.css';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA() {
  return (
    <section id="contact" className={`section container`}>
      <ScrollReveal distance={40}>
        <div className={styles.ctaWrapper}>
          <div className={styles.glowBg}></div>
          <div className={styles.content}>
            <h2 className={styles.headline}>Let&apos;s Build Something That <span className="text-gradient">Scales</span></h2>
            <p className={styles.subtext}>If you&apos;re serious about performance and real-world systems, we should talk.</p>
            <button className={`glow-btn ${styles.ctaBtn}`}>Start a Conversation</button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
