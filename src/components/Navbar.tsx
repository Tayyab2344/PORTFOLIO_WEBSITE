"use client";

import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Systems", href: "#systems" },
  { label: "Approach", href: "#approach" },
  { label: "Notes", href: "#notes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>&lt;/&gt;</span>
          <span className={styles.logoText}>devkit</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`glow-btn ${styles.contactBtn}`}>
          Let&apos;s Talk
        </a>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className={`glow-btn ${styles.mobileCta}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
