import React from 'react';
import { Activity, ShieldCheck, Database, Layers, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import { useEcosystemAudit } from '../hooks/useEcosystemAudit';

interface ObservabilityTickerProps {
  onOpenTelemetry: () => void;
}

export const ObservabilityTicker: React.FC<ObservabilityTickerProps> = ({ onOpenTelemetry }) => {
  const { data, status, isCached } = useEcosystemAudit();

  const total = data?.summary?.totalProjects ?? 17;
  const green = data?.summary?.distribution?.green ?? 11;
  const yellow = data?.summary?.distribution?.yellow ?? 6;
  const red = data?.summary?.distribution?.red ?? 0;
  const executed = data?.summary?.projectsWithExecutionEvidence ?? 11;
  const ciTracked = data?.summary?.projectsWithCiObserved ?? 17;

  return (
    <div className="w-full bg-[#EAEAE6] border-y border-[#D1D1CD] py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#70706B]">
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              status === 'error' ? 'bg-rose-500' : isCached ? 'bg-amber-500' : 'bg-emerald-500'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              status === 'error' ? 'bg-rose-500' : isCached ? 'bg-amber-500' : 'bg-emerald-500'
            }`}></span>
          </span>
          <span className="text-[#1A1A1A] font-semibold tracking-wider uppercase text-[10px]">
            Ecosystem Audit Observability:
          </span>
          {isCached && (
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold">
              CACHED SNAPSHOT
            </span>
          )}
          {status === 'error' && (
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-100 text-rose-900 border border-rose-300 font-bold flex items-center gap-1">
              <AlertTriangle className="w-2.5 h-2.5" /> SOURCE OFFLINE
            </span>
          )}
        </div>

        {/* Dynamic Metric Badges sourced from Authoritative Ecosystem Audit */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-[#1A1A1A]">
          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <Layers className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span className="text-[#70706B]">Audited Systems:</span>
            <span className="font-semibold text-[#1A1A1A]">{total} Projects</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[#70706B]">Audit Status:</span>
            <span className="font-semibold text-emerald-700">🟢 {green}</span>
            <span className="font-semibold text-amber-700">🟡 {yellow}</span>
            <span className="font-semibold text-rose-700">🔴 {red}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[#70706B]">Execution Observed:</span>
            <span className="font-semibold text-emerald-800">{executed}/{total}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#70706B]" />
            <span className="text-[#70706B]">CI Enforced:</span>
            <span className="font-semibold text-[#1A1A1A]">{ciTracked}/{total}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <Database className="w-3.5 h-3.5 text-[#70706B]" />
            <span className="text-[#70706B]">Authoritative Source:</span>
            <span className="font-semibold text-[#1A1A1A]">Ecosystem Audit</span>
          </div>
        </div>

        {/* View Full Telemetry Link */}
        <button
          onClick={onOpenTelemetry}
          className="flex items-center gap-1 text-[11px] text-[#1A1A1A] hover:text-black transition-colors font-semibold cursor-pointer underline underline-offset-4"
        >
          <span>Open Observability Dashboard</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
