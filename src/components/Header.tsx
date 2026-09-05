import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  FolderGit2, 
  BookOpen, 
  Building2, 
  Mail, 
  Activity, 
  Menu, 
  X, 
  ShieldCheck,
  Code2,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { NavigationTab, Language } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface HeaderProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  onOpenTelemetry: () => void;
  onOpenVocabulary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenTelemetry,
  onOpenVocabulary
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems: { id: NavigationTab; labelKey: any; icon: React.ReactNode }[] = [
    { id: 'home', labelKey: 'nav.home', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'ai-systems', labelKey: 'nav.aiSystems', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'engineering', labelKey: 'nav.engineering', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'projects', labelKey: 'nav.caseStudies', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'research', labelKey: 'nav.research', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'about', labelKey: 'nav.positioning', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'contact', labelKey: 'nav.contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#D1D1CD] bg-[#F4F4F1]/95 backdrop-blur-md">
      {/* Top Telemetry Notification Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#EAEAE6] border-b border-[#D1D1CD] text-[11px] font-mono text-[#70706B]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#1A1A1A] font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t('ticker.systemsNominal')}
          </span>
          <span className="text-[#D1D1CD]">|</span>
          <span>{t('ticker.p99Latency')}: <strong className="text-[#1A1A1A] font-semibold">142ms</strong></span>
          <span className="text-[#D1D1CD]">|</span>
          <span>{t('ticker.guardrail')}: <strong className="text-[#1A1A1A] font-semibold">0.00% LEAKAGE</strong></span>
          <span className="text-[#D1D1CD]">|</span>
          <span>{t('ticker.dataResidency')}: <strong className="text-[#1A1A1A] font-semibold">EU SOVEREIGN</strong></span>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher in top bar */}
          <div className="flex items-center gap-1 bg-white border border-[#D1D1CD] px-1.5 py-0.5 rounded text-[10px]">
            <Globe className="w-3 h-3 text-[#70706B] mr-0.5" />
            {languages.map((lang, idx) => (
              <React.Fragment key={lang.code}>
                {idx > 0 && <span className="text-[#D1D1CD]">|</span>}
                <button
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1 py-0.2 rounded transition-colors cursor-pointer font-mono font-bold ${
                    language === lang.code
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#70706B] hover:text-[#1A1A1A]'
                  }`}
                  title={`Switch language to ${lang.label}`}
                >
                  {lang.label}
                </button>
              </React.Fragment>
            ))}
          </div>

          <span className="text-[#D1D1CD]">•</span>

          <button 
            onClick={onOpenVocabulary}
            className="flex items-center gap-1.5 text-[#70706B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>{t('nav.vocabularyBtn')}</span>
          </button>
          
          <span className="text-[#D1D1CD]">•</span>
          
          <button 
            onClick={onOpenTelemetry}
            className="flex items-center gap-1.5 text-[#70706B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('nav.telemetryBtn')}</span>
          </button>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-baseline space-x-2 cursor-pointer group select-none"
        >
          <span className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">TRIMINDS</span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#1A1A1A] text-white rounded">CORP</span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#70706B] ml-2 tracking-tight">
            ENGINEERING & SYSTEMS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 text-[11px] font-semibold uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1 transition-all flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'
                    : 'text-[#70706B] hover:text-[#1A1A1A] border-b-2 border-transparent'
                }`}
              >
                <span>{t(item.labelKey)}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Language & Status */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 rounded bg-[#1A1A1A] hover:bg-black text-white text-xs font-semibold tracking-tight transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-white/80" />
            <span>{t('nav.auditBtn')}</span>
          </button>
        </div>

        {/* Mobile Actions: Language & Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-0.5 bg-white border border-[#D1D1CD] px-1.5 py-1 rounded text-[10px] font-mono font-bold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-1 py-0.5 rounded transition-colors ${
                  language === lang.code ? 'bg-[#1A1A1A] text-white' : 'text-[#70706B]'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenTelemetry}
            className="p-2 text-[#70706B] hover:text-[#1A1A1A]"
            title="Telemetry"
          >
            <Activity className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1A1A] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D1D1CD] bg-[#F4F4F1] px-6 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#EAEAE6]'
                  }`}
                >
                  {item.icon}
                  <span>{t(item.labelKey)}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D1D1CD] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenVocabulary();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded text-xs font-mono text-[#1A1A1A] bg-white border border-[#D1D1CD] flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-[#1A1A1A]" />
              <span>{t('nav.vocabularyBtn')}</span>
            </button>
            <button
              onClick={() => {
                onOpenTelemetry();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded text-xs font-mono text-[#1A1A1A] bg-white border border-[#D1D1CD] flex items-center gap-2"
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>{t('nav.telemetryBtn')}</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 rounded text-xs font-semibold text-center bg-[#1A1A1A] text-white mt-1 uppercase tracking-wider cursor-pointer"
            >
              {t('nav.auditBtn')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
