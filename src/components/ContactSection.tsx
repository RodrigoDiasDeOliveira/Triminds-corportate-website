import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Send, Clock, ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    domain: 'Architecture Audit & Verification',
    scale: '< 100k queries / month (Pilot / Evaluation)',
    message: '',
    gdprConsent: true,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rodrigo.digau@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoHref = () => {
    const subject = encodeURIComponent(`[Triminds Architecture Audit] ${formData.domain} - ${formData.company || 'Enterprise'}`);
    const body = encodeURIComponent(
`Contact Person: ${formData.name || 'Not specified'}
Enterprise Email: ${formData.email || 'Not specified'}
Organization: ${formData.company || 'Not specified'}
Engagement Scope: ${formData.domain}
Operational Scale: ${formData.scale}

Technical Objective & Architectural Context:
${formData.message || 'Please assess our architecture requirements.'}

---
Transmitted via Triminds Corporate Gateway (DOC-TRIMINDS-POSITIONING-V1.0)`
    );
    return `mailto:rodrigo.digau@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Attempt automatic mailto trigger for seamless client dispatch
    const link = document.createElement('a');
    link.href = getMailtoHref();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#D1D1CD] bg-[#F4F4F1] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#1A1A1A]">
            {t('contact.title')} <span className="italic font-serif font-normal">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Architect Channel & Protocol */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Architect Direct Channel Card */}
            <div className="p-6 rounded-xl border border-[#D1D1CD] bg-white space-y-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#70706B] block">
                    {t('contact.directChannel')}
                  </span>
                  <div className="text-base font-bold text-[#1A1A1A] mt-0.5">
                    Rodrigo Digau
                  </div>
                  <span className="text-xs text-[#70706B]">
                    {t('contact.primaryRole')}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-lg">
                  R
                </div>
              </div>

              {/* Verified Direct Email Box */}
              <div className="p-3.5 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-2">
                <span className="text-[10px] font-mono text-[#70706B] uppercase block">
                  Official Communication Endpoint
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:rodrigo.digau@gmail.com"
                    className="text-sm font-mono font-bold text-[#1A1A1A] hover:underline flex items-center gap-1.5 truncate"
                  >
                    <span>rodrigo.digau@gmail.com</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[#70706B]" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-white hover:bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] transition-colors cursor-pointer shrink-0"
                    title={t('contact.copyEmail')}
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold block animate-fade-in">
                    {t('contact.emailCopied')}
                  </span>
                )}
              </div>

              {/* Direct Mail Action Button */}
              <a
                href="mailto:rodrigo.digau@gmail.com?subject=[Triminds%20Architecture%20Inquiry]&body=Hello%20Rodrigo,%0A%0AWe%20would%20like%20to%20schedule%20an%20architecture%20review%20with%20Triminds.%0A%0AOrganization:%0AScope:"
                className="w-full py-2.5 px-4 rounded border border-[#1A1A1A] bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t('contact.directEmailBtn')}</span>
              </a>
            </div>

            {/* Protocol Guarantees */}
            <div className="p-6 rounded-xl border border-[#D1D1CD] bg-white space-y-4 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] font-mono">
                {t('contact.protocolTitle')}
              </h4>

              <div className="space-y-3 text-xs text-[#4A4A45]">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#1A1A1A]">{t('contact.protocolDirectAccess')}</strong> {t('contact.protocolDirectAccessDesc')}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#1A1A1A]">{t('contact.protocolNda')}</strong> {t('contact.protocolNdaDesc')}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#70706B] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#1A1A1A]">{t('contact.protocolSla')}</strong> {t('contact.protocolSlaDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#D1D1CD] shadow-xs">
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {t('contact.formSuccessTitle')}
                  </h3>
                  <p className="text-xs text-[#4A4A45] max-w-md mx-auto leading-relaxed">
                    {t('contact.formSuccessDesc')}
                  </p>
                </div>

                {/* Direct Mailto Fallback Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getMailtoHref()}
                    className="px-5 py-2.5 rounded bg-[#1A1A1A] hover:bg-black text-white text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t('contact.openEmailClient')}</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded bg-[#F4F4F1] hover:bg-[#EAEAE6] border border-[#D1D1CD] text-xs font-mono text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    {t('contact.formSubmitAnother')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#70706B] font-mono text-[11px] block">{t('contact.fullName')}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Helena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#70706B] font-mono text-[11px] block">{t('contact.email')}</label>
                    <input
                      type="email"
                      required
                      placeholder="helena@enterprise.eu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#70706B] font-mono text-[11px] block">{t('contact.company')}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. European Logistics Consortium"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#70706B] font-mono text-[11px] block">{t('contact.scope')}</label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans text-xs"
                    >
                      <option>Architecture Audit & Verification</option>
                      <option>Trusted Search Core Deployment</option>
                      <option>Bounded Agentic Automation</option>
                      <option>Geospatial AI & Satellite Analytics</option>
                      <option>Zero-Trust Security & Observability Gateway</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#70706B] font-mono text-[11px] block">{t('contact.scale')}</label>
                  <select
                    value={formData.scale}
                    onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans text-xs"
                  >
                    <option>&lt; 100k queries / month (Pilot / Evaluation)</option>
                    <option>100k - 1M queries / month (Production Tier 1)</option>
                    <option>1M - 10M queries / month (High Throughput Enterprise)</option>
                    <option>&gt; 10M queries / month (Critical Infrastructure)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#70706B] font-mono text-[11px] block">{t('contact.objective')}</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t('contact.objectivePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans text-xs"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    checked={formData.gdprConsent}
                    onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                    className="rounded border-[#D1D1CD] text-[#1A1A1A] focus:ring-0 cursor-pointer"
                    required
                  />
                  <label htmlFor="gdpr" className="text-[#70706B] text-[11px] cursor-pointer">
                    {t('contact.gdprConsent')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded text-xs font-mono font-semibold bg-[#1A1A1A] hover:bg-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('contact.submitBtn')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
