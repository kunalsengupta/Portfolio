import React from "react";
import { GitCommit, Bot, Zap, Code } from "lucide-react";
import { umamiTrack } from "../../lib/telemetry";

interface ProjectDiff {
  id: string;
  title: string;
  filename: string;
  liveDemo?: string;
  codebaseLink?: string;
  context: string;
  problemState: string[];
  solutionState: string[];
  tech: string[];
}

interface GitDiffCardProps {
  project: ProjectDiff;
}

export const GitDiffCard: React.FC<GitDiffCardProps> = ({ project }) => {
  const onOpenLive = () => {
    umamiTrack(`project_open_live_${project.id}`);
    if (project.liveDemo) window.open(project.liveDemo, "_blank", "noopener");
  };

  const onOpenCode = () => {
    umamiTrack(`project_open_code_${project.id}`);
    if (project.codebaseLink) window.open(project.codebaseLink, "_blank", "noopener");
  };

  return (
    <div className="border border-gray-700 rounded bg-[#0d1117] font-mono text-xs mb-6 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-gray-700">
        <div className="flex items-center gap-2">
          {project.id === "proj_ai_log" ? (
            <Bot size={14} className="text-red-400" />
          ) : (
            <GitCommit size={14} className="text-purple-400" />
          )}
          <span className="text-gray-200 font-semibold">{project.title}</span>
          <span className="text-gray-500 text-[10px] hidden md:inline">({project.context})</span>
        </div>
        <div className="flex items-center gap-3">
          {project.liveDemo && (
            <button
              onClick={onOpenLive}
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded bg-transparent transition flex items-center gap-1"
            >
              <Zap size={14} /> Live
            </button>
          )}
          {project.codebaseLink && (
            <button
              onClick={onOpenCode}
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded bg-transparent transition flex items-center gap-1"
            >
              <Code size={14} /> Code
            </button>
          )}
          <span className="text-gray-500">{project.filename}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700">
        <div className="bg-[#3fb950]/10 md:bg-transparent">
          <div className="bg-red-900/10 h-full">
            {project.problemState.map((line, i) => (
              <div key={i} className="flex py-0.5 hover:bg-red-900/20 px-2">
                <span className="w-6 text-right text-gray-600 mr-3 select-none">
                  {i + 1}
                </span>
                <span className="text-red-300/90 break-all whitespace-pre-wrap">
                  {line.startsWith("//") || line.startsWith("#") ? line : `- ${line}`}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#3fb950]/5 h-full">
          {project.solutionState.map((line, i) => (
            <div key={i} className="flex py-0.5 hover:bg-green-900/20 px-2">
              <span className="w-6 text-right text-gray-600 mr-3 select-none">
                {i + 1}
              </span>
              <span className="text-green-300/90 break-all whitespace-pre-wrap">
                {line.startsWith("//") || line.startsWith("#") ? line : `+ ${line}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 py-1.5 bg-[#161b22] border-t border-gray-700 flex gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] text-gray-400 border border-gray-700 px-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};
