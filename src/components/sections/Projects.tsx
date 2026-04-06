export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 border-b border-[#222] w-full">
      <div className="mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-4 break-words">PROJECTS <span className="text-xl sm:text-2xl text-[#666] font-normal tracking-normal block sm:inline mt-2 sm:mt-0">[SYSTEM_STABLE]</span></h2>
        <p className="text-[#888] text-[10px] font-mono tracking-[0.15em] uppercase max-w-3xl leading-relaxed">
          CURATED SELECTION OF PRODUCTION-GRADE ARCHITECTURAL IMPLEMENTATIONS FOCUSING ON GENERATIVE AI, SAFETY PROTOCOLS, AND SCALABLE BACKEND INFRASTRUCTURE.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Project 1: SchemaGuard */}
        <div className="lg:col-span-2 bg-[#161616] border-t-2 border-t-[#4285f4] border border-[#222] p-6 sm:p-8 flex flex-col min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-6 gap-4 sm:gap-0">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="bg-[#4285f4] text-[#111] px-2 py-0.5 text-[8px] font-bold tracking-widest uppercase shrink-0">MISSION CRITICAL</span>
                <span className="text-[#666] text-[9px] font-mono tracking-widest uppercase shrink-0">VER_4.02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white truncate">SchemaGuard API</h3>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">01</div>
              <a href="https://github.com/kunalsengupta/schemaguard" target="_blank" rel="noreferrer" className="text-[#888] hover:text-white text-[8px] font-mono tracking-widest uppercase flex items-center gap-1 mt-1 transition-colors">SOURCE_LOGS ↗</a>
            </div>
          </div>
          <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 max-w-xl">
            A self-hosted, deterministic PostgreSQL CI/CD gatekeeper. Evaluates migrations against a native AST engine (pglast) to hard-block destructive changes with zero data exfiltration, sending only sanitized metadata to a BYOK AI explainer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto mb-8">
            <div className="bg-[#1a1a1a] p-4 border border-[#222]">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">SECURITY_ARCHITECTURE</div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-2">Zero</div>
              <div className="text-[#555] text-[9px] leading-tight">Data exfiltration. Raw SQL never leaves CI.</div>
            </div>
            <div className="bg-[#1a1a1a] p-4 border border-[#222]">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">DETERMINISTIC_ENGINE</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2">pglast</div>
              <div className="text-[#555] text-[9px] leading-tight">100% deterministic AST parsing logic.</div>
            </div>
            <div className="bg-[#1a1a1a] p-4 border border-[#222]">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">AI_EXPLAINER</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2">BYOK</div>
              <div className="text-[#555] text-[9px] leading-tight">LLM context via sanitized identifiers.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['PYTHON', 'PGLAST', 'POSTGRESQL', 'GITHUB ACTIONS'].map(t => <span key={t} className="bg-[#222] text-[#888] px-2 py-1 text-[9px] font-mono uppercase">{t}</span>)}
          </div>
        </div>

        {/* Project 2: EdTech RAG */}
        <div className="bg-[#161616] border-t-2 border-t-[#d97757] border border-[#222] p-6 sm:p-8 flex flex-col justify-between min-w-0">
          <div>
            <span className="bg-[#d97757] text-[#111] px-2 py-0.5 text-[8px] font-bold tracking-widest uppercase mb-4 inline-block">ARCHITECTURE</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">EdTech RAG Pipeline</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8">
              High-performance semantic retrieval system utilizing BGE-M3 embeddings and pgVector. Features recursive chunking, metadata tagging, and a knowledge graph data model.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b border-[#333] pb-2">
                <span className="text-[#666] text-[9px] font-mono uppercase">LATENCY_P95</span>
                <span className="text-[#d97757] text-[11px] font-bold font-mono">&lt;200ms</span>
              </div>
              <div className="flex justify-between border-b border-[#333] pb-2">
                <span className="text-[#666] text-[9px] font-mono uppercase">VECTOR_DIMS</span>
                <span className="text-white text-[11px] font-mono">1024 (BGE-M3)</span>
              </div>
              <div className="flex justify-between border-b border-[#333] pb-2">
                <span className="text-[#666] text-[9px] font-mono uppercase">ENGINE</span>
                <span className="text-white text-[11px] font-mono">pgVector</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-3xl sm:text-4xl font-bold text-[#d97757] font-mono">02</div>
            <div className="flex gap-2 text-[#555]">
              <span>☷</span><span>🔗</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Project 3: GenAI PMO Tool */}
        <div className="bg-[#161616] border border-[#222] p-6 sm:p-8 relative overflow-hidden min-w-0">
          <div className="absolute -bottom-10 -right-4 text-[#222] text-[120px] sm:text-[140px] font-bold font-mono leading-none select-none">03</div>

          <div className="relative z-10">
            <span className="bg-[#ccc] text-[#111] px-2 py-0.5 text-[8px] font-bold tracking-widest uppercase mb-4 inline-block">ENTERPRISE (CLIENT WORK)</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">GenAI PMO Tool</h3>

            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-10 sm:max-w-[90%]">
              Built a GenAI-enabled PMO tool using NestJS and Python FastAPI that processed enterprise solution documents and generated project plans, test cases, risk insights, and bottleneck analysis through backend orchestration and AI-driven document understanding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:max-w-[80%]">
              <div className="bg-[#1a1a1a] border border-[#333] p-4 flex-1">
                <div className="text-[#666] text-[8px] font-mono uppercase mb-2">CORE_API</div>
                <div className="text-white font-bold flex items-center gap-2"><span>⚡</span> FastAPI & NestJS</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] p-4 flex-1">
                <div className="text-[#666] text-[8px] font-mono uppercase mb-2">RISK_ANALYSIS</div>
                {/* Changed from GPT-4o to Enterprise RAG to reflect secure architecture */}
                <div className="text-white font-bold flex items-center gap-2"><span>📊</span> Enterprise RAG</div>
              </div>
            </div>
          </div>
        </div>

        {/* Proprietary NDA Notification */}
        <div className="bg-[#161616] border border-[#222] p-6 sm:p-8 flex flex-col justify-center min-w-0">
          <div className="text-[#888] text-[9px] font-mono tracking-[0.2em] uppercase mb-8 sm:mb-10">PROPRIETARY_SYSTEM_STATUS</div>
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
            <div>
              <div className="flex justify-between text-[#666] text-[8px] font-mono mb-2"><span>DATA_CONFIDENTIALITY</span><span>100%</span></div>
              <div className="w-full bg-[#222] h-1"><div className="bg-[#4285f4] h-full w-[100%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-[#666] text-[8px] font-mono mb-2"><span>ENTERPRISE_COMPLIANCE</span><span>100%</span></div>
              <div className="w-full bg-[#222] h-1"><div className="bg-[#d97757] h-full w-[100%]"></div></div>
            </div>
          </div>
          <div className="bg-[#111] border border-[#333] p-4 sm:p-5 flex gap-3 sm:gap-4 items-start">
            <div className="text-[#d97757] mt-0.5 shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
            </div>
            <div className="text-[#888] text-[8px] sm:text-[9px] font-mono uppercase leading-relaxed tracking-widest">
              PROPRIETARY ARCHITECTURE BOUND BY NDA. SOURCE CODE IS UNAVAILABLE FOR PUBLIC REVIEW. AVAILABLE FOR HIGH-LEVEL ARCHITECTURAL DISCUSSIONS.
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <a href="https://github.com/kunalsengupta/schemaguard" target="_blank" rel="noreferrer" className="bg-[#111] border border-[#222] p-4 sm:p-5 flex justify-between items-center group hover:border-[#444] transition-colors cursor-pointer min-w-0">
          <div className="min-w-0">
            <div className="text-[#555] text-[8px] font-mono uppercase mb-1 truncate">OPEN_SOURCE_01</div>
            <div className="text-[#ccc] font-bold text-xs sm:text-sm group-hover:text-white truncate">SchemaGuard API Repo</div>
          </div>
          <div className="text-[#444] group-hover:text-[#fff] transition-colors shrink-0 ml-2">↗</div>
        </a>
        <a href="https://github.com/kunalsengupta" target="_blank" rel="noreferrer" className="bg-[#111] border border-[#222] p-4 sm:p-5 flex justify-between items-center group hover:border-[#444] transition-colors cursor-pointer min-w-0">
          <div className="min-w-0">
            <div className="text-[#555] text-[8px] font-mono uppercase mb-1 truncate">GITHUB_PROFILE</div>
            <div className="text-[#ccc] font-bold text-xs sm:text-sm group-hover:text-white truncate">View All Repositories</div>
          </div>
          <div className="text-[#444] group-hover:text-[#fff] transition-colors shrink-0 ml-2">↗</div>
        </a>
        <div className="bg-[#111] border border-[#222] p-4 sm:p-5 flex justify-between items-center min-w-0 opacity-70">
          <div className="min-w-0">
            <div className="text-[#555] text-[8px] font-mono uppercase mb-1 truncate">CLIENT_DELIVERABLES</div>
            <div className="text-[#888] font-bold text-xs sm:text-sm truncate">Proprietary Repos (Locked)</div>
          </div>
          <div className="text-[#333] shrink-0 ml-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
          </div>
        </div>
      </div>
    </section>
  );
}