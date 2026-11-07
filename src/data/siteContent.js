/**
 * ============================================================================
 * CENTRAL CONTENT CONFIG (src/data/siteContent.js)
 * ============================================================================
 * Edit ANY text, number, link, credential, step, tech stack item, or feature
 * right here! Changing values here updates only that specific piece safely.
 * ============================================================================
 */

export const SITE_META = {
  brandName: 'ShareBite',
  tagline: 'Bridging Surplus Food from Donors to People in Need',
  liveAppUrl: 'https://sharebitecodehers.vercel.app/',
  demoVideoUrl: '/SHAREBITE.mp4',
  githubRepos: [
    {
      label: 'Homepage GitHub',
      shortName: 'ShareBite_HackHers_Homepage',
      url: 'https://github.com/Kritika-Panwar-151/ShareBite_HackHers_Homepage.git',
    },
    {
      label: 'Mobile App GitHub',
      shortName: 'ShareBite_CodeHers',
      url: 'https://github.com/Kritika-Panwar-151/ShareBite_CodeHers.git',
    },
  ],
};

export const DEMO_ACCOUNTS = {
  donor: {
    roleLabel: 'Sample Donor Account',
    badge: 'Donor Login',
    personName: 'Donor Account (Priya)',
    email: 'Priya@gmail.com',
    password: 'Priyadonor',
    accent: 'emerald',
    hint: 'Create food donation requests, upload meal photos & share pickup OTP.',
  },
  ngo: {
    roleLabel: 'Sample NGO Partner Account',
    badge: 'NGO Partner Login',
    personName: 'Helping Hands NGO',
    email: 'info@helpinghandsngo.org',
    password: 'helpinghands',
    accent: 'terracotta',
    hint: 'View nearby donations within 5 km, navigate live & verify OTP.',
  },
};

export const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Key Features', href: '#features' },
  { label: 'Projected Impact', href: '#impact' },
];

export const HERO_CONTENT = {
  eyebrow: 'Surplus Food Donation Management System',
  headlinePart1: 'Every Extra Meal Belongs on a Plate,',
  headlineHighlight: 'Not',
  headlinePart2: 'in Waste.',
  subheadline:
    'Every day, large quantities of fresh edible food are discarded while millions still face hunger—simply because there is no fast, trusted way to coordinate redistribution. ShareBite bridges this gap by directly connecting food donors with verified NGOs in real time.',
  primaryCta: 'Test Live App & Logins',
  secondaryCta: 'See How It Works',
};

export const PROBLEM_CONTENT = {
  eyebrow: '01 • The Problem',
  title: 'Massive Food Wastage Alongside Persistent Hunger.',
  subtitle:
    'Nearly one-third of all food produced globally is lost or wasted while millions of people struggle with daily food insecurity. The biggest barrier is not food shortage—it is the lack of a reliable bridge between donors who have surplus food and organizations serving the hungry.',
  stats: [
    {
      number: '1.05B',
      unit: 'Tonnes / Year',
      label: 'Edible food wasted globally every year while communities nearby face hunger (UNEP Report).',
      tone: 'terracotta',
    },
    {
      number: '132 kg',
      unit: 'Per Person',
      label: 'Average annual food waste generated per capita across households, events, and eateries.',
      tone: 'amber',
    },
    {
      number: 'Manual',
      unit: 'Coordination Gap',
      label: 'Relying on phone calls and informal contacts causes delays, spoilage, and missed donations.',
      tone: 'emerald',
    },
  ],
  painPoints: [
    {
      title: 'Food Spoils Before Pickup',
      desc: 'Cooked surplus food is highly perishable. Without instant local matching, meals lose freshness before a volunteer or charity can be reached.',
    },
    {
      title: 'No Real-Time Visibility',
      desc: 'Informal phone calls leave donors uncertain if anyone is coming and leave NGOs guessing exact food quantities and pickup locations.',
    },
    {
      title: 'Lack of Verification & Accountability',
      desc: 'Without verified NGO credentials, secure handover confirmation, and transparent records, both donors and charities hesitate to coordinate.',
    },
  ],
};

