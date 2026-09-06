import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FolderGit2, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ExternalLink,
  Terminal,
  Activity,
  FileText
} from 'lucide-react';
import { CaseStudy } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface RepositoryTruthModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export const RepositoryTruthModal: React.FC<RepositoryTruthModalProps> = ({ study, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!study) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'implemented':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-mono font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            {t('status.implemented')}
          </span>
        );
      case 'partial':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-300 text-xs font-mono font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            {t('status.partial')}
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-300 text-xs font-mono font-semibold">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            {t('status.planned')}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 font-sans"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-[#D1D1CD] bg-[#F4F4F1] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#D1D1CD] bg-white">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A] font-mono text-[11px] font-semibold">
                {study.tag}
              </span>
              {getStatusBadge(study.truthStatus)}
              <span className="text-xs text-[#70706B] font-mono">• {study.sector}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
              {study.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#70706B] font-mono">
              {study.repository.name} • {study.repository.visibilityBadge}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-8 text-sm">
          {/* Honest Scope Callout */}
          <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t('projects.honestScopeLabel')}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed">
              {study.honestScope}
            </p>
          </div>

          {/* Architecture Verification (Documented vs Implemented vs Presented) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>{t('truthModal.archVerification')}</span>
              </h3>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-mono font-bold">
                {study.realArchitectureVerification.coherenceScore}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-[#70706B] uppercase">
                  {t('truthModal.documented')}
                </div>
                <p className="text-xs text-[#1A1A1A] leading-relaxed">
                  {study.realArchitectureVerification.documented}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-[#70706B] uppercase">
                  {t('truthModal.implemented')}
                </div>
                <p className="text-xs text-[#1A1A1A] leading-relaxed">
                  {study.realArchitectureVerification.implemented}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-[#70706B] uppercase">
                  {t('truthModal.presented')}
                </div>
                <p className="text-xs text-[#1A1A1A] leading-relaxed">
                  {study.realArchitectureVerification.presentedOnSite}
                </p>
              </div>
            </div>
          </div>

          {/* Real Technology Breakdown (Languages, Frameworks, DBs, Cloud, Testing, CI/CD) */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>{t('truthModal.realStack')}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase">Languages</span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.languages.map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase">Frameworks & Engine</span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.frameworks.map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase">Databases & Storage</span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.databases.map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase">Cloud & Infrastructure</span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.cloud.map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase">Testing & Quality</span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.testing.map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase">CI/CD & Observability</span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.ciCd.concat(study.realTechnologies.observability).map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Repository & Quality Metrics */}
          <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>{t('truthModal.repository')}</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#70706B]">{t('truthModal.testSuite')}:</span>
                <p className="font-mono text-[#1A1A1A] font-semibold">{study.repository.testSuiteStatus}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#70706B]">{t('truthModal.ciCd')}:</span>
                <p className="font-mono text-[#1A1A1A] font-semibold">{study.repository.ciCdPipeline}</p>
              </div>
            </div>

            {study.repository.adrReferences.length > 0 && (
              <div className="pt-2 border-t border-[#F0F0EE] space-y-1">
                <span className="text-[11px] font-mono text-[#70706B]">{t('truthModal.adrs')}:</span>
                <div className="flex flex-wrap gap-1.5">
                  {study.repository.adrReferences.map((adr, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[11px] font-mono text-[#1A1A1A]">
                      <FileText className="w-3 h-3 text-[#70706B]" />
                      {adr}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {study.repository.url && (
              <div className="pt-2">
                <a
                  href={study.repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1A1A1A] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Verified GitHub Repository</span>
                </a>
              </div>
            )}
          </div>

          {/* Decisions & Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                {t('truthModal.decisions')}
              </h4>
              <div className="space-y-2.5">
                {study.decisions.map((dec, i) => (
                  <div key={i} className="space-y-0.5 text-xs">
                    <p className="font-semibold text-[#1A1A1A]">↳ {dec.decision}</p>
                    <p className="text-[#70706B] leading-relaxed">{dec.rationale}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                {t('truthModal.results')}
              </h4>
              <div className="space-y-2">
                {study.results.map((res, i) => (
                  <div key={i} className="p-2 rounded bg-[#F4F4F1] border border-[#D1D1CD] flex items-center justify-between text-xs">
                    <span className="text-[#70706B]">{res.metric}</span>
                    <span className="font-mono font-bold text-[#1A1A1A]">{res.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-4 border-t border-[#D1D1CD] bg-white">
          <span className="text-[11px] font-mono text-[#70706B]">
            {t('truthModal.subtitle')}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#1A1A1A] text-white text-xs font-mono font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            {t('truthModal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
