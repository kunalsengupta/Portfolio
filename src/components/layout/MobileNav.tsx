import React from "react";
import { ENDPOINTS, HttpMethod } from "../../data/endpoints";

interface MobileNavProps {
  activeId: string;
  onChange: (id: string) => void;
}

function methodColor(method: HttpMethod): string {
  switch (method) {
    case "GET":
      return "text-green-400";
    case "POST":
      return "text-yellow-400";
    default:
      return "text-gray-300";
  }
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeId, onChange }) => (
  <nav className="lg:hidden border-b border-gray-700 bg-[#252526]">
    <div className="grid grid-cols-2 gap-2 px-3 py-3">
      {ENDPOINTS.map((ep) => (
        <button
          key={ep.id}
          onClick={() => onChange(ep.id)}
          className={[
            "w-full text-left rounded-md border px-2 py-2 text-[11px] leading-snug",
            activeId === ep.id
              ? "bg-[#3b2a1f] border-orange-500 text-white"
              : "bg-[#1e1e1e] border-gray-700 text-gray-200"
          ].join(" ")}
        >
          <div className={`font-mono text-[10px] ${methodColor(ep.method)}`}>
            {ep.method}
          </div>
          <div className="mt-0.5 font-semibold">{ep.label}</div>
        </button>
      ))}
    </div>
  </nav>
);