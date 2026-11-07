import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { IMPACT_METRICS } from '../../data/siteContent';
import styles from './ImpactSection.module.css';

/**
 * ============================================================================
 * SECTION 6: PROJECTED IMPACT SECTION (src/components/impact/ImpactSection.jsx)
 * ============================================================================
 * Clearly communicates Predicted / Projected Outcomes when ShareBite is adopted
 * across local neighbourhoods (honestly framed as projected impact, not fake live stats).
 * ============================================================================
 */
export default function ImpactSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className={styles.section}>
      <div className="sb-container">
        <div className={styles.headerCard}>
          <div className={styles.projectedPill}>
            <TrendingUp size={15} />
            <span>06 • Projected &amp; Predicted Impact</span>
          </div>
          <h2 className={styles.title}>What ShareBite Is Predicted to Achieve at Scale</h2>
          <p className={styles.subtitle}>
            When adopted by neighbourhood donors and local NGOs, ShareBite is projected to transform
            last-minute surplus food from landfill waste into reliable daily nutrition.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {IMPACT_METRICS.map((metric, idx) => (
            <div key={idx} className={styles.metricCard}>
              <span className={styles.metricTag}>{metric.badge}</span>
              <div className={styles.numberRow}>{metric.value}</div>
              <h3 className={styles.metricLabel}>{metric.label}</h3>
              <p className={styles.metricSub}>{metric.subtext}</p>

              <div className={styles.progressTrack}>
                <div
                  className={`${styles.progressFill} ${styles[`fill_${metric.accent}`]}`}
                  style={{ width: visible ? `${metric.progress}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
