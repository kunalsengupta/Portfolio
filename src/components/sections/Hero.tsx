export default function Hero() {
  return (
    // FIX 1: Added min-h-[calc(100vh-88px)] to perfectly fit the viewport vertical height
    <section id="home" className="flex flex-col border-b border-[#222] w-full min-h-[calc(100vh-88px)]">

      {/* FIX 2: Added flex-1 to this container so it stretches to fill the vertical space */}
      <div className="flex flex-col lg:flex-row w-full flex-1">

        {/* Left Sidebar */}
        <div className="hidden lg:flex flex-col items-center justify-between w-16 border-r border-[#222] py-8 text-[#555] font-mono text-[9px] tracking-widest shrink-0">
          <div className="transform -rotate-90 whitespace-nowrap">v2.4.0_STABLE</div>
          <div className="flex flex-col gap-8 text-[#888]">
            <span>◳</span><span>◒</span><span>◰</span>
          </div>
          <div className="transform -rotate-90 whitespace-nowrap">2026_DEPLOY</div>
        </div>

        {/* Main Content (Added flex col to push benchmarks to the bottom) */}
        <div className="flex-1 p-6 sm:p-8 lg:p-16 min-w-0 flex flex-col">
          <div>
            <div className="flex items-center gap-2 mb-8 sm:mb-10 font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
              <span className="w-2 h-2 bg-[#4285f4] shrink-0"></span> STATUS: ACTIVELY BUILDING — OPEN TO WORK
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] sm:leading-[0.95] lg:leading-[0.9] tracking-tighter mb-8 text-white break-words">
              BUILDING<br/>
              <span className="text-[#4285f4]">PRODUCTION<br/>RAG</span><br/>
              INFRASTRUCTURE.
            </h1>
            <p className="text-[#a3a3a3] text-sm sm:text-lg max-w-2xl leading-relaxed mb-8">
              5+ years in backend systems — PostgreSQL, RabbitMQ, event-driven microservices. Now building GenAI applications, custom RAG pipelines, LLM integrations, and AI-powered APIs in Python and FastAPI. The infrastructure depth is what makes the AI work in production.
            </p>

            <div className="mb-10 sm:mb-12 font-mono text-[10px] sm:text-xs text-[#888] leading-loose bg-[#161616] border border-[#222] p-4 sm:p-6 rounded-[2px] max-w-2xl">
              <div className="text-[#d97757] uppercase tracking-widest mb-1">// CURRENT_BUILD: SchemaGuard v1.0</div>
              <div>// CI/CD SQL safety API — Python, LangChain, GPT-4o</div>
              <a href="https://github.com/kunalsengupta/schemaguard" target="_blank" rel="noreferrer" className="text-[#4285f4] hover:text-[#3b77db] transition-colors break-all">
                // github.com/kunalsengupta/schemaguard
              </a>
            </div>
          </div>

          {/* FIX 3: Added mt-auto here so the benchmarks lock to the bottom alongside the CTA buttons */}
          <div className="mt-auto flex flex-col sm:flex-row gap-6 pt-4">
            <div className="bg-[#161616] border-l-2 border-[#4285f4] p-5 sm:p-6 flex-1 min-w-0">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-2 truncate">PERFORMANCE BENCHMARKS</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">&lt;200ms <span className="text-xs sm:text-sm font-mono text-[#888] tracking-widest font-normal uppercase block sm:inline mt-1 sm:mt-0">P95 LATENCY</span></div>
            </div>
            <div className="bg-[#161616] border-l-2 border-[#d97757] p-5 sm:p-6 flex-1 min-w-0">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-2 truncate">SCALE THRESHOLD</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">10K+ <span className="text-xs sm:text-sm font-mono text-[#888] tracking-widest font-normal uppercase block sm:inline mt-1 sm:mt-0">DAILY TXNS</span></div>
            </div>
          </div>
        </div>

        {/* Right Sidebar (Added justify-between to push the buttons to the absolute bottom) */}
        <div className="w-full lg:w-[280px] bg-[#1a1a1a] border-t lg:border-t-0 lg:border-l border-[#222] p-6 lg:p-8 flex flex-col justify-between shrink-0">
          <div>
            <div className="text-[#666] text-[9px] font-mono tracking-[0.2em] uppercase mb-5">// CORE_CAPABILITIES</div>
            <ul className="space-y-3 text-sm text-[#d4d4d4]">
              <li className="flex items-center gap-3"><span className="text-[#4285f4] text-xs shrink-0">●</span> Event-Driven Microservices</li>
              <li className="flex items-center gap-3"><span className="text-[#4285f4] text-xs shrink-0">●</span> RAG Pipeline Engineering</li>
              <li className="flex items-center gap-3"><span className="text-[#4285f4] text-xs shrink-0">●</span> Cloud Infrastructure (AWS)</li>
            </ul>

            <div className="text-[#666] text-[9px] font-mono tracking-[0.2em] uppercase mt-10 mb-3">// EXPERIENCE_LOG</div>
            <div className="text-4xl font-bold text-white flex items-end gap-2">
              05+ <span className="text-[10px] font-mono text-[#888] tracking-[0.1em] uppercase leading-tight mb-1">YEARS IN<br/>PRODUCTION</span>
            </div>
          </div>

          {/* These buttons will now anchor to the bottom perfectly */}
          <div className="mt-10 flex flex-col gap-3">
            <a href="#projects" className="bg-[#4285f4] text-[#111] text-[10px] font-bold py-4 px-4 w-full tracking-[0.2em] uppercase flex justify-between items-center hover:bg-[#3b77db] transition-colors">
              VIEW_PROJECTS <span>→</span>
            </a>
            <a href="/kunal_sengupta_resume_v4.pdf" download="Kunal_Sengupta_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#333] text-white text-[10px] font-bold py-4 px-4 w-full tracking-[0.2em] uppercase flex justify-between items-center hover:bg-[#222] transition-colors">
              DOWNLOAD_CV <span>↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* LATEST_DEPLOYMENT Bar */}
      <div className="border-t border-[#222] flex flex-col lg:flex-row bg-[#111] w-full shrink-0">
        <div className="p-6 sm:p-8 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#222] flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#444] text-xl sm:text-2xl mt-1 sm:mt-0">⚡</div>
          <div className="min-w-0">
            <div className="text-white text-sm sm:text-base font-bold mb-1 truncate">EdTech RAG Pipeline</div>
            <div className="text-[#888] text-[10px] sm:text-xs mb-3 truncate">Semantic retrieval using BGE-M3 + pgVector</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#222] text-[#888] px-2 py-0.5 text-[8px] font-mono uppercase">FASTAPI</span>
              <span className="bg-[#222] text-[#888] px-2 py-0.5 text-[8px] font-mono uppercase">PGVECTOR</span>
              <span className="bg-[#222] text-[#888] px-2 py-0.5 text-[8px] font-mono uppercase">PYTHON</span>
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:w-1/2 grid grid-cols-2 sm:flex sm:items-center sm:justify-around gap-6 sm:gap-0">
          <div className="text-center sm:text-left">
            <div className="text-white text-xl sm:text-2xl font-bold mb-1">&lt;200ms</div>
            <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase">P95_LATENCY</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-white text-xl sm:text-2xl font-bold mb-1">92%</div>
            <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase">RETRIEVAL_ACC</div>
          </div>
          <div className="text-center sm:text-left col-span-2 sm:col-span-1 mt-2 sm:mt-0">
            <div className="text-white text-xl sm:text-2xl font-bold mb-1">50K+</div>
            <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase">DOCUMENTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}