import React from "react";
import { Layers } from "lucide-react";
import { ENDPOINTS, BASE_URL } from "../../data/endpoints";

interface SidebarProps {
  activeId: string;
  onChange: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeId, onChange }) => {
  const handleKeyNav = (e: React.KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") onChange(id);
  };

  return (
    <aside className="hidden lg:flex w-64 border-r border-gray-700 flex-col bg-[#252526] shrink-0">
      <div className="p-4 border-b border-gray-700 font-semibold flex items-center gap-2 text-gray-100">
        <Layers size={18} className="text-orange-500" />
        <span>Portfolio API Collection</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-1" aria-label="API Endpoints">
        {ENDPOINTS.map((ep) => (
          <button
            key={ep.id}
            onClick={() => onChange(ep.id)}
            onKeyDown={(e) => handleKeyNav(e, ep.id)}
            className={[
              "w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors group",
              activeId === ep.id ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e]"
            ].join(" ")}
          >
            <span
              className={[
                "text-[10px] font-bold w-8 text-right",
                activeId === ep.id
                  ? ep.method === "GET"
                    ? "text-green-400"
                    : "text-yellow-400"
                  : "text-gray-500"
              ].join(" ")}
            >
              {ep.method}
            </span>
            <span>{ep.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
        <div className="flex justify-between items-center mb-1">
          <span>Environment</span>
          <span className="text-green-500">Production</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Base URL</span>
          <span className="font-mono truncate">{BASE_URL}</span>
        </div>
      </div>
    </aside>
  );
};