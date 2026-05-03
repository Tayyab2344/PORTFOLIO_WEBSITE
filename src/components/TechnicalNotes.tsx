import styles from './TechnicalNotes.module.css';
import ScrollReveal from './ScrollReveal';

const notes = [
  {
    date: "Oct 24, 2026",
    title: "Optimizing gRPC Streams for High-Latency Networks",
    readTime: "5 min read"
  },
  {
    date: "Sep 12, 2026",
    title: "Why We Migrated from PostgreSQL to a Distributed Graph Database",
    readTime: "8 min read"
  },
  {
    date: "Aug 05, 2026",
    title: "Implementing Zero-Downtime Deployments with Kubernetes",
    readTime: "6 min read"
  }
];

export default function TechnicalNotes() {
  return (
    <section id="notes" className={`section container`}>
      <ScrollReveal>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Technical Notes</h2>
          <p className={styles.subtext}>Thoughts on architecture, scalability, and system design.</p>
        </div>
      </ScrollReveal>

      <div className={styles.list}>
        {notes.map((note, index) => (
          <ScrollReveal key={index} delay={index * 0.08} direction="left" distance={40}>
            <a href="#" className={styles.noteCard}>
              <div className={styles.meta}>
                <span>{note.date}</span>
                <span className={styles.dot}>&bull;</span>
                <span>{note.readTime}</span>
              </div>
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <div className={styles.arrow}>&rarr;</div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
