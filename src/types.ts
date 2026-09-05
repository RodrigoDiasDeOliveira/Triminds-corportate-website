export type NavigationTab = 
  | 'home' 
  | 'ai-systems' 
  | 'engineering' 
  | 'projects' 
  | 'research' 
  | 'about' 
  | 'contact';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  sector: string;
  whatItProves: string;
  problem: string;
  context: string;
  architecture: {
    overview: string;
    components: string[];
    diagramText?: string;
  };
  engineering: string[];
  technology: string[];
  evolution: string;
  challenges: string[];
  decisions: {
    decision: string;
    rationale: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  evidence: string;
  image?: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  abstract: string;
  keyTakeaways: string[];
  bodySections: {
    heading: string;
    content: string;
    codeSnippet?: string;
  }[];
  conclusions: string;
  doiOrReference: string;
}

export interface AISystem {
  id: string;
  name: string;
  headline: string;
  description: string;
  keyCapabilities: string[];
  technicalSpecs: {
    latency: string;
    reliability: string;
    dataResidency: string;
    guardrailType: string;
  };
  architecturalFlow: {
    step: number;
    title: string;
    description: string;
    technology: string;
  }[];
}

export interface VocabularyTerm {
  term: string;
  shortDefinition: string;
  fullNarrative: string;
  contrastingAntiPattern: string;
  productionImplementation: string;
}

export interface TelemetryMetric {
  name: string;
  value: string;
  unit: string;
  change: string;
  status: 'nominal' | 'optimal' | 'verified';
}

export type Language = 'en' | 'pt' | 'es';

export type EvidenceStatus = 'sustained' | 'consolidating' | 'aspirational';

export interface AuditRealityItem {
  id: string;
  concept: string;
  status: EvidenceStatus;
  claim: string;
  githubEvidence: string;
  analysis: string;
  architecturalVerdict: string;
}
