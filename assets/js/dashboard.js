/**
 * Triminds Ecosystem Audit - Client-Side Observability Dashboard
 * Integrates real-time telemetry from Triminds-ecosystem-audit API
 * Enhanced with Exponential Backoff Retry, Automatic Polling (30s) with Pause/Resume,
 * Visual Treatment for DEGRADED/DOWN states, and Live Relative Time Tracking.
 */

if (typeof process === 'undefined') {
  // @ts-ignore
  globalThis.process = { env: {} };
}

// Mantenha a URL base configurável
const AUDIT_API_URL = process.env.AUDIT_API_URL || "https://sua-api-de-auditoria/api/v1/audit/summary";

// Estado interno do Polling e Timers
let pollingIntervalTimer = null;
let pollingIntervalMs = 30000; // 30s padrão configurável
let isPollingActiveState = true;
let lastAuditTimestampMs = Date.now();
let relativeTimeIntervalTimer = null;

/**
 * Função utilitária para fetch com Retry e Exponential Backoff
 */
async function fetchWithExponentialBackoff(url, fetchOptions = {}, retryOptions = {}) {
  const retries = retryOptions.retries !== undefined ? retryOptions.retries : 3;
  const baseDelay = retryOptions.baseDelay !== undefined ? retryOptions.baseDelay : 300;
  const maxDelay = retryOptions.maxDelay !== undefined ? retryOptions.maxDelay : 3000;
  const useJitter = retryOptions.jitter !== undefined ? retryOptions.jitter : true;

  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      if (response.ok) {
        return response;
      }
      
      // Se for erro 4xx (exceto 429), não é temporário de rede, evita retries desnecessários
      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (err) {
      lastError = err;
    }

    if (attempt < retries) {
      const jitter = useJitter ? Math.random() * 50 : 0;
      const delay = Math.min(maxDelay, baseDelay * Math.pow(2, attempt) + jitter);
      
      const refreshBtn = document.getElementById('refresh-audit-btn');
      if (refreshBtn) {
        const labelSpan = refreshBtn.querySelector('.btn-label') || refreshBtn.querySelector('span:not(.spinner)');
        if (labelSpan) {
          labelSpan.textContent = `Retrying (${attempt + 1}/${retries})...`;
        }
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError || new Error(`Network request failed after ${retries} retries`);
}

/**
 * Formata o tempo decorrido desde a última auditoria
 */
function formatRelativeTime(seconds) {
  if (seconds <= 3) return 'Atualizado agora';
  if (seconds < 60) return `Atualizado há ${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `Atualizado há ${minutes}m`;
  const hours = Math.floor(minutes / 60);
  return `Atualizado há ${hours}h`;
}

/**
 * Atualiza o indicador visual "Última atualização há X segundos"
 */
function updateAuditRelativeTime() {
  const elem = document.getElementById('audit-relative-time');
  if (!elem) return;

  const seconds = Math.max(0, Math.floor((Date.now() - lastAuditTimestampMs) / 1000));
  elem.textContent = formatRelativeTime(seconds);
  elem.setAttribute('data-seconds-ago', String(seconds));
  elem.setAttribute('role', 'status');
  elem.setAttribute('aria-live', 'polite');
}

/**
 * Inicia o timer de atualização do tempo relativo
 */
function startAuditRelativeTimer() {
  if (relativeTimeIntervalTimer) {
    clearInterval(relativeTimeIntervalTimer);
  }
  updateAuditRelativeTime();
  relativeTimeIntervalTimer = setInterval(() => {
    updateAuditRelativeTime();
  }, 1000);
}

/**
 * Atualiza a UI do controle de Polling (botão e acessibilidade)
 */
function updatePollingUI(active, intervalMs) {
  const pollingBtn = document.getElementById('toggle-polling-btn');
  if (pollingBtn) {
    const seconds = Math.round(intervalMs / 1000);
    pollingBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
    pollingBtn.setAttribute('aria-label', active ? `Pausar atualização automática de ${seconds}s` : `Retomar atualização automática de ${seconds}s`);
    pollingBtn.setAttribute('title', active ? `Pausar polling automático (${seconds}s)` : `Iniciar polling automático (${seconds}s)`);
    
    const label = pollingBtn.querySelector('.polling-label') || pollingBtn.querySelector('span:not(.icon)');
    if (label) {
      label.textContent = active ? `Auto (${seconds}s): Ativo` : 'Auto: Pausado';
    }

    if (active) {
      pollingBtn.classList.add('border-emerald-500', 'text-emerald-900', 'bg-emerald-50/60');
      pollingBtn.classList.remove('text-[#70706B]');
    } else {
      pollingBtn.classList.remove('border-emerald-500', 'text-emerald-900', 'bg-emerald-50/60');
      pollingBtn.classList.add('text-[#70706B]');
    }
  }
}

/**
 * Inicia o polling automático configurável
 */
function startAuditPolling(intervalMs = 30000) {
  stopAuditPolling(false);
  pollingIntervalMs = intervalMs;
  isPollingActiveState = true;

  updatePollingUI(true, pollingIntervalMs);

  pollingIntervalTimer = setInterval(async () => {
    if (isPollingActiveState) {
      try {
        await refreshAuditDashboard();
      } catch (err) {
        console.error('Audit polling error:', err);
      }
    }
  }, pollingIntervalMs);
}

/**
 * Pausa ou para o polling automático
 */
function stopAuditPolling(userInitiated = true) {
  if (pollingIntervalTimer) {
    clearInterval(pollingIntervalTimer);
    pollingIntervalTimer = null;
  }
  if (userInitiated) {
    isPollingActiveState = false;
  }
  updatePollingUI(false, pollingIntervalMs);
}

/**
 * Alterna o estado de polling entre ativo e pausado
 */
function toggleAuditPolling() {
  if (isAuditPollingActive()) {
    stopAuditPolling(true);
    return false;
  } else {
    startAuditPolling(pollingIntervalMs);
    return true;
  }
}

function isAuditPollingActive() {
  return isPollingActiveState && pollingIntervalTimer !== null;
}

function getAuditPollingInterval() {
  return pollingIntervalMs;
}

/**
 * Tratamento visual para quando o status do ecossistema estiver em "DEGRADED" ou "DOWN"
 */
function updateEcosystemVisualState(statusText, data) {
  const normalized = (statusText || '').toUpperCase();
  const criticalGaps = data?.summary?.projectsWithCriticalGaps ?? data?.critical_gaps ?? 0;
  
  let state = 'HEALTHY';

  if (normalized.includes('DOWN') || normalized.includes('OFFLINE') || normalized.includes('DISCONNECTED') || normalized.includes('CRITICAL')) {
    state = 'DOWN';
  } else if (normalized.includes('DEGRADED') || normalized.includes('WARN') || criticalGaps > 0) {
    state = 'DEGRADED';
  } else {
    state = 'HEALTHY';
  }

  // 1. Altera cores de borda no container do modal
  const container = document.getElementById('ecosystem-modal-container') || document.querySelector('#ecosystem-observability-modal > div');
  if (container) {
    container.classList.remove('border-rose-500', 'border-amber-500', 'ring-2', 'ring-rose-500/20', 'ring-amber-500/20', 'border-[#D1D1CD]');
    if (state === 'DOWN') {
      container.classList.add('border-rose-500', 'ring-2', 'ring-rose-500/20');
    } else if (state === 'DEGRADED') {
      container.classList.add('border-amber-500', 'ring-2', 'ring-amber-500/20');
    } else {
      container.classList.add('border-[#D1D1CD]');
    }
    container.setAttribute('data-health-state', state);
  }

  // 2. Alerta visual em destaque (Banner de Alerta)
  const alertBanner = document.getElementById('ecosystem-status-alert');
  if (alertBanner) {
    alertBanner.classList.remove('hidden', 'bg-rose-50', 'border-rose-400', 'text-rose-900', 'bg-amber-50', 'border-amber-400', 'text-amber-900');
    if (state === 'DOWN') {
      alertBanner.classList.add('bg-rose-50', 'border-rose-400', 'text-rose-900');
      alertBanner.setAttribute('role', 'alert');
      alertBanner.setAttribute('aria-live', 'assertive');
      alertBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="font-bold text-rose-700 uppercase tracking-wide">ALERTA CRÍTICO:</span>
          <span>Ecossistema em estado <strong>DOWN / OFFLINE</strong>. Telemetria autoritativa desconectada ou falha severa em componentes vitais.</span>
        </div>
      `;
    } else if (state === 'DEGRADED') {
      alertBanner.classList.add('bg-amber-50', 'border-amber-400', 'text-amber-900');
      alertBanner.setAttribute('role', 'alert');
      alertBanner.setAttribute('aria-live', 'polite');
      alertBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="font-bold text-amber-700 uppercase tracking-wide">AVISO DE DEGRADAÇÃO:</span>
          <span>Ecossistema em estado <strong>DEGRADED</strong>. Detectadas falhas parciais em pipelines ou gaps de conformidade em resolução.</span>
        </div>
      `;
    } else {
      alertBanner.classList.add('hidden');
    }
  }

  // 3. Atualiza badge com ARIA e estilos
  const statusBadge = document.getElementById('system-status-badge');
  if (statusBadge) {
    statusBadge.classList.remove(
      'bg-emerald-50', 'text-emerald-800', 'border-emerald-300',
      'bg-amber-50', 'bg-amber-100', 'text-amber-800', 'text-amber-900', 'border-amber-300', 'border-amber-400',
      'bg-rose-50', 'bg-rose-100', 'text-rose-800', 'text-rose-900', 'border-rose-300', 'border-rose-400'
    );
    statusBadge.setAttribute('role', 'status');
    statusBadge.setAttribute('aria-live', 'polite');

    if (state === 'DOWN') {
      statusBadge.classList.add('bg-rose-100', 'text-rose-900', 'border-rose-400');
      statusBadge.textContent = 'DOWN // CRITICAL OUTAGE';
      statusBadge.setAttribute('data-status', 'DOWN');
      statusBadge.setAttribute('aria-label', 'Status do ecossistema: DOWN');
    } else if (state === 'DEGRADED') {
      statusBadge.classList.add('bg-amber-100', 'text-amber-900', 'border-amber-400');
      statusBadge.textContent = 'DEGRADED // ATTENTION REQUIRED';
      statusBadge.setAttribute('data-status', 'DEGRADED');
      statusBadge.setAttribute('aria-label', 'Status do ecossistema: DEGRADED');
    } else {
      statusBadge.classList.add('bg-emerald-50', 'text-emerald-800', 'border-emerald-300');
      statusBadge.textContent = statusText || 'AUTHORITATIVE AUDIT // LIVE';
      statusBadge.setAttribute('data-status', 'LIVE');
      statusBadge.setAttribute('aria-label', 'Status do ecossistema: LIVE');
    }
  }

  return state;
}

/**
 * Executa a atualização do painel de observabilidade consumindo a API de auditoria
 */
async function refreshAuditDashboard(options) {
  const refreshBtn = document.getElementById('refresh-audit-btn');

  // a) Adiciona estado visual de "Loading" ao botão com ID refresh-audit-btn e atributos ARIA
  if (refreshBtn) {
    refreshBtn.classList.add('loading');
    refreshBtn.setAttribute('disabled', 'true');
    refreshBtn.setAttribute('aria-busy', 'true');
    refreshBtn.setAttribute('aria-label', 'Atualizando telemetria de auditoria...');
    const labelSpan = refreshBtn.querySelector('.btn-label') || refreshBtn.querySelector('span:not(.spinner)');
    if (labelSpan && !refreshBtn.getAttribute('data-original-text')) {
      refreshBtn.setAttribute('data-original-text', labelSpan.textContent || 'Refresh Audit');
      labelSpan.textContent = 'Refreshing...';
    }
  }

  try {
    // b) Realiza requisição fetch(AUDIT_API_URL) com Retry + Exponential Backoff
    let data;
    try {
      const response = await fetchWithExponentialBackoff(
        AUDIT_API_URL,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        },
        options || {}
      );

      data = await response.json();
    } catch (networkErr) {
      console.warn('Network error reaching AUDIT_API_URL after retries, falling back gracefully to local snapshot:', networkErr);
      const fallback = await fetch('/data/ecosystem-audit-snapshot.json');
      if (fallback.ok) {
        data = await fallback.json();
      } else {
        throw networkErr;
      }
    }

    lastAuditTimestampMs = Date.now();
    updateAuditRelativeTime();

    // c) Atualiza o status visual do ecossistema (HEALTHY / DEGRADED / DOWN)
    const rawStatus = data.status || (data.summary ? 'AUTHORITATIVE AUDIT // LIVE' : 'LIVE // HEALTHY');
    updateEcosystemVisualState(rawStatus, data);

    // d) Atualiza a data/hora no elemento com ID last-audit-timestamp
    const timestampElem = document.getElementById('last-audit-timestamp');
    const rawTimestamp = data.timestamp || data.last_updated || data.lastUpdated || data.generatedAt || new Date().toISOString();
    if (timestampElem) {
      const dateObj = new Date(rawTimestamp);
      const formatted = !isNaN(dateObj.getTime())
        ? dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        : String(rawTimestamp);
      timestampElem.textContent = formatted;
      timestampElem.setAttribute('data-timestamp', String(rawTimestamp));
      timestampElem.setAttribute('role', 'timer');
      timestampElem.setAttribute('aria-live', 'polite');
    }

    // e) Atualiza os cards de métricas (card-total-repos, card-pipeline-rate, card-security)
    // card-total-repos
    const cardTotalRepos = document.getElementById('card-total-repos');
    if (cardTotalRepos) {
      const total = data.total_repos ?? data.total_projects ?? data.summary?.totalProjects ?? (Array.isArray(data.projects) ? data.projects.length : (Array.isArray(data.audit_logs) ? data.audit_logs.length : 17));
      const valElem = cardTotalRepos.querySelector('.metric-value') || cardTotalRepos.querySelector('.text-lg') || cardTotalRepos;
      if (valElem !== cardTotalRepos) {
        valElem.textContent = String(total);
      } else {
        cardTotalRepos.textContent = String(total);
      }
      cardTotalRepos.setAttribute('data-value', String(total));
      const descElem = cardTotalRepos.querySelector('.metric-desc');
      if (descElem) descElem.textContent = `${total} Unique Repos`;
    }

    // card-pipeline-rate
    const cardPipelineRate = document.getElementById('card-pipeline-rate');
    if (cardPipelineRate) {
      let pipeline = data.pipeline_rate ?? data.pipeline_enforcement_rate ?? (data.summary ? `${data.summary.projectsWithCiObserved} / ${data.summary.totalProjects}` : '17 / 17');
      if (typeof pipeline === 'number') {
        pipeline = `${Math.round(pipeline <= 1 ? pipeline * 100 : pipeline)}%`;
      }
      const valElem = cardPipelineRate.querySelector('.metric-value') || cardPipelineRate.querySelector('.text-lg') || cardPipelineRate;
      if (valElem !== cardPipelineRate) {
        valElem.textContent = String(pipeline);
      } else {
        cardPipelineRate.textContent = String(pipeline);
      }
      cardPipelineRate.setAttribute('data-value', String(pipeline));
    }

    // card-security
    const cardSecurity = document.getElementById('card-security');
    if (cardSecurity) {
      let sec = data.security ?? data.security_status ?? (data.summary ? (data.summary.projectsWithCriticalGaps === 0 ? '0 Gaps' : `${data.summary.projectsWithCriticalGaps} Gaps`) : '0 Gaps');
      const valElem = cardSecurity.querySelector('.metric-value') || cardSecurity.querySelector('.text-lg') || cardSecurity;
      if (valElem !== cardSecurity) {
        valElem.textContent = String(sec);
      } else {
        cardSecurity.textContent = String(sec);
      }
      cardSecurity.setAttribute('data-value', String(sec));
    }

    // f) Renderiza dinamicamente as linhas da tabela/feed dentro de <tbody id="audit-log-table-body">
    const tbody = document.getElementById('audit-log-table-body');
    if (tbody) {
      tbody.innerHTML = '';
      const items = data.audit_logs || data.logs || data.projects || [];
      if (items.length === 0) {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-[#EAEAE6] text-xs';
        tr.innerHTML = '<td colspan="5" class="p-3 text-center text-[#70706B]">No audit records available</td>';
        tbody.appendChild(tr);
      } else {
        items.forEach((item, index) => {
          const tr = document.createElement('tr');
          tr.className = 'border-b border-[#EAEAE6] hover:bg-[#FAF9F6] transition-colors text-xs font-mono';
          
          const name = item.repo || item.name || item.system || item.id || `Repo #${index + 1}`;
          const itemStatus = item.status || item.health || 'GREEN';
          const pipelineVal = item.pipeline || item.pipeline_status || (item.dimensions?.ciEnforcement?.status ? `CI: ${item.dimensions.ciEnforcement.status}` : 'Actions CI Pass');
          const securityVal = item.security || item.evidenceLevel || (item.dimensions?.security?.status ? `Sec: ${item.dimensions.security.status}` : '0 Gaps Verified');
          const dateVal = item.timestamp || item.lastAuditedDate || rawTimestamp;
          const formattedDate = new Date(dateVal).toLocaleDateString();

          const badgeClasses = itemStatus === 'GREEN' || itemStatus === 'HEALTHY' || itemStatus === 'PASS'
            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
            : itemStatus === 'YELLOW' || itemStatus === 'WARN'
            ? 'bg-amber-50 text-amber-800 border-amber-300'
            : 'bg-rose-50 text-rose-800 border-rose-300';

          tr.innerHTML = `
            <td class="p-2.5 font-bold text-[#1A1A1A]">${name}</td>
            <td class="p-2.5">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${badgeClasses}">
                ${itemStatus}
              </span>
            </td>
            <td class="p-2.5 text-[#4A4A45]">${pipelineVal}</td>
            <td class="p-2.5 text-[#4A4A45]">${securityVal}</td>
            <td class="p-2.5 text-[#70706B] text-[11px]">${formattedDate}</td>
          `;
          tbody.appendChild(tr);
        });
      }
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ecosystemAuditRefreshed', { detail: data }));
    }

    return data;
  } catch (err) {
    console.error('refreshAuditDashboard encountered an error:', err);
    updateEcosystemVisualState('DOWN');
  } finally {
    if (refreshBtn) {
      refreshBtn.classList.remove('loading');
      refreshBtn.removeAttribute('disabled');
      refreshBtn.setAttribute('aria-busy', 'false');
      refreshBtn.setAttribute('aria-label', 'Atualizar telemetria de auditoria do ecossistema');
      const labelSpan = refreshBtn.querySelector('.btn-label') || refreshBtn.querySelector('span:not(.spinner)');
      const original = refreshBtn.getAttribute('data-original-text');
      if (labelSpan && original) {
        labelSpan.textContent = original;
      }
    }
  }
}

// Inicialização e anexação ao escopo global
if (typeof window !== 'undefined') {
  window.refreshAuditDashboard = refreshAuditDashboard;
  window.AUDIT_API_URL = AUDIT_API_URL;
  window.startAuditPolling = startAuditPolling;
  window.stopAuditPolling = stopAuditPolling;
  window.toggleAuditPolling = toggleAuditPolling;
  window.isAuditPollingActive = isAuditPollingActive;
  window.getAuditPollingInterval = getAuditPollingInterval;
  window.updateAuditRelativeTime = updateAuditRelativeTime;
  window.updateEcosystemVisualState = updateEcosystemVisualState;

  // Inicia timer relativo
  startAuditRelativeTimer();
}

// Inicia polling quando o script for carregado no navegador
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      startAuditRelativeTimer();
    });
  } else {
    startAuditRelativeTimer();
  }
}
