import React from "react";
import { Database } from "lucide-react";
import { DB_OPTIMIZATION_CASE } from "../../data/dbOptimization";

interface DbOptimizationViewProps {
  data?: typeof DB_OPTIMIZATION_CASE;
}

export const DbOptimizationView: React.FC<DbOptimizationViewProps> = ({
  data = DB_OPTIMIZATION_CASE,
}) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Database className="text-blue-400" />
      <h2 className="text-lg font-bold text-gray-100">Database Optimization Case Study</h2>
    </div>

    <p className="text-sm text-gray-300 border-l-2 border-gray-600 pl-3">{data.scenario}</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#0d1117] p-3 rounded border border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-red-400 font-semibold text-xs">Before</span>
          <span className="text-red-300 font-mono text-xs">{data.before.latency}</span>
        </div>
        <pre className="text-xs text-gray-300 font-mono bg-[#0b0d0f] p-2 rounded overflow-auto">
          {data.before.query}
        </pre>
        <ul className="text-xs text-red-300 mt-2 list-disc pl-4">
          {data.before.issues.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>

      <div className="bg-[#0d1117] p-3 rounded border border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-400 font-semibold text-xs">After</span>
          <span className="text-green-300 font-mono text-xs">{data.after.latency}</span>
        </div>
        <pre className="text-xs text-gray-300 font-mono bg-[#0b0d0f] p-2 rounded overflow-auto">
          {data.after.query}
        </pre>
        <ul className="text-xs text-green-300 mt-2 list-disc pl-4">
          {data.after.improvements.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
