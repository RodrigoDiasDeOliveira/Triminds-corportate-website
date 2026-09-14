import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  AUDIT_API_URL, 
  refreshAuditDashboard,
  fetchWithExponentialBackoff,
  startAuditPolling,
  stopAuditPolling,
  toggleAuditPolling,
  isAuditPollingActive,
  getAuditPollingInterval,
  formatRelativeTime,
  updateAuditRelativeTime,
  updateEcosystemVisualState
} from '../src/services/dashboard';

function createMockElement(id: string, tagName: string = 'div') {
  const classes = new Set<string>();
  const attributes: Record<string, string> = {};
  const children: any[] = [];

  const el: any = {
    id,
    tagName: tagName.toUpperCase(),
    textContent: '',
    innerHTML: '',
    classList: {
      add: (cls: string) => classes.add(cls),
      remove: (cls: string) => classes.delete(cls),
      contains: (cls: string) => classes.has(cls)
    },
    setAttribute: (name: string, val: string) => {
      attributes[name] = val;
    },
    removeAttribute: (name: string) => {
      delete attributes[name];
    },
    getAttribute: (name: string) => attributes[name] || null,
    hasAttribute: (name: string) => name in attributes,
    querySelector: (sel: string) => {
      if (sel === '.btn-label' || sel === '.metric-value' || sel === '.metric-desc' || sel === '.polling-label') {
        return createMockElement(sel);
      }
      return null;
    },
    querySelectorAll: (sel: string) => children,
    appendChild: (child: any) => {
      children.push(child);
      el.innerHTML += (child.outerHTML || child.innerHTML || child.textContent || '');
      return child;
    }
  };

  return el;
}

