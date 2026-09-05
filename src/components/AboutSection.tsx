import React, { useState } from 'react';
import { Building2, Shield, CheckCircle2, XCircle, Users, Terminal, Code2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CORPORATE_POSITIONING_I18N } from '../data/corporateData';
import { useLanguage } from '../i18n/LanguageContext';
import { AuditRealityMatrix } from './AuditRealityMatrix';

interface AboutSectionProps {
  onOpenVocabulary: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenVocabulary }) => {
  const { language, t } = useLanguage();
  const corporateData = CORPORATE_POSITIONING_I18N[language] || CORPORATE_POSITIONING_I18N.en;
  const [activeSubTab, setActiveSubTab] = useState<'matrix' | 'positioning'>('matrix');

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <Building2 className="w-3.5 h-3.5" />
          <span>PHASE 0 // CORPORATE IDENTITY & AUDIT SPECIFICATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
          What Triminds <span className="font-serif italic font-normal">Represents</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          Triminds was established to counteract the superficial rush of speculative AI prototypes with uncompromising systems engineering, deterministic verification, and European data sovereignty. Every claim is validated against real code and architecture audits.
        </p>

        {/* Sub-navigation tabs */}
        <div className="flex items-center gap-3 pt-3">
          <button
            onClick={() => setActiveSubTab('matrix')}
            className={`px-4 py-2 rounded text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'matrix'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-white border border-[#D1D1CD] text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GitHub Reality Check Audit Matrix</span>
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">15 AUDITED</span>
          </button>

          <button
            onClick={() => setActiveSubTab('positioning')}
            className={`px-4 py-2 rounded text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'positioning'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-white border border-[#D1D1CD] text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Positioning & Principles</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: GITHUB REALITY CHECK AUDIT MATRIX */}
      {activeSubTab === 'matrix' && (
        <div className="space-y-10 animate-fade-in">
          <AuditRealityMatrix />
        </div>
      )}

      {/* VIEW 2: POSITIONING & PRINCIPLES SPECIFICATION */}
      {activeSubTab === 'positioning' && (
        <div className="space-y-10 animate-fade-in">
          {/* Mission & Vision Header Box */}
          <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-6 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-[#EAEAE6] pb-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold">
                    Corporate Mission (Audited V1.0)
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">
                    SUSTAINED
                  </span>
                </div>
                <p className="font-serif italic text-[#1A1A1A] leading-relaxed text-base sm:text-lg">
                  "{corporateData.mission}"
                </p>
                <p className="text-[11px] text-[#70706B] font-mono">
                  Refined to promise strictly what is proved in production code, avoiding speculative inflation.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold">
                    Corporate Vision (Audited V1.0)
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-bold">
                    ASPIRATIONAL HORIZON
                  </span>
                </div>
                <p className="font-serif italic text-[#1A1A1A] leading-relaxed text-base sm:text-lg">
                  "{corporateData.vision}"
                </p>
                <p className="text-[11px] text-[#70706B] font-mono">
                  Authentic horizon: helping establish a higher engineering standard across the industry.
                </p>
              </div>
            </div>

            {/* 5 Proven Pillars */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                  The 5 Core Proven Pillars (Derived from Repository Audits)
                </h4>
                <span className="text-[10px] font-mono text-emerald-700 font-bold">ALL 5 SUSTAINED IN GITHUB CODE</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {corporateData.provenPillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#1A1A1A]">{pillar.title}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <span className="text-[10px] font-mono text-[#70706B] block italic">
                        {pillar.subtitle}
                      </span>
                      <p className="text-[11px] text-[#4A4A45] font-sans leading-relaxed pt-1">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#D1D1CD] text-[10px] font-mono text-[#70706B]">
                      <strong>Evidence:</strong> {pillar.githubEvidence}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Organizational Delineation: Rodrigo vs Triminds */}
          <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAEAE6] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70706B] font-semibold">
                  ORGANIZATIONAL DELINEATION
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] font-mono mt-0.5">
                  Distinction: Rodrigo & Triminds
                </h3>
              </div>
              <span className="text-xs font-mono text-[#70706B]">SPEC-DOC: {corporateData.specificationDocumentId}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
                <div className="flex items-center gap-2 text-[#1A1A1A] font-mono text-xs font-bold uppercase">
                  <Terminal className="w-4 h-4 text-[#1A1A1A]" />
                  <span>Rodrigo // The Founder & Systems Architect</span>
                </div>
                <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                  {corporateData.differenceBetweenTrimindsAndRodrigo.rodrigo}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
                <div className="flex items-center gap-2 text-[#1A1A1A] font-mono text-xs font-bold uppercase">
                  <Building2 className="w-4 h-4 text-[#1A1A1A]" />
                  <span>Triminds // Corporate Engineering Platform</span>
                </div>
                <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                  {corporateData.differenceBetweenTrimindsAndRodrigo.triminds}
                </p>
              </div>
            </div>
          </div>

          {/* Definition Grid: What is / Builds / Does NOT claim / Serves */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#D1D1CD] space-y-2 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold">
                Definition // 01
              </span>
              <h4 className="text-base font-bold text-[#1A1A1A] font-sans">What Triminds Is</h4>
              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                {corporateData.whatTrimindsIs}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D1D1CD] space-y-2 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold">
                Capabilities // 02
              </span>
              <h4 className="text-base font-bold text-[#1A1A1A] font-sans">What Triminds Builds</h4>
              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                {corporateData.whatTrimindsBuilds}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A] font-bold flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-[#1A1A1A]" />
                Explicit Negative Scope // 03
              </span>
              <h4 className="text-base font-bold text-[#1A1A1A] font-sans">What Triminds Does Not Claim to Be</h4>
              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                {corporateData.whatTrimindsDoesNotClaimToBe}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D1D1CD] space-y-2 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold">
                Target Audience & Purpose // 04
              </span>
              <h4 className="text-base font-bold text-[#1A1A1A] font-sans">Who We Serve & Why We Exist</h4>
              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans">
                <strong className="text-[#1A1A1A]">Audience:</strong> {corporateData.whoTrimindsServes}
              </p>
              <p className="text-xs text-[#70706B] leading-relaxed font-sans pt-1">
                <strong className="text-[#1A1A1A]">Mission Reason:</strong> {corporateData.whyTrimindsExists}
              </p>
            </div>
          </div>

          {/* Distinctive Principles */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#D1D1CD] space-y-4 shadow-xs">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              Distinctive Architectural Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corporateData.distinctivePrinciples.map((principle, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1A1A1A]">{principle.name}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold ${
                      principle.status === 'sustained' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {principle.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A4A45] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vocabulary Callout Banner */}
      <div className="p-8 rounded-xl bg-[#1A1A1A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-base font-bold flex items-center gap-2">
            <Code2 className="w-5 h-5 text-white/80" />
            <span>Triminds Technical Vocabulary Index</span>
          </h3>
          <p className="text-xs text-[#A0A09B] mt-1 max-w-xl">
            Explore rigorous mathematical definitions of Trusted Search, Trust Before Generation, Bounded Agency, and AI Observability standardizing our production contracts.
          </p>
        </div>
        <button
          onClick={onOpenVocabulary}
          className="px-5 py-2.5 rounded bg-white hover:bg-[#F4F4F1] text-[#1A1A1A] text-xs font-mono font-semibold transition-all cursor-pointer shrink-0"
        >
          Open Canonical Vocabulary
        </button>
      </div>
    </section>
  );
};
