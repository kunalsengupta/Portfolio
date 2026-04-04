export default function Projects() {
  const projects = [
    {
      title: "SmartSchema",
      status: "Proof of Concept",
      description: "A self-hosted, deterministic PostgreSQL CI/CD gatekeeper running as a GitHub Action. Uses a native Postgres AST engine (pglast) to hard-block destructive migrations. Ensures zero data exfiltration by sending only sanitized, structured AST metadata to a BYOK LLM.",
      stack: ["Python", "pglast", "PostgreSQL", "GitHub Actions"]
    },
    {
      title: "Appx OS",
      status: "Active Development",
      description: "A GenAI-powered EdTech platform that dynamically generates interactive, student-focused learning content. Engineered the core RAG pipeline utilizing BGE-M3 embedding models and a pgVector database for highly contextual content retrieval.",
      stack: ["Python", "FastAPI", "BGE-M3", "pgVector"]
    },
    {
      title: "PMO Risk Analysis Engine",
      status: "Proof of Concept",
      description: "An AI-driven PMO system of intelligence that ingests solution documents to automatically generate Agile/Waterfall project plans and corresponding test cases. Integrates a React/NestJS core with a Python/FastAPI microservice running GenAI models to perform risk analysis, detect potential bottlenecks, and actively prevent resource overbooking.",
      stack: ["React", "NestJS", "FastAPI", "Python", "GenAI"]
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-[#1f2937]/50 mt-10">
      <h2 className="text-[2rem] font-bold text-white tracking-tight mb-12">The Lab / Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#1f2937] bg-[#0a0a0a] p-6 rounded-[4px] flex flex-col">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">{project.title}</h3>
            <span className="text-[#6b7280] text-[10px] tracking-[0.15em] font-mono uppercase mb-4 block">
              {project.status}
            </span>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-[#9ca3af] text-[11px] font-mono tracking-widest uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}