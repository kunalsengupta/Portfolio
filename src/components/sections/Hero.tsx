import MetricCard from '../ui/MetricCard';

export default function Hero() {
  return (
    <section className="mb-24 pt-12">
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-8 font-mono text-[10px] tracking-[0.2em] text-[#10b981] uppercase">
          <span>{`~`}</span>
          <span>System Online // Deployment V2.4.0</span>
        </div>

        <h1 className="text-5xl md:text-[4.5rem] font-bold leading-none tracking-tight mb-2 text-white">
          Software Engineer
        </h1>
        <h1 className="text-5xl md:text-[4.5rem] font-bold leading-none tracking-tight text-[#4b5563] mb-8">
          (Backend & Generative AI)
        </h1>

        <p className="text-[#9ca3af] text-lg max-w-2xl leading-relaxed mt-8">
          Specializing in high-throughput <strong className="text-white font-medium">RAG pipelines</strong> (BGE-M3, pgVector, FastAPI) and
          event-driven <strong className="text-white font-medium">microservices</strong> (PostgreSQL, RabbitMQ, AWS) with 5+ years of
          production experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard metric="Sub-200ms" label="P95 Latency for Appx OS RAG" />
        <MetricCard metric="100%" label="Deterministic Schema Blocking" />
        <MetricCard metric="10K+" label="Daily Transactions for Fintech" />
      </div>
    </section>
  );
}