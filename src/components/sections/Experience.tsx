import ExperienceCard from '../ui/ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      role: "Independent Developer (GenAI & Backend)",
      company: "Self-Employed",
      period: "Oct 2025 - Present",
      bullets: [
        "Engineering GenAI integrations and high-throughput RAG pipelines utilizing BGE-M3 and pgVector.",
        "Developing deterministic, AI-enhanced CI/CD gating systems using Python, FastAPI, and Postgres AST parsers."
      ]
    },
    {
      role: "SDE-II (Backend)",
      company: "Anotech India Solutions",
      period: "Nov 2024 - Sept 2025",
      bullets: [
        "Engineered a high-throughput transaction platform handling 10K+ daily transactions.",
        "Decoupled monolithic services into event-driven microservices using RabbitMQ and Domain-Driven Design (DDD) in TypeScript.",
        "Reduced CI/CD pipeline execution time by 73% (from 45m to 12m) by optimizing Docker layering and parallelizing GitHub Actions jobs."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Blufig Digital",
      period: "Mar 2024 - Oct 2024",
      bullets: [
        "Optimized high-traffic API endpoints by analyzing PostgreSQL execution plans and introducing composite indexes, reducing P95 latency from 850ms to 580ms.",
        "Designed a tiered caching strategy using Redis to offload database reads for static content.",
        "Containerized applications with Docker and managed deployments on AWS EC2 with auto-scaling groups."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-[2rem] font-bold text-white tracking-tight mb-12">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </section>
  );
}