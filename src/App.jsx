import React from 'react';
import NeighbourhoodBackground from './components/neighbourhood/NeighbourhoodBackground';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import ProblemSection from './components/problem/ProblemSection';
import SolutionSection from './components/solution/SolutionSection';
import HowItWorksSection from './components/howItWorks/HowItWorksSection';
import TechStackSection from './components/techStack/TechStackSection';
import FeaturesSection from './components/features/FeaturesSection';
import ImpactSection from './components/impact/ImpactSection';
import LiveAppCtaSection from './components/cta/LiveAppCtaSection';
import FooterSection from './components/footer/FooterSection';
import styles from './App.module.css';

/**
 * ============================================================================
 * SHAREBITE ONE-PAGE HOMEPAGE (src/App.jsx)
 * ============================================================================
 * Modular Architecture:
 * - Each section is a standalone component with its own scoped .module.css
 * - Edit any single section file (or src/data/siteContent.js) without
 *   affecting any other section!
 * ============================================================================
 */
export default function App() {
  return (
    <div className={styles.appShell}>
      {/* Main-Ground Illustrated Neighbourhood (Winding roads + Donor/NGO/In-Need + live scooters) */}
      <NeighbourhoodBackground />

      {/* Foreground Modular Page Sections */}
      <div className={styles.foreground}>
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <TechStackSection />
          <FeaturesSection />
          <ImpactSection />
          <LiveAppCtaSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
