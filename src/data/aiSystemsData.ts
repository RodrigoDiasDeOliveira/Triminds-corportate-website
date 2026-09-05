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
    name: "Bounded Agentic Framework",
    headline: "Autonomous State-Machine Agents with Cryptographic Action Fences",
    description: "Autonomous agents engineered for complex multi-step enterprise workflows. Unlike open-loop prototypes that risk runaway token recursion, Triminds agents execute within deterministic finite state machines, audited API contracts, and human-in-the-loop escalation gates.",
    keyCapabilities: [
      "Finite State-Machine (FSM) Execution Bounds",
      "Strict Schema-Enforced Tool Calling",
      "Dynamic Token Budget & Max-Step Circuit Breakers",
      "Cryptographically Signed Audit Trail per Action"
    ],
    technicalSpecs: {
      latency: "Step cycle < 420ms (local actions)",
      reliability: "Zero unconstrained action escape",
      dataResidency: "Frankfurt (eu-central-1) VPC",
      guardrailType: "Hard State-Machine & Approval Gate"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Goal Ingestion & State Init",
        description: "Validates initial conditions, user authorization context, and maximum token budget.",
        technology: "OAuth2 JWT Token Validator"
      },
      {
        step: 2,
        title: "Bounded Plan Synthesis",
        description: "Generates explicit JSON action sequence matching allowed tool definitions.",
        technology: "Pydantic Schema Constrained Generator"
      },
      {
        step: 3,
        title: "Deterministic Pre-Flight Checks",
        description: "Validates parameters against enterprise system-of-record state prior to invocation.",
        technology: "Triminds Action Guardrail Filter"
      },
      {
        step: 4,
        title: "Audited Tool Invocation",
        description: "Executes target API with cryptographic action signature and structured log emit.",
        technology: "HMAC Signed Webhook Dispatcher"
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
        description: "Scans user payload for encoded injection patterns, hidden delimiters, and PII.",
        technology: "Rust High-Performance Regex & ONNX"
      },
      {
        step: 2,
        title: "PII Masking & Tokenization",
        description: "Replaces credit cards, national IDs, and names with cryptographically keyed tokens.",
        technology: "Triminds Sovereign Pseudonymizer"
      },
      {
        step: 3,
        title: "Model Forwarding & Response Guard",
        description: "Proxies request to internal model; verifies completion for hallucinations and leaks.",
        technology: "Async Tokio Streaming Engine"
      },
      {
        step: 4,
        title: "Immutable Telemetry Logging",
        description: "Emits latency, token counts, and cryptographic hash to immutable audit store.",
        technology: "OpenTelemetry + Cloud Logging"
      }
    ]
  }
];
