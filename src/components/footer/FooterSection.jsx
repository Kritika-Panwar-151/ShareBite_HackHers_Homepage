import React from 'react';
import { HeartHandshake, Mail, MapPin, ExternalLink } from 'lucide-react';
import { FOOTER_CONTENT, NAV_LINKS, SITE_META } from '../../data/siteContent';
import styles from './FooterSection.module.css';

/**
 * ============================================================================
 * SECTION 9: FOOTER (src/components/footer/FooterSection.jsx)
 * ============================================================================
 * Essential navigation, tech stack badges, contact info & team credits.
 * ============================================================================
 */
export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className="sb-container">
        <div className={styles.footerCard}>
          <div className={styles.topGrid}>
            <div className={styles.brandCol}>
              <div className={styles.brandRow}>
                <span className={styles.logoMark}>
                  <HeartHandshake size={20} />
                </span>
                <span className={styles.brandName}>{SITE_META.brandName}</span>
              </div>
              <p className={styles.mission}>{FOOTER_CONTENT.mission}</p>
              <div className={styles.techRow}>
                {FOOTER_CONTENT.techStack.map((tech) => (
                  <span key={tech} className={styles.techChip}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.linksCol}>
              <h4>Explore Page</h4>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#live-app">Live App & Demo Accounts</a>
                </li>
              </ul>
            </div>

            <div className={styles.contactCol}>
              <h4>Connect &amp; Support</h4>
              {FOOTER_CONTENT.contact.emails.map((emailAddr) => (
                <a
                  key={emailAddr}
                  href={`mailto:${emailAddr}`}
                  className={styles.contactItem}
                >
                  <Mail size={15} />
                  <span>{emailAddr}</span>
                </a>
              ))}
              <p className={styles.contactItem}>
                <MapPin size={15} />
                <span>{FOOTER_CONTENT.contact.location}</span>
              </p>
              <a
                href={SITE_META.liveAppUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.appLink}
              >
                Open ShareBite Mobile Web App <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <span>
              © {new Date().getFullYear()} {SITE_META.brandName} — Bridging Surplus Food to Hungry
              Hearts.
            </span>
            <span className={styles.teamCredits}>
              Crafted by {FOOTER_CONTENT.teamName} • {FOOTER_CONTENT.team.join(' & ')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
