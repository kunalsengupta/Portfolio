export default function StackAndContact() {
  const stack = [
    { category: "Languages", tech: "Python,TypeScript, Node.js" },
    { category: "Backend", tech: "FastAPI, RestAPI, Express.js" },
    { category: "Data & Queues", tech: "PostgreSQL, RabbitMQ, pgVector, Redis" },
    { category: "AI & Parsing", tech: "BGE-M3, pglast (AST), GenAI" },
    { category: "Infrastructure", tech: "AWS, Terraform, Docker, GitHub Actions" },
  ];

  return (
    <section id="stack" className="py-20 border-t border-[#1f2937]/50 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-[2rem] font-bold text-white tracking-tight mb-8">System Configuration</h2>
          <div className="space-y-4">
            {stack.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center border-b border-[#1f2937]/50 pb-4">
                <span className="text-[#6b7280] text-xs font-mono tracking-widest uppercase w-40 mb-2 md:mb-0 block">{item.category}</span>
                <span className="text-[#9ca3af] text-sm">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center bg-[#0a0a0a] border border-[#1f2937] p-8 rounded-[4px]">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Initialize Connection</h2>
          <p className="text-[#9ca3af] text-sm leading-relaxed mb-8">
            Currently exploring Senior Software Engineer and SDE-2/3 opportunities.
            Whether you have a complex backend scaling challenge, CI/CD pipeline optimization, or a GenAI integration project, my inbox is open.
          </p>
          <div className="flex gap-4">
            <a href="mailto:contact@kunalsengupta.com" className="bg-[#4285f4] hover:bg-blue-600 text-white text-[10px] font-bold py-3 px-6 rounded-[4px] tracking-[0.2em] uppercase transition-colors text-center">
              Email Me
            </a>
            <a href="https://github.com/kunalsengupta" target="_blank" rel="noreferrer" className="border border-[#1f2937] hover:border-[#4b5563] text-white text-[10px] font-bold py-3 px-6 rounded-[4px] tracking-[0.2em] uppercase transition-colors text-center">
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}