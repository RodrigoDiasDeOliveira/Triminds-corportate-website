import React, { useState, useEffect } from 'react';
import { Shield, Check, Lock, X } from 'lucide-react';

export const GdprBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('triminds_gdpr_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('triminds_gdpr_consent', 'all');
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('triminds_gdpr_consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-xl border border-[#D1D1CD] bg-white shadow-2xl font-sans text-xs text-[#1A1A1A] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-[#1A1A1A] font-mono text-xs font-bold uppercase">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>European Sovereign Compliance</span>
        </div>
        <button 
          onClick={handleAcceptEssential}
          className="text-[#70706B] hover:text-[#1A1A1A] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="mt-2 text-[#4A4A45] leading-relaxed text-[11px]">
        Triminds strictly adheres to EU GDPR and the EU AI Act. We operate zero third-party commercial trackers. Client telemetry and session diagnostics are processed exclusively within ISO 27001 certified European data centers (Frankfurt/Paris).
      </p>

      <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[11px]">
        <button
          onClick={handleAcceptEssential}
          className="px-3 py-1.5 rounded bg-[#F4F4F1] hover:bg-[#EAEAE6] text-[#1A1A1A] border border-[#D1D1CD] transition-colors cursor-pointer"
        >
          Essential Only
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-3 py-1.5 rounded bg-[#1A1A1A] hover:bg-black text-white font-medium transition-colors cursor-pointer"
        >
          Acknowledge & Confirm
        </button>
      </div>
    </div>
  );
};