export const SOLUTION_CONTENT = {
  eyebrow: '02 • Our Solution',
  title: 'How ShareBite Connects Donors, NGOs & People in Need.',
  subtitle:
    'ShareBite replaces slow manual phone calls with a centralized, location-aware mobile platform—ensuring surplus food from any donor reaches nearby verified NGOs quickly, safely, and transparently.',
  pillars: [
    {
      role: 'Food Donors',
      tag: 'Individuals • Events • Kitchens',
      desc: 'Post surplus food details, upload real meal photos, and share auto-detected GPS pickup coordinates in seconds.',
      color: 'emerald',
    },
    {
      role: 'Verified NGOs',
      tag: '5 km Priority Radius',
      desc: 'Registered NGOs within a 5 km radius view nearby food requests first so pickups happen fast and freshness is preserved.',
      color: 'terracotta',
    },
    {
      role: 'People in Need',
      tag: 'Timely Redistribution',
      desc: 'Live Geolocation tracking and 4-digit OTP handover verification ensure safe, accountable meals reach communities warm.',
      color: 'amber',
    },
  ],
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Donor Posts Surplus Food',
    role: 'Donor',
    description:
      'Donor logs in, uploads a photo of the surplus food, enters quantity and landmark details, and auto-pins their GPS pickup address.',
    detailChip: 'Photo + Auto-GPS Location',
  },
  {
    step: '02',
    title: 'Nearby NGO Accepts (Within 5 km)',
    role: 'NGO Partner',
    description:
      'Verified NGOs within a 5 km radius see available donations with distance and donor details, and tap Accept to claim the pickup.',
    detailChip: 'Instant Push Notification',
  },
  {
    step: '03',
    title: 'Live Dual-Map Tracking',
    role: 'Live Transit',
    description:
      'NGO starts pickup. Both Donor and NGO track the live route, distance, and real-time ETA via Geolocation API, with one-tap phone call support.',
    detailChip: 'Real-Time Route & ETA',
  },
  {
    step: '04',
    title: '4-Digit OTP Handover',
    role: 'Verification',
    description:
      'Upon arrival at the donor’s doorstep, a unique 4-digit OTP is shown to the Donor and entered by the NGO to confirm secure collection.',
    detailChip: 'Tamper-Proof Handover',
  },
  {
    step: '05',
    title: 'Redistribution & Mutual Review',
    role: 'Accountability',
    description:
      'NGO distributes fresh meals to beneficiaries, and both Donor and NGO rate and review each other while storing full donation history.',
    detailChip: '2-Way Ratings & History',
  },
];

export const TECH_STACK_ITEMS = [
  {
    name: 'Flutter & Dart',
    category: 'Cross-Platform Mobile UI',
    description:
      'Powers smooth, responsive Donor and NGO Partner portals from a single unified mobile & web codebase.',
    accent: 'emerald',
  },
  {
    name: 'Firebase Authentication',
    category: 'Secure Role-Based Access',
    description:
      'Manages secure sign-up, login, and session protection separately for Food Donors and Verified NGOs.',
    accent: 'amber',
  },
  {
    name: 'Cloud Firestore',
    category: 'Real-Time NoSQL Database',
    description:
      'Synchronizes live donation states, 5 km radius listings, push status updates, OTP codes, and review history.',
    accent: 'terracotta',
  },
  {
    name: 'Cloudinary',
    category: 'Cloud Food Image Storage',
    description:
      'Stores and optimizes real food photos uploaded by donors so NGOs can inspect meals before accepting.',
    accent: 'emerald',
  },
  {
    name: 'Geolocation API',
    category: 'Live GPS & Navigation',
    description:
      'Handles automatic pickup coordinate detection, 5 km radius distance calculation, live route tracking, and real-time ETA.',
    accent: 'cocoa',
  },
];

