import { CASE_STUDIES } from './caseStudiesData';
import { CaseStudy } from '../types';

/**
 * Evidence-backed corrections for claims that were previously ahead of the
 * current repository/runtime state. The legacy dataset remains untouched so
 * the change is auditable; the public UI consumes these overrides.
 */
const EVIDENCE_OVERRIDES: Record<string, Partial<CaseStudy>> = {
  'trusted-compliance-agent': {
    deploymentStatus: 'validated',
    evidenceSource: 'Current public repository README and production-readiness work; deployment state is not asserted here.',
    lastVerified: '2026-09-17',
    subtitle: 'Trusted retrieval and compliance evidence pipeline with explicit fallback states',
    honestScope: 'FastAPI/React compliance application combining deterministic trusted answers with semantic retrieval when a trusted answer is unavailable.',
    whatItProves: 'Demonstrates a verifiable retrieval architecture with explicit separation between trusted evidence and fallback generation.',
    realArchitectureVerification: {
      documented: 'Deterministic trusted answers with semantic retrieval fallback.',
      implemented: 'Python 3.11 + FastAPI + PostgreSQL/pgvector + SQLAlchemy/Pydantic + React/Vite, with Terraform GCP deployment guidance.',
      presentedOnSite: 'Updated to match the current public repository README rather than the former Qdrant/BGE-Reranker architecture.',
      coherenceScore: 'Verified Alignment'
    },
    realTechnologies: {
      languages: ['Python 3.11', 'TypeScript'],
      frameworks: ['FastAPI', 'React', 'Vite'],
      libraries: ['LangChain', 'Hugging Face sentence-transformers', 'SQLAlchemy', 'Pydantic'],
      databases: ['PostgreSQL', 'pgvector'],
      cloud: ['Google Cloud Platform (GCP-ready)'],
      iac: ['Terraform'],
      apis: ['FastAPI REST / OpenAPI'],
      testing: ['Repository test suite'],
      ciCd: ['Repository CI configuration'],
      observability: ['Admin/system monitoring capabilities']
    },
    repository: {
      name: 'RodrigoDiasDeOliveira/Trusted-Compliance-Agent',
      isPrivate: false,
      visibilityBadge: 'Public Repository',
      url: 'https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent',
      testSuiteStatus: 'See current repository test suite; no unsupported coverage percentage asserted.',
      ciCdPipeline: 'See current repository workflows; no unsupported build number asserted.',
      adrReferences: ['Repository ADRs under docs/adr/']
    },
    results: [
      { metric: 'Evidence Policy', value: 'Explicit', description: 'Trusted answers are separated from semantic fallback retrieval.' },
      { metric: 'Primary Storage', value: 'PostgreSQL + pgvector', description: 'Current repository README technology declaration.' }
    ],
    evidence: 'Current public README documents Version 2.1, FastAPI/React, PostgreSQL + pgvector, LangChain, sentence-transformers, Terraform and GCP-ready infrastructure.'
  },
  'triminds-geo-ai': {
    deploymentStatus: 'production',
    evidenceSource: 'Verified production deployment supplied by Triminds and current Geo AI V4 repository documentation.',
    lastVerified: '2026-09-17',
    id: 'triminds-geo-ai',
    title: 'Triminds Geo AI V4',
    subtitle: 'Operational Satellite Earth Observation & Deterministic Geospatial Intelligence',
    tag: 'Geospatial Intelligence / Earth Observation',
    sector: 'Environmental Monitoring & Geospatial Analysis',
    truthStatus: 'implemented',
    honestScope: 'Operational V4 platform using real Copernicus Sentinel-2 L2A data, deterministic spectral analysis, LULC rules, regulatory/carbon calculations and optional server-side Gemini reporting.',
    whatItProves: 'Demonstrates an end-to-end geospatial pipeline that turns real satellite assets into traceable analytical evidence and GeoJSON outputs.',
    problem: 'Geospatial analysis needs reproducible processing of satellite observations with explicit provenance instead of opaque or simulated imagery.',
    context: 'V4 uses real Sentinel-2 L2A scene discovery through AWS Earth Search STAC and selective Cloud-Optimized GeoTIFF band extraction.',
    architecture: {
      overview: 'Full-stack Node.js/Express + React platform with real satellite discovery, COG extraction, deterministic spectral computation and evidence generation.',
      components: [
        'Sentinel-2 L2A discovery through Earth Search STAC',
        'COG band extraction with geotiff and geodetic reprojection with proj4',
        'Deterministic Float32Array NDVI / NDRE / EVI computation',
        'Rule-based LULC, regulatory and carbon evidence pipeline'
      ],
      diagramText: 'ROI Validation → STAC Scene Discovery → COG Band Extraction → Spectral Indices → LULC / Regulatory Analysis → Evidence & GeoJSON → Optional Gemini Report'
    },
    realArchitectureVerification: {
      documented: 'V4 production architecture is documented in the current repository README.',
      implemented: 'Node.js 20+ / Express / TypeScript runtime with real Sentinel-2 L2A ingestion, geotiff, proj4, deterministic spectral calculations and server-side Google GenAI integration.',
      presentedOnSite: 'Updated to V4; previous GPU/PyTorch/TorchGeo/Celery/PostGIS claims are no longer presented as the current production architecture.',
      coherenceScore: 'Verified Alignment'
    },
    realTechnologies: {
      languages: ['TypeScript', 'JavaScript'],
      frameworks: ['React 19', 'Express', 'Vite'],
      libraries: ['geotiff', 'proj4', '@google/genai'],
      databases: [],
      cloud: ['Google Cloud Run (europe-west1)', 'AWS Earth Search STAC / Copernicus data'],
      iac: ['Docker / Cloud Run deployment configuration'],
      apis: ['REST /api and /api/v1 endpoints', 'GeoJSON RFC 7946 output'],
      testing: ['Build and type-check validated for V4'],
      ciCd: ['Repository CI/build configuration'],
      observability: ['Runtime health and provider status endpoints']
    },
    repository: {
      name: 'RodrigoDiasDeOliveira/Triminds-Geo-AI-V4',
      isPrivate: false,
      visibilityBadge: 'Public Repository',
      url: 'https://github.com/RodrigoDiasDeOliveira/Triminds-Geo-AI-V4',
      testSuiteStatus: 'V4 build/type-check/test validation reported as passing.',
      ciCdPipeline: 'Repository CI/build configuration; no unsupported build number asserted.',
      adrReferences: []
    },
    engineering: [
      'Processes real Sentinel-2 L2A COG assets rather than synthetic satellite imagery.',
      'Computes NDVI, NDRE and EVI deterministically over Float32Array data.',
      'Produces explicit scene provenance, analytical evidence and GeoJSON outputs.'
    ],
    technology: ['Node.js 20+', 'Express', 'React 19', 'Sentinel-2 L2A', 'COG / geotiff', 'proj4'],
    evolution: 'V4 moved the geospatial runtime toward a production Cloud Run deployment while keeping deep-learning/GPU inference as a future roadmap capability.',
    challenges: ['Selective raster access from COG assets', 'Coordinate reprojection', 'Reproducible spectral and area calculations'],
    decisions: [
      { decision: 'Use real public Sentinel-2 L2A assets through STAC discovery.', rationale: 'Makes the input data traceable and reproducible.' },
      { decision: 'Keep current V4 production processing CPU/deterministic.', rationale: 'Avoids presenting roadmap GPU/deep-learning capabilities as deployed facts.' }
    ],
    results: [
      { metric: 'Runtime', value: 'Production', description: 'V4 deployed on Google Cloud Run in europe-west1.' },
      { metric: 'Input Data', value: 'Sentinel-2 L2A', description: 'Real satellite scenes discovered through Earth Search STAC.' },
      { metric: 'Core Analysis', value: 'Deterministic', description: 'NDVI, NDRE, EVI, LULC, regulatory and carbon calculations.' }
    ],
    evidence: 'Production URL: https://triminds-geo-ai-v4-1091629879450.europe-west1.run.app/ . Current V4 README documents the real satellite pipeline and explicitly places GPU/deep-learning capabilities on the future roadmap.'
  },
  'triminds-logistics-platform': {
    deploymentStatus: 'not-deployed',
    evidenceSource: 'Current public TLP README.',
    lastVerified: '2026-09-17',
    subtitle: 'Real-Time Logistics MVP with RFID Event Ingestion & Machine Learning Foundations',
    honestScope: 'Functional multi-tenant MVP and end-to-end demo with RFID simulation, live dashboard, WebSocket updates, JWT authentication and a basic ML/business-rules engine.',
    whatItProves: 'Demonstrates end-to-end Java/Spring Boot and React engineering for a logistics MVP; the repository explicitly states production readiness is still in progress.',
    realArchitectureVerification: {
      documented: 'Real-time logistics platform with RFID + AI using Java 17, Spring Boot 3.3 and React 18.',
      implemented: 'Java 17, Spring Boot 3.3, JPA/H2, Spring Security + JWT, STOMP/SockJS WebSocket, React 18, TypeScript, Ant Design and DL4J-ready prediction components.',
      presentedOnSite: 'Updated to distinguish implemented MVP functionality from production readiness.',
      coherenceScore: 'Verified Alignment'
    },
    realTechnologies: {
      languages: ['Java 17', 'TypeScript'],
      frameworks: ['Spring Boot 3.3', 'Spring Security', 'React 18', 'Vite', 'Ant Design'],
      libraries: ['Spring Data JPA', 'STOMP / SockJS', 'Deeplearning4j (DL4J)'],
      databases: ['H2 (development)'],
      cloud: ['Docker / Docker Compose'],
      iac: ['Docker Compose'],
      apis: ['REST', 'STOMP WebSocket'],
      testing: ['JUnit / Spring Boot testing as present in repository'],
      ciCd: ['GitHub Actions planned per current README'],
      observability: ['Live operational dashboard / WebSocket event updates']
    },
    repository: {
      name: 'RodrigoDiasDeOliveira/TLP-Triminds-Logistics-Platform',
      isPrivate: false,
      visibilityBadge: 'Public Repository',
      url: 'https://github.com/RodrigoDiasDeOliveira/TLP-Triminds-Logistics-Platform',
      testSuiteStatus: 'Functional MVP / end-to-end demo documented; no unsupported coverage claim.',
      ciCdPipeline: 'GitHub Actions listed as planned in current README.',
      adrReferences: []
    },
    results: [
      { metric: 'Functional MVP', value: 'Yes', description: 'Current README declares the MVP functional.' },
      { metric: 'End-to-End Demo', value: 'Yes', description: 'RFID event flow to live dashboard is documented.' },
      { metric: 'Production Ready', value: 'In progress', description: 'Current repository status explicitly says production readiness is in progress.' }
    ],
    evidence: 'Current public README explicitly classifies TLP as Functional MVP: Yes, End-to-End Demo: Yes, and Production Ready: In progress.'
  }
};

export const getEvidenceCaseStudies = (): CaseStudy[] => CASE_STUDIES.map((study) => {
  const override = EVIDENCE_OVERRIDES[study.id];
  if (!override) return study;

  return {
    ...study,
    ...override,
    architecture: { ...study.architecture, ...(override.architecture ?? {}) },
    realArchitectureVerification: {
      ...study.realArchitectureVerification,
      ...(override.realArchitectureVerification ?? {})
    },
    realTechnologies: { ...study.realTechnologies, ...(override.realTechnologies ?? {}) },
    repository: { ...study.repository, ...(override.repository ?? {}) }
  };
});
