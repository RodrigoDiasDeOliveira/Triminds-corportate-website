import React from 'react';
import { Layers, GitCommit, Server, CheckCircle2 } from 'lucide-react';
import { CORPORATE_POSITIONING } from '../data/corporateData';
import { useLanguage } from '../i18n/LanguageContext';

export const EngineeringSection: React.FC = () => {
  const { t } = useLanguage();

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
    { category: "Enterprise Backends & Systems", items: ["Java (17 & 21)", "Spring Boot 3.x", "Python 3.11 / 3.12", "TypeScript 5.x"] },
    { category: "Machine Learning & Edge Vision", items: ["YOLOv8 (Ultralytics)", "Deeplearning4j (DL4J)", "OpenCV & GDAL", "PyTorch / Transformers"] },
    { category: "Retrieval & Vector Databases", items: ["PostgreSQL & pgvector", "Qdrant Vector DB", "PostGIS 3.4", "Oracle Database"] },
    { category: "Security, Governance & Architecture", items: ["Open Policy Agent (OPA)", "Hexagonal Architecture", "ArchUnit & JUnit 5", "STOMP WebSockets"] }
  ];

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>{t('eng.badge')}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          {t('eng.title')} <span className="font-serif italic font-normal">{t('eng.titleHighlight')}</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          {t('eng.subtitle')}
        </p>
      </div>

      {/* Transversal Architecture Matrix Visualization */}
      <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#EAEAE6] pb-4">
          <div>
            <h3 className="text-base font-bold text-[#1A1A1A] font-mono">{t('eng.axisTitle')}</h3>
            <p className="text-xs text-[#70706B] font-sans">{t('eng.axisSubtitle')}</p>
          </div>
          <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
            {t('eng.noSilos')}
          </span>
        </div>

        {/* Transversal Visual Tree */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs text-center">
          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider block">{t('eng.foundationalAxis')}</span>
            <div className="flex items-center justify-around text-[#1A1A1A] pt-1 font-semibold">
              <span>Architecture</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Engineering</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Content</span>
            </div>
            <p className="text-[11px] text-[#70706B] font-sans text-left pt-2">
              {t('eng.foundationalDesc')}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider block">{t('eng.verificationAxis')}</span>
            <div className="flex items-center justify-around text-[#1A1A1A] pt-1 font-semibold">
              <span>Security</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Observability</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Testing</span>
            </div>
            <p className="text-[11px] text-[#70706B] font-sans text-left pt-2">
              {t('eng.verificationDesc')}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider block">{t('eng.deliveryAxis')}</span>
            <div className="flex items-center justify-around text-[#1A1A1A] pt-1 font-semibold">
              <span>Cloud Native</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Production SLA</span>
              <span className="text-[#D1D1CD]">•</span>
              <span>Sovereignty</span>
            </div>
            <p className="text-[11px] text-[#70706B] font-sans text-left pt-2">
              {t('eng.deliveryDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* CI/CD Pipeline Visual */}
      <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#EAEAE6] pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-wider">
            <GitCommit className="w-4 h-4 text-[#1A1A1A]" />
            <span>{t('eng.cicdTitle')}</span>
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
          <span>{t('eng.substrateTitle')}</span>
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
          {t('eng.directivesTitle')}
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
