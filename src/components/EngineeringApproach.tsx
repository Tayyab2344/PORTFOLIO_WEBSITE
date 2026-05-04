"use client";

import styles from "./EngineeringApproach.module.css";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Compass, Code2, Gauge } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy",
    description:
      "System design, database modeling, and technical auditing. Every project starts with a deep architectural blueprint.",
    details: ["System Architecture", "DB Modeling", "Technical Audits"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Build",
    description:
      "Implementation of MERN/NestJS stacks with end-to-end type-safety, clean code principles, and modular patterns.",
    details: ["Type-safe APIs", "Modular Code", "CI/CD Pipelines"],
  },
  {
    number: "03",
    icon: Gauge,
    title: "Refine",
    description:
      "Deployment, performance monitoring, and SEO scaling. Iterative optimization until metrics hit production-grade.",
    details: ["Load Testing", "Performance Tuning", "SEO Scaling"],
  },
];

export default function EngineeringApproach() {
  return (
    <section id="approach" className={`section container`}>
      <ScrollReveal>
        <div className={styles.header}>
          <span className="section-label">The Process</span>
          <h2 className={styles.sectionTitle}>Engineering Protocol</h2>
          <p className={styles.subtitle}>
            A systems engineer&apos;s approach — not just code, but architecture.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.stepsContainer}>
        {/* Connecting pipeline line */}
        <motion.div
          className={styles.pipeline}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        {steps.map((step, index) => (
          <ScrollReveal key={index} delay={index * 150} direction="up" distance={40}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <div className={styles.numberCircle}>
                  <step.icon size={24} strokeWidth={1.5} />
                </div>
                <span className={styles.numberText}>{step.number}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <div className={styles.detailTags}>
                {step.details.map((d) => (
                  <span key={d} className={styles.tag}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