test('Observability Dashboard - Technical Evolution Suite', async (t) => {
  await t.test('1. AUDIT_API_URL configuration is respected', () => {
    assert.ok(typeof AUDIT_API_URL === 'string', 'AUDIT_API_URL should be a string');
    assert.ok(
      AUDIT_API_URL.includes('audit') || AUDIT_API_URL.includes('https://sua-api-de-auditoria/api/v1/audit/summary'),
      'AUDIT_API_URL should point to the configured audit endpoint'
    );
  });

  await t.test('2. Exponential Backoff Retry mechanism', async () => {
    let callCount = 0;
    (globalThis as any).fetch = async () => {
      callCount++;
      if (callCount < 3) {
        // Simula falhas transitórias nos 2 primeiros disparos (ex: HTTP 503)
        return {
          ok: false,
          status: 503,
          statusText: 'Service Unavailable',
          json: async () => ({})
        };
      }
      // Sucesso na 3ª tentativa
      return {
        ok: true,
        status: 200,
        statusText: 'OK',
        json: async () => ({ status: 'RECOVERED', success: true })
      };
    };

    const startTime = Date.now();
    const res = await fetchWithExponentialBackoff('https://mock-api.test', {}, {
      retries: 3,
      baseDelay: 20, // Rápido para execução dos testes
      maxDelay: 100,
      jitter: false
    });

    assert.equal(res.ok, true);
    assert.equal(callCount, 3, 'Deve ter tentado 3 vezes com exponential backoff antes do sucesso');
    const elapsed = Date.now() - startTime;
    assert.ok(elapsed >= 40, `Backoff delay deve ter ocorrido (tempo decorrido: ${elapsed}ms)`);
  });

  await t.test('3. Configurable Automatic Polling (30s default) with Pause/Resume and ARIA', async () => {
    const pollingBtn = createMockElement('toggle-polling-btn', 'button');
    const mockDocument: any = {
      getElementById: (id: string) => id === 'toggle-polling-btn' ? pollingBtn : null,
      createElement: (tagName: string) => createMockElement('', tagName)
    };
    (globalThis as any).document = mockDocument;

    // Inicia polling com 30s
    startAuditPolling(30000);
    assert.equal(isAuditPollingActive(), true, 'Polling deve estar ativo');
    assert.equal(getAuditPollingInterval(), 30000, 'Intervalo padrão deve ser 30000ms');
    assert.equal(pollingBtn.getAttribute('aria-pressed'), 'true');
    assert.ok(pollingBtn.getAttribute('aria-label')?.includes('30s'));

    // Pausa polling
    stopAuditPolling(true);
    assert.equal(isAuditPollingActive(), false, 'Polling deve estar pausado');
    assert.equal(pollingBtn.getAttribute('aria-pressed'), 'false');

    // Alterna polling via toggle
    const toggled = toggleAuditPolling();
    assert.equal(toggled, true);
    assert.equal(isAuditPollingActive(), true);

    // Para o timer de teste
    stopAuditPolling(true);
  });

  await t.test('4. Visual Treatment for DEGRADED and DOWN states', () => {
    const container = createMockElement('ecosystem-modal-container', 'div');
    const alertBanner = createMockElement('ecosystem-status-alert', 'div');
    const statusBadge = createMockElement('system-status-badge', 'span');

    const elements: Record<string, any> = {
      'ecosystem-modal-container': container,
      'ecosystem-status-alert': alertBanner,
      'system-status-badge': statusBadge
    };

    (globalThis as any).document = {
      getElementById: (id: string) => elements[id] || null,
      querySelector: () => container,
      createElement: (tagName: string) => createMockElement('', tagName)
    };

    // Teste 1: Estado DEGRADED
    const degradedState = updateEcosystemVisualState('DEGRADED // ATTENTION REQUIRED', {
      summary: { projectsWithCriticalGaps: 1 }
    });
    assert.equal(degradedState, 'DEGRADED');
    assert.equal(container.classList.contains('border-amber-500'), true, 'Container deve ter borda âmbar');
    assert.equal(container.getAttribute('data-health-state'), 'DEGRADED');
    assert.equal(alertBanner.classList.contains('hidden'), false, 'Alerta de degradação deve estar visível');
    assert.equal(alertBanner.getAttribute('role'), 'alert');
    assert.equal(alertBanner.getAttribute('aria-live'), 'polite');
    assert.ok(alertBanner.innerHTML.includes('DEGRADED') || alertBanner.innerHTML.includes('AVISO'));
    assert.equal(statusBadge.getAttribute('data-status'), 'DEGRADED');

    // Teste 2: Estado DOWN / OFFLINE
    const downState = updateEcosystemVisualState('DOWN // CRITICAL OUTAGE');
    assert.equal(downState, 'DOWN');
    assert.equal(container.classList.contains('border-rose-500'), true, 'Container deve ter borda vermelha (rose)');
    assert.equal(container.getAttribute('data-health-state'), 'DOWN');
    assert.equal(alertBanner.classList.contains('hidden'), false, 'Alerta crítico deve estar visível');
    assert.equal(alertBanner.getAttribute('role'), 'alert');
    assert.equal(alertBanner.getAttribute('aria-live'), 'assertive');
    assert.ok(alertBanner.innerHTML.includes('DOWN') || alertBanner.innerHTML.includes('CRÍTICO'));
    assert.equal(statusBadge.getAttribute('data-status'), 'DOWN');

    // Teste 3: Estado HEALTHY / LIVE
    const liveState = updateEcosystemVisualState('AUTHORITATIVE AUDIT // LIVE');
    assert.equal(liveState, 'HEALTHY');
    assert.equal(container.classList.contains('border-[#D1D1CD]'), true);
    assert.equal(alertBanner.classList.contains('hidden'), true, 'Alerta deve estar oculto em estado saudável');
  });

  await t.test('5. Relative Time format and live display update', () => {
    assert.equal(formatRelativeTime(2), 'Atualizado agora');
    assert.equal(formatRelativeTime(15), 'Atualizado há 15s');
    assert.equal(formatRelativeTime(120), 'Atualizado há 2m');
    assert.equal(formatRelativeTime(7200), 'Atualizado há 2h');

    const relativeTimeElem = createMockElement('audit-relative-time', 'span');
    (globalThis as any).document = {
      getElementById: (id: string) => id === 'audit-relative-time' ? relativeTimeElem : null
    };

    updateAuditRelativeTime();
    assert.ok(relativeTimeElem.textContent.includes('Atualizado'));
    assert.equal(relativeTimeElem.getAttribute('role'), 'status');
    assert.equal(relativeTimeElem.getAttribute('aria-live'), 'polite');
  });

  await t.test('6. Full refreshAuditDashboard execution with ARIA and DOM enhancement', async () => {
    const elements: Record<string, any> = {
      'refresh-audit-btn': createMockElement('refresh-audit-btn', 'button'),
      'system-status-badge': createMockElement('system-status-badge', 'span'),
      'last-audit-timestamp': createMockElement('last-audit-timestamp', 'strong'),
      'audit-relative-time': createMockElement('audit-relative-time', 'span'),
      'card-total-repos': createMockElement('card-total-repos', 'div'),
      'card-pipeline-rate': createMockElement('card-pipeline-rate', 'div'),
      'card-security': createMockElement('card-security', 'div'),
      'audit-log-table-body': createMockElement('audit-log-table-body', 'tbody'),
      'ecosystem-modal-container': createMockElement('ecosystem-modal-container', 'div'),
      'ecosystem-status-alert': createMockElement('ecosystem-status-alert', 'div')
    };

    const mockDocument: any = {
      getElementById: (id: string) => elements[id] || null,
      querySelector: (sel: string) => elements['ecosystem-modal-container'],
      createElement: (tagName: string) => createMockElement('', tagName)
    };

    const mockWindow: any = {
      dispatchEvent: () => true
    };

    (globalThis as any).window = mockWindow;
    (globalThis as any).document = mockDocument;
    (globalThis as any).CustomEvent = class {
      type: string;
      detail: any;
      constructor(type: string, opts?: any) {
        this.type = type;
        this.detail = opts?.detail;
      }
    };

    const mockApiResponse = {
      status: "AUTHORITATIVE AUDIT // LIVE",
      timestamp: "2026-09-14T14:30:00.000Z",
      total_repos: 17,
      pipeline_rate: "100%",
      security: "0 Gaps (100% Compliant)",
      projects: [
        {
          id: "Triminds-ecosystem-audit",
          name: "Triminds-ecosystem-audit",
          status: "GREEN",
          evidenceLevel: "Executed",
          lastAuditedDate: "2026-09-14T00:00:00.000Z",
          dimensions: {
            ciEnforcement: { status: "GREEN" },
            security: { status: "GREEN" }
          }
        }
      ]
    };

    (globalThis as any).fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => mockApiResponse
    });

    const btn = elements['refresh-audit-btn'];
    const result = await refreshAuditDashboard({ retries: 1, baseDelay: 10 });

    assert.ok(result, 'Expected data returned from refreshAuditDashboard');
    assert.equal(btn.classList.contains('loading'), false, 'Loading class should be removed in finally');
    assert.equal(btn.getAttribute('aria-busy'), 'false', 'aria-busy deve ser false após finalização');
    assert.ok(btn.getAttribute('aria-label')?.includes('Atualizar'));

    const statusBadge = elements['system-status-badge'];
    assert.equal(statusBadge.getAttribute('role'), 'status');
    assert.equal(statusBadge.getAttribute('aria-live'), 'polite');
    assert.equal(statusBadge.getAttribute('data-status'), 'LIVE');

    const relativeElem = elements['audit-relative-time'];
    assert.ok(relativeElem.textContent.includes('Atualizado'));

    const cardTotal = elements['card-total-repos'];
    assert.equal(cardTotal.getAttribute('data-value'), '17');

    const cardPipeline = elements['card-pipeline-rate'];
    assert.equal(cardPipeline.getAttribute('data-value'), '100%');

    const tbody = elements['audit-log-table-body'];
    assert.ok(tbody.innerHTML.includes('Triminds-ecosystem-audit'));
  });
});
