import { ProductionGate } from '../types';

export const PRODUCTION_GATES: ProductionGate[] = [
  {
    id: 'gate-repository-truth',
    name: 'Repository Truth',
    phase: 'Phase 5',
    status: 'in-progress',
    evidence: 'Project lifecycle is now separated from implementation status; Geo AI V4, Trusted Compliance and TLP are explicitly qualified from current repository evidence.',
    details: 'Remaining legacy case-study claims still require repository-by-repository reconciliation before this gate can be marked verified.'
  },
  {
    id: 'gate-content-integrity',
    name: 'Content Integrity',
    phase: 'Phase 1 & 2',
    status: 'in-progress',
    evidence: 'Unsupported hero metrics and absolute zero-hallucination claims were removed from the primary UI and replaced with evidence-qualified statements.',
    details: 'Legacy translated strings remain in the source catalogue but are overridden by evidence-safe values at runtime.'
  },
  {
    id: 'gate-i18n',
    name: 'Internationalization First-Class',
    phase: 'Phase 4',
    status: 'verified',
    evidence: 'EN, PT and ES remain supported with persistent language selection; evidence-sensitive strings now receive language-specific runtime overrides.',
    details: 'Language preference remains a client-side presentation concern; no locale is represented as a separate indexed URL without route evidence.'
  },
  {
    id: 'gate-ux-responsive',
    name: 'UX & Responsive Architecture',
    phase: 'Phase 3',
    status: 'verified',
    evidence: 'Existing responsive navigation, adaptive grids and modal interaction architecture preserved.',
    details: 'This refactor intentionally avoids visual redesign.'
  },
  {
    id: 'gate-accessibility',
    name: 'Accessibility',
    phase: 'Phase 3.3',
    status: 'in-progress',
    evidence: 'Semantic landmarks and keyboard modal dismissal are retained.',
    details: 'A fresh automated WCAG audit was not executed by this repository refactor, so no full compliance verdict is asserted.'
  },
  {
    id: 'gate-seo',
    name: 'SEO & Discoverability',
    phase: 'Phase 7',
    status: 'in-progress',
    evidence: 'Canonical, Open Graph and Schema.org URLs were aligned to trimindslabs.com.',
    details: 'The application is a multilingual SPA without verified /pt and /es routes; hreflang is therefore not asserted as separate indexable URLs.'
  },
  {
    id: 'gate-security',
    name: 'Security & Client Protection',
    phase: 'Phase 8',
    status: 'in-progress',
    evidence: 'The refactor removes operational credentials/unsupported secret claims from the primary public evidence layer.',
    details: 'A repository-wide secret scan and deployment-level security test still need to be executed before this gate is verified.'
  },
  {
    id: 'gate-performance',
    name: 'Performance & Bundle Hygiene',
    phase: 'Phase 8',
    status: 'pending',
    evidence: 'Component structure was preserved and no new runtime dependency was introduced.',
    details: 'No fresh production performance measurement is asserted.'
  },
  {
    id: 'gate-observability',
    name: 'Observability & Truthful Telemetry',
    phase: 'Phase 9',
    status: 'in-progress',
    evidence: 'The ticker already consumes Ecosystem Audit data and labels cached/source-offline states; production claims are no longer inferred from static UI metrics.',
    details: 'Real runtime telemetry and frontend presentation data still need an end-to-end deployment verification pass.'
  },
  {
    id: 'gate-testing',
    name: 'Testing & Quality Assurance',
    phase: 'Phase 10',
    status: 'pending',
    evidence: 'TypeScript data models and evidence overrides were updated consistently.',
    details: 'Build/lint/typecheck status must be confirmed by CI after this branch is pushed; no unverified passing result is claimed here.'
  },
  {
    id: 'gate-deployment',
    name: 'Production Release Readiness',
    phase: 'Phase 12',
    status: 'in-progress',
    evidence: 'Geo AI V4 production evidence is represented explicitly; the website itself has not been promoted to a new production release by this change.',
    details: 'Release readiness remains dependent on CI validation and final evidence review.'
  }
];
