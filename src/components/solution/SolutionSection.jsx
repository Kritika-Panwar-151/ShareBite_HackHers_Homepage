import React from 'react';
import { ArrowRight, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { SOLUTION_CONTENT } from '../../data/siteContent';
import styles from './SolutionSection.module.css';

const PILLAR_ICONS = [HeartHandshake, ShieldCheck, MapPin];

/**
 * ============================================================================
 * SECTION 3: OUR SOLUTION (src/components/solution/SolutionSection.jsx)
 * ============================================================================
 * Cleanly and directly explains how ShareBite bridges Donors, NGOs, and
 * People in Need, with open gaps so the living neighbourhood moves right around!
 * ============================================================================
 */
export default function SolutionSection() {
  return (
    <section id="solution" className={styles.section}>
      <div className="sb-container">
        <div className={styles.headerCard}>
          <span className={styles.eyebrow}>{SOLUTION_CONTENT.eyebrow}</span>
          <h2 className={styles.title}>{SOLUTION_CONTENT.title}</h2>
          <p className={styles.subtitle}>{SOLUTION_CONTENT.subtitle}</p>
        </div>

        {/* Visual Donor -> ShareBite -> NGO -> People in Need Bridge */}
        <div className={styles.pillarsGrid}>
          {SOLUTION_CONTENT.pillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx] || HeartHandshake;
            return (
              <div key={idx} className={`${styles.pillarCard} ${styles[`border_${pillar.color}`]}`}>
                <div className={styles.iconRow}>
                  <span className={`${styles.iconBox} ${styles[`bg_${pillar.color}`]}`}>
                    <IconComponent size={20} />
                  </span>
                  <span className={styles.pillarTag}>{pillar.tag}</span>
                </div>
                <h3>{pillar.role}</h3>
                <p>{pillar.desc}</p>
                {idx < 2 && (
                  <span className={styles.connectorArrow} aria-hidden="true">
                    <ArrowRight size={18} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
