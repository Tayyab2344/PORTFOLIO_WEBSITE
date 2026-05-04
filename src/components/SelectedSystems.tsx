"use client";

import styles from "./SelectedSystems.module.css";
import ScrollReveal from "./ScrollReveal";
import FlashlightCard from "./FlashlightCard";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

const systems = [
  {
    title: "AI Complaint Intelligence",
    role: "Lead Engineer",
    stack: ["NestJS", "NLP", "Redis"],
    color: "var(--primary-accent)",
    span: "tall",
  },
  {
    title: "RecyConnect Marketplace",
    role: "Full-Stack Dev",
    stack: ["MERN", "Flutter", "Stripe"],
    color: "var(--secondary-accent)",
    span: "normal",
  },
  {
    title: "Distributed Trading Engine",
    role: "Backend Architect",
    stack: ["Node.js", "gRPC", "Postgres"],
    color: "var(--primary-accent)",
    span: "normal",
  },
  {
    title: "Enterprise Identity Vault",
    role: "Security Lead",
    stack: ["OAuth2", "JWT", "RBAC"],
    color: "var(--secondary-accent)",
    span: "tall",
  },
  {
    title: "Predictive Supply Chain",
    role: "ML Engineer",
    stack: ["Python", "TensorFlow", "Kafka"],
    color: "var(--primary-accent)",
    span: "normal",
  },
  {
    title: "Real-Time Analytics Dashboard",
    role: "Frontend Lead",
    stack: ["Next.js", "D3.js", "WebSocket"],
    color: "var(--secondary-accent)",
    span: "normal",
  },
];

export default function SelectedSystems() {
  return (
    <section id="systems" className={`section container`}>
      <ScrollReveal>
        <div className={styles.header}>
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className={styles.sectionTitle}>System Registry</h2>
          </div>
          <MagneticButton className={`outline-btn ${styles.viewAllBtn}`} href="#">
            View All Systems
          </MagneticButton>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {systems.map((system, index) => (
          <ScrollReveal
            key={index}
            delay={index * 80}
            className={system.span === "tall" ? styles.tall : ""}
          >
            <FlashlightCard className={styles.card}>
              <div className={styles.cardInner}>
                {/* Thumbnail placeholder — low saturation block */}
                <div className={styles.thumbnail}>
                  <div
                    className={styles.thumbnailGradient}
                    style={{
                      background: `linear-gradient(135deg, ${system.color}15 0%, ${system.color}05 100%)`,
                    }}
                  />
                </div>

                {/* Metadata */}
                <div className={styles.meta}>
                  <h3 className={styles.cardTitle}>{system.title}</h3>
                  <div className={styles.metaRow}>
                    <span className={styles.role}>{system.role}</span>
                    <span className={styles.divider}>|</span>
                    <div className={styles.stackTags}>
                      {system.stack.map((s) => (
                        <span key={s} className={styles.stackTag}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.arrow}>
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </FlashlightCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
