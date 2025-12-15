import React from "react";
import { GitCommit } from "lucide-react";
import { PROJECTS_DIFF } from "../../data/projects";
import { GitDiffCard } from "../cards/GitDiffCard";

export const ProjectsView: React.FC = () => (
  <div>
    <div className="flex items-center gap-2 mb-6 text-gray-300">
      <GitCommit className="text-purple-500" />
      <h2 className="text-lg font-bold">Migration Changelog</h2>
    </div>
    {PROJECTS_DIFF.map((p) => (
      <GitDiffCard key={p.id} project={p} />
    ))}
  </div>
);
