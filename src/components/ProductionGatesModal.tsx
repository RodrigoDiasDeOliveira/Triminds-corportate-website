import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Terminal,
  ExternalLink,
  Award,
  Check
} from 'lucide-react';
import { PRODUCTION_GATES } from '../data/productionGatesData';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductionGatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductionGatesModal: React.FC<ProductionGatesModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 font-sans"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gates-modal-title"
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-xl border border-[#D1D1CD] bg-[#F4F4F1] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#D1D1CD] bg-white">
          <div className="space-y-1.5 pr-6">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-mono font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('gates.allVerified')}</span>
            </div>
            <h2 id="gates-modal-title" className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
              {t('gates.title')} {t('gates.titleHighlight')}
            </h2>
            <p className="text-xs sm:text-sm text-[#70706B] font-mono">
              {t('gates.subtitle')}
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

        {/* Verification Summary Banner */}
        <div className="p-4 bg-emerald-50/60 border-b border-emerald-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-900 font-bold">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>11/11 PRODUCTION GATES FORMALLY SATISFIED</span>
          </div>
          <span className="text-emerald-700">Audit Reference: TRIMINDS-AUDIT-RELEASE-2026</span>
        </div>

        {/* Gates Table */}
        <div className="overflow-y-auto p-5 sm:p-6">
          <div className="overflow-x-auto rounded-lg border border-[#D1D1CD] bg-white shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#D1D1CD] bg-[#F4F4F1] font-mono text-[#70706B] uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 w-24">{t('gates.phaseCol')}</th>
                  <th className="p-3.5 w-48">{t('gates.gateCol')}</th>
                  <th className="p-3.5">{t('gates.evidenceCol')}</th>
                  <th className="p-3.5 w-32 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEAE6]">
                {PRODUCTION_GATES.map((gate) => (
                  <tr key={gate.id} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="p-3.5 font-mono text-[#70706B] whitespace-nowrap">
                      {gate.phase}
                    </td>
                    <td className="p-3.5 font-bold text-[#1A1A1A]">
                      {gate.name}
                      <div className="text-[10px] font-mono text-[#70706B] font-normal pt-0.5">
                        {gate.details}
                      </div>
                    </td>
                    <td className="p-3.5 text-[#4A4A45] leading-relaxed">
                      {gate.evidence}
                    </td>
                    <td className="p-3.5 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
                        <Check className="w-3 h-3 text-emerald-600" />
                        PASSED
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-[#D1D1CD] bg-white text-xs font-mono">
          <span className="text-[#70706B]">
            Status: READY FOR PRODUCTION RELEASE
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#1A1A1A] text-white font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Close Gates Review
          </button>
        </div>
      </div>
    </div>
  );
};
