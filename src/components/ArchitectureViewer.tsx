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
      title: "Bounded Agentic Loop Architecture",
      subtitle: "Deterministic Finite-State Machine with Permission Boundary Enforcement",
      nodes: [
        {
          id: "goal",
          label: "1. Goal Contract Validation",
          tech: "OAuth2 & JWT Scopes",
          latency: "3ms",
          details: "Enforces authorized actor role boundaries, maximum step limits, and hard token budget caps."
        },
        {
          id: "planner",
          label: "2. Schema-Constrained Planner",
          tech: "Pydantic V2 Strict JSON",
          latency: "210ms",
          details: "Generates explicit typed tool call invocations matching validated JSON schemas."
        },
        {
          id: "guard",
          label: "3. Pre-Flight State Verification",
          tech: "Deterministic System Check",
          latency: "12ms",
          details: "Validates database locks, entity state, and idempotency keys before any mutation occurs."
        },
        {
          id: "exec",
          label: "4. Audited Tool Invocation",
          tech: "HMAC Signed Webhook",
          latency: "45ms",
          details: "Executes target enterprise API with tamper-evident audit commit and human escalation fallback."
        }
      ],
      totalLatency: "270ms per cycle",
      guarantee: "Zero Runaway Recursion / Strict Reversibility"
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
      title: "Zero-Trust Security Gateway",
      subtitle: "Inline High-Throughput Rust Proxy & OWASP LLM Defense",
      nodes: [
        {
          id: "inspect",
          label: "1. Inbound Stream Inspection",
          tech: "Rust Tokio Proxy Core",
          latency: "1.8ms",
          details: "Parses payload stream; normalizes unicode homoglyphs and decodes base64 exploit vectors."
        },
        {
          id: "filter",
          label: "2. Semantic Injection Classifier",
          tech: "ONNX Runtime (Local CPU)",
          latency: "4.2ms",
          details: "Scores prompt vector distance against adversarial jailbreak clusters without external hops."
        },
        {
          id: "mask",
          label: "3. Reversible PII Pseudonymization",
          tech: "AES-256 Vault Tokenizer",
          latency: "1.1ms",
          details: "Replaces national IDs, payment tokens, and client names with volatile keyed pseudonyms."
        },
        {
          id: "audit",
          label: "4. Tamper-Evident Ledger Commit",
          tech: "HMAC-SHA256 Audit Log",
          latency: "0.8ms",
          details: "Writes immutable audit trail containing prompt hash, token cost, and policy decision."
        }
      ],
      totalLatency: "< 7.9ms total proxy overhead",
      guarantee: "99.8% OWASP Attack Interception / Zero PII Leakage"
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
            Bounded Agents
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
