import { Language } from '../types';

export type TranslationKey = 
  // Nav
  | 'nav.home'
  | 'nav.aiSystems'
  | 'nav.engineering'
  | 'nav.caseStudies'
  | 'nav.research'
  | 'nav.positioning'
  | 'nav.contact'
  | 'nav.auditBtn'
  | 'nav.telemetryBtn'
  | 'nav.vocabularyBtn'
  | 'nav.auditMatrixBtn'
  // Header ticker
  | 'ticker.systemsNominal'
  | 'ticker.p99Latency'
  | 'ticker.guardrail'
  | 'ticker.dataResidency'
  // Hero
  | 'hero.badge'
  | 'hero.titlePrefix'
  | 'hero.titleHighlight'
  | 'hero.titleSuffix'
  | 'hero.subtitle'
  | 'hero.exploreSystems'
  | 'hero.viewStudies'
  | 'hero.technicalGlossary'
  | 'hero.missionTitle'
  | 'hero.missionDesc'
  | 'hero.philosophyTitle'
  | 'hero.philosophyDesc'
  | 'hero.activeArchitecture'
  | 'hero.engineeringStack'
  | 'hero.trustedSearch'
  | 'hero.geospatialAI'
  | 'hero.boundedAgents'
  | 'hero.securityLayer'
  | 'hero.realworldAudit'
  | 'hero.auditedVerdict'
  | 'hero.exploreAudit'
  // Transversal Callout
  | 'callout.badge'
  | 'callout.title'
  | 'callout.titleHighlight'
  | 'callout.description'
  | 'callout.requestAudit'
  | 'callout.readPositioning'
  | 'callout.viewVocabulary'
  | 'callout.viewEvidence'
  // Contact
  | 'contact.badge'
  | 'contact.title'
  | 'contact.titleHighlight'
  | 'contact.subtitle'
  | 'contact.protocolTitle'
  | 'contact.protocolDirectAccess'
  | 'contact.protocolDirectAccessDesc'
  | 'contact.protocolNda'
  | 'contact.protocolNdaDesc'
  | 'contact.protocolSla'
  | 'contact.protocolSlaDesc'
  | 'contact.directChannel'
  | 'contact.primaryRole'
  | 'contact.encryptedNotice'
  | 'contact.formSuccessTitle'
  | 'contact.formSuccessDesc'
  | 'contact.formSubmitAnother'
  | 'contact.fullName'
  | 'contact.email'
  | 'contact.company'
  | 'contact.scope'
  | 'contact.scale'
  | 'contact.objective'
  | 'contact.objectivePlaceholder'
  | 'contact.gdprConsent'
  | 'contact.submitBtn'
  | 'contact.directEmailBtn'
  | 'contact.openEmailClient'
  | 'contact.copyEmail'
  | 'contact.emailCopied'
  // Reality Audit
  | 'audit.badge'
  | 'audit.title'
  | 'audit.titleHighlight'
  | 'audit.subtitle'
  | 'audit.question'
  | 'audit.sustained'
  | 'audit.consolidating'
  | 'audit.aspirational'
  | 'audit.filterAll'
  | 'audit.conceptCol'
  | 'audit.evidenceCol'
  | 'audit.statusCol'
  | 'audit.analysisCol'
  | 'audit.verdictCol'
  | 'audit.summaryTitle'
  | 'audit.summaryDesc'
  // Footer
  | 'footer.desc'
  | 'footer.specDoc'
  | 'footer.jurisdiction'
  | 'footer.allRights';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.aiSystems': 'AI Systems',
    'nav.engineering': 'Engineering',
    'nav.caseStudies': 'Case Studies',
    'nav.research': 'Research',
    'nav.positioning': 'Positioning',
    'nav.contact': 'Contact',
    'nav.auditBtn': 'Architecture Audit',
    'nav.telemetryBtn': 'Telemetry Hub',
    'nav.vocabularyBtn': 'Vocabulary',
    'nav.auditMatrixBtn': 'Reality Audit Matrix',

    // Header ticker
    'ticker.systemsNominal': 'SYSTEMS NOMINAL // EU-WEST',
    'ticker.p99Latency': 'P99 LATENCY',
    'ticker.guardrail': 'HALLUCINATION GUARD',
    'ticker.dataResidency': 'DATA RESIDENCY',

    // Hero
    'hero.badge': 'POSITIONING & SYSTEMS ARCHITECTURE // AUDITED V1.0',
    'hero.titlePrefix': 'Engineering',
    'hero.titleHighlight': 'Trusted',
    'hero.titleSuffix': 'AI Systems.',
    'hero.subtitle': 'We transform complex technical challenges into robust architectural narratives. Triminds builds intelligent systems that are observable, mathematically bounded, and engineered for European production sovereignty.',
    'hero.exploreSystems': 'Explore AI Systems',
    'hero.viewStudies': 'Case Studies',
    'hero.technicalGlossary': 'Technical Glossary',
    'hero.missionTitle': 'Corporate Mission (V1.0)',
    'hero.missionDesc': 'To engineer intelligent systems that address real-world problems through reliable, secure, and measurable technology.',
    'hero.philosophyTitle': 'Core Philosophy',
    'hero.philosophyDesc': 'Problem first. Technology second. We do not gamble on black-box opacity; we engineer deterministic evolution through verified evidence.',
    'hero.activeArchitecture': 'Active Architecture',
    'hero.engineeringStack': 'ENGINEERING STACK',
    'hero.trustedSearch': 'Trusted Search Retrieval',
    'hero.geospatialAI': 'Geospatial AI Segmentation',
    'hero.boundedAgents': 'Bounded Agentic State-Machines',
    'hero.securityLayer': 'Zero-Trust Security Gateway',
    'hero.realworldAudit': 'GitHub Reality Check Audit',
    'hero.auditedVerdict': '11 Proven Dimensions · 0 Marketing Slogans',
    'hero.exploreAudit': 'View Audit Matrix',

    // Transversal Callout
    'callout.badge': 'European Sovereignty & Deterministic Engineering',
    'callout.title': 'Beyond Experimental Chatbots:',
    'callout.titleHighlight': 'Engineering Predictable Enterprise Foundations.',
    'callout.description': 'We reject the doctrine that generative AI must remain an opaque, unpredictable black box. By embedding models inside deterministic validation fences, cross-encoder rerankers, and continuous telemetry pipelines, we deliver intelligent systems that meet the rigorous standards of aerospace, logistics, and European compliance.',
    'callout.requestAudit': 'Request Technical Audit',
    'callout.readPositioning': 'Read Corporate Positioning',
    'callout.viewVocabulary': 'View Canonical Vocabulary',
    'callout.viewEvidence': 'Explore Audit Matrix',

    // Contact
    'contact.badge': 'ENTERPRISE ENGAGEMENT // ARCHITECTURE AUDIT',
    'contact.title': 'Initiate a Technical',
    'contact.titleHighlight': 'Assessment',
    'contact.subtitle': 'Triminds engages directly at the architectural level. We evaluate retrieval failure modes, prompt injection vulnerabilities, token economics, and compliance feasibility.',
    'contact.protocolTitle': 'Engagement Protocol',
    'contact.protocolDirectAccess': 'Direct Architect Access:',
    'contact.protocolDirectAccessDesc': 'Engagements are triaged directly by Rodrigo and senior systems engineers, not non-technical sales intermediaries.',
    'contact.protocolNda': 'Mutual NDA by Default:',
    'contact.protocolNdaDesc': 'Proprietary models, document schemas, and weights are handled under bilateral confidentiality.',
    'contact.protocolSla': '24-Hour Response SLA:',
    'contact.protocolSlaDesc': 'Detailed technical feasibility assessment returned to your inbox within one European business day.',
    'contact.directChannel': 'Direct Engineering Channel:',
    'contact.primaryRole': 'Primary Systems & Research Architect',
    'contact.encryptedNotice': 'PGP / S-MIME Encrypted Mail Supported',
    'contact.formSuccessTitle': 'Audit Request Dispatched Successfully',
    'contact.formSuccessDesc': 'Your specifications have been formatted and queued directly for Rodrigo at rodrigo.digau@gmail.com. You will receive an architectural response within 24 hours.',
    'contact.formSubmitAnother': 'Submit Additional Inquiry',
    'contact.fullName': 'Full Name *',
    'contact.email': 'Enterprise Email *',
    'contact.company': 'Organization / Entity *',
    'contact.scope': 'Engagement Scope',
    'contact.scale': 'Operational Scale / Query Volume',
    'contact.objective': 'Technical Context & Objective *',
    'contact.objectivePlaceholder': 'Describe your current architectural bottleneck, hallucination constraints, or SLA requirements...',
    'contact.gdprConsent': 'I agree to the secure processing of this technical specification under EU GDPR data sovereignty principles.',
    'contact.submitBtn': 'Transmit to rodrigo.digau@gmail.com',
    'contact.directEmailBtn': 'Email Rodrigo Directly (rodrigo.digau@gmail.com)',
    'contact.openEmailClient': 'Open in Your Email Client',
    'contact.copyEmail': 'Copy Email Address',
    'contact.emailCopied': 'Email Copied to Clipboard!',

    // Reality Audit
    'audit.badge': 'GITHUB REPOSITORY AUDIT // REALITY CONFRONTATION',
    'audit.title': 'Corporate Identity vs.',
    'audit.titleHighlight': 'Engineering Reality',
    'audit.subtitle': 'We do not ask "Does it sound good on the website?". We ask: "Can we prove this in our code, architecture decisions, and audits?" Every claim is strictly classified based on tangible evidence.',
    'audit.question': '"Can we prove this?"',
    'audit.sustained': 'Sustained',
    'audit.consolidating': 'In Consolidation',
    'audit.aspirational': 'Aspirational',
    'audit.filterAll': 'All Dimensions',
    'audit.conceptCol': 'Corporate Concept',
    'audit.evidenceCol': 'GitHub & Code Evidence',
    'audit.statusCol': 'Audit Status',
    'audit.analysisCol': 'Architectural Analysis',
    'audit.verdictCol': 'Defensible Verdict',
    'audit.summaryTitle': 'The 5 Core Proven Pillars of Triminds',
    'audit.summaryDesc': 'Following this rigorous audit, Triminds operates on 5 proven pillars: 1. Problem First · 2. Trust Through Engineering · 3. Evidence Over Claims · 4. Continuous Evolution · 5. Production-Oriented Engineering.',

    // Footer
    'footer.desc': 'Advanced systems engineering organization developing deterministic, observable, and hardened intelligent platforms for enterprise operations.',
    'footer.specDoc': 'SPEC-DOC: DOC-TRIMINDS-POSITIONING-V1.0',
    'footer.jurisdiction': 'European Union Sovereign Architecture (GDPR / EU AI Act Strict Compliance)',
    'footer.allRights': 'Triminds Systems Engineering. All architectural specifications reserved.'
  },

  pt: {
    // Nav
    'nav.home': 'Início',
    'nav.aiSystems': 'Sistemas de IA',
    'nav.engineering': 'Engenharia',
    'nav.caseStudies': 'Estudos de Caso',
    'nav.research': 'Pesquisa',
    'nav.positioning': 'Posicionamento',
    'nav.contact': 'Contato',
    'nav.auditBtn': 'Auditoria de Arquitetura',
    'nav.telemetryBtn': 'Hub de Telemetria',
    'nav.vocabularyBtn': 'Vocabulário',
    'nav.auditMatrixBtn': 'Matriz de Auditoria Real',

    // Header ticker
    'ticker.systemsNominal': 'SISTEMAS NOMINAIS // EU-WEST',
    'ticker.p99Latency': 'LATÊNCIA P99',
    'ticker.guardrail': 'GUARDA ANTI-ALUCINAÇÃO',
    'ticker.dataResidency': 'RESIDÊNCIA DE DADOS',

    // Hero
    'hero.badge': 'POSICIONAMENTO & ARQUITETURA DE SISTEMAS // AUDITORIA V1.0',
    'hero.titlePrefix': 'Engenharia de',
    'hero.titleHighlight': 'Sistemas de IA',
    'hero.titleSuffix': 'Confiáveis.',
    'hero.subtitle': 'Transformamos desafios técnicos complexos em narrativas arquiteturais sólidas. A Triminds desenvolve sistemas inteligentes observáveis, matematicamente delimitados e projetados para a soberania produtiva europeia.',
    'hero.exploreSystems': 'Explorar Sistemas de IA',
    'hero.viewStudies': 'Estudos de Caso',
    'hero.technicalGlossary': 'Glossário Técnico',
    'hero.missionTitle': 'Missão Corporativa (V1.0)',
    'hero.missionDesc': 'Projetar sistemas inteligentes que resolvem problemas reais através de tecnologia confiável, segura e mensurável.',
    'hero.philosophyTitle': 'Filosofia Central',
    'hero.philosophyDesc': 'Primeiro o problema. Depois a tecnologia. Não apostamos na opacidade de caixas-pretas; projetamos evolução determinística através de evidências comprovadas.',
    'hero.activeArchitecture': 'Arquitetura Ativa',
    'hero.engineeringStack': 'STACK DE ENGENHARIA',
    'hero.trustedSearch': 'Trusted Search Retrieval (Dois Estágios)',
    'hero.geospatialAI': 'Segmentação Geoespacial com IA',
    'hero.boundedAgents': 'Máquinas de Estado de Agentes Delimitados',
    'hero.securityLayer': 'Gateway de Segurança Zero-Trust',
    'hero.realworldAudit': 'Auditoria de Realidade nos Repositórios GitHub',
    'hero.auditedVerdict': '11 Dimensões Comprovadas · 0 Slogans Vazios',
    'hero.exploreAudit': 'Ver Matriz de Auditoria',

    // Transversal Callout
    'callout.badge': 'Soberania Europeia & Engenharia Determinística',
    'callout.title': 'Além de Chatbots Experimentais:',
    'callout.titleHighlight': 'Engenharia de Fundações Corporativas Previsíveis.',
    'callout.description': 'Rejeitamos a doutrina de que a inteligência artificial generativa deva permanecer uma caixa-preta opaca e imprevisível. Ao cercar modelos com validações determinísticas, rerankers neurais de cross-encoder e pipelines contínuos de telemetria, entregamos sistemas inteligentes que atendem aos padrões rigorosos da indústria aeroespacial, logística e conformidade europeia.',
    'callout.requestAudit': 'Solicitar Auditoria Técnica',
    'callout.readPositioning': 'Ler Posicionamento Corporativo',
    'callout.viewVocabulary': 'Ver Vocabulário Canônico',
    'callout.viewEvidence': 'Explorar Matriz de Auditoria',

    // Contact
    'contact.badge': 'ENGAJAMENTO CORPORATIVO // AUDITORIA ARQUITETURAL',
    'contact.title': 'Iniciar uma Avaliação',
    'contact.titleHighlight': 'Técnica',
    'contact.subtitle': 'A Triminds atua diretamente no nível arquitetural. Avaliamos modos de falha de recuperação, vulnerabilidades de injeção de prompt, economia de tokens e viabilidade de conformidade.',
    'contact.protocolTitle': 'Protocolo de Atendimento',
    'contact.protocolDirectAccess': 'Acesso Direto ao Arquiteto:',
    'contact.protocolDirectAccessDesc': 'Os projetos são triados diretamente pelo Rodrigo e engenheiros seniores de sistemas, sem intermediários comerciais não técnicos.',
    'contact.protocolNda': 'NDA Mútuo por Padrão:',
    'contact.protocolNdaDesc': 'Modelos proprietários, esquemas de documentos e pesos são tratados sob estrita confidencialidade bilateral.',
    'contact.protocolSla': 'SLA de Resposta em 24h:',
    'contact.protocolSlaDesc': 'Avaliação técnica preliminar retornada ao seu e-mail em até um dia útil europeu.',
    'contact.directChannel': 'Canal Direto de Engenharia:',
    'contact.primaryRole': 'Arquiteto Principal de Sistemas e Pesquisa',
    'contact.encryptedNotice': 'Suporte a E-mail Criptografado PGP / S-MIME',
    'contact.formSuccessTitle': 'Solicitação de Auditoria Enviada com Sucesso',
    'contact.formSuccessDesc': 'Suas especificações foram estruturadas e direcionadas para Rodrigo em rodrigo.digau@gmail.com. Você receberá um retorno arquitetural em até 24 horas.',
    'contact.formSubmitAnother': 'Enviar Nova Consulta',
    'contact.fullName': 'Nome Completo *',
    'contact.email': 'E-mail Corporativo *',
    'contact.company': 'Organização / Entidade *',
    'contact.scope': 'Escopo do Engajamento',
    'contact.scale': 'Escala Operacional / Volume de Consultas',
    'contact.objective': 'Contexto Técnico e Objetivo *',
    'contact.objectivePlaceholder': 'Descreva seu gargalo arquitetural atual, restrições de alucinação ou requisitos de SLA...',
    'contact.gdprConsent': 'Concordo com o processamento seguro desta especificação técnica sob os princípios de soberania do GDPR da UE.',
    'contact.submitBtn': 'Transmitir para rodrigo.digau@gmail.com',
    'contact.directEmailBtn': 'Enviar E-mail Direto (rodrigo.digau@gmail.com)',
    'contact.openEmailClient': 'Abrir no seu Cliente de E-mail',
    'contact.copyEmail': 'Copiar Endereço de E-mail',
    'contact.emailCopied': 'E-mail copiado para a área de transferência!',

    // Reality Audit
    'audit.badge': 'AUDITORIA DE REPOSITÓRIOS GITHUB // CONFRONTO COM A REALIDADE',
    'audit.title': 'Identidade Corporativa vs.',
    'audit.titleHighlight': 'Realidade de Engenharia',
    'audit.subtitle': 'Não perguntamos "Fica bonito no site?". A pergunta é: "Podemos provar isso em código, decisões arquiteturais e auditorias?" Cada afirmação foi rigorosamente classificada com base em evidências concretas.',
    'audit.question': '"Podemos provar isso?"',
    'audit.sustained': 'Sustentado',
    'audit.consolidating': 'Em Consolidação',
    'audit.aspirational': 'Aspiração',
    'audit.filterAll': 'Todas as Dimensões',
    'audit.conceptCol': 'Conceito Corporativo',
    'audit.evidenceCol': 'Evidência no GitHub & Código',
    'audit.statusCol': 'Status da Auditoria',
    'audit.analysisCol': 'Análise Arquitetural',
    'audit.verdictCol': 'Veredito Defensável',
    'audit.summaryTitle': 'Os 5 Pilares Comprovados da Triminds',
    'audit.summaryDesc': 'Após esta rigorosa auditoria, a Triminds opera sobre 5 pilares comprovados: 1. Problem First · 2. Trust Through Engineering · 3. Evidence Over Claims · 4. Continuous Evolution · 5. Production-Oriented Engineering.',

    // Footer
    'footer.desc': 'Organização avançada de engenharia de sistemas desenvolvendo plataformas inteligentes determinísticas, observáveis e blindadas para operações corporativas.',
    'footer.specDoc': 'ESPEC-DOC: DOC-TRIMINDS-POSITIONING-V1.0',
    'footer.jurisdiction': 'Arquitetura Soberana da União Europeia (Conformidade Estrita com GDPR e EU AI Act)',
    'footer.allRights': 'Triminds Engenharia de Sistemas. Todos os direitos reservados.'
  },

  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.aiSystems': 'Sistemas de IA',
    'nav.engineering': 'Ingeniería',
    'nav.caseStudies': 'Casos de Estudio',
    'nav.research': 'Investigación',
    'nav.positioning': 'Posicionamiento',
    'nav.contact': 'Contacto',
    'nav.auditBtn': 'Auditoría de Arquitectura',
    'nav.telemetryBtn': 'Hub de Telemetría',
    'nav.vocabularyBtn': 'Vocabulario',
    'nav.auditMatrixBtn': 'Matriz de Auditoría Real',

    // Header ticker
    'ticker.systemsNominal': 'SISTEMAS NOMINALES // EU-WEST',
    'ticker.p99Latency': 'LATENCIA P99',
    'ticker.guardrail': 'CONTROL ANTI-ALUCINACIÓN',
    'ticker.dataResidency': 'RESIDENCIA DE DATOS',

    // Hero
    'hero.badge': 'POSICIONAMIENTO Y ARQUITECTURA DE SISTEMAS // AUDITORÍA V1.0',
    'hero.titlePrefix': 'Ingeniería de',
    'hero.titleHighlight': 'Sistemas de IA',
    'hero.titleSuffix': 'Confiables.',
    'hero.subtitle': 'Transformamos desafíos técnicos complejos en narrativas arquitectónicas sólidas. Triminds diseña sistemas inteligentes observables, matemáticamente acotados y preparados para la soberanía productiva europea.',
    'hero.exploreSystems': 'Explorar Sistemas de IA',
    'hero.viewStudies': 'Casos de Estudio',
    'hero.technicalGlossary': 'Glosario Técnico',
    'hero.missionTitle': 'Misión Corporativa (V1.0)',
    'hero.missionDesc': 'Diseñar sistemas inteligentes que resuelven problemas del mundo real a través de tecnología confiable, segura y medible.',
    'hero.philosophyTitle': 'Filosofía Central',
    'hero.philosophyDesc': 'Primero el problema. Luego la tecnología. No apostamos por la opacidad de cajas negras; diseñamos evolución determinística mediante evidencia verificada.',
    'hero.activeArchitecture': 'Arquitectura Activa',
    'hero.engineeringStack': 'STACK DE INGENIERÍA',
    'hero.trustedSearch': 'Trusted Search Retrieval (Dos Etapas)',
    'hero.geospatialAI': 'Segmentación Geoespacial con IA',
    'hero.boundedAgents': 'Máquinas de Estado de Agentes Acotados',
    'hero.securityLayer': 'Gateway de Seguridad Zero-Trust',
    'hero.realworldAudit': 'Auditoría de Realidad en Repositorios GitHub',
    'hero.auditedVerdict': '11 Dimensiones Comprobadas · 0 Eslóganes Vacíos',
    'hero.exploreAudit': 'Ver Matriz de Auditoría',

    // Transversal Callout
    'callout.badge': 'Soberanía Europea e Ingeniería Determinística',
    'callout.title': 'Más Allá de Chatbots Experimentales:',
    'callout.titleHighlight': 'Ingeniería de Fundamentos Corporativos Predecibles.',
    'callout.description': 'Rechazamos la doctrina de que la inteligencia artificial generativa deba permanecer como una caja negra opaca e impredecible. Al rodear los modelos de validaciones determinísticas, rerankers neuronales de cross-encoder y pipelines continuos de telemetría, entregamos sistemas inteligentes que cumplen con los exigentes estándares de la industria aeroespacial, logística y cumplimiento europeo.',
    'callout.requestAudit': 'Solicitar Auditoría Técnica',
    'callout.readPositioning': 'Leer Posicionamiento Corporativo',
    'callout.viewVocabulary': 'Ver Vocabulario Canónico',
    'callout.viewEvidence': 'Explorar Matriz de Auditoría',

    // Contact
    'contact.badge': 'COMPROMISO EMPRESARIAL // AUDITORÍA ARQUITECTÓNICA',
    'contact.title': 'Iniciar una Evaluación',
    'contact.titleHighlight': 'Técnica',
    'contact.subtitle': 'Triminds se involucra directamente a nivel arquitectónico. Evaluamos modos de fallo de recuperación, vulnerabilidades de inyección de prompts, economía de tokens y viabilidad de cumplimiento.',
    'contact.protocolTitle': 'Protocolo de Atención',
    'contact.protocolDirectAccess': 'Acceso Directo al Arquitecto:',
    'contact.protocolDirectAccessDesc': 'Los compromisos son evaluados directamente por Rodrigo e ingenieros sénior de sistemas, sin intermediarios comerciales no técnicos.',
    'contact.protocolNda': 'Acuerdo de Confidencialidad Mutuo por Defecto:',
    'contact.protocolNdaDesc': 'Los modelos propietarios, esquemas de documentos y pesos se gestionan bajo estricta confidencialidad bilateral.',
    'contact.protocolSla': 'SLA de Respuesta en 24h:',
    'contact.protocolSlaDesc': 'Evaluación técnica preliminar enviada a su correo en el plazo de un día hábil europeo.',
    'contact.directChannel': 'Canal Directo de Ingeniería:',
    'contact.primaryRole': 'Arquitecto Principal de Sistemas e Investigación',
    'contact.encryptedNotice': 'Soporte de Correo Cifrado PGP / S-MIME',
    'contact.formSuccessTitle': 'Solicitud de Auditoría Enviada con Éxito',
    'contact.formSuccessDesc': 'Sus especificaciones han sido estructuradas y enviadas directamente a Rodrigo en rodrigo.digau@gmail.com. Recibirá una respuesta arquitectónica en un plazo de 24 horas.',
    'contact.formSubmitAnother': 'Enviar Otra Consulta',
    'contact.fullName': 'Nombre Completo *',
    'contact.email': 'Correo Corporativo *',
    'contact.company': 'Organización / Entidad *',
    'contact.scope': 'Alcance del Compromiso',
    'contact.scale': 'Escala Operativa / Volumen de Consultas',
    'contact.objective': 'Contexto Técnico y Objetivo *',
    'contact.objectivePlaceholder': 'Describa su cuello de botella arquitectónico actual, restricciones de alucinación o requisitos de SLA...',
    'contact.gdprConsent': 'Acepto el tratamiento seguro de esta especificación técnica bajo los principios de soberanía de datos del RGPD de la UE.',
    'contact.submitBtn': 'Transmitir a rodrigo.digau@gmail.com',
    'contact.directEmailBtn': 'Enviar Correo Directo (rodrigo.digau@gmail.com)',
    'contact.openEmailClient': 'Abrir en su Cliente de Correo',
    'contact.copyEmail': 'Copiar Dirección de Correo',
    'contact.emailCopied': '¡Correo copiado al portapapeles!',

    // Reality Audit
    'audit.badge': 'AUDITORÍA DE REPOSITORIOS GITHUB // CONFRONTACIÓN CON LA REALIDAD',
    'audit.title': 'Identidad Corporativa vs.',
    'audit.titleHighlight': 'Realidad de Ingeniería',
    'audit.subtitle': 'No nos preguntamos "¿Queda bonito en la web?". La pregunta es: "¿Podemos demostrarlo en código, decisiones arquitectónicas y auditorías?" Cada afirmación ha sido estrictamente clasificada según evidencia real.',
    'audit.question': '"¿Podemos demostrarlo?"',
    'audit.sustained': 'Sustentado',
    'audit.consolidating': 'En Consolidación',
    'audit.aspirational': 'Aspiración',
    'audit.filterAll': 'Todas las Dimensiones',
    'audit.conceptCol': 'Concepto Corporativo',
    'audit.evidenceCol': 'Evidencia en GitHub y Código',
    'audit.statusCol': 'Estado de Auditoría',
    'audit.analysisCol': 'Análisis Arquitectónico',
    'audit.verdictCol': 'Veredicto Defendible',
    'audit.summaryTitle': 'Los 5 Pilares Comprobados de Triminds',
    'audit.summaryDesc': 'Tras esta rigurosa auditoría, Triminds opera sobre 5 pilares demostrados: 1. Problem First · 2. Trust Through Engineering · 3. Evidence Over Claims · 4. Continuous Evolution · 5. Production-Oriented Engineering.',

    // Footer
    'footer.desc': 'Organización avanzada de ingeniería de sistemas que desarrolla plataformas inteligentes determinísticas, observables y blindadas para operaciones empresariales.',
    'footer.specDoc': 'ESPEC-DOC: DOC-TRIMINDS-POSITIONING-V1.0',
    'footer.jurisdiction': 'Arquitectura Soberana de la Unión Europea (Cumplimiento Estricto con RGPD y Ley de IA de la UE)',
    'footer.allRights': 'Triminds Ingeniería de Sistemas. Todos los derechos reservados.'
  }
};
