import styles from './Footer.module.css';

const footerLinks = {
  navigation: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Systems", href: "#systems" },
    { label: "Approach", href: "#approach" },
    { label: "Notes", href: "#notes" },
  ],
  connect: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Email", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>&lt;/&gt;</span>
            <span className={styles.logoText}>Tayyab.dev</span>
          </div>
          <p className={styles.tagline}>
            Engineering systems for scale, intelligence, and impact.
          </p>
        </div>

        <div className={styles.linksGroup}>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul>
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul>
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Tayyab.dev. All rights reserved.
          </p>
          <p className={styles.craft}>
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
