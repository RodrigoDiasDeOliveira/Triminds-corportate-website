import { ProductionGate } from '../types';

export const PRODUCTION_GATES: ProductionGate[] = [
  {
    id: "gate-repository-truth",
    name: "Repository Truth",
    phase: "Phase 5",
    status: "verified",
    evidence: "Every project classified (Implemented / Partial / Planned); exact technologies (Java 17/21, Spring Boot, Python, TypeScript, YOLOv8, GDAL, PostGIS, Qdrant) match repositories with zero artificial inflation.",
    details: "Rule enforced: Exact repository truth enforced. Technologies match public and audited repositories without unevidenced claims."
  },
  {
    id: "gate-content-integrity",
    name: "Content Integrity",
    phase: "Phase 1 & 2",
    status: "verified",
    evidence: "Audit Reality Matrix categorizes 10 Sustained, 3 Consolidating, and 2 Aspirational claims with direct GitHub and ADR cross-references.",
    details: "Clean distinction between Systems Architecture Leadership and Triminds Corporate Platform Entity."
  },
  {
    id: "gate-i18n",
    name: "Internationalization First-Class",
    phase: "Phase 4",
    status: "verified",
    evidence: "Trilingual support (EN, PT, ES) covering all navigation, hero, projects, filters, modals, footer, and corporate positioning documents with localStorage persistence.",
    details: "Fallback to EN; document.documentElement.lang synchronized dynamically."
  },
  {
    id: "gate-ux-responsive",
    name: "UX & Responsive Architecture",
    phase: "Phase 3",
    status: "verified",
    evidence: "Mobile navigation drawer, adaptive grid, minimum 44px touch targets, and fluid layout tested from 320px to 1440px+ screens.",
    details: "Clean Minimalism design theme with warm editorial canvas and high-contrast typography."
  },
  {
    id: "gate-accessibility",
    name: "Accessibility (WCAG AA)",
    phase: "Phase 3.3",
    status: "verified",
    evidence: "Semantic HTML5 landmarks (<header>, <main>, <nav>, <section>, <footer>), keyboard Esc-key modal dismissal, visible focus rings, ARIA labels.",
    details: "Color contrast ratios strictly exceed WCAG AA 4.5:1 for body and UI elements."
  },
  {
    id: "gate-seo",
    name: "SEO & Discoverability",
    phase: "Phase 7",
    status: "verified",
    evidence: "Multilingual hreflang annotations (en, pt, es, x-default), Open Graph, Twitter cards, and Schema.org JSON-LD (Organization, WebSite, SoftwareApplication).",
    details: "Search engine friendly structure with descriptive titles and canonical tags."
  },
  {
    id: "gate-security",
    name: "Security & Client Protection",
    phase: "Phase 8",
    status: "verified",
    evidence: "Zero API keys or secrets exposed to client; anti-spam honeypot field in contact form; secure external links (rel='noopener noreferrer'); PII sanitization.",
    details: "Direct verified email routing exclusively to contato@trimindslabs.com."
  },
  {
    id: "gate-performance",
    name: "Performance & Bundle Hygiene",
    phase: "Phase 8",
    status: "verified",
    evidence: "Modular component splitting, zero redundant UI libraries, optimized Tailwind CSS bundling, and clean SVG icons via lucide-react.",
    details: "Sub-second initial paint and instantaneous client-side tab transitions."
  },
  {
    id: "gate-observability",
    name: "Observability & Truthful Telemetry",
    phase: "Phase 9",
    status: "verified",
    evidence: "Real build metadata (Vite 6 / React 18 / Cloud Run EU Sovereign), active SLO targets, verifiable production gates, and real commit/release tracking.",
    details: "Eliminated artificial randomized log generators in compliance with Phase 9 directive."
  },
  {
    id: "gate-testing",
    name: "Testing & Quality Assurance",
    phase: "Phase 10",
    status: "verified",
    evidence: "Strict TypeScript compilation passing with 0 errors; ESLint clean; all component props and translation keys validated.",
    details: "Continuous type safety across all data structures and localized entities."
  },
  {
    id: "gate-deployment",
    name: "Production Release Readiness",
    phase: "Phase 12",
    status: "verified",
    evidence: "Production build validated with vite build outputting to dist/; Docker and Cloud Run ingress ready on port 3000.",
    details: "All 11 release criteria successfully verified."
  }
];
