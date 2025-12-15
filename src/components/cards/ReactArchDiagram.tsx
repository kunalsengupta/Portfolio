import React from "react";

export const ReactArchDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Patterns currently in use in this repo */}
    <div className="bg-[#252526] p-4 rounded border border-gray-700">
      <h4 className="text-sm font-semibold text-gray-200 mb-3">
        Patterns in Use (Error Log Analyzer)
      </h4>

      <ul className="text-sm text-gray-300 space-y-3">
        <li>
          <div className="font-mono text-xs text-teal-400">Hexagonal / Ports &amp; Adapters</div>
          <div>
            <code>packages/core</code> holds the domain &amp; analyzer logic;{" "}
            <code>adapter-gemini</code>, <code>adapter-winston</code> and{" "}
            <code>adapter-sink-postgres</code> implement ports like{" "}
            <code>SourcePort</code> and <code>SummarizePort</code>, keeping the
            core independent of concrete LLMs, logging libs, or databases.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-teal-400">Strategy</div>
          <div>
            Different summarization / scoring behaviours (e.g. grouping by stack trace,
            service, status code) can be modeled as strategies behind{" "}
            <code>SummarizePort</code>, so the analyzer can swap algorithms without
            changing its orchestration.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-teal-400">Adapter</div>
          <div>
            <code>adapter-winston</code> adapts the Winston logger world into your
            internal <code>SourcePort</code> model;{" "}
            <code>adapter-gemini</code> adapts Gemini's SDK to the summarization port
            so the core doesn't know about vendor APIs.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-teal-400">Repository</div>
          <div>
            <code>adapter-sink-postgres</code> (with Prisma) acts as a repository for
            storing analyzed incidents and clusters, hiding SQL / schema details from
            the domain and keeping persistence swappable.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-teal-400">Module / Package Boundaries</div>
          <div>
            Each <code>packages/*</code> folder is a focused module: core, LLM adapter,
            sink, and log source. This enforces clean dependency directions and
            makes it easy to extend with new adapters.
          </div>
        </li>
      </ul>
    </div>

    {/* Patterns you're actively learning / growing into */}
    <div className="bg-[#252526] p-4 rounded border border-gray-700">
      <h4 className="text-sm font-semibold text-gray-200 mb-3">
         Practising / Extending
      </h4>

      <ul className="text-sm text-gray-300 space-y-3">
        <li>
          <div className="font-mono text-xs text-orange-400">Chain of Responsibility</div>
          <div>
            The pipeline idea for logs: parse → normalize → enrich → classify → summarize.
            Each step as a handler lets you enable / disable or re-order stages and
            experiment with different flows.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-orange-400">Builder</div>
          <div>
            For building complex log queries and filters (service, severity, time range,
            correlation IDs) without exposing callers to raw SQL or Prisma query objects.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-orange-400">Factory / Abstract Factory</div>
          <div>
            To choose between multiple LLM providers or embedding backends (e.g. Gemini
            now, but OpenAI/vector DB later) via configuration, still targeting the same
            ports in <code>core</code>.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-orange-400">Template Method</div>
          <div>
            A base &quot;analysis template&quot; (chunk → embed → summarize → cluster →
            rank) with overridable hooks for different ranking metrics or prompt styles.
          </div>
        </li>

        <li>
          <div className="font-mono text-xs text-orange-400">Observer / Pub-Sub</div>
          <div>
            Planned extension: when a new P0 cluster is detected, observers such as Slack
            notifiers or incident dashboards can subscribe without coupling to the core
            analysis pipeline.
          </div>
        </li>
      </ul>
    </div>
  </div>
);