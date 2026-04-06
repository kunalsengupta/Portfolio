export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 border-b border-[#222] w-full">
      <div className="mb-20">
        <div className="font-mono text-[#888] text-[10px] tracking-[0.2em] uppercase mb-4">// CAREER_LOG.EXE</div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-none uppercase break-words">
            PROFESSIONAL<br/><span className="text-[#555]">TRAJECTORY</span>
          </h2>
          <div className="font-mono text-[#888] text-[10px] tracking-[0.15em] uppercase border-l border-[#333] pl-4 mt-6 md:mt-0 shrink-0">
            SYSTEM_STATUS: ACTIVE<br/>LOC: BENGALURU, INDIA<br/>FOC: BACKEND // GENAI // SYSTEMS
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#333] hidden md:block transform -translate-x-1/2"></div>

        {/* JOB 1: INDEPENDENT DEVELOPER */}
        <div className="flex flex-col md:flex-row w-full mb-24 md:mb-32 relative group min-w-0">
          <div className="absolute left-[50%] top-2 w-2 h-2 bg-[#888] rotate-45 transform -translate-x-1/2 hidden md:block group-hover:bg-[#4285f4] transition-colors"></div>
          <div className="w-full md:w-1/2 pr-0 md:pr-16 text-left md:text-right mb-6 md:mb-0 min-w-0">
            <div className="text-[#d97757] font-mono text-[10px] tracking-[0.2em] uppercase mb-2">OCT 2025 - PRESENT</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-2 truncate sm:whitespace-normal">INDEPENDENT DEVELOPER</h3>
            <div className="text-[#888] font-mono text-[9px] tracking-[0.15em] uppercase">GENAI // BACKEND</div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-16 min-w-0">
            <div className="border-l border-[#444] pl-6 py-2">
              <div className="text-[#d97757] text-[10px] font-mono tracking-[0.15em] uppercase mb-4 border-b border-[#333] pb-2">// ACTIVE_PROJECTS</div>
              <div className="mb-6">
                <h4 className="text-[#ccc] text-sm font-bold uppercase mb-2">GENAI PMO TOOL</h4>
                <p className="text-[#888] text-xs leading-relaxed">Multi-tenant FastAPI microservice integrating GPT-4o to automate enterprise workflow analysis and risk summarization across project documents.</p>
              </div>
              <div>
                <h4 className="text-[#ccc] text-sm font-bold uppercase mb-2">EDTECH RAG PIPELINE</h4>
                <p className="text-[#888] text-xs leading-relaxed mb-4">Custom RAG system using BGE-M3 + pgVector with recursive chunking, metadata tagging, and a knowledge graph data model. Sub-200ms p95 on retrieval. <span className="text-[#ccc]">[Private repo — available on request]</span></p>
                <div className="flex flex-wrap gap-2">
                  {['LANGCHAIN', 'FASTAPI', 'GPT-4O', 'PGVECTOR'].map(t => <span key={t} className="bg-[#222] text-[#888] px-2 py-1 text-[9px] font-mono uppercase">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOB 2: ANOTECH */}
        <div className="flex flex-col md:flex-row w-full mb-24 md:mb-32 relative group min-w-0">
          <div className="absolute left-[50%] top-2 w-2 h-2 bg-[#d97757] rotate-45 transform -translate-x-1/2 hidden md:block"></div>
          <div className="w-full md:w-1/2 pr-0 md:pr-16 order-2 md:order-1 mt-6 md:mt-0 min-w-0">
            <div className="border-l-2 border-[#d97757] pl-6 py-4 bg-[#161616]">
              <div className="text-white text-[10px] font-bold tracking-[0.15em] uppercase mb-4 border-b border-[#333] pb-2">SYSTEM_IMPACT</div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="bg-[#0f0f0f] border border-[#222] p-4 flex-1">
                  <div className="text-[#d97757] text-2xl font-bold mb-1">10K+</div>
                  <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase">DAILY TXNS</div>
                </div>
                <div className="bg-[#0f0f0f] border border-[#222] p-4 flex-1">
                  <div className="text-[#d97757] text-2xl font-bold mb-1">73%</div>
                  <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase">CI/CD SPEEDUP</div>
                </div>
              </div>
              <p className="text-[#888] text-xs leading-relaxed mb-4">Decoupled monolith into event-driven microservices via RabbitMQ. Applied DDD to enforce boundaries. Cut pipeline time via Docker layer caching and parallelized GitHub Actions.</p>
              <div className="flex flex-wrap gap-2">
                {['NODE.JS', 'TYPESCRIPT', 'RABBITMQ', 'DOCKER'].map(t => <span key={t} className="bg-[#222] text-[#888] px-2 py-1 text-[9px] font-mono uppercase">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-16 order-1 md:order-2 min-w-0">
            <div className="text-[#d97757] font-mono text-[10px] tracking-[0.2em] uppercase mb-2">NOV 2024 - SEPT 2025</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-2 truncate sm:whitespace-normal">ANOTECH INDIA SOLUTIONS</h3>
            <div className="text-[#888] font-mono text-[9px] tracking-[0.15em] uppercase">SDE II // BACKEND</div>
          </div>
        </div>

        {/* JOB 3: BLUFIG DIGITAL */}
        <div className="flex flex-col md:flex-row w-full mb-24 md:mb-32 relative group min-w-0">
          <div className="absolute left-[50%] top-2 w-2 h-2 bg-[#888] rotate-45 transform -translate-x-1/2 hidden md:block group-hover:bg-[#4285f4] transition-colors"></div>
          <div className="w-full md:w-1/2 pr-0 md:pr-16 text-left md:text-right mb-6 md:mb-0 min-w-0">
            <div className="text-[#d97757] font-mono text-[10px] tracking-[0.2em] uppercase mb-2">MAR 2024 - OCT 2024</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-2 truncate sm:whitespace-normal">BLUFIG DIGITAL</h3>
            <div className="text-[#888] font-mono text-[9px] tracking-[0.15em] uppercase">BACKEND ENGINEER</div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-16 min-w-0">
            <div className="border-l border-[#444] pl-6 py-4 bg-[#161616]">
              <div className="text-white text-[10px] font-bold tracking-[0.15em] uppercase mb-4 border-b border-[#333] pb-2">PERFORMANCE_METRICS</div>
              <div className="bg-[#0f0f0f] border border-[#222] p-4 flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">P95 LATENCY (PRE)</div>
                  <div className="text-[#888] text-xl font-bold">850ms</div>
                </div>
                <div className="text-[#444]">»</div>
                <div className="text-center">
                  <div className="text-[#4285f4] text-[8px] font-mono tracking-widest uppercase mb-1">P95 LATENCY (POST)</div>
                  <div className="text-white text-xl font-bold">580ms</div>
                </div>
              </div>
              <p className="text-[#888] text-xs leading-relaxed mb-4">PostgreSQL execution plan analysis + composite indexes reduced latency. Tiered Redis caching offloaded repetitive DB reads for static content.</p>
              <div className="flex flex-wrap gap-2">
                {['POSTGRESQL', 'REDIS', 'NODE.JS'].map(t => <span key={t} className="bg-[#222] text-[#888] px-2 py-1 text-[9px] font-mono uppercase">{t}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* JOB 4: STORE APPS LLP */}
        <div className="flex flex-col md:flex-row w-full mb-24 md:mb-32 relative group min-w-0">
          <div className="absolute left-[50%] top-2 w-2 h-2 bg-[#d97757] rotate-45 transform -translate-x-1/2 hidden md:block"></div>
          <div className="w-full md:w-1/2 pr-0 md:pr-16 order-2 md:order-1 mt-6 md:mt-0 min-w-0">
            <div className="border-l-2 border-[#d97757] pl-6 py-4 bg-[#161616]">
              <div className="text-white text-[10px] font-bold tracking-[0.15em] uppercase mb-4 border-b border-[#333] pb-2">THROUGHPUT_SCALING</div>
              <div className="bg-[#0f0f0f] border border-[#222] p-4 flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">RPS (INITIAL)</div>
                  <div className="text-[#888] text-xl font-bold">200</div>
                </div>
                <div className="text-[#444]">»</div>
                <div className="text-center">
                  <div className="text-[#d97757] text-[8px] font-mono tracking-widest uppercase mb-1">RPS (SCALED)</div>
                  <div className="text-white text-xl font-bold">500</div>
                </div>
              </div>
              <p className="text-[#888] text-xs leading-relaxed mb-4">Developed multi-tenant SaaS backend in Node.js featuring idempotent Stripe webhook processing. Scaled API throughput via Node.js clustering and Nginx load balancing.</p>
              <div className="flex flex-wrap gap-2">
                {['NODE.JS', 'STRIPE', 'NGINX', 'SAAS'].map(t => <span key={t} className="bg-[#222] text-[#888] px-2 py-1 text-[9px] font-mono uppercase">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-16 order-1 md:order-2 min-w-0">
            <div className="text-[#d97757] font-mono text-[10px] tracking-[0.2em] uppercase mb-2">JUL 2022 - JUL 2023</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-2 truncate sm:whitespace-normal">STORE APPS LLP</h3>
            <div className="text-[#888] font-mono text-[9px] tracking-[0.15em] uppercase">BACKEND DEVELOPER</div>
          </div>
        </div>

        {/* JOB 5: INVESTIS DIGITAL */}
        <div className="flex flex-col md:flex-row w-full relative group min-w-0">
          <div className="absolute left-[50%] top-2 w-2 h-2 bg-[#888] rotate-45 transform -translate-x-1/2 hidden md:block group-hover:bg-[#4285f4] transition-colors"></div>
          <div className="w-full md:w-1/2 pr-0 md:pr-16 text-left md:text-right mb-6 md:mb-0 min-w-0">
            <div className="text-[#d97757] font-mono text-[10px] tracking-[0.2em] uppercase mb-2">OCT 2020 - MAR 2022</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-2 truncate sm:whitespace-normal">INVESTIS DIGITAL</h3>
            <div className="text-[#888] font-mono text-[9px] tracking-[0.15em] uppercase">TRAINEE ENGINEER</div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-16 min-w-0">
            <div className="border-l border-[#444] pl-6 py-4 bg-[#161616]">
              <div className="text-white text-[10px] font-bold tracking-[0.15em] uppercase mb-4 border-b border-[#333] pb-2">CORE_DELIVERABLES</div>
              <p className="text-[#888] text-xs leading-relaxed mb-4">Built robust RESTful APIs for internal CMS tools utilizing Node.js and MongoDB. Engineered systems supporting complex content publishing workflows across multiple enterprise client accounts.</p>
              <div className="flex flex-wrap gap-2">
                {['NODE.JS', 'MONGODB', 'REST_API', 'CMS'].map(t => <span key={t} className="bg-[#222] text-[#888] px-2 py-1 text-[9px] font-mono uppercase">{t}</span>)}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-32 bg-[#4285f4] p-8 sm:p-10 flex flex-col items-start relative overflow-hidden rounded-[2px] w-full min-w-0">
        <div className="absolute right-0 bottom-0 text-[#3b77db] text-[80px] sm:text-[150px] font-bold leading-none select-none opacity-50">CODE</div>
        <div className="relative z-10 max-w-xl w-full">
          <h3 className="text-[#111] text-2xl sm:text-3xl font-bold mb-4 tracking-tight uppercase break-words">OPEN TO THE RIGHT OPPORTUNITY.</h3>
          <p className="text-[#111] text-xs sm:text-sm mb-8 opacity-80 font-medium">Looking for a backend + AI engineering role at a product company where I can own the full stack — from the LLM layer to the infrastructure that runs it. Bangalore-based, open to hybrid.</p>
          <a href="mailto:kunal.sengupta852@gmail.com" className="bg-[#111] text-white text-[10px] font-bold py-3 px-4 sm:px-6 rounded-[2px] tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2 hover:bg-[#222] break-words">
            GET_IN_TOUCH →
          </a>
          <div className="mt-4 text-[#111] opacity-70 font-mono text-[10px] tracking-widest font-bold">
            kunal.sengupta852@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
}