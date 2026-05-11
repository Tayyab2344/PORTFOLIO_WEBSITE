"use client";

import styles from "./FlagshipSystem.module.css";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";
const stats = [
  { value: "4+", label: "User Roles" },
  { value: "AI", label: "Classification" },
  { value: "Real-Time", label: "Pickup System" },
  { value: "Digital", label: "Marketplace" },
];

export default function FlagshipSystem() {
  return (
    <section className={`section`}>
      <div className={styles.fullWidth}>
        <div className={styles.glowOrb} />
        <div className={`container ${styles.inner}`}>
          <ScrollReveal>
            <span className="section-label">Product Spotlight</span>
          </ScrollReveal>

          <div className={styles.card}>
            {/* Left: Content */}
            <div className={styles.content}>
              <ScrollReveal delay={100}>
                <h2 className={styles.title}>
                  RecyConnect &ndash; AI Powered Recycling Marketplace
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className={styles.description}>
                  Transforming waste management into a smart digital ecosystem. A platform that connects households, collectors, warehouses, and companies into a unified recycling ecosystem. It enables users to sell recyclable materials, request doorstep pickups, and use AI-based classification to identify waste, while ensuring transparency through digital transactions and eco-rewards.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className={styles.metrics}>
                  {stats.map((s, i) => (
                    <div key={i} className={styles.metric}>
                      <span className={styles.metricValue}>{s.value}</span>
                      <span className={styles.metricLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className={styles.features}>
                  {[
                    "AI Waste Detection",
                    "Smart Pickup System",
                    "Marketplace Platform",
                    "Eco Rewards",
                    "Role-Based Access"
                  ].map((f) => (
                    <span key={f} className={styles.featureItem}>
                      {f}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <MagneticButton className={`glow-btn ${styles.ctaBtn}`} href="https://recyconnect.ranatayyab.dev/" target="_blank">
                  Explore RecyConnect
                </MagneticButton>
              </ScrollReveal>
            </div>

            {/* Right: Product Mockup */}
            <div className={styles.visual}>
              <ScrollReveal delay={300} className={styles.diagramWrapper}>
                <motion.div 
                  className={styles.mockupWrapper}
                  initial={{ rotateY: 25, rotateX: 5, scale: 0.9, opacity: 0 }}
                  whileInView={{ rotateY: -10, rotateX: 5, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Phone Bezel / Notch */}
                  <div className={styles.phoneNotch}></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                    alt="AI Mobile App Mockup" 
                    className={styles.mockupImage} 
                  />
                  <div className={styles.mockupGlow} />
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
