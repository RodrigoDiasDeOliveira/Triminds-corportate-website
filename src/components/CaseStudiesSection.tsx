import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowRight, 
  Award, 
  FileText, 
  Code2, 
  ShieldCheck,
  Search,
  ExternalLink
} from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { CaseStudy, ProjectCategory } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { RepositoryTruthModal } from './RepositoryTruthModal';

export const CaseStudiesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryFilters = [
    { id: 'all', label: t('projects.categoryAll') },
    { id: 'what-we-built', label: t('projects.categoryBuilt') },
    { id: 'what-we-are-exploring', label: t('projects.categoryExploring') },
    { id: 'what-is-planned', label: t('projects.categoryPlanned') }
  ];

  const filteredStudies = CASE_STUDIES.filter(study => {
    // Category filter
    if (activeCategory !== 'all' && study.category !== activeCategory) {
      return false;
    }
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = study.title.toLowerCase().includes(q);
      const matchTag = study.tag.toLowerCase().includes(q);
      const matchTech = study.realTechnologies.languages.concat(study.realTechnologies.frameworks).some(tech => tech.toLowerCase().includes(q));
      if (!matchTitle && !matchTag && !matchTech) return false;
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'implemented':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-mono font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {t('status.implemented')}
          </span>
        );
      case 'partial':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300 text-[11px] font-mono font-bold">
            <AlertCircle className="w-3 h-3 text-amber-600" />
            {t('status.partial')}
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-300 text-[11px] font-mono font-bold">
            <Clock className="w-3 h-3 text-blue-600" />
            {t('status.planned')}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>{t('projects.badge')}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          {t('projects.title')} <span className="font-serif italic font-normal">{t('projects.titleHighlight')}</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F4F1] rounded-lg border border-[#D1D1CD]">
          {categoryFilters.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                  : 'text-[#70706B] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#70706B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech (Java, Python, TypeScript, Spring Boot, YOLOv8)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-[#D1D1CD] bg-white text-xs font-mono text-[#1A1A1A] placeholder-[#70706B] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-xl border border-[#D1D1CD] bg-white hover:border-[#1A1A1A] transition-all p-6 flex flex-col justify-between space-y-5 group shadow-xs"
          >
            <div className="space-y-3.5">
              {/* Top Meta: Tag & Status Badge */}
              <div className="flex items-center justify-between text-xs gap-2">
                <span className="text-[#1A1A1A] font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD]">
                  {study.tag}
                </span>
                {getStatusBadge(study.truthStatus)}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] font-sans group-hover:text-black">
                  {study.title}
                </h3>
                <p className="text-xs text-[#70706B] font-mono pt-0.5">
                  {study.sector}
                </p>
              </div>

              <p className="text-xs text-[#4A4A45] leading-relaxed font-sans line-clamp-3">
                {study.subtitle}
              </p>

              {/* What This Proves Callout */}
              <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A] font-bold">
                  <Award className="w-3 h-3 text-emerald-600" />
                  <span>{t('projects.whatItProves')}:</span>
                </div>
                <p className="text-xs text-[#4A4A45] font-sans leading-relaxed">
                  {study.whatItProves}
                </p>
              </div>

              {/* Real Stack Snippet */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono text-[#70706B] uppercase font-bold flex items-center gap-1">
                  <Code2 className="w-3 h-3" />
                  <span>Verified Stack:</span>
                </span>
                <div className="flex flex-wrap gap-1">
                  {study.realTechnologies.languages.concat(study.realTechnologies.frameworks.slice(0, 2)).map((tItem, idx) => (
                    <span 
                      key={idx} 
                      className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[10px] font-mono text-[#1A1A1A]"
                    >
                      {tItem}
                    </span>
                  ))}
                  {study.realTechnologies.databases.length > 0 && (
                    <span className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[10px] font-mono text-[#70706B]">
                      {study.realTechnologies.databases[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Results Preview */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0F0EE]">
                {study.results.slice(0, 2).map((res, i) => (
                  <div key={i} className="p-2 rounded bg-[#F4F4F1] border border-[#D1D1CD]">
                    <div className="text-[10px] text-[#70706B] font-mono">{res.metric}</div>
                    <div className="text-xs font-bold text-[#1A1A1A] font-mono">{res.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action: Open Truth Sheet */}
            <button
              onClick={() => setSelectedStudy(study)}
              className="w-full mt-2 py-2 px-3 rounded-lg bg-[#F4F4F1] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#D1D1CD] hover:border-[#1A1A1A] text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#1A1A1A] group-hover:text-white"
            >
              <span>{t('projects.viewTruthSheet')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {filteredStudies.length === 0 && (
        <div className="p-12 text-center rounded-xl border border-dashed border-[#D1D1CD] bg-white space-y-2">
          <p className="text-sm font-mono text-[#70706B]">No projects found matching the filter criteria.</p>
          <button 
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="text-xs font-mono text-[#1A1A1A] underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Repository Truth Modal */}
      <RepositoryTruthModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
};
