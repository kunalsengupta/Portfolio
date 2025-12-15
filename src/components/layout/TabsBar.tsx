import React from "react";
import { ENDPOINTS, BASE_URL } from "../../data/endpoints";

interface TabsBarProps {
  activeTab: "visualize" | "json";
  onChange: (tab: "visualize" | "json") => void;
  status: number | null;
  time: number | null;
  activeId: string;
}

export const TabsBar: React.FC<TabsBarProps> = ({
  activeTab,
  onChange,
  status,
  time,
  activeId
}) => {
  const activeEndpoint = ENDPOINTS.find((e) => e.id === activeId);

  return (
    <div className="border-b border-gray-700 bg-[#1e1e1e]">
      {/* Main tabs row */}
      <div className="flex items-center justify-between px-4 h-11 shrink-0">
        <div className="flex gap-4 h-full">
          <button
            onClick={() => onChange("visualize")}
            className={`text-sm h-full border-b-2 px-2 transition-colors ${
              activeTab === "visualize"
                ? "border-orange-500 text-gray-100"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            Visualize
          </button>
          <button
            onClick={() => onChange("json")}
            className={`text-sm h-full border-b-2 px-2 transition-colors ${
              activeTab === "json"
                ? "border-orange-500 text-gray-100"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            Raw JSON
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-gray-500">
            Status:
            <span className={`ml-2 font-bold ${status ? "text-green-500" : "text-gray-600"}`}>
              {status ?? "---"}
            </span>
          </span>
          <span className="text-gray-500 hidden md:inline">
            Time:
            <span className={`ml-2 font-bold ${time ? "text-green-500" : "text-gray-600"}`}>
              {time ? `${time}ms` : "---"}
            </span>
          </span>
        </div>
      </div>

      {/* Mobile-only active endpoint description */}
      {activeEndpoint && (
        <div className="md:hidden px-4 pb-2 text-[11px] text-gray-400 font-mono truncate">
          {activeEndpoint.label} • {activeEndpoint.method} {BASE_URL}
          {activeEndpoint.url}
        </div>
      )}
    </div>
  );
};