import React from "react";
import { Server, CheckCircle2 } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
}

interface ExperienceCardProps {
  exp: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => (
  <div className="mb-6 relative pl-6 border-l-2 border-gray-700 last:mb-0">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1e1e1e] border-2 border-blue-500"></div>
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
      <h3 className="text-lg font-bold text-gray-200">{exp.role}</h3>
      <span className="text-xs font-mono text-gray-500 bg-[#2d2d2d] px-2 py-0.5 rounded">
        {exp.period}
      </span>
    </div>
    <div className="text-blue-400 text-sm mb-3 flex items-center gap-2">
      <Server size={14} /> {exp.company}
      <span className="text-gray-600">•</span>
      <span className="text-gray-500">{exp.type}</span>
    </div>
    <ul className="space-y-2">
      {exp.highlights.map((h, i) => (
        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
          <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  </div>
);
