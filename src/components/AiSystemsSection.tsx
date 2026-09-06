import React, { useState } from 'react';
import { Cpu, Search, Activity, Globe, Lock, ArrowRight, CheckCircle2, GitBranch } from 'lucide-react';
import { AI_SYSTEMS } from '../data/aiSystemsData';
import { ArchitectureViewer } from './ArchitectureViewer';
import { useLanguage } from '../i18n/LanguageContext';

export const AiSystemsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeSystemId, setActiveSystemId] = useState<string>(AI_SYSTEMS[0].id);

  const activeSystem = AI_SYSTEMS.find(s => s.id === activeSystemId) || AI_SYSTEMS[0];

  const getSystemIcon = (id: string) => {
    switch (id) {
      case 'trusted-search':
        return <Search className="w-4 h-4 text-[#1A1A1A]" />;
      case 'agentic-systems':
        return <Cpu className="w-4 h-4 text-[#1A1A1A]" />;
      case 'geospatial-ai':
        return <Globe className="w-4 h-4 text-[#1A1A1A]" />;
      case 'security-observability':
        return <Lock className="w-4 h-4 text-[#1A1A1A]" />;
      default:
        return <Activity className="w-4 h-4 text-[#1A1A1A]" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t('ai.badge')}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          {t('ai.title')} <span className="font-serif italic font-normal">{t('ai.titleHighlight')}</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          {t('ai.subtitle')}
        </p>
      </div>

      {/* Systems Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AI_SYSTEMS.map((system) => {
          const isSelected = system.id === activeSystemId;
          return (
            <button
              key={system.id}
              onClick={() => setActiveSystemId(system.id)}
              className={`p-5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-white border-[#1A1A1A] shadow-xs'
                  : 'bg-white border-[#D1D1CD] hover:border-[#70706B]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded bg-[#F4F4F1] border border-[#D1D1CD]">
                  {getSystemIcon(system.id)}
                </div>
                <span className="text-[10px] font-mono text-[#70706B] uppercase">SYS-0{AI_SYSTEMS.indexOf(system) + 1}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A1A1A]">{system.name}</h3>
                <p className="text-[11px] text-[#70706B] font-mono line-clamp-2 mt-1">
                  {system.headline}
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#1A1A1A] font-semibold flex items-center gap-1">
                <span>{t('ai.viewSpec')}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active System Detailed Dossier */}
      <div className="rounded-xl border border-[#D1D1CD] bg-white p-6 lg:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#EAEAE6] pb-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#70706B] font-semibold">
              {t('ai.coreSpec')}
            </span>
            <h3 className="text-2xl font-light text-[#1A1A1A] tracking-tight">{activeSystem.name}</h3>
            <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed pt-1">
              {activeSystem.description}
            </p>
          </div>

          {/* Technical Specs Callout */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono min-w-[280px]">
            <div>
              <span className="text-[#70706B] text-[10px] block uppercase">{t('ai.latencySlo')}</span>
              <span className="text-emerald-700 font-semibold">{activeSystem.technicalSpecs.latency}</span>
            </div>
            <div>
              <span className="text-[#70706B] text-[10px] block uppercase">{t('ai.uptime')}</span>
              <span className="text-[#1A1A1A] font-semibold">{activeSystem.technicalSpecs.reliability}</span>
            </div>
            <div>
              <span className="text-[#70706B] text-[10px] block uppercase">{t('ai.residency')}</span>
              <span className="text-[#1A1A1A] font-semibold">{activeSystem.technicalSpecs.dataResidency}</span>
            </div>
            <div>
              <span className="text-[#70706B] text-[10px] block uppercase">{t('ai.guardrail')}</span>
              <span className="text-[#1A1A1A] font-semibold">{activeSystem.technicalSpecs.guardrailType}</span>
            </div>
          </div>
        </div>

        {/* Step-by-Step Architectural Flow */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-[#1A1A1A]" />
            <span>{t('ai.pipeline')}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {activeSystem.architecturalFlow.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2 relative"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1A1A1A] font-bold">STAGE 0{step.step}</span>
                  <span className="text-[10px] text-emerald-700 font-semibold uppercase">{t('ai.verified')}</span>
                </div>
                <h5 className="text-sm font-semibold text-[#1A1A1A]">{step.title}</h5>
                <p className="text-xs text-[#4A4A45] leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2 border-t border-[#D1D1CD] font-mono text-[10px] text-[#70706B]">
                  {t('ai.tech')} <span className="text-[#1A1A1A] font-semibold">{step.technology}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
            {t('ai.hardening')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeSystem.keyCapabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4A45]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Topology Explorer */}
      <div className="pt-4">
        <ArchitectureViewer />
      </div>
    </section>
  );
};
