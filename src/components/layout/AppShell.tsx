import React from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { HeaderBar } from "./HeaderBar";
import { TabsBar } from "./TabsBar";

interface AppShellProps {
  activeId: string;
  activeTab: "visualize" | "json";
  status: number | null;
  time: number | null;
  requestState: "idle" | "loading" | "success";
  onChangeEndpoint: (id: string) => void;
  onChangeTab: (tab: "visualize" | "json") => void;
  onSend: () => void;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  activeId,
  activeTab,
  status,
  time,
  requestState,
  onChangeEndpoint,
  onChangeTab,
  onSend,
  children
}) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#1e1e1e] text-gray-300 font-sans overflow-hidden selection:bg-blue-500/30">
      <Sidebar activeId={activeId} onChange={onChangeEndpoint} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Sticky header area so Send + tabs stay visible */}
        <div className="sticky top-0 z-20 bg-[#1e1e1e]">
          <MobileNav activeId={activeId} onChange={onChangeEndpoint} />
          <HeaderBar
            activeId={activeId}
            onSend={onSend}
            disabled={requestState === "loading"}
          />
          <TabsBar
            activeId={activeId}
            activeTab={activeTab}
            onChange={onChangeTab}
            status={status}
            time={time ?? null}
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};