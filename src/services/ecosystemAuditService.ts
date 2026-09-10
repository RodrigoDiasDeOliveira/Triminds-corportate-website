import { EcosystemSnapshot, AuditServiceState, AuditedProject } from '../types/ecosystemAudit';

const CACHE_KEY = 'triminds_ecosystem_audit_cache_v1';
const CACHE_TIMESTAMP_KEY = 'triminds_ecosystem_audit_timestamp_v1';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache TTL

/**
 * Validates the raw payload conforms strictly to EcosystemSnapshot schema
 */
export function validateEcosystemSnapshot(raw: any): raw is EcosystemSnapshot {
  if (!raw || typeof raw !== 'object') return false;
  if (raw.schemaVersion !== '1.0.0') return false;
  if (!raw.summary || typeof raw.summary !== 'object') return false;
  if (!Array.isArray(raw.projects)) return false;
  if (raw.projects.length === 0) return false;

  for (const p of raw.projects) {
    if (!p.id || !p.name || !p.status || !p.dimensions) return false;
    if (!['GREEN', 'YELLOW', 'RED'].includes(p.status)) return false;
    if (!p.dimensions.testSurface || !p.dimensions.executionEvidence || !p.dimensions.security) {
      return false;
    }
  }

  return true;
}

/**
 * Retrieves cached snapshot from sessionStorage if valid and not expired
 */
export function getCachedSnapshot(): { snapshot: EcosystemSnapshot; cachedAt: string } | null {
  try {
    const rawData = sessionStorage.getItem(CACHE_KEY);
    const timestamp = sessionStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!rawData || !timestamp) return null;

    const parsed = JSON.parse(rawData);
    if (validateEcosystemSnapshot(parsed)) {
      return { snapshot: parsed, cachedAt: timestamp };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Stores validated snapshot in sessionStorage with timestamp
 */
export function setCachedSnapshot(snapshot: EcosystemSnapshot): void {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(snapshot));
    sessionStorage.setItem(CACHE_TIMESTAMP_KEY, new Date().toISOString());
  } catch {
    // Ignore storage quota or disabled storage gracefully
  }
}

/**
 * Clears cached audit data
 */
export function clearAuditCache(): void {
  try {
    sessionStorage.removeItem(CACHE_KEY);
    sessionStorage.removeItem(CACHE_TIMESTAMP_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Primary fetcher for Ecosystem Audit authoritative data
 * Conforms strictly to fail-safe, truthful presentation:
 * - Never invents data
 * - Never converts an error into a false GREEN
 * - Clearly indicates live vs cached data
 */
export async function fetchEcosystemSnapshot(forceFresh = false): Promise<AuditServiceState> {
  const auditUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ECOSYSTEM_AUDIT_URL)
    ? (import.meta as any).env.VITE_ECOSYSTEM_AUDIT_URL
    : '/data/ecosystem-audit-snapshot.json';

  // Check cache first if not forced fresh
  if (!forceFresh) {
    const cached = getCachedSnapshot();
    if (cached) {
      const ageMs = Date.now() - new Date(cached.cachedAt).getTime();
      if (ageMs < CACHE_TTL_MS) {
        return {
          data: cached.snapshot,
          status: 'cached',
          error: null,
          lastUpdated: cached.cachedAt,
          isCached: true
        };
      }
    }
  }

  try {
    const response = await fetch(auditUrl, {
      headers: { 'Accept': 'application/json' },
      cache: forceFresh ? 'reload' : 'default'
    });

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: Failed to retrieve authoritative audit data`);
    }

    const json = await response.json();
    if (!validateEcosystemSnapshot(json)) {
      throw new Error('Ecosystem Audit data contract validation failed: invalid schema or missing projects');
    }

    // Save to cache
    setCachedSnapshot(json);

    return {
      data: json,
      status: 'live',
      error: null,
      lastUpdated: json.generatedAt || new Date().toISOString(),
      isCached: false
    };
  } catch (err: any) {
    // Fail-safe: Check if we have stale cache available to inspect with clear warning
    const fallbackCache = getCachedSnapshot();
    if (fallbackCache) {
      return {
        data: fallbackCache.snapshot,
        status: 'cached',
        error: `Live audit source unreachable (${err.message}). Displaying verified cached snapshot from ${new Date(fallbackCache.cachedAt).toLocaleString()}.`,
        lastUpdated: fallbackCache.cachedAt,
        isCached: true
      };
    }

    // No cache and request failed: Truthful fail-safe declaration
    return {
      data: null,
      status: 'error',
      error: `Authoritative Ecosystem Audit service is currently unavailable (${err.message}). In accordance with the Triminds truthfulness policy, no synthetic or unverified data will be displayed.`,
      lastUpdated: null,
      isCached: false
    };
  }
}
