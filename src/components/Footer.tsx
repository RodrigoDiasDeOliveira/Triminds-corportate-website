import React from 'react';
import { Shield, GitBranch, Cpu, Terminal, FileText, ArrowUpRight, Mail } from 'lucide-react';
import { NavigationTab } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenVocabulary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVocabulary }) => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#D1D1CD] bg-[#EAEAE6] text-[#4A4A45] font-sans">
      {/* Transversal Architecture Ribbon */}
      <div className="border-b border-[#D1D1CD] bg-[#F4F4F1] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#70706B] font-bold uppercase tracking-wider">Transversal Tenets:</span>
            <span className="text-[#1A1A1A] font-semibold">Problem First</span>
            <span className="text-[#A0A09B]">→</span>
            <span className="text-[#1A1A1A] font-semibold">Trust Through Engineering</span>
            <span className="text-[#A0A09B]">→</span>
            <span className="text-[#1A1A1A] font-semibold">Evidence Over Claims</span>
            <span className="text-[#A0A09B]">→</span>
            <span className="text-emerald-700 font-bold">Production</span>
          </div>
          <div className="flex items-center gap-4 text-[#70706B] text-[11px]">
            <span>SOVEREIGN CLOUD: EU-WEST-3</span>
            <span>•</span>
            <span>GDPR ART. 28/32 COMPLIANT</span>
            <span>•</span>
            <span className="text-[#1A1A1A] font-semibold">EVIDENCE-BASED AUDIT V1.0</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-lg font-bold">
                T
              </div>
              <span className="font-mono text-base font-bold tracking-wider text-[#1A1A1A]">TRIMINDS</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1A1A1A] text-white">V1.0</span>
            </div>
            
            <p className="text-xs text-[#4A4A45] leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>

            <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] text-[11px] font-mono text-[#4A4A45] space-y-1 shadow-xs">
              <div className="text-[#1A1A1A] font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Foundational Distinction</span>
              </div>
              <p className="text-[#1A1A1A]">
                <strong>Rodrigo</strong> — Founder, Systems Architect & Lead Researcher
              </p>
              <p className="text-[#70706B]">
                <strong>Triminds</strong> — Sovereign Corporate Engineering Platform Infrastructure
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-emerald-800">
                <Mail className="w-3 h-3" />
                <a href="mailto:rodrigo.digau@gmail.com" className="hover:underline font-bold">
                  rodrigo.digau@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* AI Systems Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#1A1A1A]">
              Core Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Trusted Search Core
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Bounded Agentic Loop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Geospatial AI Engine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Zero-Trust Security Gateway
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('engineering')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Observability Gateway
                </button>
              </li>
            </ul>
          </div>

          {/* Case Studies Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#1A1A1A]">
              Case Studies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Trusted Compliance Agent
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Triminds Geo AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Triminds Logistics Platform
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Triminds Security Layer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  SmartImageLab Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Knowledge & Reality Audit Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#1A1A1A]">
              Audit & Knowledge
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left font-bold text-emerald-800 cursor-pointer flex items-center gap-1"
                >
                  <span>Reality Check Audit Matrix</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('research')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  From RAG to Trusted Retrieval
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenVocabulary} 
                  className="hover:text-[#1A1A1A] transition-colors text-left text-[#1A1A1A] font-medium cursor-pointer"
                >
                  Triminds Technical Glossary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Corporate Identity Spec V1.0
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left text-[#1A1A1A] cursor-pointer font-medium"
                >
                  Request Technical Audit
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Direct Contact */}
        <div className="mt-12 pt-6 border-t border-[#D1D1CD] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#70706B]">
          <p>© {new Date().getFullYear()} TRIMINDS SYSTEMS ENGINEERING. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>{t('footer.jurisdiction')}</span>
            <span>•</span>
            <span>Direct: <a href="mailto:rodrigo.digau@gmail.com" className="text-[#1A1A1A] font-bold hover:underline">rodrigo.digau@gmail.com</a></span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              All Claims Audited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
