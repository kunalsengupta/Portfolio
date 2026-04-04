interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export default function ExperienceCard({ role, company, period, bullets }: ExperienceCardProps) {
  return (
    <div className="border-l border-[#1f2937] pl-6 py-1 ml-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
        <h3 className="text-xl font-bold text-white tracking-tight">{role}</h3>
        <span className="text-[#6b7280] font-mono text-xs mt-1 md:mt-0 uppercase tracking-widest">{company} | {period}</span>
      </div>
      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-[#9ca3af] flex items-start text-sm leading-relaxed">
            <span className="text-[#4b5563] mr-4 mt-1">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}