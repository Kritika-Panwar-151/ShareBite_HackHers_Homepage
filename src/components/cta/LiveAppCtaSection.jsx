import React, { useState } from 'react';
import {
  Copy,
  Check,
  ExternalLink,
  HeartHandshake,
  Users,
  Bike,
  Smartphone,
  Github,
} from 'lucide-react';
import { DEMO_ACCOUNTS, SITE_META } from '../../data/siteContent';
import styles from './LiveAppCtaSection.module.css';

/**
 * ============================================================================
 * CALL TO ACTION + LIVE APP PLAYGROUND (LiveAppCtaSection.jsx)
 * ============================================================================
 * Features prominent Vercel mobile link + "Open on your phone & use passwords"
 * instruction + 1-click copy Donor/NGO accounts + embedded live phone preview!
 * ============================================================================
 */
export default function LiveAppCtaSection() {
  const [copiedKey, setCopiedKey] = useState('');
  const [activeJoinRole, setActiveJoinRole] = useState('donate');

  const copyValue = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 1800);
    } catch {
      setCopiedKey(key);
    }
  };

  const roleDetails = {
    donate: {
      title: 'Donate Surplus Food',
      desc: 'Sign in as a Donor to post surplus meals, upload food photos, and share your pickup OTP with a nearby NGO.',
      ctaText: 'Open Donor Portal Live ↗',
    },
    ngo: {
      title: 'Partner With ShareBite as an NGO',
      desc: 'Log in to the NGO Partner Portal to view donations within 5 km, navigate live via Geolocation API, and verify pickups.',
      ctaText: 'Open NGO Partner Portal ↗',
    },
    volunteer: {
      title: 'Volunteer for Local Pickups',
      desc: 'Join neighbourhood collection drives to help partner NGOs deliver fresh surplus meals quickly to people in need.',
      ctaText: 'Try Live Pickup Flow ↗',
    },
  };

  return (
    <section id="live-app" className={styles.section}>
      <div className="sb-container">
        <div className={styles.ctaBanner}>
          <div className={styles.leftColumn}>
            <span className={styles.eyebrow}>07 • Join the Movement &amp; Test Live</span>
            <h2 className={styles.title}>
              Donate Food, Partner as an NGO, or Test ShareBite Live Right Now
            </h2>
            <p className={styles.subtitle}>
              Experience the full Donor ↔ NGO workflow directly on your phone or inside the live
              preview on the right using the sample credentials below.
            </p>

            {/* PROMINENT VERCEL PHONE LINK CALLOUT */}
            <div className={styles.vercelCallout}>
              <div className={styles.vercelTop}>
                <Smartphone size={18} className={styles.phoneIcon} />
                <strong>Open on Your Phone &amp; Sign In With the Passwords Below:</strong>
              </div>
              <div className={styles.vercelUrlRow}>
                <a
                  href={SITE_META.liveAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.vercelLink}
                >
                  {SITE_META.liveAppUrl}
                  <ExternalLink size={15} />
                </a>
                <button
                  type="button"
                  onClick={() => copyValue(SITE_META.liveAppUrl, 'vercel-url')}
                  className={styles.copyUrlBtn}
                >
                  {copiedKey === 'vercel-url' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedKey === 'vercel-url' ? 'Link Copied!' : 'Copy Link'}</span>
                </button>
              </div>

              {/* GitHub Repository Links */}
              <div className={styles.githubLinksRow}>
                {SITE_META.githubRepos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.githubChip}
                  >
                    <Github size={15} />
                    <span>
                      <strong>{repo.label}:</strong> {repo.shortName}
                    </span>
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* 3 CTA Role Tabs */}
            <div className={styles.roleTabs}>
              <button
                type="button"
                onClick={() => setActiveJoinRole('donate')}
                className={`${styles.roleTab} ${
                  activeJoinRole === 'donate' ? styles.roleTabActive : ''
                }`}
              >
                <HeartHandshake size={16} /> Donate Food
              </button>
              <button
                type="button"
                onClick={() => setActiveJoinRole('ngo')}
                className={`${styles.roleTab} ${
                  activeJoinRole === 'ngo' ? styles.roleTabActive : ''
                }`}
              >
                <Users size={16} /> Partner as NGO
              </button>
              <button
                type="button"
                onClick={() => setActiveJoinRole('volunteer')}
                className={`${styles.roleTab} ${
                  activeJoinRole === 'volunteer' ? styles.roleTabActive : ''
                }`}
              >
                <Bike size={16} /> Volunteer
              </button>
            </div>

            <div className={styles.roleActionBox}>
              <h3>{roleDetails[activeJoinRole].title}</h3>
              <p>{roleDetails[activeJoinRole].desc}</p>
              <a
                href={SITE_META.liveAppUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.launchFullBtn}
              >
                <span>{roleDetails[activeJoinRole].ctaText}</span>
              </a>
            </div>

            {/* Sample Donor & NGO Login Credentials */}
            <div className={styles.credentialsGrid}>
              {[
                { key: 'donor', data: DEMO_ACCOUNTS.donor },
                { key: 'ngo', data: DEMO_ACCOUNTS.ngo },
              ].map(({ key, data }) => (
                <div
                  key={key}
                  className={`${styles.credCard} ${styles[`cred_${data.accent}`]}`}
                >
                  <div className={styles.credHeader}>
                    <span className={styles.credBadge}>{data.badge}</span>
                    <span className={styles.credName}>{data.personName}</span>
                  </div>

                  <div className={styles.credField}>
                    <div>
                      <small>Email</small>
                      <code>{data.email}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyValue(data.email, `${key}-email`)}
                      className={styles.copyBtn}
                    >
                      {copiedKey === `${key}-email` ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedKey === `${key}-email` ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className={styles.credField}>
                    <div>
                      <small>Password</small>
                      <code>{data.password}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyValue(data.password, `${key}-pass`)}
                      className={styles.copyBtn}
                    >
                      {copiedKey === `${key}-pass` ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedKey === `${key}-pass` ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <p className={styles.credHint}>{data.hint}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Embedded Phone Preview (kept as requested!) */}
          <div className={styles.phoneColumn}>
            <div className={styles.phoneTopBar}>
              <span className={styles.liveIndicator}>● Live Mobile Preview</span>
              <a
                href={SITE_META.liveAppUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.openTabLink}
              >
                Open Fullscreen <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.phoneBezel}>
              <div className={styles.phoneNotch} />
              <iframe
                src={SITE_META.liveAppUrl}
                title="ShareBite Live Mobile Application"
                className={styles.phoneIframe}
                loading="lazy"
              />
            </div>

            <p className={styles.phoneCaption}>
              Open <strong>{SITE_META.liveAppUrl}</strong> on your phone or sign in directly above
              with the Donor / NGO passwords!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
