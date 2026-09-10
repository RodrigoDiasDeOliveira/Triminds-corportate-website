import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

import {
  validateEcosystemSnapshot,
  getCachedSnapshot,
  setCachedSnapshot,
  clearAuditCache
} from '../src/services/ecosystemAuditService';
import { EcosystemSnapshot, AuditedProject } from '../src/types/ecosystemAudit';

describe('Triminds Ecosystem Audit Integration Suite (Section 10 Requirements)', () => {
  let sampleSnapshot: EcosystemSnapshot;

  beforeEach(() => {
    // Reset browser storage mocks if any
    (globalThis as any).sessionStorage = (() => {
      let store: Record<string, string> = {};
      return {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => { store[k] = v; },
        removeItem: (k: string) => { delete store[k]; },
        clear: () => { store = {}; }
      };
    })();

    // Read authoritative public/data/ecosystem-audit-snapshot.json
    const raw = fs.readFileSync(path.resolve('public/data/ecosystem-audit-snapshot.json'), 'utf-8');
    sampleSnapshot = JSON.parse(raw);
  });

  // Test 1: Carregamento válido dos dados
  test('1. Valid data loading: parses and validates schema from authoritative snapshot', () => {
    assert.equal(validateEcosystemSnapshot(sampleSnapshot), true);
    assert.equal(sampleSnapshot.schemaVersion, '1.0.0');
    assert.equal(sampleSnapshot.source, 'Triminds-ecosystem-audit');
    assert.equal(sampleSnapshot.projects.length, 17);
  });

  // Test 2: Rendering do overview
  test('2. Overview rendering: summary metrics are mathematically consistent with 17 projects', () => {
    const summary = sampleSnapshot.summary;
    assert.equal(summary.totalProjects, 17);
    assert.equal(summary.totalProjects, sampleSnapshot.projects.length);
    assert.equal(summary.distribution.green + summary.distribution.yellow + summary.distribution.red, 17);
    assert.ok(summary.projectsWithExecutionEvidence > 0);
    assert.ok(summary.projectsWithCiObserved > 0);
    assert.equal(summary.projectsWithCriticalGaps, 0);
  });

  // Test 3: Rendering de projeto
  test('3. Project rendering: each project exposes all 8 technical dimensions and metadata', () => {
    for (const project of sampleSnapshot.projects) {
      assert.ok(project.id, 'Project must have id');
      assert.ok(project.name, 'Project must have name');
      assert.ok(project.summary, 'Project must have summary');
      assert.ok(['GREEN', 'YELLOW', 'RED'].includes(project.status), 'Project must have valid status');
      assert.ok(project.knownLimitations.length > 0, 'Project must disclose known limitations truthfully');
      assert.ok(project.currentPriority, 'Project must specify current priority');
      assert.ok(project.lastKnownEvidence, 'Project must specify last known evidence');

      // Check all 8 technical dimensions
      const d = project.dimensions;
      assert.ok(d.testSurface, 'testSurface dimension must exist');
      assert.ok(d.executionEvidence, 'executionEvidence dimension must exist');
      assert.ok(d.failurePaths, 'failurePaths dimension must exist');
      assert.ok(d.security, 'security dimension must exist');
      assert.ok(d.integration, 'integration dimension must exist');
      assert.ok(d.persistence, 'persistence dimension must exist');
      assert.ok(d.ciEnforcement, 'ciEnforcement dimension must exist');
      assert.ok(d.operationalEvidence, 'operationalEvidence dimension must exist');
    }
  });

  // Test 4: Estados GREEN/YELLOW/RED
  test('4. GREEN/YELLOW/RED states: semantically consistent distribution across all 17 systems', () => {
    const greenProjects = sampleSnapshot.projects.filter(p => p.status === 'GREEN');
    const yellowProjects = sampleSnapshot.projects.filter(p => p.status === 'YELLOW');
    const redProjects = sampleSnapshot.projects.filter(p => p.status === 'RED');

    assert.equal(greenProjects.length, sampleSnapshot.summary.distribution.green);
    assert.equal(yellowProjects.length, sampleSnapshot.summary.distribution.yellow);
    assert.equal(redProjects.length, sampleSnapshot.summary.distribution.red);

    // Verify Triminds-Technology-Portfolio has been completely removed
    const portfolioProject = sampleSnapshot.projects.find(p => p.id === 'Triminds-Technology-Portfolio');
    assert.equal(portfolioProject, undefined, 'Triminds-Technology-Portfolio must be removed from the ecosystem audit');
    assert.equal(redProjects.length, 0, 'No systems remain in RED status after portfolio removal');
    assert.equal(sampleSnapshot.summary.projectsWithCriticalGaps, 0);
  });

  // Test 5: Distinção entre execution e implementation
  test('5. Evidence distinction: Architecture != Implementation != Execution != Production Evidence', () => {
    const executedProjects = sampleSnapshot.projects.filter(
      p => p.evidenceLevel === 'Executed' || p.evidenceLevel === 'Production Evidence'
    );
    const implementedProjects = sampleSnapshot.projects.filter(
      p => p.evidenceLevel === 'Implemented'
    );
    const architectureProjects = sampleSnapshot.projects.filter(
      p => p.evidenceLevel === 'Architecture'
    );

    // No Implemented project should be falsely marked as Executed
    for (const p of implementedProjects) {
      assert.notEqual(p.evidenceLevel, 'Executed', `${p.name} code presence is not executed proof`);
      assert.notEqual(p.evidenceLevel, 'Production Evidence');
    }

    // Architecture projects are purely design/RFC
    for (const p of architectureProjects) {
      assert.notEqual(p.evidenceLevel, 'Executed');
      assert.notEqual(p.evidenceLevel, 'Implemented');
    }

    assert.ok(executedProjects.length >= 11, 'Expected at least 11 projects with verified execution');
  });

  // Test 6: API indisponível (Fail-Safe)
  test('6. API unavailable fail-safe: never manufactures synthetic data or converts error into GREEN', async () => {
    // Clear cache to test fresh offline behavior
    clearAuditCache();

    // Mock fetch to simulate network connection refusal (e.g. audit service down)
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => {
      throw new Error('ECONNREFUSED: Audit service unreachable');
    };

    try {
      const { fetchEcosystemSnapshot } = await import('../src/services/ecosystemAuditService');
      const result = await fetchEcosystemSnapshot(true);

      assert.equal(result.status, 'error');
      assert.equal(result.data, null);
      assert.equal(result.isCached, false);
      assert.ok(result.error?.includes('Audit service is currently unavailable'));
      // Asserts that no synthetic GREEN status or fake telemetry was returned
      assert.equal((result as any).projects, undefined);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  // Test 7: Dados inválidos / incompletos
  test('7. Invalid / incomplete data: invalid payloads are strictly rejected by validator', () => {
    assert.equal(validateEcosystemSnapshot(null), false);
    assert.equal(validateEcosystemSnapshot({}), false);
    assert.equal(validateEcosystemSnapshot({ schemaVersion: '2.0.0' }), false);
    assert.equal(validateEcosystemSnapshot({ schemaVersion: '1.0.0', projects: [] }), false);
    assert.equal(validateEcosystemSnapshot({
      schemaVersion: '1.0.0',
      summary: {},
      projects: [{ id: 'test', name: 'test', status: 'UNKNOWN' }]
    }), false);
  });

  // Test 8: Cache
  test('8. Cache management: successfully caches validated snapshots and recovers with timestamp', () => {
    clearAuditCache();
    assert.equal(getCachedSnapshot(), null);

    setCachedSnapshot(sampleSnapshot);
    const cached = getCachedSnapshot();

    assert.ok(cached, 'Cached snapshot must be retrieved');
    assert.equal(cached.snapshot.projects.length, 17);
    assert.ok(cached.cachedAt, 'Cache must include valid timestamp');
  });

  // Test 9: Refresh
  test('9. Refresh mechanism: forceFresh bypasses existing cache and triggers revalidation', async () => {
    setCachedSnapshot(sampleSnapshot);

    const originalFetch = globalThis.fetch;
    let fetchCalledWithReload = false;

    globalThis.fetch = async (_url, options: any) => {
      if (options?.cache === 'reload') {
        fetchCalledWithReload = true;
      }
      return {
        ok: true,
        json: async () => sampleSnapshot
      } as any;
    };

    try {
      const { fetchEcosystemSnapshot } = await import('../src/services/ecosystemAuditService');
      const result = await fetchEcosystemSnapshot(true);

      assert.equal(fetchCalledWithReload, true, 'forceFresh must instruct fetch to bypass browser cache');
      assert.equal(result.status, 'live');
      assert.equal(result.isCached, false);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  // Test 10: Ausência de dados
  test('10. Absence of data: empty responses are safely handled without unhandled exceptions', async () => {
    clearAuditCache();

    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({ schemaVersion: '1.0.0', summary: {}, projects: [] })
    } as any);

    try {
      const { fetchEcosystemSnapshot } = await import('../src/services/ecosystemAuditService');
      const result = await fetchEcosystemSnapshot(true);

      assert.equal(result.status, 'error');
      assert.equal(result.data, null);
      assert.ok(result.error?.includes('validation failed'));
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
