import React from "react";
import { Bot, FolderTree } from "lucide-react";

export const HeroProjectScaffold: React.FC = () => (
  <div className="bg-[#252526] p-4 rounded border border-gray-700 space-y-4">
    <div className="flex items-center gap-2">
      <Bot size={18} className="text-red-400" />
      <h3 className="text-lg font-bold text-gray-100">
        Hero Project: Error / AI Log Analyzer
      </h3>
    </div>

    <p className="text-sm text-gray-300">
      Monorepo for an AI-powered log analysis system. Logs are ingested, normalized,
      enriched and summarized using LLMs, then stored in Postgres and surfaced via
      APIs / tools for engineers to triage issues faster.
    </p>

    <div className="bg-[#0d1117] p-3 rounded border border-gray-700 text-xs font-mono text-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <FolderTree size={14} className="text-purple-400" />
        <span className="font-bold">Current workspace layout</span>
      </div>

      {/* compact tree, no comments, no ellipsis, no scrollbar */}
      <pre className="text-[11px] leading-relaxed">
{`/error-log-analyzer
├─ infra/
│  └─ db/
│     ├─ docker-compose.yml
│     └─ initdb/
│        └─ initdb.sql
├─ packages/
│  ├─ core/
│  │  ├─ src/
│  │  │  ├─ analyzer/
│  │  │  └─ domain/
│  │  │     ├─ KnowledgeBase.ts
│  │  │     ├─ SourcePort.ts
│  │  │     ├─ SummarizePort.ts
│  │  │     └─ SkinPort.ts
│  │  └─ index.ts
│  ├─ adapter-gemini/
│  │  └─ src/
│  ├─ adapter-sink-postgres/
│  │  ├─ prisma/
│  │  │  ├─ schema.prisma
│  │  │  └─ migrations/
│  │  └─ src/
│  ├─ adapter-winston/
│  │  └─ src/
│  └─ node_modules/   (per-package)
├─ node_modules/
├─ package.json
├─ package-lock.json
└─ tsconfig.base.json`}
      </pre>
    </div>

    <div className="text-sm text-gray-300 space-y-2">
      <div className="font-semibold">What this repo demonstrates:</div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Ports &amp; Adapters / Hexagonal architecture via <code>core</code> and
          <code> adapter-*</code> packages
        </li>
        <li>
          LLM integration behind a clean domain port (<code>SummarizePort</code>)
        </li>
        <li>
          Postgres sink with Prisma and repositories in a separate package
        </li>
        <li>
          Clear separation of infra (<code>infra/db</code>) from application code
        </li>
      </ul>
    </div>
  </div>
);
