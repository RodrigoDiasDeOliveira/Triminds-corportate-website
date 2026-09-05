import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Sparkles, Filter, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { AUDIT_REALITY_DATA, LocalizedAuditItem } from '../data/auditRealityData';

export const AuditRealityMatrix: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'sustained' | 'consolidating' | 'aspirational'>('all');
  const [selectedItem, setSelectedItem] = useState<LocalizedAuditItem | null>(null);

  const items = AUDIT_REALITY_DATA[language] || AUDIT_REALITY_DATA.en;

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.status === filter);

  const sustainedCount = items.filter(i => i.status === 'sustained').length;
  const consolidatingCount = items.filter(i => i.status === 'consolidating').length;
  const aspirationalCount = items.filter(i => i.status === 'aspirational').length;

  return (
    <div className="space-y-8 font-sans">
      {/* Intro Header & Question */}
      <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#EAEAE6] pb-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A] text-[10px] font-mono font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('audit.badge')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
              {t('audit.title')} <span className="font-serif italic font-normal text-[#1A1A1A]">{t('audit.titleHighlight')}</span>
            </h3>
            <p className="text-xs text-[#4A4A45] leading-relaxed">
              {t('audit.subtitle')}
            </p>
          </div>

          {/* High-impact audit statement pill */}
          <div className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] font-mono text-xs space-y-2 lg:max-w-xs shrink-0">
            <span className="text-[10px] uppercase text-[#70706B] block">Methodological Criterion:</span>
            <div className="text-sm font-bold text-[#1A1A1A]">
              {t('audit.question')}
            </div>
            <div className="text-[11px] text-[#4A4A45] leading-snug">
              Every claim tested against GitHub repositories, ADRs, test suites, and vulnerability audits.
            </div>
          </div>
        </div>

        {/* 3 Status Classification Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setFilter(filter === 'sustained' ? 'all' : 'sustained')}
            className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
              filter === 'sustained'
                ? 'bg-emerald-50/80 border-emerald-500 shadow-xs ring-1 ring-emerald-400'
                : 'bg-[#F4F4F1] border-[#D1D1CD] hover:border-[#1A1A1A]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{t('audit.sustained')}</span>
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100/70 text-emerald-900">
                {sustainedCount} items
              </span>
            </div>
            <p className="text-[11px] text-[#4A4A45] mt-1.5 leading-relaxed">
              Tangible, concrete evidence already operational in code, commits, and architecture decisions.
            </p>
          </button>

          <button
            onClick={() => setFilter(filter === 'consolidating' ? 'all' : 'consolidating')}
            className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
              filter === 'consolidating'
                ? 'bg-amber-50/80 border-amber-500 shadow-xs ring-1 ring-amber-400'
                : 'bg-[#F4F4F1] border-[#D1D1CD] hover:border-[#1A1A1A]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>{t('audit.consolidating')}</span>
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100/70 text-amber-900">
                {consolidatingCount} items
              </span>
            </div>
            <p className="text-[11px] text-[#4A4A45] mt-1.5 leading-relaxed">
              Direction and evidence present; transversal standardization actively progressing in roadmap.
            </p>
          </button>

          <button
            onClick={() => setFilter(filter === 'aspirational' ? 'all' : 'aspirational')}
            className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
              filter === 'aspirational'
                ? 'bg-rose-50/80 border-rose-500 shadow-xs ring-1 ring-rose-400'
                : 'bg-[#F4F4F1] border-[#D1D1CD] hover:border-[#1A1A1A]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-800 uppercase">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>{t('audit.aspirational')}</span>
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-100/70 text-rose-900">
                {aspirationalCount} item
              </span>
            </div>
            <p className="text-[11px] text-[#4A4A45] mt-1.5 leading-relaxed">
              Future vision and ambition horizon; intentionally not presented as a completed fact today.
            </p>
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center justify-between pt-2 border-t border-[#EAEAE6]">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Filter className="w-3.5 h-3.5 text-[#70706B]" />
            <span className="text-[#70706B]">Filter View:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#1A1A1A] text-white font-bold'
                  : 'bg-[#F4F4F1] text-[#4A4A45] hover:bg-[#EAEAE6]'
              }`}
            >
              {t('audit.filterAll')} ({items.length})
            </button>
          </div>
          <span className="text-[11px] font-mono text-[#70706B]">
            Showing {filteredItems.length} audited dimensions
          </span>
        </div>
      </div>

      {/* Audited Dimensions Cards / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredItems.map((item) => {
          const isSustained = item.status === 'sustained';
          const isConsolidating = item.status === 'consolidating';
          const isAspirational = item.status === 'aspirational';

          return (
            <div
              key={item.id}
              className="rounded-xl border border-[#D1D1CD] bg-white p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#1A1A1A] transition-colors shadow-xs"
            >
              <div className="space-y-3">
                {/* Header: Concept & Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#70706B] uppercase tracking-wider block">
                      DIMENSION
                    </span>
                    <h4 className="text-base font-bold text-[#1A1A1A] font-sans">
                      {item.concept}
                    </h4>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                      isSustained
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : isConsolidating
                        ? 'bg-amber-50 text-amber-800 border border-amber-300'
                        : 'bg-rose-50 text-rose-800 border border-rose-300'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSustained
                          ? 'bg-emerald-600'
                          : isConsolidating
                          ? 'bg-amber-600'
                          : 'bg-rose-600'
                      }`}
                    ></span>
                    <span>
                      {isSustained ? t('audit.sustained') : isConsolidating ? t('audit.consolidating') : t('audit.aspirational')}
                    </span>
                  </span>
                </div>

                {/* Claim */}
                <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] font-mono text-xs text-[#1A1A1A] leading-relaxed">
                  "{item.claim}"
                </div>

                {/* GitHub Evidence */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold block">
                    GitHub Repositories & Architectural Evidence:
                  </span>
                  <p className="text-xs text-[#4A4A45] leading-relaxed">
                    {item.githubEvidence}
                  </p>
                </div>

                {/* Analysis */}
                <div className="space-y-1 pt-1 border-t border-[#F0F0EE]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-bold block">
                    Audited Analysis:
                  </span>
                  <p className="text-xs text-[#4A4A45] leading-relaxed">
                    {item.analysis}
                  </p>
                </div>
              </div>

              {/* Architectural Verdict */}
              <div className="pt-3 border-t border-[#EAEAE6] flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-[#70706B] truncate max-w-[85%]">
                  <strong className="text-[#1A1A1A]">Verdict:</strong> {item.architecturalVerdict}
                </span>
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                  isSustained ? 'text-emerald-600' : isConsolidating ? 'text-amber-600' : 'text-rose-500'
                }`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Architectural Topology Summary Box: The 5 Core Proven Pillars */}
      <div className="rounded-2xl border border-[#D1D1CD] bg-[#1A1A1A] text-white p-8 sm:p-10 space-y-6 shadow-md">
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
            ARCHITECTURAL SYNTHESIS // V1.0 CONSOLIDATED
          </span>
          <h3 className="text-xl sm:text-3xl font-light tracking-tight">
            {t('audit.summaryTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A09B] leading-relaxed">
            {t('audit.summaryDesc')}
          </p>
        </div>

        {/* 5 Pillars Bento Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-emerald-400 font-bold block">PILLAR 01</span>
            <h5 className="text-sm font-bold text-white font-sans">Problem First</h5>
            <p className="text-[11px] text-[#A0A09B] leading-relaxed">Technology strictly follows the concrete operational barrier.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-emerald-400 font-bold block">PILLAR 02</span>
            <h5 className="text-sm font-bold text-white font-sans">Trust Through Engineering</h5>
            <p className="text-[11px] text-[#A0A09B] leading-relaxed">Reliability is an architectural consequence, not marketing.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-emerald-400 font-bold block">PILLAR 03</span>
            <h5 className="text-sm font-bold text-white font-sans">Evidence Over Claims</h5>
            <p className="text-[11px] text-[#A0A09B] leading-relaxed">Capability proven by public code, ADRs, and vulnerability audits.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-emerald-400 font-bold block">PILLAR 04</span>
            <h5 className="text-sm font-bold text-white font-sans">Continuous Evolution</h5>
            <p className="text-[11px] text-[#A0A09B] leading-relaxed">Baseline → gap diagnosis → architectural redesign → validation.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-emerald-400 font-bold block">PILLAR 05</span>
            <h5 className="text-sm font-bold text-white font-sans">Production-Oriented</h5>
            <p className="text-[11px] text-[#A0A09B] leading-relaxed">Engineered with real-world SLOs and testing from day one.</p>
          </div>
        </div>

        {/* Transversal Foundation Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#A0A09B]">
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-white font-semibold">Transversal Capabilities:</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white">Security by Design</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white">Testing & Verification</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white">Observability Standard</span>
          </div>
          <span className="text-[10px] text-emerald-400">
            AUDITED AUDIT ID: 2026.08-GITHUB-VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
};
