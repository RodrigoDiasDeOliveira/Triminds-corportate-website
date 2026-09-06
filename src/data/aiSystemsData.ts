import { AISystem } from '../types';

export const AI_SYSTEMS: AISystem[] = [
  {
    id: "trusted-search",
    name: "Trusted Search Core",
    headline: "Hybrid Deterministic Retrieval & Cross-Encoder Neural Reranking",
    description: "An enterprise search infrastructure engineered to eradicate semantic false positives. Merges inverted-index lexical precision with high-dimensional vector embeddings, filtered through deep cross-attention rerankers and cryptographic citation hashing.",
    keyCapabilities: [
      "Reciprocal Rank Fusion (BM25 + Dense Vectors)",
      "Cross-Encoder Neural Reranking (BGE-Reranker-Large)",
      "Character-Offset Source Attribution & Token Hashing",
      "Dynamic Metadata Filtering & Multilingual Partitioning"
    ],
    technicalSpecs: {
      latency: "p95 < 145ms across 10M vectors",
      reliability: "99.99% retrieval uptime SLO",
      dataResidency: "Sovereign EU Cloud Enclave",
      guardrailType: "Strict Provenance & Confidence Gate"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Query Analysis & Expansion",
        description: "Decomposes input query into semantic intents, lexical tokens, and metadata constraints.",
        technology: "Intent Tokenizer & Sparse Encoder"
      },
      {
        step: 2,
        title: "Dual-Path Candidate Retrieval",
        description: "Parallel execution across inverted lexical indexes (BM25) and HNSW dense vector space.",
        technology: "Qdrant Vector DB + Elasticsearch"
      },
      {
        step: 3,
        title: "Cross-Encoder Rescoring",
        description: "Full cross-attention scoring across top 50 candidates, eliminating semantic decoys.",
        technology: "Transformer Cross-Encoder (FP16)"
      },
      {
        step: 4,
        title: "Factual Provenance Verification",
        description: "Validates citation spans against immutable primary document hashes.",
        technology: "SHA-256 Block Attestation Service"
      }
    ]
  },
  {
    id: "agentic-systems",
    name: "Deterministic / Controlled Agentic Workflow",
    headline: "Controlled Dual-Pass Agentic Verification Pipeline with Character-Offset Provenance",
    description: "Conceived and implemented within the Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). Replaces unpredictable stochastic agent loops with a deterministic, dual-pass verification workflow that enforces exact character-level citation provenance, Pydantic V2 schema contracts, and fail-closed validation gates.",
    keyCapabilities: [
      "Controlled Dual-Pass Agentic Verification",
      "Character-Offset Legal Citation Provenance",
      "Strict Pydantic V2 Schema Validation Gates",
      "Cryptographic SHA-256 Token Span Hashing"
    ],
    technicalSpecs: {
      latency: "Sub-12s 500-page roundtrip analysis",
      reliability: "Zero-hallucination compliance gate",
      dataResidency: "Sovereign EU Enclave / Cloud Run",
      guardrailType: "Fail-closed dual-pass deterministic validator"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Document Ingestion & Multi-modal Chunking",
        description: "Ingests complex regulatory directives, generating character-level coordinate bounding boxes and lexical token spans.",
        technology: "PyPDF & PDFPlumber Extraction Engine"
      },
      {
        step: 2,
        title: "Hybrid Retrieval & Neural Reranking",
        description: "Fuses BM25 sparse lexical search and Qdrant dense vectors via Reciprocal Rank Fusion (k=60), scored by BGE-Reranker-Large.",
        technology: "Qdrant Vector DB + BM25 + BGE Cross-Encoder"
      },
      {
        step: 3,
        title: "Controlled Agentic Synthesis",
        description: "Executes constrained legal reasoning against verified chunks, bounded strictly to retrieved citation spans with zero ungrounded generation.",
        technology: "Pydantic V2 Schema Contract Gate"
      },
      {
        step: 4,
        title: "Deterministic Provenance Verification",
        description: "Validates extracted legal requirements with cryptographic SHA-256 token hashing; fails closed on any ungrounded claim.",
        technology: "Cryptographic Provenance Verifier"
      }
    ]
  },
  {
    id: "geospatial-ai",
    name: "Triminds Geo-Spatial Engine",
    headline: "Satellite Raster Processing & High-Dimensional Spatial Topology",
    description: "Production geospatial intelligence engine capable of processing terabytes of multi-spectral satellite imagery daily. Converts raw earth-observation rasters into actionable vector topologies, environmental mutation alerts, and corridor risk scores.",
    keyCapabilities: [
      "Sub-Pixel Multi-Spectral Raster Segmentation",
      "Dynamic Quadkey Spatial Tiling & Caching",
      "Temporal Matrix Change Detection Algorithms",
      "Automated Atmospheric & Cloud Noise Normalization"
    ],
    technicalSpecs: {
      latency: "4.8M km²/day ingestion throughput",
      reliability: "Sub-meter polygon alignment precision",
      dataResidency: "European Copernicus Hub Integration",
      guardrailType: "Geometric Topology Validator"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Satellite Ingestion & Orthorectification",
        description: "Streams Sentinel-2 and commercial rasters, applying geometric distortion correction.",
        technology: "GDAL / Rasterio Multi-band Workers"
      },
      {
        step: 2,
        title: "Multi-Spectral Band Normalization",
        description: "Normalizes NDVI, NDRE, and thermal channels to cancel atmospheric scattering.",
        technology: "NumPy / SciPy Vectorized Compute"
      },
      {
        step: 3,
        title: "Parallel Neural Segmentation",
        description: "Runs custom vision transformers detecting infrastructural and natural mutations.",
        technology: "TorchGeo / TensorRT GPU Worker Pool"
      },
      {
        step: 4,
        title: "Vector Polygonization & Indexing",
        description: "Generates simplified boundary polygons and indexes them directly into PostGIS.",
        technology: "PostGIS 3.4 Spatial Database"
      }
    ]
  },
  {
    id: "security-observability",
    name: "Triminds Security & Observability Gateway",
    headline: "Zero-Trust LLM Reverse Proxy, OWASP Defense & Real-Time Telemetry",
    description: "A hardened inline proxy layer that inspects, sanitizes, and audits all AI interactions in real time. Defends against indirect prompt injection, data exfiltration, and semantic drift while maintaining full distributed tracing.",
    keyCapabilities: [
      "Inline Token Sanitization & Homoglyph Normalization",
      "Vector-based Prompt Injection Defense (<8ms)",
      "Strict PII Redaction & Reversible Token Vaulting",
      "Distributed OpenTelemetry Traces for Every Token"
    ],
    technicalSpecs: {
      latency: "Proxy overhead < 7.5ms",
      reliability: "99.8% OWASP LLM attack block rate",
      dataResidency: "Zero-retention volatile RAM buffers",
      guardrailType: "Cryptographic & Semantic Firewall"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Inbound Packet Inspection",
        description: "Scans user payload for encoded injection patterns, policy violations, and PII.",
        technology: "Spring Security & OPA Rego Engine"
      },
      {
        step: 2,
        title: "PII Masking & Tokenization",
        description: "Replaces sensitive enterprise keys, national IDs, and credentials with cryptographically keyed tokens.",
        technology: "Triminds Sovereign Pseudonymizer"
      },
      {
        step: 3,
        title: "Model Forwarding & Response Guard",
        description: "Proxies request through Hexagonal domain ports; verifies completion for policy compliance and leaks.",
        technology: "Reactive HTTP Gateway Engine"
      },
      {
        step: 4,
        title: "Immutable Telemetry Logging",
        description: "Emits latency, token counts, and cryptographic hash to immutable PostgreSQL audit store.",
        technology: "OpenTelemetry + PostgreSQL Audit Vault"
      }
    ]
  }
];
