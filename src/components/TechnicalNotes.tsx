"use client";

import styles from "./TechnicalNotes.module.css";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Clock } from "lucide-react";

const notes = [
  {
    date: "Oct 24, 2026",
    title: "Optimizing gRPC Streams for High-Latency Networks",
    readTime: "5 min",
    tag: "Infrastructure",
  },
  {
    date: "Sep 12, 2026",
    title: "Why We Migrated from PostgreSQL to a Distributed Graph Database",
    readTime: "8 min",
    tag: "Database",
  },
  {
    date: "Aug 05, 2026",
    title: "Implementing Zero-Downtime Deployments with Kubernetes",
    readTime: "6 min",
    tag: "DevOps",
  },
  {
    date: "Jul 18, 2026",
    title: "Building Custom Caching Layers for NLP Pipelines",
    readTime: "7 min",
    tag: "AI / ML",
  },
];

export default function TechnicalNotes() {
  return (
    <section id="notes" className={`section container`}>
      <ScrollReveal>
        <div className={styles.header}>
          <div>
            <span className="section-label">Knowledge Base</span>
            <h2 className={styles.sectionTitle}>Technical Notes</h2>
          </div>
          <p className={styles.subtext}>
            Thoughts on architecture, scalability, and system design.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {notes.map((note, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="right" distance={30}>
              <a href="#" className={styles.noteCard}>
                <div className={styles.cardTop}>
                  <span className={styles.tag}>{note.tag}</span>
                  <div className={styles.readTime}>
                    <Clock size={13} strokeWidth={1.5} />
                    <span>{note.readTime}</span>
                  </div>
                </div>

                <h3 className={styles.noteTitle}>{note.title}</h3>

                <div className={styles.cardBottom}>
                  <span className={styles.date}>{note.date}</span>
                  <div className={styles.readMore}>
                    <span>Read</span>
                    <ArrowRight size={14} strokeWidth={2} />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
