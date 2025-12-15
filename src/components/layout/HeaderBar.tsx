import React from "react";
import { Send } from "lucide-react";
import { ENDPOINTS, BASE_URL } from "../../data/endpoints";

interface HeaderBarProps {
  activeId: string;
  onSend: () => void;
  disabled: boolean;
}

const buildUrl = (url: string): string => `${BASE_URL}${url}`;

export const HeaderBar: React.FC<HeaderBarProps> = ({ activeId, onSend, disabled }) => {
  const activeEndpoint = ENDPOINTS.find((e) => e.id === activeId) ?? ENDPOINTS[0];

  return (
    <div className="border-b border-gray-700 px-4 md:px-6 py-2 bg-[#1e1e1e]">
      {/* Stack on mobile, row on >= sm */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
        <div className="flex flex-1 h-9 sm:h-10 shadow-sm">
          <div
            className={[
              "border border-gray-600 border-r-0 rounded-l px-2 sm:px-3 flex items-center text-[11px] sm:text-sm font-bold shrink-0",
              activeEndpoint.method === "GET" ? "text-green-400" : "text-yellow-400"
            ].join(" ")}
          >
            {activeEndpoint.method}
          </div>
          <div className="bg-[#1e1e1e] border border-gray-600 flex-1 px-2 sm:px-3 flex items-center text-gray-300 font-mono text-[11px] sm:text-sm overflow-hidden whitespace-nowrap">
            {buildUrl(activeEndpoint.url)}
          </div>
        </div>

        <button
          onClick={onSend}
          disabled={disabled}
          className="h-9 sm:h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-3 sm:px-5 rounded-md sm:rounded font-semibold flex items-center justify-center gap-2 text-xs sm:text-sm"
        >
          {disabled ? (
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <Send size={14} className="sm:hidden" />
          )}
          <span className="hidden sm:inline-flex items-center gap-1">
            <Send size={14} /> Send
          </span>
          <span className="sm:hidden">Send</span>
        </button>
      </div>
    </div>
  );
};