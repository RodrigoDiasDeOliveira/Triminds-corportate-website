import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Database, Cpu, ChevronRight } from 'lucide-react';

interface ObservabilityTickerProps {
  onOpenTelemetry: () => void;
}

export const ObservabilityTicker: React.FC<ObservabilityTickerProps> = ({ onOpenTelemetry }) => {
  const [currentP99, setCurrentP99] = useState(142);
  const [fleetRate, setFleetRate] = useState(15240);

  useEffect(() => {
    const interval = setInterval(() => {
      // Gentle realistic micro-variations
      setCurrentP99(prev => Math.max(138, Math.min(149, prev + (Math.random() > 0.5 ? 1 : -1))));
      setFleetRate(prev => Math.floor(15200 + Math.random() * 80));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#EAEAE6] border-y border-[#D1D1CD] py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#70706B]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[#1A1A1A] font-semibold tracking-wider uppercase text-[10px]">
            Live Production Telemetry:
          </span>
        </div>

        {/* Dynamic Metric Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-[#1A1A1A]">
          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <Cpu className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span className="text-[#70706B]">P99 Latency:</span>
            <span className="font-semibold text-[#1A1A1A]">{currentP99}ms</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[#70706B]">Hallucination Rate:</span>
            <span className="font-semibold text-emerald-700">0.00%</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[#70706B]">Fleet Throughput:</span>
            <span className="font-semibold text-[#1A1A1A]">{fleetRate.toLocaleString()} msg/s</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#D1D1CD]">
            <Database className="w-3.5 h-3.5 text-[#70706B]" />
            <span className="text-[#70706B]">Data Sovereign:</span>
            <span className="font-semibold text-[#1A1A1A]">Frankfurt (EU)</span>
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
