import React, { useState } from 'react';
import { HeartHandshake, Menu, X, Smartphone } from 'lucide-react';
import { NAV_LINKS, SITE_META } from '../../data/siteContent';
import styles from './Navbar.module.css';

/**
 * ============================================================================
 * NAVBAR COMPONENT (src/components/navbar/Navbar.jsx)
 * ============================================================================
 * Self-contained floating navigation header with mobile menu drawer.
 * ============================================================================
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="sb-container">
        <nav className={styles.navBar}>
          <a href="#top" className={styles.brand}>
            <span className={styles.logoMark}>
              <HeartHandshake size={20} />
            </span>
            <div className={styles.brandText}>
              <span className={styles.brandName}>{SITE_META.brandName}</span>
              <span className={styles.brandSub}>Surplus Food Bridge</span>
            </div>
          </a>

          <div className={styles.desktopLinks}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.actions}>
            <a href="#live-app" className={styles.tryBtn}>
              <Smartphone size={16} />
              <span>Try Live App</span>
            </a>

            <button
              type="button"
              className={styles.mobileToggle}
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className={styles.mobileDrawer}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#live-app"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              Try Live App & Demo Logins →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
