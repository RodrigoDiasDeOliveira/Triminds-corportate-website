import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Terminal, CheckCircle2, FileCode2 } from 'lucide-react';
import { NavigationTab } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenVocabulary: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenVocabulary }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-[#D1D1CD] bg-[#F4F4F1]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Clean Minimalist Narrative */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D1D1CD] space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-[11px] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-[#1A1A1A]">
              {t('hero.titlePrefix')} <br />
              <span className="italic font-serif font-normal">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
            </h1>

            <p className="text-base sm:text-xl text-[#4A4A45] leading-relaxed max-w-xl font-sans">
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('ai-systems')}
                className="px-5 py-3 rounded bg-[#1A1A1A] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
              >
                <span>{t('hero.exploreSystems')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-3 rounded bg-white hover:bg-[#EAEAE6] text-[#1A1A1A] border border-[#D1D1CD] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>{t('hero.exploreAudit')}</span>
              </button>

              <button
                onClick={onOpenVocabulary}
                className="px-4 py-3 rounded text-xs font-mono text-[#70706B] hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
              >
                <FileCode2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <span>{t('hero.technicalGlossary')}</span>
              </button>
            </div>
          </div>

          {/* Mission & Philosophy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#D1D1CD]">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-2 border-b border-[#D1D1CD] pb-2 text-[#1A1A1A] flex items-center justify-between">
                <span>{t('hero.missionTitle')}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">AUDITED</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed font-sans">
                {t('hero.missionDesc')}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-2 border-b border-[#D1D1CD] pb-2 text-[#1A1A1A] flex items-center justify-between">
                <span>{t('hero.philosophyTitle')}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#EAEAE6] text-[#1A1A1A]">5 PILLARS</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed font-sans">
                {t('hero.philosophyDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Architecture Stack + High-Contrast Reality Block */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white">
          {/* Active Architecture Panel */}
          <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#F0F0EE]">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                  {t('hero.activeArchitecture')}
                </h3>
                <span className="text-[10px] font-mono bg-[#F4F4F1] border border-[#D1D1CD] px-2 py-0.5 text-[#70706B]">
                  {t('hero.engineeringStack')}
                </span>
              </div>

              <ul className="space-y-4 font-mono text-xs">
                <li className="flex items-start justify-between border-b border-[#F0F0EE] pb-2.5">
                  <span className="text-sm font-medium text-[#1A1A1A] font-sans">{t('hero.trustedSearch')}</span>
                  <span className="text-[10px] font-mono text-blue-600 font-semibold">[ACTIVE]</span>
                </li>
                <li className="flex items-start justify-between border-b border-[#F0F0EE] pb-2.5">
                  <span className="text-sm font-medium text-[#1A1A1A] font-sans">{t('hero.geospatialAI')}</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold">[STAGING]</span>
                </li>
                <li className="flex items-start justify-between border-b border-[#F0F0EE] pb-2.5">
                  <span className="text-sm font-medium text-[#1A1A1A] font-sans">{t('hero.boundedAgents')}</span>
                  <span className="text-[10px] font-mono text-[#70706B]">[PRODUCTION]</span>
                </li>
                <li className="flex items-start justify-between border-b border-[#F0F0EE] pb-2.5">
                  <span className="text-sm font-medium text-[#1A1A1A] font-sans">{t('hero.securityLayer')}</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold">[LIVE]</span>
                </li>
              </ul>
            </div>

            {/* Reality Audit Callout */}
            <div 
              className="pt-6 border-t border-[#F0F0EE] cursor-pointer group" 
              onClick={() => onNavigate('about')}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 font-mono">
                    {t('hero.realworldAudit')}
                  </h4>
                  <p className="text-xs font-bold text-[#1A1A1A]">
                    {t('hero.auditedVerdict')}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#70706B] leading-relaxed group-hover:text-[#1A1A1A] transition-colors">
                Every corporate claim mapped to public GitHub code, commits, and security audit records.
              </p>
            </div>
          </div>

          {/* High-Contrast Carbon Status Block */}
          <div className="bg-[#1A1A1A] p-8 sm:p-10 flex flex-col justify-between text-white space-y-6">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[10px] font-mono tracking-widest text-[#70706B] uppercase">
                INFRASTRUCTURE STATUS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                99.98% SLA UPTIME
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-light tracking-tight">Security & Compliance First</div>
                <div className="text-[10px] font-mono text-[#A0A09B]">
                  GDPR COMPLIANT / AES-256 / OWASP LLM DEFENSE
                </div>
              </div>

              {/* Minimalist Graphic Level Meter */}
              <div className="w-20 h-7 flex items-end justify-end space-x-1 shrink-0">
                <div className="w-1.5 h-3 bg-white/20"></div>
                <div className="w-1.5 h-5 bg-white/40"></div>
                <div className="w-1.5 h-2 bg-white/20"></div>
                <div className="w-1.5 h-6 bg-white/60"></div>
                <div className="w-1.5 h-4 bg-white/80"></div>
                <div className="w-1.5 h-7 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Proof Metrics Strip */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 py-8 border-t border-[#D1D1CD] grid grid-cols-2 md:grid-cols-4 gap-8 text-left font-sans">
        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1A1A1A] tracking-tight">0.00%</span>
          <p className="text-xs text-[#1A1A1A] font-semibold">Factual Hallucination Rate</p>
          <p className="text-[11px] text-[#70706B] font-mono">Verified in European compliance audits</p>
        </div>

        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1A1A1A] tracking-tight">4.8M km²</span>
          <p className="text-xs text-[#1A1A1A] font-semibold">Daily Earth Surface Analyzed</p>
          <p className="text-[11px] text-[#70706B] font-mono">Satellite multi-spectral raster processing</p>
        </div>

        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1A1A1A] tracking-tight">€2.4M/yr</span>
          <p className="text-xs text-[#1A1A1A] font-semibold">Client Freight Fuel Reductions</p>
          <p className="text-[11px] text-[#70706B] font-mono">15,000+ telematics events/sec</p>
        </div>

        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1A1A1A] tracking-tight">&lt; 7.5ms</span>
          <p className="text-xs text-[#1A1A1A] font-semibold">Security Proxy Inspection</p>
          <p className="text-[11px] text-[#70706B] font-mono">OWASP prompt injection defense</p>
        </div>
      </div>
    </section>
  );
};
