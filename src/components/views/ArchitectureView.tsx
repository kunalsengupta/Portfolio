import React from "react";
import { Server } from "lucide-react";
import { MermaidDiagram } from "../../lib/mermaid";
import { ReactArchDiagram } from "../cards/ReactArchDiagram";

const MERMAID = `graph TD
  subgraph Sources
    A[App / Service Logs] -->|Winston| B[adapter-winston]
    C[Other Sources - future] --> B
  end
  B --> D[core.analyzer]
  D --> E[SummarizePort]
  E --> F[adapter-gemini - LLM]
  D --> G[KnowledgeBase]
  D --> H[SinkPort / Repository]
  H --> I[(Postgres via adapter-sink-postgres)]
  I --> J[Query / Reporting Layer]
  style D fill:#2b4b81,stroke:#99c1ff,stroke-width:1px
  style F fill:#4b2b63,stroke:#d9b3ff,stroke-width:1px
  style I fill:#2b5d34,stroke:#9be19b,stroke-width:1px
`;




export const ArchitectureView: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-2 text-gray-300 mb-2">
      <Server className="text-blue-500" />
      <h2 className="text-lg font-bold">System Architecture & Design Patterns</h2>
    </div>

    <div className="space-y-4">
      {/* Error Log Analyzer high-level architecture */}
      <div className="bg-[#252526] p-4 rounded border border-gray-700">
        <h4 className="text-sm font-semibold text-gray-200 mb-3">
          Error Log Analyzer – High-Level Flow
        </h4>
        <div className="text-xs text-gray-400 mb-2">
          Logs in → adapters normalize them → core applies analysis & summarization via ports → results stored in Postgres → queried by tools / UI.
        </div>
        <MermaidDiagram chart={MERMAID} />
      </div>

      {/* Design patterns explanation */}
      <div className="bg-[#252526] p-4 rounded border border-gray-700">
        <h4 className="text-sm font-semibold text-gray-200 mb-3">
          Design Patterns in the Current Codebase
        </h4>
        <div className="text-xs text-gray-400 mb-3">
          How the current folder structure (<code>core</code>, <code>domain</code>, <code>adapter-*</code>, <code>infra/db</code>) maps to the patterns you use and are actively learning.
        </div>
        <ReactArchDiagram />
      </div>
    </div>
  </div>
);