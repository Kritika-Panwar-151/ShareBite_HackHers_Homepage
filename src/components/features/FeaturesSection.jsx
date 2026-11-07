import React from 'react';
import { Check } from 'lucide-react';
import { KEY_FEATURES } from '../../data/siteContent';
import styles from './FeaturesSection.module.css';

/**
 * ============================================================================
 * SECTION 5: KEY FEATURES (src/components/features/FeaturesSection.jsx)
 * ============================================================================
 * Clean Bento Grid highlighting Food Donation (5 km radius freshness matching),
 * NGO Partnerships, Pickup Coordination, and Community Participation.
 * ============================================================================
 */
export default function FeaturesSection() {
  return (
    <section id="features" className={styles.section}>
      <div className="sb-container">
        <div className={styles.headerCard}>
          <span className={styles.eyebrow}>05 • Key Features</span>
          <h2 className={styles.title}>Core Capabilities Built for Freshness &amp; Trust</h2>
          <p className={styles.subtitle}>
            Prioritizing nearby NGOs within a 5 km radius first so surplus food is collected rapidly
            and reaches people in need while still fresh.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {KEY_FEATURES.map((feat) => (
            <div key={feat.id} className={`${styles.featureCard} ${styles[`accent_${feat.accent}`]}`}>
              <div className={styles.cardTop}>
                <span className={styles.categoryPill}>{feat.category}</span>
              </div>

              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.description}</p>

              <ul className={styles.checkList}>
                {feat.highlights.map((pt, idx) => (
                  <li key={idx}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
