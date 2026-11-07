import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { PROBLEM_CONTENT } from '../../data/siteContent';
import styles from './ProblemSection.module.css';

/**
 * ============================================================================
 * SECTION 2: THE PROBLEM (src/components/problem/ProblemSection.jsx)
 * ============================================================================
 * Spaced individual cards so the living neighbourhood roads & riders remain
 * clearly visible in the open spaces between cards!
 * ============================================================================
 */
export default function ProblemSection() {
  return (
    <section id="problem" className={styles.section}>
      <div className="sb-container">
        <div className={styles.headerCard}>
          <span className={styles.eyebrow}>{PROBLEM_CONTENT.eyebrow}</span>
          <h2 className={styles.title}>{PROBLEM_CONTENT.title}</h2>
          <p className={styles.subtitle}>{PROBLEM_CONTENT.subtitle}</p>
        </div>

        {/* Global & Local Waste Statistics */}
        <div className={styles.statsGrid}>
          {PROBLEM_CONTENT.stats.map((stat, idx) => (
            <div key={idx} className={`${styles.statCard} ${styles[`tone_${stat.tone}`]}`}>
              <div className={styles.statTop}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statUnit}>{stat.unit}</span>
              </div>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3 Core Bottlenecks */}
        <div className={styles.painGrid}>
          {PROBLEM_CONTENT.painPoints.map((item, idx) => (
            <div key={idx} className={styles.painCard}>
              <div className={styles.painIcon}>
                <AlertTriangle size={18} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
