"use client";

import styles from "./Capabilities.module.css";
import ScrollReveal from "./ScrollReveal";
import FlashlightCard from "./FlashlightCard";
import { Brain, Server, Globe, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Systems",
    description:
      "LLM orchestration, diffusion model pipelines, and intelligent automation that adapts to complex data.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "High-concurrency NestJS/Node.js systems with resilient APIs and microservice patterns built for scale.",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description:
      "Performance-first Next.js deployments with deep full-stack integration and sub-second load times.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "System-level scripting, CI/CD pipelines, and workflow optimization to eliminate manual overhead.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className={`section container`}>
      <ScrollReveal>
        <div className={styles.header}>
          <span className="section-label">What I Build</span>
          <h2 className={styles.sectionTitle}>Technical Capabilities</h2>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {capabilities.map((cap, index) => (
          <ScrollReveal key={index} delay={index * 80}>
            <FlashlightCard className={styles.card}>
              <div className={styles.iconWrap}>
                <cap.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDescription}>{cap.description}</p>
            </FlashlightCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