export const KEY_FEATURES = [
  {
    id: 'donation',
    category: 'Food Donation',
    title: '5 km Hyper-Local Matching to Preserve Freshness',
    description:
      'Donors upload meal photos, quantities, and pickup landmarks in seconds. ShareBite prioritizes NGOs within a 5 km radius first so food is collected swiftly without compromising freshness.',
    highlights: [
      '5 km radius priority matching for freshness',
      'Cloudinary food photo upload',
      'Automatic Geolocation pickup detection',
    ],
    accent: 'emerald',
  },
  {
    id: 'ngo',
    category: 'NGO Partnerships',
    title: 'Dedicated Verified NGO Partner Portal',
    description:
      'Registered NGOs onboard with their official NGO Registration ID, browse nearby active donations, check donor ratings, and accept or manage pickups seamlessly.',
    highlights: [
      'NGO Registration ID screening',
      'Distance & donor rating preview',
      'One-tap Accept / Reject workflow',
    ],
    accent: 'terracotta',
  },
  {
    id: 'pickup',
    category: 'Pickup Coordination',
    title: 'Live Dual-Map Tracking & Instant Call Support',
    description:
      'Eliminates coordination guesswork—donors watch the NGO partner approach in real time via Geolocation tracking while NGOs get live street navigation and direct calling.',
    highlights: [
      'Live distance & real-time ETA updates',
      'Step-by-step push notifications',
      'Direct Donor ↔ NGO phone call button',
    ],
    accent: 'amber',
  },
  {
    id: 'community',
    category: 'Community Participation',
    title: 'OTP-Verified Handovers & Mutual Trust Ratings',
    description:
      'Every donation closes with a secure 4-digit OTP confirmation at pickup, complete past-donation history logs, and two-way star ratings between donors and NGOs.',
    highlights: [
      'Secure 4-digit pickup OTP check',
      'Two-way Donor & NGO star reviews',
      'Transparent donation history records',
    ],
    accent: 'cocoa',
  },
];

export const IMPACT_METRICS = [
  {
    badge: 'Predicted Reach',
    value: '5 km',
    label: 'Hyper-Local Freshness Zone',
    subtext:
      'Predicted to cut transit delays drastically by matching donors with NGOs within a 5 km neighbourhood radius first.',
    progress: 92,
    accent: 'emerald',
  },
  {
    badge: 'Estimated Speed',
    value: '< 20 min',
    label: 'Projected Pickup Window',
    subtext:
      'Real-time push alerts and live GPS routing are predicted to replace slow manual calls with rapid doorstep collection.',
    progress: 86,
    accent: 'terracotta',
  },
  {
    badge: 'Projected Reduction',
    value: '70%+',
    label: 'Preventable Surplus Saved',
    subtext:
      'Predicted share of edible event and household surplus that can be redirected from landfills when local NGOs are one tap away.',
    progress: 74,
    accent: 'amber',
  },
  {
    badge: 'Built-In Trust',
    value: '100%',
    label: 'OTP-Verified Accountability',
    subtext:
      'Every pickup on the platform is designed to require 4-digit PIN verification and mutual review logging.',
    progress: 100,
    accent: 'emerald',
  },
];

export const FOOTER_CONTENT = {
  mission:
    'ShareBite is a surplus food donation management platform connecting food donors with verified nearby NGOs to reduce food wastage and fight hunger.',
  techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloudinary', 'Geolocation API'],
  contact: {
    emails: ['kritikapanwar.cs24@bmsce.ac.in'],
    location: 'B.M.S. College of Engineering, Bengaluru, Karnataka',
  },
  teamName: 'Team CodeHers',
  team: ['Kritika Panwar', 'Jayam Shanmukha Shivanvitha'],
};
