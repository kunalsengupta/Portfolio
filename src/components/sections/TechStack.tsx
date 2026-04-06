export default function TechStack() {
  return (
    <section id="techstack" className="py-20 px-6 md:px-12 border-b border-[#222] w-full">
      <div className="mb-16">
        <div className="text-[#666] text-[9px] font-mono tracking-[0.2em] uppercase mb-4">SYSTEM.CAPABILITY_INDEX</div>
        {/* Added break-words */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 break-words">TECHNICAL_STACK</h2>
        <p className="text-[#888] text-sm max-w-2xl leading-relaxed">
          A comprehensive architecture of Generative AI frameworks, backend engineering protocols, and scalable infrastructure modules. Built for precision and high-density performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-[#161616] border border-[#222] p-6 sm:p-8 rounded-[2px] min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-10 gap-4 sm:gap-0">
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2 mb-1"><span className="text-[#d97757]">⚙</span> GENERATIVE_AI & RAG</h3>
              <div className="text-[#555] text-[8px] font-mono tracking-[0.2em] uppercase">NEURAL ARCHITECTURE & VECTOR SEARCH</div>
            </div>
            <div className="bg-[#222] text-[#d97757] px-3 py-1 text-[9px] font-mono tracking-widest uppercase">CORE_SPECIALIZATION</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {['LangChain', 'BGE-M3', 'pgVector', 'ChromaDB'].map((tech) => (
              <div key={tech} className="bg-[#1a1a1a] border border-[#333] p-4">
                <div className="text-white font-bold mb-4">{tech}</div>
                <div className="w-full bg-[#222] h-1 mb-2"><div className="bg-[#4285f4] h-full w-[85%]"></div></div>
              </div>
            ))}
          </div>
          {/* CRITICAL FIX: Changed to flex-wrap */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-t border-[#333] pt-4">
            <span className="text-[#555] text-[9px] font-mono tracking-widest uppercase w-full sm:w-auto mb-2 sm:mb-0">INTEGRATIONS:</span>
            <span className="bg-[#222] text-[#888] px-2 py-0.5 text-[10px] font-mono">OpenAI_API</span>
            <span className="bg-[#222] text-[#888] px-2 py-0.5 text-[10px] font-mono">GPT-4o</span>
          </div>
        </div>

        <div className="bg-[#161616] border border-[#222] p-6 sm:p-8 rounded-[2px] relative overflow-hidden min-w-0">
          <div className="absolute top-4 right-4 text-[#222] text-6xl font-bold font-mono">{"</>"}</div>
          <div className="relative z-10">
            <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2 mb-1"><span className="text-[#4285f4]">⌨</span> BACKEND</h3>
            <div className="text-[#555] text-[8px] font-mono tracking-[0.2em] uppercase mb-10">SCALABLE LOGIC LAYERS</div>
            <div className="space-y-4">
              {[
                { name: 'Python', desc: 'PRIMARY LANGUAGE', num: '01' },
                { name: 'FastAPI', desc: 'HIGH PERF API', num: '02' },
                { name: 'Node.js', desc: 'ASYNC RUNTIME', num: '03' },
                { name: 'TypeScript', desc: 'STATIC TYPING', num: '04' }
              ].map((item) => (
                <div key={item.num} className="flex justify-between items-center border-b border-[#333] pb-3 gap-2">
                  <div className="min-w-0">
                    <div className="text-white font-bold truncate">{item.name}</div>
                    <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase truncate">{item.desc}</div>
                  </div>
                  <div className="text-[#444] font-mono text-xs shrink-0">{item.num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#161616] border border-[#222] p-6 sm:p-8 rounded-[2px] mb-12 min-w-0">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4 sm:gap-0">
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2 mb-1"><span className="text-[#4285f4]">☷</span> DATABASES & INFRA</h3>
            <div className="text-[#555] text-[8px] font-mono tracking-[0.2em] uppercase">DISTRIBUTED SYSTEMS & DEVOPS</div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">STATUS &nbsp;&nbsp; UPTIME</div>
            <div className="text-[#10b981] text-[10px] sm:text-xs font-mono tracking-widest uppercase">PRODUCTION_READY &nbsp; <span className="text-white">99.99%</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
          {['PostgreSQL', 'Redis', 'RabbitMQ', 'AWS', 'Docker', 'K8s'].map((tech) => (
            <div key={tech} className="bg-[#1a1a1a] border border-[#333] py-6 flex flex-col items-center justify-center hover:border-[#555] transition-colors">
              <div className="w-8 h-8 bg-[#222] mb-3 rounded-full flex items-center justify-center text-[#888] text-xs shrink-0">●</div>
              <div className="text-[#d4d4d4] text-xs font-bold truncate px-2 w-full">{tech}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-t border-[#222] pt-12">
        {/* ... (Keep your 3 paragraphs here, they stack fine due to grid-cols-1 on mobile) ... */}
         <div>
          <h4 className="text-[#888] text-[9px] font-mono tracking-[0.2em] uppercase mb-4">ARCHITECTURE_PHILOSOPHY</h4>
          <p className="text-[#a3a3a3] text-xs leading-relaxed">
            I specialize in building <strong className="text-white">Production GenAI Systems</strong> where advanced LLM capabilities meet strict backend reliability. My stack bridges the gap between raw AI inference and enterprise-grade microservice architecture.
          </p>
        </div>
        <div>
          <h4 className="text-[#888] text-[9px] font-mono tracking-[0.2em] uppercase mb-4">DATA_GOVERNANCE</h4>
          <p className="text-[#a3a3a3] text-xs leading-relaxed">
            Leveraging PostgreSQL with pgVector allows for ACID-compliant vector storage, ensuring that high-throughput RAG pipelines maintain absolute data consistency alongside traditional relational models.
          </p>
        </div>
        <div>
          <h4 className="text-[#888] text-[9px] font-mono tracking-[0.2em] uppercase mb-4">SCALE_STRATEGY</h4>
          <p className="text-[#a3a3a3] text-xs leading-relaxed">
            Implementing Event-Driven Architecture via RabbitMQ to decouple heavy inference tasks from real-time APIs, ensuring high availability and fault tolerance across decoupled Node.js and FastAPI environments.
          </p>
        </div>
      </div>
    </section>
  );
}