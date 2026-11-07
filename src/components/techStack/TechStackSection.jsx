import React from 'react';
import { Smartphone, Lock, Database, Image, Map } from 'lucide-react';
import { TECH_STACK_ITEMS } from '../../data/siteContent';
import styles from './TechStackSection.module.css';

const TECH_ICONS = [Smartphone, Lock, Database, Image, Map];

/**
 * ============================================================================
 * TECH STACK SECTION (src/components/techStack/TechStackSection.jsx)
 * ============================================================================
 * Placed right after "How It Works" — highlights Flutter, Dart, Firebase Auth,
 * Cloud Firestore, Cloudinary, and Geolocation API!
 * ============================================================================
 */
export default function TechStackSection() {
  return (
    <section id="tech-stack" className={styles.section}>
      <div className="sb-container">
        <div className={styles.headerCard}>
          <span className={styles.eyebrow}>04 • Technology Stack</span>
          <h2 className={styles.title}>Powered by Modern Mobile &amp; Real-Time Cloud Tech</h2>
          <p className={styles.subtitle}>
            Engineered for instant state synchronization, secure user verification, cloud media
            handling, and accurate neighbourhood routing.
          </p>
        </div>

        <div className={styles.techGrid}>
          {TECH_STACK_ITEMS.map((item, idx) => {
            const Icon = TECH_ICONS[idx] || Smartphone;
            return (
              <div key={item.name} className={`${styles.techCard} ${styles[`accent_${item.accent}`]}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.iconWrap}>
                    <Icon size={19} />
                  </span>
                  <span className={styles.categoryTag}>{item.category}</span>
                </div>
                <h3 className={styles.techName}>{item.name}</h3>
                <p className={styles.techDesc}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
