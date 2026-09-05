import React from 'react';
import { Layers, GitCommit, Shield, Server, Terminal, CheckCircle2, Code2, ArrowRight } from 'lucide-react';
import { CORPORATE_POSITIONING } from '../data/corporateData';

export const EngineeringSection: React.FC = () => {
  const ciCdSteps = [
    { name: "1. Git Push", desc: "Signed commit verification" },
    { name: "2. Static Lint", desc: "Biome & Ruff syntax rules" },
    { name: "3. Type Check", desc: "Strict tsc / mypy validation" },
    { name: "4. Unit Tests", desc: "Deterministic logic suites" },
    { name: "5. Security Scan", desc: "Trivy & OWASP dependency check" },
    { name: "6. Multi-Stage Build", desc: "Distroless minimal containers" },
    { name: "7. Artifact Registry", desc: "Cosign cryptographic signing" },
    { name: "8. Canary Deploy", desc: "5% traffic health evaluation" },
    { name: "9. Smoke Tests", desc: "End-to-end vector retrieval eval" }
  ];

  const techMatrix = [
    { category: "Inference & Systems Core", items: ["Rust (Actix/Tokio)", "Go 1.23", "Python 3.12 / PyTorch", "ONNX Runtime"] },
    { category: "Retrieval & Vector Databases", items: ["Qdrant Vector DB", "PostgreSQL / PostGIS 3.4", "BM25 Inverted Indexes", "BGE-Reranker"] },
    { category: "Infrastructure & Platform", items: ["Google Cloud Run (Scale-to-Zero)", "Terraform / OpenTofu", "Docker BuildKit", "Cloudflare Zero Trust"] },
    { category: "Observability & Security", items: ["OpenTelemetry SDK", "Prometheus & Grafana", "Pydantic Schema Locks", "HashiCorp Vault"] }
  ];

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>PHASE 4 & 10 // PLATFORM ENGINEERING & INFRASTRUCTURE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          Transversal Engineering <span className="font-serif italic font-normal">Architecture</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          In Triminds, security, observability, testing, and production readiness are not terminal post-launch phases. They are continuous, transversal requirements woven into every architectural layer.
        </p>
      </div>

      {/* Transversal Architecture Matrix Visualization */}
      <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#EAEAE6] pb-4">
          <div>
            <h3 className="text-base font-bold text-[#1A1A1A] font-mono">The Triminds Transversal Axis</h3>
            <p className="text-xs text-[#70706B] font-sans">All phases and systems adhere to this unified structural substrate</p>
          </div>
          <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
            ZERO ISOLATED SILOS
          </span>
        </div>

        {/* Transversal Visual Tree */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs text-center">
          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider block">Foundational Axis</span>
            <div className="flex items-center justify-around text-[#1A1A1A] pt-1 font-semibold">
              <span>Architecture</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Engineering</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Content</span>
            </div>
            <p className="text-[11px] text-[#70706B] font-sans text-left pt-2">
              Every system is specified with character-level accuracy before code execution begins.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider block">Verification Axis</span>
            <div className="flex items-center justify-around text-[#1A1A1A] pt-1 font-semibold">
              <span>Security</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Observability</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Testing</span>
            </div>
            <p className="text-[11px] text-[#70706B] font-sans text-left pt-2">
              Non-negotiable telemetry, OWASP LLM attack defenses, and automated evaluation suites.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider block">Delivery Axis</span>
            <div className="flex items-center justify-around text-[#1A1A1A] pt-1 font-semibold">
              <span>Cloud Native</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Production SLA</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Sovereignty</span>
            </div>
            <p className="text-[11px] text-[#70706B] font-sans text-left pt-2">
              Serverless scale-to-zero workloads with strict European data residency guarantees.
            </p>
          </div>
        </div>
      </div>

      {/* CI/CD Pipeline Visual */}
      <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#EAEAE6] pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-wider">
            <GitCommit className="w-4 h-4 text-[#1A1A1A]" />
            <span>Automated Production CI/CD Pipeline Specification</span>
          </div>
          <span className="text-[10px] font-mono text-[#70706B]">GITHUB ACTIONS + ARTIFACT REGISTRY</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2 text-center font-mono">
          {ciCdSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] flex flex-col justify-between space-y-1 hover:border-[#1A1A1A] transition-colors"
            >
              <span className="text-[11px] text-[#1A1A1A] font-bold">{step.name}</span>
              <span className="text-[10px] text-[#70706B]">{step.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology & Infrastructure Matrix */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-[#1A1A1A] font-mono flex items-center gap-2">
          <Server className="w-4 h-4 text-[#1A1A1A]" />
          <span>Technology & Infrastructure Substrate</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techMatrix.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-[#D1D1CD] space-y-3 shadow-xs">
              <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">
                {cat.category}
              </h4>
              <ul className="space-y-1.5 text-xs text-[#4A4A45] font-mono">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#1A1A1A]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Principles Card */}
      <div className="p-6 rounded-xl bg-white border border-[#D1D1CD] space-y-4 shadow-xs">
        <h3 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">
          Triminds Foundational Engineering Directives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CORPORATE_POSITIONING.engineeringPrinciples.map((principle, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A4A45]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
