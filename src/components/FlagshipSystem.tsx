import styles from './FlagshipSystem.module.css';
import ScrollReveal from './ScrollReveal';

export default function FlagshipSystem() {
  return (
    <section className={`section container`}>
      <ScrollReveal>
        <h2 className={styles.sectionTitle}>Flagship System</h2>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge}>System Spotlight</div>
            <h3 className={styles.title}>AI Complaint Intelligence Platform</h3>
            <p className={styles.description}>
              An enterprise-grade intelligence engine designed to aggregate, analyze, and resolve customer complaints at scale. 
              Built with robust backend architecture and advanced natural language processing to turn unstructured feedback into actionable insights.
            </p>
            <div className={styles.features}>
              <span className={styles.featureItem}>NLP Analysis</span>
              <span className={styles.featureItem}>Microservices</span>
              <span className={styles.featureItem}>Real-time Processing</span>
            </div>
            <button className={`glow-btn ${styles.ctaBtn}`}>Explore System</button>
          </div>
          
          <div className={styles.visual}>
            <div className={styles.mockupBg}>
              <div className={styles.mockupLines}>
                <div className={styles.line} style={{width: '60%'}}></div>
                <div className={styles.line} style={{width: '85%'}}></div>
                <div className={styles.line} style={{width: '40%'}}></div>
                <div className={styles.line} style={{width: '75%', marginTop: '20px'}}></div>
                <div className={styles.line} style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
