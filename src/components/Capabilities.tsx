import styles from './Capabilities.module.css';
import ScrollReveal from './ScrollReveal';

const capabilities = [
  {
    title: "AI Systems",
    description: "Designing intelligent, context-aware platforms that adapt to complex data."
  },
  {
    title: "Backend Architecture",
    description: "Building resilient, highly available APIs and microservices for scale."
  },
  {
    title: "Web Platforms",
    description: "Crafting modern, reactive interfaces with deep full-stack integration."
  },
  {
    title: "Automation",
    description: "Streamlining operations through advanced scripting and seamless pipelines."
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className={`section container`}>
      <ScrollReveal>
        <h2 className={styles.sectionTitle}>Capabilities</h2>
      </ScrollReveal>
      
      <div className={styles.grid}>
        {capabilities.map((cap, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDescription}>{cap.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
