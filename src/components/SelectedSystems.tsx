import styles from './SelectedSystems.module.css';
import ScrollReveal from './ScrollReveal';

const systems = [
  {
    title: "Distributed Trading Engine",
    description: "High-frequency processing system handling 10k+ TPS with sub-millisecond latency. Built using Rust and gRPC."
  },
  {
    title: "Enterprise Identity Vault",
    description: "Zero-trust authentication provider with advanced cryptographic attestation and role-based access controls."
  },
  {
    title: "Predictive Supply Chain Model",
    description: "Machine learning pipeline that forecasts inventory disruptions by analyzing global logistical datasets."
  }
];

export default function SelectedSystems() {
  return (
    <section id="systems" className={`section container`}>
      <ScrollReveal>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Selected Systems</h2>
          <button className={`outline-btn ${styles.viewAllBtn}`}>View All Systems</button>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {systems.map((system, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className={`${styles.card} hover-lift`}>
              <h3 className={styles.cardTitle}>{system.title}</h3>
              <p className={styles.cardDescription}>{system.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
