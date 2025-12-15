import React from "react";
import { Cloud, GitBranch, Activity, ShieldCheck } from "lucide-react";

export const DeploymentPlanCard: React.FC = () => (
  <div className="bg-[#252526] p-4 rounded border border-gray-700 space-y-3">
    <div className="flex items-center gap-2">
      <Cloud size={18} className="text-sky-400" />
      <h3 className="text-lg font-bold text-gray-100">
        Deployment & Operations Plan
      </h3>
    </div>

    <p className="text-sm text-gray-300">
      How the Error Log Analyzer would be shipped and operated once it is
      production–ready.
    </p>

    <div className="text-sm text-gray-300 space-y-2">
      <div className="flex items-center gap-2 font-semibold">
        <GitBranch size={14} className="text-green-400" />
        <span>CI/CD</span>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>GitHub Actions: test → build → Docker image → push to registry</li>
        <li>Tag–based deploys (e.g. <code>prod-*</code>) to staging / production</li>
        <li>Prisma migrations run as a separate step / job before app rollout</li>
      </ul>
    </div>

    <div className="text-sm text-gray-300 space-y-2">
      <div className="flex items-center gap-2 font-semibold">
        <Cloud size={14} className="text-sky-400" />
        <span>Runtime environment</span>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Containerized services (core, adapters, API) on a managed platform
          (DigitalOcean Apps / AWS ECS Fargate)
        </li>
        <li>Managed Postgres (with Prisma) + object storage for log archives</li>
        <li>Separate environments: <code>dev</code>, <code>staging</code>, <code>prod</code></li>
      </ul>
    </div>

    <div className="text-sm text-gray-300 space-y-2">
      <div className="flex items-center gap-2 font-semibold">
        <Activity size={14} className="text-amber-300" />
        <span>Observability</span>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>Health checks and readiness probes for each service</li>
        <li>Structured logs shipped back into the analyzer for dogfooding</li>
        <li>Dashboards for queue lag, LLM latency, and error cluster volume</li>
      </ul>
    </div>

    <div className="text-sm text-gray-300 space-y-2">
      <div className="flex items-center gap-2 font-semibold">
        <ShieldCheck size={14} className="text-emerald-300" />
        <span>Security & access</span>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>API behind auth gateway (JWT / API keys per project)</li>
        <li>Secrets via env injection / secrets manager, not in code</li>
        <li>Role-based access to dashboards and incident views</li>
      </ul>
    </div>
  </div>
);
