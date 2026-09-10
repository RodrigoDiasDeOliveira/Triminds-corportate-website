import { useState, useEffect, useCallback } from 'react';
import { EcosystemSnapshot, AuditServiceState } from '../types/ecosystemAudit';
import { fetchEcosystemSnapshot } from '../services/ecosystemAuditService';

export function useEcosystemAudit() {
  const [state, setState] = useState<AuditServiceState>({
    data: null,
    status: 'loading',
    error: null,
    lastUpdated: null,
    isCached: false
  });

  const loadData = useCallback(async (forceFresh = false) => {
    setState(prev => ({ ...prev, status: 'loading' }));
    const startTime = Date.now();
    const result = await fetchEcosystemSnapshot(forceFresh);
    
    // Provide a brief tactile confirmation on manual user refresh if network is near-instantaneous
    if (forceFresh) {
      const elapsed = Date.now() - startTime;
      if (elapsed < 300) {
        await new Promise(resolve => setTimeout(resolve, 300 - elapsed));
      }
    }
    
    setState(result);
    return result;
  }, []);

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  const refresh = useCallback(() => {
    return loadData(true);
  }, [loadData]);

  return {
    ...state,
    refresh,
    isLoading: state.status === 'loading'
  };
}
