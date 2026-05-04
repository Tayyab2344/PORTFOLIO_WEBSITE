"use client";

import styles from "./FlagshipSystem.module.css";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";
import { Home, BrainCircuit, Store, Truck, Warehouse, Gift } from "lucide-react";

const stats = [
  { value: "4+", label: "User Roles" },
  { value: "AI", label: "Classification" },
  { value: "Real-Time", label: "Pickup System" },
  { value: "Digital", label: "Marketplace" },
];

const nodes = [
  { id: "house", label: "Household", icon: Home, x: 20, y: 25 },
  { id: "ai", label: "AI Classifier", icon: BrainCircuit, x: 50, y: 15 },
  { id: "market", label: "Marketplace", icon: Store, x: 80, y: 25 },
  { id: "collector", label: "Collector", icon: Truck, x: 80, y: 65 },
  { id: "warehouse", label: "Warehouse/Co.", icon: Warehouse, x: 50, y: 75 },
  { id: "rewards", label: "Payments/Rewards", icon: Gift, x: 20, y: 65 },
];

const edges = [
  ["house", "ai"],
  ["ai", "market"],
  ["market", "collector"],
  ["collector", "warehouse"],
  ["warehouse", "rewards"],
  ["rewards", "house"],
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
                <MagneticButton className={`glow-btn ${styles.ctaBtn}`} href="https://recyconnect.com" target="_blank">
                  Explore RecyConnect
                </MagneticButton>
              </ScrollReveal>
            </div>

            {/* Right: Node-link system diagram */}
            <div className={styles.visual}>
              <ScrollReveal delay={300}>
                <div className={styles.diagram}>
                  <svg
                    className={styles.diagramSvg}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Edges */}
                    {edges.map(([from, to], i) => {
                      const f = nodes.find((n) => n.id === from)!;
                      const t = nodes.find((n) => n.id === to)!;
                      return (
                        <motion.line
                          key={i}
                          x1={f.x}
                          y1={f.y}
                          x2={t.x}
                          y2={t.y}
                          stroke="url(#lineGradient)"
                          strokeWidth="0.4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: 0.8 + i * 0.15,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      );
                    })}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(124, 58, 237, 0.4)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Nodes */}
                  {nodes.map((node, i) => (
                    <motion.div
                      key={node.id}
                      className={styles.node}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      initial={{ scale: 0, opacity: 0, y: 10 }}
                      whileInView={{ scale: 1, opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <motion.div 
                        className={styles.nodeIconWrap}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                      >
                        <node.icon size={16} strokeWidth={1.5} className={styles.nodeIcon} />
                      </motion.div>
                      <span className={styles.nodeLabel}>{node.label}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
