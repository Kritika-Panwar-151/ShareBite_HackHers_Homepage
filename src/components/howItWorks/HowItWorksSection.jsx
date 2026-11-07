import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../../data/siteContent';
import styles from './HowItWorksSection.module.css';

/**
 * ============================================================================
 * SECTION 4: HOW IT WORKS (src/components/howItWorks/HowItWorksSection.jsx)
 * ============================================================================
 * Clean 5-step donation workflow laid out as spaced cards over the living
 * neighbourhood ground (no OTP simulator widget).
 * ============================================================================
 */
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="sb-container">
        <div className={styles.headerCard}>
          <span className={styles.eyebrow}>03 • How It Works</span>
          <h2 className={styles.title}>Simple 5-Step Surplus Food Donation Flow</h2>
          <p className={styles.subtitle}>
            From posting surplus meals to OTP-verified pickup and delivery—every step is streamlined
            for speed, freshness, and transparency.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div key={item.step} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{item.step}</span>
                <span className={styles.roleBadge}>{item.role}</span>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.description}</p>
              <div className={styles.chipFooter}>{item.detailChip}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
