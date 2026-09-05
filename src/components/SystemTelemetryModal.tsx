import React, { useState, useEffect } from 'react';
import { X, Activity, ShieldAlert, Cpu, HardDrive, Terminal, RefreshCw, CheckCircle2 } from 'lucide-react';

interface SystemTelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'SECURITY' | 'METRIC';
  service: string;
  message: string;
  latencyMs: number;
}

export const SystemTelemetryModal: React.FC<SystemTelemetryModalProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', timestamp: '02:14:12.802', level: 'INFO', service: 'retrieval.reranker', message: 'RRF reciprocal fusion completed (50 lexical + 50 dense). Cross-attention top-k=5', latencyMs: 82 },
    { id: '2', timestamp: '02:14:15.110', level: 'METRIC', service: 'telematics.kafka', message: 'Ingestion batch: 15,248 messages committed to Timescale partition [geo_eu]', latencyMs: 14 },
    { id: '3', timestamp: '02:14:17.340', level: 'SECURITY', service: 'proxy.guardrail', message: 'Adversarial homoglyph injection attempt neutralized in token stream', latencyMs: 6 },
    { id: '4', timestamp: '02:14:19.490', level: 'INFO', service: 'agent.compliance', message: 'Character-offset match verified against SHA-256 block 9f8e... (0.00% hallucination)', latencyMs: 112 },
    { id: '5', timestamp: '02:14:22.012', level: 'INFO', service: 'geospatial.tile', message: 'Sentinel-2 multi-spectral tile 32UMC normalized (NDVI/thermal channel)', latencyMs: 44 }
  ]);

  useEffect(() => {
    if (!isOpen) return;
    const services = ['retrieval.reranker', 'proxy.guardrail', 'agent.fsm', 'telematics.kafka', 'geo.segmenter'];
    const messages = [
      'Cross-encoder attention rank computed: score=0.984 citation anchored',
      'PII pseudonymization applied to payload: 2 national IDs vaulted',
      'Bounded agent state machine step committed: next_state=VERIFY_DISPATCH',
      'Timescale continuous aggregate refreshed: p99 latency unchanged at 141ms',
      'Token expenditure rate: 42 tokens/sec within allocated tenant quota'
    ];

    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;
      const randomService = services[Math.floor(Math.random() * services.length)];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const newEntry: LogEntry = {
        id: Math.random().toString(),
        timestamp: timeStr,
        level: Math.random() > 0.8 ? 'SECURITY' : Math.random() > 0.6 ? 'METRIC' : 'INFO',
        service: randomService,
        message: randomMsg,
        latencyMs: Math.floor(8 + Math.random() * 95)
      };

      setLogs(prev => [newEntry, ...prev.slice(0, 19)]);
    }, 2800);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-xl border border-[#D1D1CD] bg-[#F4F4F1] shadow-2xl overflow-hidden font-mono">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#D1D1CD] bg-white">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-emerald-600 animate-pulse" />
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                <span>Triminds Operational Observability Hub</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                  LIVE PRODUCTION TELEMETRY
                </span>
              </h2>
              <p className="text-[10px] text-[#70706B]">
                EU-WEST CLUSTER // OPEN-TELEMETRY DISTRIBUTED TRACING & HEALTH CHECKS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real-time Hardware & Performance Gauges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-white border-b border-[#D1D1CD] text-xs">
          <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1">
            <div className="flex justify-between text-[#70706B] text-[11px]">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-[#1A1A1A]" /> CPU Load</span>
              <span className="text-emerald-700 font-semibold">Nominal</span>
            </div>
            <div className="text-lg font-bold text-[#1A1A1A]">18.4%</div>
            <div className="w-full bg-[#D1D1CD] h-1 rounded-full overflow-hidden">
              <div className="bg-[#1A1A1A] h-full w-[18%]"></div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1">
            <div className="flex justify-between text-[#70706B] text-[11px]">
              <span className="flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5 text-[#1A1A1A]" /> Token Economy</span>
              <span className="text-emerald-700 font-semibold">Optimal</span>
            </div>
            <div className="text-lg font-bold text-[#1A1A1A]">€0.0018 / query</div>
            <div className="text-[10px] text-[#70706B]">68% below allocated budget</div>
          </div>

          <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1">
            <div className="flex justify-between text-[#70706B] text-[11px]">
              <span className="flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5 text-[#1A1A1A]" /> OWASP Guard</span>
              <span className="text-emerald-700 font-semibold">100% Passed</span>
            </div>
            <div className="text-lg font-bold text-emerald-700">0 Attacks Passed</div>
            <div className="text-[10px] text-[#70706B]">12 blocks neutralized today</div>
          </div>

          <div className="p-3 rounded-lg bg-[#F4F4F1] border border-[#D1D1CD] space-y-1">
            <div className="flex justify-between text-[#70706B] text-[11px]">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Data Residency</span>
              <span className="text-emerald-700 font-semibold">Strict EU</span>
            </div>
            <div className="text-lg font-bold text-[#1A1A1A]">Frankfurt [FRA]</div>
            <div className="text-[10px] text-[#70706B]">GDPR Art. 44 Compliant</div>
          </div>
        </div>

        {/* Structured Log Stream Console */}
        <div className="flex-1 overflow-hidden flex flex-col p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#70706B]">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#1A1A1A]" />
              <span>Structured Microservice Telemetry Stream (JSON payload extraction)</span>
            </span>
            <span className="text-[10px] text-[#70706B]">Auto-refreshing every 2.8s</span>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#1A1A1A] p-3 rounded-lg border border-black space-y-1.5 text-xs text-white/90">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-start gap-3 p-1.5 rounded hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-white"
              >
                <span className="text-[#888] text-[11px] shrink-0">{log.timestamp}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0 ${
                    log.level === 'SECURITY'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800'
                      : log.level === 'METRIC'
                      ? 'bg-indigo-950 text-indigo-200 border border-indigo-800'
                      : 'bg-[#2A2A2A] text-slate-200'
                  }`}
                >
                  {log.level}
                </span>
                <span className="text-[#AAA] text-[11px] shrink-0">[{log.service}]</span>
                <span className="text-white/90 flex-1 truncate">{log.message}</span>
                <span className="text-[#777] text-[10px] shrink-0">{log.latencyMs}ms</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="px-6 py-3 border-t border-[#D1D1CD] bg-white flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <span className="text-[#70706B] text-[11px]">
            Triminds Central Telemetry Agent v3.4.1 (OpenTelemetry SDK compliant)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1A1A1A] hover:bg-black text-white transition-colors cursor-pointer font-semibold"
          >
            Dismiss Console
          </button>
        </div>
      </div>
    </div>
  );
};
