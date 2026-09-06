import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2, Cpu, Database, GitFork, RefreshCw } from 'lucide-react';

export const ArchitectureViewer: React.FC = () => {
  const [activeArch, setActiveArch] = useState<'retrieval' | 'agentic' | 'geospatial' | 'security'>('retrieval');

  const architectures = {
    retrieval: {
      title: "Trusted Retrieval Architecture",
      subtitle: "3-Tier Hybrid Search with Cross-Attention Reranking & Provenance Anchoring",
      nodes: [
        {
          id: "ingest",
          label: "1. Query Decomposition",
          tech: "Sparse Tokenizer",
          latency: "4ms",
          details: "Extracts alphanumeric SKUs, legal clauses, and semantic intent into dual execution branches."
        },
        {
          id: "retrieval",
          label: "2. Parallel Hybrid Lookup",
          tech: "BM25 (Sparse) + Qdrant (Dense)",
          latency: "38ms",
          details: "Reciprocal Rank Fusion merges top-50 lexical and top-50 vector matches to maximize recall."
        },
        {
          id: "rerank",
          label: "3. Cross-Encoder Attention",
          tech: "BGE-Reranker-Large (FP16)",
          latency: "82ms",
          details: "Performs token-by-token cross-attention scoring, filtering out superficially similar decoys."
        },
        {
          id: "provenance",
          label: "4. Cryptographic Provenance",
          tech: "SHA-256 Block Attestation",
          latency: "6ms",
          details: "Validates text spans against immutable source character offsets before prompt injection."
        }
      ],
      totalLatency: "130ms (p95)",
      guarantee: "100% Citation Verifiability / Zero Ungrounded Assertions"
    },
    agentic: {
      title: "Deterministic/Controlled Agentic Workflow",
      subtitle: "Controlled Dual-Pass Agentic Verification Pipeline (Trusted Compliance Agent)",
      nodes: [
        {
          id: "goal",
          label: "1. Document Intake & Coordinate Chunking",
          tech: "PyPDF & Structural Chunking",
          latency: "18ms",
          details: "Extracts structural blocks, text spans, and bounding coordinates from complex regulatory directives."
        },
        {
          id: "planner",
          label: "2. Hybrid Retrieval & Cross-Encoder Reranking",
          tech: "Qdrant + BM25 + BGE Reranker",
          latency: "45ms",
          details: "Fuses sparse lexical search and dense embeddings with Reciprocal Rank Fusion, scored by deep cross-attention."
        },
        {
          id: "guard",
          label: "3. Schema-Constrained Agentic Synthesis",
          tech: "Pydantic V2 Strict Validation",
          latency: "120ms",
          details: "Synthesizes regulatory requirements strictly bounded to retrieved context with exact character offsets."
        },
        {
          id: "exec",
          label: "4. Dual-Pass Provenance Attestation",
          tech: "SHA-256 Token Span Attestation",
          latency: "15ms",
          details: "Validates citation spans against cryptographic token hashes; fails closed on any ungrounded claim."
        }
      ],
      totalLatency: "< 198ms verification pipeline",
      guarantee: "Zero Hallucination Tolerance / 100% Citation Provenance"
    },
    geospatial: {
      title: "Geospatial Intelligence Mesh",
      subtitle: "Satellite Raster Tiling, Multi-Spectral Segmentation & Vectorization",
      nodes: [
        {
          id: "raster",
          label: "1. Satellite Raster Ingestion",
          tech: "GDAL / Rasterio Workers",
          latency: "Streaming",
          details: "Streams Sentinel-2 & commercial high-res imagery; executes geometric orthorectification."
        },
        {
          id: "tiling",
          label: "2. Quadkey Dynamic Tiling",
          tech: "Redis Distributed Grid",
          latency: "18ms / tile",
          details: "Partitions planetary coordinates into 256x256 multi-band matrices with zero seam artifacts."
        },
        {
          id: "inference",
          label: "3. Multi-Channel Vision Inference",
          tech: "TorchGeo / TensorRT GPU",
          latency: "42ms / tile",
          details: "Segments vegetation, infrastructure boundaries, and thermal degradation patterns."
        },
        {
          id: "vectorize",
          label: "4. Polygon Topology Indexing",
          tech: "PostGIS 3.4 Spatial Index",
          latency: "15ms",
          details: "Converts neural boundary masks into lightweight GeoJSON polygons with spatial indexing."
        }
      ],
      totalLatency: "4.8M km² per 24h cycle",
      guarantee: "Sub-pixel Boundary Precision & Real-time Alerting"
    },
    security: {
      title: "Zero-Trust Security Layer",
      subtitle: "Hexagonal Architecture, Open Policy Agent (OPA) & Policy-Based Access Control",
      nodes: [
        {
          id: "inspect",
          label: "1. Security Gateway & Inbound Dispatch",
          tech: "Java 21 / Spring Security Gateway",
          latency: "1.2ms",
          details: "Intercepts request streams, validates JWT credentials, and normalizes payload parameters."
        },
        {
          id: "filter",
          label: "2. Policy Evaluation Engine",
          tech: "Open Policy Agent (OPA / Rego)",
          latency: "1.5ms",
          details: "Evaluates declarative policy rules with sub-millisecond local PBAC decision matrices."
        },
        {
          id: "mask",
          label: "3. Hexagonal Domain Decoupling",
          tech: "Ports & Adapters Architecture",
          latency: "0.5ms",
          details: "Enforces strict layer boundaries isolating domain logic from infrastructure or database dependencies."
        },
        {
          id: "audit",
          label: "4. Tamper-Evident Ledger Commit",
          tech: "PostgreSQL Append-Only Ledger",
          latency: "0.8ms",
          details: "Writes immutable audit logs containing decision signatures, policy hashes, and actor telemetry."
        }
      ],
      totalLatency: "< 4.0ms total evaluation overhead",
      guarantee: "100% ArchUnit Fitness / Zero Trust PBAC Enforcement"
    }
  };

  const current = architectures[activeArch];

  return (
    <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-6 shadow-sm font-sans">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAEAE6] pb-5">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#70706B] font-semibold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#1A1A1A]" />
            Interactive Architectural Schematics
          </span>
          <h3 className="text-xl font-bold text-[#1A1A1A] font-sans mt-0.5">{current.title}</h3>
          <p className="text-xs text-[#70706B] font-mono mt-0.5">{current.subtitle}</p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-1 p-1 bg-[#F4F4F1] rounded-md border border-[#D1D1CD]">
          <button
            onClick={() => setActiveArch('retrieval')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              activeArch === 'retrieval'
                ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                : 'text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            Trusted Retrieval
          </button>
          <button
            onClick={() => setActiveArch('agentic')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              activeArch === 'agentic'
                ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                : 'text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            Controlled Agentic Workflow
          </button>
          <button
            onClick={() => setActiveArch('geospatial')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              activeArch === 'geospatial'
                ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                : 'text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            Geo-Spatial Mesh
          </button>
          <button
            onClick={() => setActiveArch('security')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              activeArch === 'security'
                ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                : 'text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            Security Gateway
          </button>
        </div>
      </div>

      {/* Interactive Node Flowchart */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {current.nodes.map((node, index) => (
          <div
            key={node.id}
            className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] hover:border-[#1A1A1A] transition-all flex flex-col justify-between space-y-3 relative group"
          >
            {/* Step Marker & Latency */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#D1D1CD] pb-2">
              <span className="text-[#1A1A1A] font-bold">{node.label}</span>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">
                {node.latency}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[#1A1A1A] font-semibold uppercase tracking-wider block">
                {node.tech}
              </span>
              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                {node.details}
              </p>
            </div>

            {/* Connection Arrow indicator for desktop */}
            {index < current.nodes.length - 1 && (
              <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-[#D1D1CD] items-center justify-center text-[#70706B] shadow-xs">
                <ArrowRight className="w-3 h-3 text-[#1A1A1A]" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Architecture Metrics Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-lg bg-[#EAEAE6] border border-[#D1D1CD] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#1A1A1A]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Operational Guarantee: <strong className="text-emerald-700 font-semibold">{current.guarantee}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-[#70706B]">
          <span>End-to-End Latency Profile:</span>
          <span className="text-[#1A1A1A] font-semibold">{current.totalLatency}</span>
        </div>
      </div>
    </div>
  );
};
