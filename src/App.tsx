import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ObservabilityTicker } from './components/ObservabilityTicker';
import { AiSystemsSection } from './components/AiSystemsSection';
import { EngineeringSection } from './components/EngineeringSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResearchSection } from './components/ResearchSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { SystemTelemetryModal } from './components/SystemTelemetryModal';
import { VocabularyModal } from './components/VocabularyModal';
import { ProductionGatesModal } from './components/ProductionGatesModal';
import { GdprBanner } from './components/GdprBanner';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { NavigationTab } from './types';
import { ArrowRight, ShieldCheck, Cpu, FolderGit2, BookOpen, Layers, Terminal, Award } from 'lucide-react';
import { CASE_STUDIES } from './data/caseStudiesData';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [telemetryOpen, setTelemetryOpen] = useState(false);
  const [vocabularyOpen, setVocabularyOpen] = useState(false);
  const [gatesOpen, setGatesOpen] = useState(false);
  const { t } = useLanguage();

  // Scroll to top upon tab navigation
  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F1] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white font-sans antialiased">
      {/* Enterprise Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenTelemetry={() => setTelemetryOpen(true)}
        onOpenVocabulary={() => setVocabularyOpen(true)}
        onOpenGates={() => setGatesOpen(true)}
      />

      {/* Persistent Live Observability Ticker */}
      <ObservabilityTicker onOpenTelemetry={() => setTelemetryOpen(true)} />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero 
              onNavigate={handleNavigate}
              onOpenVocabulary={() => setVocabularyOpen(true)}
            />

            {/* Architecture Spotlight */}
            <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D1D1CD] pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#70706B] font-bold uppercase tracking-wider">
                    SYSTEMS BLUEPRINTS // VERIFIABLE RUNTIME
                  </span>
                  <h2 className="text-xl sm:text-3xl font-light text-[#1A1A1A] mt-0.5 tracking-tight">
                    Interactive Architectural <span className="font-serif italic font-normal">Topology</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A4A45] mt-0.5">
                    Explore the formal pipeline stages behind Triminds Trusted Retrieval, Deterministic Agentic Workflows, and Geo-Spatial systems.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate('ai-systems')}
                  className="text-xs font-mono text-[#1A1A1A] hover:text-[#70706B] flex items-center gap-1.5 transition-colors cursor-pointer font-semibold"
                >
                  <span>Full Systems Matrix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <ArchitectureViewer />
            </section>

            {/* Featured Case Studies Preview with Repository Truth */}
            <section className="py-12 bg-[#EAEAE6] border-y border-[#D1D1CD]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#70706B] font-bold uppercase tracking-wider">
                      REPOSITORY TRUTH // AUDITED SYSTEMS
                    </span>
                    <h2 className="text-xl sm:text-3xl font-light text-[#1A1A1A] mt-0.5 tracking-tight">
                      Audited Systems in <span className="font-serif italic font-normal">Active Production</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('projects')}
                    className="text-xs font-mono text-[#1A1A1A] hover:text-[#70706B] flex items-center gap-1.5 transition-colors cursor-pointer font-semibold"
                  >
                    <span>View All Projects & Tech Stacks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CASE_STUDIES.filter(s => s.truthStatus === 'implemented').slice(0, 3).map((study) => (
                    <div
                      key={study.id}
                      className="p-6 rounded-xl bg-white border border-[#D1D1CD] flex flex-col justify-between space-y-4 hover:border-[#1A1A1A] transition-colors shadow-xs"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A] font-semibold">
                            {study.tag}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                            IMPLEMENTED
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1A1A1A] mt-1">
                          {study.title}
                        </h3>
                        <p className="text-xs text-[#4A4A45] line-clamp-3 leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-xs font-mono">
                        <span className="text-emerald-700 font-bold">
                          {study.results[0].metric}: {study.results[0].value}
                        </span>
                        <button
                          onClick={() => handleNavigate('projects')}
                          className="text-[#1A1A1A] hover:underline flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
                        >
                          <span>Inspect Truth Sheet</span>
                          <ArrowRight className="w-3 h-3 text-[#1A1A1A]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Transversal Manifesto Callout */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-[#D1D1CD] bg-white p-8 sm:p-12 space-y-6 shadow-xs">
                <div className="max-w-3xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{t('callout.badge')}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
                    {t('callout.title')} <span className="font-serif italic font-normal">{t('callout.titleHighlight')}</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
                    {t('callout.description')}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => handleNavigate('about')}
                    className="px-5 py-2.5 rounded text-xs font-mono font-semibold bg-[#1A1A1A] hover:bg-black text-white transition-all cursor-pointer shadow-xs flex items-center gap-2"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t('callout.viewEvidence')}</span>
                  </button>
                  <button
                    onClick={() => setGatesOpen(true)}
                    className="px-5 py-2.5 rounded text-xs font-mono font-semibold bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Phase 12 Gates Check (11/11 Passed)</span>
                  </button>
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="px-5 py-2.5 rounded text-xs font-mono font-semibold bg-white hover:bg-[#F4F4F1] text-[#1A1A1A] border border-[#D1D1CD] transition-all cursor-pointer"
                  >
                    {t('callout.requestAudit')}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === 'ai-systems' && <AiSystemsSection />}
        {currentTab === 'engineering' && <EngineeringSection />}
        {currentTab === 'projects' && <CaseStudiesSection />}
        {currentTab === 'research' && <ResearchSection />}
        {currentTab === 'about' && <AboutSection onOpenVocabulary={() => setVocabularyOpen(true)} />}
        {currentTab === 'contact' && <ContactSection />}
      </main>

      {/* Global Modals */}
      <SystemTelemetryModal
        isOpen={telemetryOpen}
        onClose={() => setTelemetryOpen(false)}
        onOpenGates={() => setGatesOpen(true)}
      />

      <VocabularyModal
        isOpen={vocabularyOpen}
        onClose={() => setVocabularyOpen(false)}
      />

      <ProductionGatesModal
        isOpen={gatesOpen}
        onClose={() => setGatesOpen(false)}
      />

      {/* European GDPR Privacy Control Banner */}
      <GdprBanner />

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVocabulary={() => setVocabularyOpen(true)}
        onOpenGates={() => setGatesOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
