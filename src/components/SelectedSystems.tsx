"use client";

import styles from "./SelectedSystems.module.css";
import ScrollReveal from "./ScrollReveal";
import FlashlightCard from "./FlashlightCard";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

const systems = [
  {
    title: "RecyConnect Marketplace",
    role: "Full-Stack Dev",
    stack: ["Next.js", "AI", "Stripe"],
    color: "var(--secondary-accent)",
    span: "tall",
    href: "https://recyconnect.ranatayyab.dev/",
  },
  {
    title: "AIPP",
    role: "Lead Developer",
    stack: ["React", "Tailwind", "CMS"],
    color: "var(--primary-accent)",
    span: "normal",
    href: "https://www.aipp.org.pk/",
  },
  {
    title: "ZoonLabs",
    role: "Frontend Architect",
    stack: ["React", "Three.js", "GSAP"],
    color: "#e63946",
    span: "normal",
    href: "https://zoonlabs.com/",
  },
  {
    title: "Abbottabad Police eDevice",
    role: "Full-Stack Engineer",
    stack: ["React", "Node.js", "Postgres"],
    color: "var(--secondary-accent)",
    span: "tall",
    href: "https://abbottabadpolice.kp.gov.pk/eDevice/about",
  },
  {
    title: "AI Complaint Intelligence",
    role: "Lead Engineer",
    stack: ["NestJS", "NLP", "Redis"],
    color: "var(--primary-accent)",
    span: "normal",
    href: "#",
  },
  {
    title: "Enterprise Identity Vault",
    role: "Security Lead",
    stack: ["OAuth2", "JWT", "RBAC"],
    color: "var(--secondary-accent)",
    span: "normal",
    href: "#",
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
              <a href={system.href} target={system.href !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className={styles.cardInner} style={{ textDecoration: 'none' }}>
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
              </a>
            </FlashlightCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
