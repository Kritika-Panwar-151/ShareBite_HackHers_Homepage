# How to Edit Any Part of ShareBite Safely

Every element of this homepage is **completely isolated** using React components + **Scoped CSS Modules (`.module.css`)** + a centralized content file. Editing one section will **never** break or shift any other section!

---

## 1. Change Text, Stats, Credentials, or Links (No Layout Code Needed)
- **`src/data/siteContent.js`** — Edit headlines, problem stats, solution cards, 5-step flow, tech stack items, key features (5 km radius), projected impact metrics, Donor/NGO sample credentials, Vercel link, or footer details.

---

## 2. Change Brand Colors or Fonts Globally
- **`src/styles/theme.css`** — Edit the `:root` variables (`--brand-emerald`, `--brand-terracotta`, `--bg-cream`, etc.).

---

## 3. Edit Any Individual Section Independently
Each section + the main-ground living neighbourhood has its **own folder** with isolated styles:

| Section | Component File | Scoped Styles File |
| :--- | :--- | :--- |
| **Main-Ground Living Neighbourhood** | `src/components/neighbourhood/NeighbourhoodBackground.jsx` | `NeighbourhoodBackground.module.css` |
| **Top Navbar** | `src/components/navbar/Navbar.jsx` | `Navbar.module.css` |
| **1. Hero + YouTube-Style Video Player** | `src/components/hero/HeroSection.jsx` | `HeroSection.module.css` |
| **2. The Problem** | `src/components/problem/ProblemSection.jsx` | `ProblemSection.module.css` |
| **3. Our Solution** | `src/components/solution/SolutionSection.jsx` | `SolutionSection.module.css` |
| **4. How It Works** | `src/components/howItWorks/HowItWorksSection.jsx` | `HowItWorksSection.module.css` |
| **5. Tech Stack** | `src/components/techStack/TechStackSection.jsx` | `TechStackSection.module.css` |
| **6. Key Features (5 km Freshness)** | `src/components/features/FeaturesSection.jsx` | `FeaturesSection.module.css` |
| **7. Projected / Predicted Impact** | `src/components/impact/ImpactSection.jsx` | `ImpactSection.module.css` |
| **8. Join CTA + Vercel Link + Phone App** | `src/components/cta/LiveAppCtaSection.jsx` | `LiveAppCtaSection.module.css` |
| **9. Footer** | `src/components/footer/FooterSection.jsx` | `FooterSection.module.css` |

---

## 4. Run Locally & Deploy to Vercel / Render
```bash
npm install
npm run dev      # Start local dev server
npm run build    # Production build into /dist
```
- **Vercel / Render:** Push this repository to GitHub and import into Vercel (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`). `vercel.json` is already included!
