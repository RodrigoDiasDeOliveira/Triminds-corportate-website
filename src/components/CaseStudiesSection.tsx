import React, { useState } from 'react';
import { FolderGit2, CheckCircle2, ArrowRight, X, Cpu, GitPullRequest, ShieldCheck, Activity, Award } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { CaseStudy } from '../types';

export const CaseStudiesSection: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'regulatory', label: 'Regulatory AI' },
    { id: 'geospatial', label: 'Geospatial' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'security', label: 'Security' },
    { id: 'platform', label: 'Platform & Media' }
  ];

  const filteredStudies = CASE_STUDIES.filter(study => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'regulatory') return study.id.includes('compliance');
    if (activeFilter === 'geospatial') return study.id.includes('geo');
    if (activeFilter === 'logistics') return study.id.includes('logistics');
    if (activeFilter === 'security') return study.id.includes('security');
    if (activeFilter === 'platform') return study.id.includes('platform') || study.id.includes('smartimage');
    return true;
  });

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PHASE 5 // PRODUCTION ENGINEERING CASE STUDIES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          Proven Under <span className="font-serif italic font-normal">Operational Stress</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          Every project executed by Triminds adheres to a rigorous ten-dimensional audit framework. We build only what can be measured, observed, and defended in production.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F4F1] rounded-md border border-[#D1D1CD] max-w-fit">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                : 'text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Case Study Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-xl border border-[#D1D1CD] bg-white hover:border-[#1A1A1A] transition-all p-6 flex flex-col justify-between space-y-5 group shadow-xs"
          >
            <div className="space-y-3">
              {/* Category & Tag */}
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#1A1A1A] font-semibold px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD]">
                  {study.tag}
                </span>
                <span className="text-[#70706B] text-[10px]">{study.sector}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold text-[#1A1A1A] font-sans">
                {study.title}
              </h3>
              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                {study.subtitle}
              </p>

              {/* What does this prove about Triminds? */}
              <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A] font-bold">
                  <Award className="w-3 h-3 text-emerald-600" />
                  <span>What This Proves About Triminds:</span>
                </div>
                <p className="text-xs text-[#4A4A45] font-sans leading-relaxed">
                  {study.whatItProves}
                </p>
              </div>

              {/* High-level metrics */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0F0EE]">
                {study.results.slice(0, 2).map((res, i) => (
                  <div key={i} className="p-2 rounded bg-[#F4F4F1] border border-[#D1D1CD]">
                    <span className="text-[10px] text-[#70706B] font-mono block">{res.metric}</span>
                    <span className="text-sm font-bold font-mono text-[#1A1A1A]">{res.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Deep Dive Trigger */}
            <button
              onClick={() => setSelectedStudy(study)}
              className="w-full py-2.5 rounded-lg text-xs font-mono font-medium text-[#1A1A1A] bg-[#F4F4F1] hover:bg-[#EAEAE6] border border-[#D1D1CD] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Examine 10-Point Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
            </button>
          </div>
        ))}
      </div>

      {/* Deep-Dive Modal (Phase 5 10-point standard) */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-[#D1D1CD] bg-[#F4F4F1] shadow-2xl overflow-hidden font-sans">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D1D1CD] bg-white">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#70706B]">
                  <span>CANONICAL CASE STUDY AUDIT //</span>
                  <span className="text-[#1A1A1A] font-semibold">{selectedStudy.tag}</span>
                </div>
                <h2 className="text-xl font-bold text-[#1A1A1A] mt-0.5">{selectedStudy.title}</h2>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="p-1.5 rounded-lg text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content with full 10-point checklist */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-[#1A1A1A] text-xs leading-relaxed">
              {/* Core Proof Banner */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-1 shadow-xs">
                <span className="text-[11px] font-mono text-[#1A1A1A] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  What This Proves About Triminds
                </span>
                <p className="text-[#4A4A45] text-xs">
                  {selectedStudy.whatItProves}
                </p>
              </div>

              {/* 1. Problem & 2. Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5 shadow-xs">
                  <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">1. The Problem</h4>
                  <p className="text-[#4A4A45]">{selectedStudy.problem}</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5 shadow-xs">
                  <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">2. Operational Context</h4>
                  <p className="text-[#4A4A45]">{selectedStudy.context}</p>
                </div>
              </div>

              {/* 3. Architecture & Components */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3 shadow-xs">
                <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">3. System Architecture</h4>
                <p className="text-[#4A4A45]">{selectedStudy.architecture.overview}</p>
                {selectedStudy.architecture.diagramText && (
                  <div className="p-3 bg-[#F4F4F1] rounded border border-[#D1D1CD] font-mono text-[11px] text-[#1A1A1A]">
                    <span className="text-[#70706B] block text-[10px] uppercase mb-1">Execution Topology:</span>
                    {selectedStudy.architecture.diagramText}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {selectedStudy.architecture.components.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#4A4A45]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1A1A1A]"></span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Engineering & 5. Technology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-2 shadow-xs">
                  <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">4. Engineering Highlights</h4>
                  <ul className="space-y-1.5">
                    {selectedStudy.engineering.map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#4A4A45] text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-2 shadow-xs">
                  <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">5. Technology Matrix</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedStudy.technology.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-[#F4F4F1] border border-[#D1D1CD] rounded font-mono text-[10px] text-[#1A1A1A]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. Evolution & 7. Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5 shadow-xs">
                  <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">6. System Evolution</h4>
                  <p className="text-[#4A4A45]">{selectedStudy.evolution}</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5 shadow-xs">
                  <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">7. Hard Engineering Challenges</h4>
                  <ul className="space-y-1 text-[11px] text-[#4A4A45]">
                    {selectedStudy.challenges.map((c, i) => (
                      <li key={i}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 8. Decisions & Rationale */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-2.5 shadow-xs">
                <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">8. Architectural Decisions & Rationale</h4>
                <div className="space-y-2">
                  {selectedStudy.decisions.map((d, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[11px] space-y-1">
                      <div className="text-[#1A1A1A] font-semibold">Decision: {d.decision}</div>
                      <div className="text-[#70706B] font-mono text-[10px]">Rationale: {d.rationale}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Results & 10. Evidence */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3 shadow-xs">
                <h4 className="font-mono text-emerald-800 uppercase text-[11px] font-bold">9. Quantified Production Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedStudy.results.map((r, i) => (
                    <div key={i} className="p-3 rounded bg-[#F4F4F1] border border-[#D1D1CD]">
                      <span className="text-[10px] font-mono text-[#70706B] block">{r.metric}</span>
                      <span className="text-base font-bold font-mono text-[#1A1A1A] block">{r.value}</span>
                      <span className="text-[10px] text-[#70706B] mt-1 block">{r.description}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#F0F0EE]">
                  <span className="text-[11px] font-mono text-[#70706B] font-bold uppercase block mb-1">10. Operational Evidence:</span>
                  <p className="text-[#4A4A45] text-xs italic">{selectedStudy.evidence}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-[#D1D1CD] bg-white flex justify-between items-center text-[11px] font-mono text-[#70706B]">
              <span>TRIMINDS CASE AUDIT ID: {selectedStudy.id.toUpperCase()}</span>
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-4 py-1.5 rounded bg-[#1A1A1A] hover:bg-black text-white transition-colors cursor-pointer"
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
