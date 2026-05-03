import styles from './EngineeringApproach.module.css';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "Deep technical analysis to architect solutions that align with business scale and constraints."
  },
  {
    number: "02",
    title: "Build",
    description: "Rigorous engineering focusing on modularity, performance, and clean code principles."
  },
  {
    number: "03",
    title: "Refine",
    description: "Iterative optimization, load testing, and continuous deployment for rock-solid stability."
  }
];

export default function EngineeringApproach() {
  return (
    <section id="approach" className={`section container`}>
      <ScrollReveal>
        <h2 className={styles.sectionTitle}>Engineering Approach</h2>
      </ScrollReveal>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <ScrollReveal key={index} delay={index * 120} direction="up" distance={50}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
