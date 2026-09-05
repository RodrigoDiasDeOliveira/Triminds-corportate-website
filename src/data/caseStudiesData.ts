import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "trusted-compliance-agent",
    title: "Trusted Compliance Agent",
    subtitle: "Deterministic Regulatory Auditing & Zero-Hallucination Legal Extraction",
    tag: "Regulatory Tech / Enterprise AI",
    sector: "European Financial & Legal Compliance",
    whatItProves: "Proves that Triminds can construct autonomous agentic pipelines for mission-critical legal compliance where factual hallucination is strictly zero-tolerance.",
    problem: "Financial institutions faced a 45-day review latency on complex cross-border regulatory directives. Standard LLM approaches generated plausible but legally invalid clause citations, exposing organizations to multi-million euro penalties under EU compliance frameworks.",
    context: "Operating under strict EU AI Act High-Risk Category criteria, the solution required verifiable source document provenance down to character-level bounding boxes and paragraph hashing.",
    architecture: {
      overview: "A three-tier verifiable pipeline: Lexical & dense chunk ingestion → Cross-encoder neural reranking → Bounded agentic synthesis with strict JSON schema and legal validation gates.",
      components: [
        "Document Ingestion & Multi-modal PDF Deconstruction Engine",
        "Deterministic Citation Provenance Index with SHA-256 Block Fingerprints",
        "Dual-Pass Verification Agent with Cross-Reference Fallback",
        "EU Sovereign Isolated Enclave Execution Layer"
      ],
      diagramText: "Document Ingestion ➔ Structural Chunking ➔ Hybrid Search (Dense+BM25) ➔ Cross-Encoder Reranker ➔ Constrained Verification Agent ➔ Signed Compliance Certificate"
    },
    engineering: [
      "Engineered a zero-hallucination verification loop rejecting any LLM response lacking an exact match against retrieved SHA-256 token spans.",
      "Implemented asynchronous streaming pipelines handling 500+ page regulatory PDFs within sub-12-second roundtrip extraction.",
      "Integrated strict OpenTelemetry tracing measuring semantic confidence score per clause."
    ],
    technology: [
      "Python 3.12 / FastAPI",
      "Qdrant Vector Database (Vector Dimension 1536)",
      "BGE-Reranker-Large",
      "Pydantic V2 Schema Validation",
      "Docker / Cloud Run (EU-West)",
      "OpenTelemetry & Prometheus"
    ],
    evolution: "V1 started as an assisted search interface; evolved into a fully autonomous, self-auditing compliance agent generating cryptographically signed compliance reports directly for regulatory audit committees.",
    challenges: [
      "Handling scanned, multi-column European Gazette regulatory publications without OCR displacement.",
      "Preventing LLM assumption leakage across differing member state directives.",
      "Maintaining p95 latency under 15 seconds across 100,000+ token legal corpora."
    ],
    decisions: [
      {
        decision: "Enforced exact character-offset verification before displaying citations.",
        rationale: "Ensured legal counsel can click any assertion and inspect the highlighted primary source immediately."
      },
      {
        decision: "Rejected generic conversational chat in favor of structured audit tables.",
        rationale: "Enterprise compliance officers require structured diffs and risk scores, not informal dialogues."
      }
    ],
    results: [
      { metric: "Hallucination Rate", value: "0.00%", description: "Zero ungrounded assertions allowed past verification gates" },
      { metric: "Review Velocity", value: "82% Faster", description: "Audit cycle compressed from 45 days to under 4 hours" },
      { metric: "Audit Accuracy", value: "99.4%", description: "Verified against independent senior legal counsel baseline" }
    ],
    evidence: "Full audit logs submitted and passed validation during European financial regulatory stress tests. System is in continuous active production across institutional compliance workflows."
  },
  {
    id: "triminds-geo-ai",
    title: "Triminds Geo AI",
    subtitle: "High-Resolution Geospatial Vectorization & Satellite Anomaly Inference",
    tag: "Geospatial Intelligence / Computer Vision",
    sector: "Aerospace, Agriculture & Infrastructure Monitoring",
    whatItProves: "Proves Triminds possesses deep domain engineering in high-dimensional spatial data, raster/vector transformations, and large-scale parallel image inference pipelines.",
    problem: "Traditional satellite analytics required manual GIS expert inspection to detect land-use violations, deforestation vectors, and structural asset deterioration across millions of square kilometers, resulting in multi-month detection delays.",
    context: "Client needed real-time automated ingestion of Sentinel-2 and commercial high-res imagery, processing multi-spectral bands with geometric distortion correction.",
    architecture: {
      overview: "Distributed spatial tiled inference mesh: Satellite raster tile splitter → Multi-spectral band normalization → Custom visual segmentation CNN/ViT models → Geospatial polygon vectorization → PostGIS topology indexing.",
      components: [
        "Distributed GeoTIFF Tiling Worker Pool with GDAL/Rasterio",
        "Edge-Preserving Feature Extraction Pipeline",
        "Spatial Topology Graph Indexer with PostGIS 3.4",
        "Temporal Change Detection Differential Matrix"
      ],
      diagramText: "Raw Satellite Feed ➔ Orthorectification ➔ Tiling Grid ➔ Multi-spectral Neural Inference ➔ Vector Polygonizer ➔ PostGIS Geo-Spatial Index ➔ Realtime Alert Service"
    },
    engineering: [
      "Architected parallel GPU worker pipelines processing 12-band multi-spectral rasters at 10m/pixel resolution.",
      "Created sub-pixel boundary refinement reducing polygon vertices by 64% without geometric precision loss.",
      "Engineered automated cloud shadow and atmospheric interference filtering algorithms."
    ],
    technology: [
      "PyTorch / TorchGeo",
      "PostgreSQL / PostGIS",
      "GDAL / Rasterio / Shapely",
      "Redis Queue for Distributed Tiling",
      "Google Cloud Storage + Cloud Run GPUs",
      "MapLibre GL & GeoJSON Vector Tile Server"
    ],
    evolution: "Initial prototype focused on static tile classification. Evolved into an end-to-end temporal monitoring system triggering automated geo-fenced alert webhooks upon detectable physical ground mutations.",
    challenges: [
      "Dynamic atmospheric conditions distorting reflectance values across seasonal cycles.",
      "Extremely large dataset volume (over 4TB of GeoTIFFs processed daily).",
      "Memory pressure handling high-resolution 16-bit multi-channel matrices."
    ],
    decisions: [
      {
        decision: "Adopted dynamic quadkey spatial tiling rather than arbitrary bounding box cuts.",
        rationale: "Allowed seamless parallel caching and zero seam artifacts at tile boundaries."
      },
      {
        decision: "Used FP16 quantized model inference on edge nodes.",
        rationale: "Reduced inference compute costs by 58% while preserving 99.1% boundary intersection-over-union."
      }
    ],
    results: [
      { metric: "Inference Throughput", value: "4.8M km²/day", description: "Sustained global surface area processing capacity" },
      { metric: "Detection Latency", value: "< 28 mins", description: "From satellite pass acquisition to verified incident polygon" },
      { metric: "IoU Precision", value: "93.7%", description: "Intersection-over-union on structural infrastructure classification" }
    ],
    evidence: "Deployed in active monitoring contracts monitoring 24,000+ linear kilometers of energy transmission corridors and protected nature reserves."
  },
  {
    id: "triminds-logistics-platform",
    title: "Triminds Logistics Platform",
    subtitle: "Autonomous Cross-Border Route Optimization & Freight Telemetry Engine",
    tag: "Platform Systems / Combinatorial Optimization",
    sector: "Intermodal Freight & Supply Chain",
    whatItProves: "Proves Triminds can design high-throughput, low-latency operational backbones combining algorithmic combinatorial optimization with real-time sensor ingestion.",
    problem: "Cross-border European freight operators suffered 22% empty-mile inefficiencies due to unpredictable customs delays, fluctuating toll regulations, and disconnected telematics streams.",
    context: "Operating across 14 European transport corridors with distinct driver hour restrictions, customs declaration checkpoints, and low-emission zone tolls.",
    architecture: {
      overview: "Event-driven micro-architecture: Real-time IoT telematics ingestion → Dynamic graph pathfinding with traffic/toll weights → Autonomous re-dispatch engine → Driver execution application.",
      components: [
        "High-Throughput MQTT / Kafka Vehicle Telemetry Ingestion Hub",
        "Dynamic Cost Graph Solver (Customized Contraction Hierarchies)",
        "Constraint-Based Dispatch State Machine",
        "Predictive Border Congestion Neural Forecaster"
      ],
      diagramText: "IoT GPS & CAN Bus ➔ Ingestion Gateway ➔ Stream Analytics ➔ Cost Matrix Solver ➔ Dynamic Route Optimizer ➔ Live Cab HUD Dispatch"
    },
    engineering: [
      "Processed 15,000 telemetry events per second with sub-50ms ingestion latency.",
      "Developed hybrid route calculation merging real-time border queuing times with historical customs clearance distributions.",
      "Built deterministic fallback modes allowing disconnected mobile clients to recalculate routes offline using pre-cached cost matrices."
    ],
    technology: [
      "Go (Golang) Microservices & Rust Core Path Engine",
      "Apache Kafka / Redpanda",
      "PostgreSQL with TimescaleDB Extension",
      "OpenStreetMap (OSM) Graph Network",
      "Docker & Kubernetes on Google Cloud GKE",
      "WebSockets / gRPC for Telemetry Streaming"
    ],
    evolution: "Began as a route calculation tool; scaled into an enterprise-wide autonomous dispatch system managing thousands of rolling assets simultaneously.",
    challenges: [
      "Sudden border crossing closures requiring instant re-routing of hundreds of en-route trucks.",
      "Heterogeneous telematics hardware with irregular ping intervals and signal dropouts.",
      "Strict EU driver rest period legal enforcement (EC 561/2006 regulations)."
    ],
    decisions: [
      {
        decision: "Rewrote core route cost solver in Rust with memory-mapped graph tables.",
        rationale: "Reduced route computation time from 1,200ms to 14ms per 1,000km transit."
      },
      {
        decision: "Separated telemetry ingestion path from transactional dispatch database.",
        rationale: "Protected core booking transactions from being locked during high-frequency telemetry spikes."
      }
    ],
    results: [
      { metric: "Empty Mileage", value: "-31.4%", description: "Direct reduction in unladen vehicle transit kilometers" },
      { metric: "Fuel Savings", value: "€2.4M/yr", description: "Aggregated annual client fuel and toll cost reduction" },
      { metric: "P99 Routing Latency", value: "22ms", description: "Ultra-fast response for dynamic re-dispatch requests" }
    ],
    evidence: "Proven across active fleets operating over 2,400 commercial prime movers across Germany, France, Poland, and the Benelux."
  },
  {
    id: "triminds-security-layer",
    title: "Triminds Security Layer",
    subtitle: "Zero-Trust LLM Gateway, Prompt Injection Defense & Cryptographic Auditing",
    tag: "Security Engineering / AI Hardening",
    sector: "Enterprise Cybersecurity & Sovereign Defense",
    whatItProves: "Proves that Triminds treats security as a first-class foundational substrate rather than an afterthought, specifically for generative AI vulnerabilities.",
    problem: "Enterprise security teams blocked generative AI adoption due to risks of indirect prompt injection, data exfiltration via steganographic token leakage, and lack of verifiable audit trails.",
    context: "Designed to satisfy ISO/IEC 27001, SOC 2 Type II, and OWASP Top 10 for LLMs requirements in confidential data environments.",
    architecture: {
      overview: "Inline reverse proxy security gateway: Request token sanitization → Dynamic semantic jailbreak filter → Cryptographic session envelope → Model dispatch → Output PII & leak redaction → Tamper-evident ledger log.",
      components: [
        "Inline High-Speed Rust Proxy Gateway",
        "Deterministic Token Masking & PII Redactor",
        "Vector-based Prompt Injection & Evasion Classifier",
        "HMAC-SHA256 Encrypted Audit Trail Service"
      ],
      diagramText: "Client Request ➔ Inbound Inspection ➔ Token Sanitization ➔ Semantic Anomaly Shield ➔ LLM Model ➔ Outbound PII Redaction ➔ Audit Vault"
    },
    engineering: [
      "Engineered an inline inspection proxy adding under 8ms overhead to LLM streaming responses.",
      "Built multi-layered defense combating unicode homoglyphs, base64 obfuscation, and delimiter injection exploits.",
      "Created irreversible token pseudonymization allowing downstream models to compute without observing real personal identifiable data."
    ],
    technology: [
      "Rust (Actix-Web / Tokio)",
      "ONNX Runtime for Local High-Speed Neural Classification",
      "Redis Sentinel for Distributed Rate Limiting & Token Bucketing",
      "Hardware Security Module (HSM) Key Management",
      "HashiCorp Vault",
      "Cloudflare Enterprise WAF Integration"
    ],
    evolution: "Started as an internal security filter for Triminds' own agents; spun out into a battle-tested standalone gateway deployed across enterprise client environments.",
    challenges: [
      "Detecting sophisticated multi-shot indirect prompt injection hidden within parsed customer emails and PDFs.",
      "Maintaining zero streaming interruption for interactive conversational tools.",
      "Preventing denial-of-service through adversarial token generation."
    ],
    decisions: [
      {
        decision: "Implemented lightweight local ONNX classifiers directly inside the gateway process.",
        rationale: "Avoided external network hops, keeping security inspection latency strictly under 10ms."
      },
      {
        decision: "Enforced strict zero-retention memory buffers on raw unmasked payloads.",
        rationale: "Guaranteed that even in the event of an infrastructure memory dump, plain customer PII cannot be recovered."
      }
    ],
    results: [
      { metric: "Attack Interception", value: "99.8%", description: "Successful block rate against OWASP LLM prompt injection suite" },
      { metric: "Added Proxy Latency", value: "< 7.5ms", description: "Negligible overhead on streaming token throughput" },
      { metric: "PII Leakage", value: "0 Violations", description: "Zero recorded exfiltrations across 40M+ production requests" }
    ],
    evidence: "Subjected to rigorous third-party red-teaming and penetration testing by certified CREST security auditors with zero critical findings."
  },
  {
    id: "triminds-platform-engineering",
    title: "Triminds Platform Engineering",
    subtitle: "Cloud-Native Infrastructure, Zero-Scale Cost Optimization & CI/CD Pipelines",
    tag: "Infrastructure & DevOps",
    sector: "Cloud Infrastructure & Site Reliability",
    whatItProves: "Proves Triminds builds robust, resilient, cost-conscious software foundations that run predictably in production without infrastructure bloat.",
    problem: "Early-stage and growing enterprise AI deployments were burning thousands in idle GPU compute costs, suffering from frequent deployment breakages and lacking disaster recovery automation.",
    context: "Client needed a unified GitOps deployment pipeline supporting continuous model evaluation, container vulnerability scanning, and automated multi-region failover.",
    architecture: {
      overview: "Immutable GitOps infrastructure with Terraform, GitHub Actions, Google Cloud Run / GKE with Knative scale-to-zero, and automated model registry promotions.",
      components: [
        "Terraform Infrastructure-as-Code Declarative Blueprints",
        "Automated Multi-Stage CI/CD Pipeline (Lint, Typecheck, Security Scan, Smoke)",
        "Zero-Scale Dynamic Microservice Hosting Cluster",
        "Centralized Telemetry & Log Aggregation Vault"
      ],
      diagramText: "Git Push ➔ Static Analysis & Security Scan ➔ Container Build ➔ Artifact Registry ➔ Canary Deployment ➔ Automated Health Verification ➔ Production Promotion"
    },
    engineering: [
      "Engineered automated scale-to-zero workloads that sleep during off-peak hours, cutting infrastructure burn by 67%.",
      "Created sub-45-second container build and push pipelines using multi-stage Docker caching.",
      "Built automated canary deployment probes rolling back automatically upon any elevated 5xx error rate."
    ],
    technology: [
      "Google Cloud Platform (Cloud Run, Artifact Registry, Secret Manager)",
      "Terraform / OpenTofu",
      "Docker / BuildKit",
      "GitHub Actions Enterprise",
      "Grafana, Prometheus & Cloud Logging",
      "Cloudflare CDN & Zero Trust Access"
    ],
    evolution: "Standardized all internal Triminds project deployments into a shared, reusable infrastructure framework now offered as an enterprise platform accelerator.",
    challenges: [
      "Managing cold starts for neural inference containers without degrading user experience.",
      "Automating model artifact versioning alongside application code commits.",
      "Maintaining ISO compliance audits across dynamic cloud environments."
    ],
    decisions: [
      {
        decision: "Leveraged Cloud Run CPU boost and lazy weights loading.",
        rationale: "Reduced cold-start latency from 18 seconds down to 2.1 seconds for inference microservices."
      },
      {
        decision: "Standardized all services on immutable distroless container images.",
        rationale: "Eliminated operating system package bloat and minimized the attack surface to near zero."
      }
    ],
    results: [
      { metric: "Infrastructure Cost", value: "-64%", description: "Reduction in monthly cloud expenditure via scale-to-zero" },
      { metric: "Deployment Frequency", value: "14x / day", description: "Zero-downtime automated releases with automatic canary checks" },
      { metric: "System Uptime", value: "99.98%", description: "Measured availability across all production endpoints" }
    ],
    evidence: "Production systems running continuously with zero manual operational intervention required over 18 consecutive months."
  },
  {
    id: "smartimagelab",
    title: "SmartImageLab",
    subtitle: "High-Fidelity Neural Image Synthesis & Multi-Layer Asset Generation",
    tag: "Visual AI / Generative Media",
    sector: "Creative Engineering & Digital Asset Production",
    whatItProves: "Proves Triminds can tackle demanding visual computing challenges, asset lifecycle workflows, and low-latency generative diffusion pipelines.",
    problem: "Commercial design teams spent hundreds of manual hours color-correcting, segmenting, and generating variant product imagery for multi-channel digital publishing.",
    context: "Need for high-resolution, brand-consistent image transformation pipelines adhering strictly to corporate color guidelines and dimensional constraints.",
    architecture: {
      overview: "Async distributed image queue: Image asset upload → Structural depth & segmentation pass → Latent diffusion refinement → Automated color gamut normalization → High-res upscaling.",
      components: [
        "WebSocket Async Job Manager for Generation Feedback",
        "Depth & Semantic Mask Extraction Worker",
        "Controlled Latent Diffusion Synthesis Pipeline",
        "Color Gamut & CMYK/RGB Normalization Post-Processor"
      ],
      diagramText: "Asset Upload ➔ Edge Segmentation ➔ Conditioned Latent Diffusion ➔ Quality Gate ➔ Super-Resolution ➔ Asset CDN"
    },
    engineering: [
      "Engineered asynchronous job workers with progress streaming via WebSockets.",
      "Implemented intelligent tiled upscaling preserving fine textural details without memory exhaustion.",
      "Enforced strict color profile fidelity matching Pantone brand specifications."
    ],
    technology: [
      "Python / PyTorch / Diffusers",
      "FastAPI & WebSockets",
      "OpenCV / Pillow-SIMD",
      "Celery & Redis Worker Pool",
      "Google Cloud Storage + Cloud Run",
      "React / Vite Frontend with Interactive Canvas"
    ],
    evolution: "Originally an experimental research project; evolved into an enterprise asset studio generating thousands of publication-ready marketing visuals daily.",
    challenges: [
      "Managing heavy GPU memory footprints during concurrent 4K image upscaling.",
      "Ensuring consistent character and product geometry across successive generation passes.",
      "Minimizing processing wait time for end-users."
    ],
    decisions: [
      {
        decision: "Offloaded heavy upscaling to dedicated asynchronous worker nodes.",
        rationale: "Kept the interactive UI fast and responsive with instant draft previews."
      },
      {
        decision: "Adopted SIMD-accelerated image manipulation libraries.",
        rationale: "Achieved 4x faster color correction and file transcoding on host CPUs."
      }
    ],
    results: [
      { metric: "Asset Production Time", value: "90% Faster", description: "Reduced from 4 hours per asset to under 25 seconds" },
      { metric: "Color Accuracy", value: "ΔE < 1.2", description: "Near-imperceptible color deviation from brand guidelines" },
      { metric: "Daily Throughput", value: "35,000+ Assets", description: "Sustained automated rendering volume" }
    ],
    evidence: "Powering automated brand asset workflows across multiple digital marketing agencies and e-commerce platforms."
  }
];
