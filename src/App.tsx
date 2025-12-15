import React, { useEffect, useState, useCallback } from "react";
import { Send } from "lucide-react";
import { AppShell } from "./components/layout/AppShell";
import { loadUmami, umamiTrack } from "./lib/telemetry";
import { ENDPOINTS } from "./data/endpoints";

import { PROFILE_SUMMARY } from "./data/profile";
import { PROJECTS_DIFF } from "./data/projects";
import { SKILLS_DATA } from "./data/skills";
import { IAM_POLICY_DATA } from "./data/iamPolicy";
import { AUTH_FLOW_DATA } from "./data/authFlow";
import { DB_OPTIMIZATION_CASE } from "./data/dbOptimization";

import { OverviewView } from "./components/views/OverviewView";
import { ExperienceView } from "./components/views/ExperienceView";
import { ProjectsView } from "./components/views/ProjectsView";
import { ArchitectureView } from "./components/views/ArchitectureView";
import { IamPolicyView } from "./components/views/IamPolicyView";
import { AuthSystemView } from "./components/views/AuthSystemView";
import { StackCardsView } from "./components/views/StackView";
import { DbOptimizationView } from "./components/views/DbOptimizationView";

type RequestState = "idle" | "loading" | "success";

export default function App() {
  const [activeId, setActiveId] = useState<string>("overview");
  const [activeTab, setActiveTab] = useState<"visualize" | "json">("visualize");
  const [requestState, setRequestState] = useState<RequestState>("idle");
  const [responseStats, setResponseStats] = useState<{
    status: number | null;
    time: number | null;
    size: string | null;
  }>({
    status: null,
    time: null,
    size: null,
  });

  useEffect(() => {
    loadUmami();
  }, []);

  useEffect(() => {
    setRequestState("idle");
    setResponseStats({ status: null, time: null, size: null });
    umamiTrack(`endpoint_open_${activeId}`);
  }, [activeId]);

  const handleSend = () => {
    setRequestState("loading");
    umamiTrack(`endpoint_request_${activeId}`);

    setTimeout(() => {
      const time = Math.floor(Math.random() * 40) + 20;
      setRequestState("success");
      setResponseStats({ status: 200, time, size: "2.8KB" });
      umamiTrack(`endpoint_success_${activeId}`);
    }, 600);
  };

  const getJsonData = useCallback(() => {
    switch (activeId) {
      case "overview":
        return PROFILE_SUMMARY;
      case "experience":
        return { profile: PROFILE_SUMMARY, projects: PROJECTS_DIFF };
      case "projects":
        return PROJECTS_DIFF;
      case "stack":
        return SKILLS_DATA;
      case "iam-policy":
        return IAM_POLICY_DATA;
      case "auth-system":
        return AUTH_FLOW_DATA;
      case "architecture":
        return {
          mermaid: `graph TD
  API[API Gateway] --> Auth[Auth Service]
  API --> Users[User Service]
  API --> Payment[Payment Service]
  Payment -->|publish| MQ[(RabbitMQ)]
  MQ --> Worker1[Email Worker]
  MQ --> Worker2[Notification Worker]
  Payment --> DB[(Postgres)]
  Worker1 --> Redis[(Redis Cache)]
  Worker2 --> Analytics[(Materialized Views)]
`,
        };
      case "optimization":
        return DB_OPTIMIZATION_CASE;
      default:
        return {};
    }
  }, [activeId]);

  const renderView = () => {
    if (requestState === "idle") {
      return (
        <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50">
          <Send size={48} className="mb-4" />
          <p>Click Send to fetch {ENDPOINTS.find((e) => e.id === activeId)?.label ?? "data"}</p>
        </div>
      );
    }

    if (requestState === "loading") {
      return (
        <div className="h-full flex items-center justify-center">
          <span className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full" />
        </div>
      );
    }

    if (activeTab === "json") {
      return (
        <pre className="p-4 text-xs font-mono text-green-400 bg-[#1e1e1e]">
          {JSON.stringify(getJsonData(), null, 2)}
        </pre>
      );
    }

    return (
      <div className="p-4 md:p-6 max-w-6xl mx-auto">
        {activeId === "overview" && <OverviewView />}
        {activeId === "experience" && <ExperienceView />}
        {activeId === "projects" && <ProjectsView />}
        {activeId === "architecture" && <ArchitectureView />}
        {activeId === "iam-policy" && <IamPolicyView data={IAM_POLICY_DATA} />}
        {activeId === "auth-system" && <AuthSystemView data={AUTH_FLOW_DATA} />}
        {activeId === "stack" && <StackCardsView />}
        {activeId === "optimization" && <DbOptimizationView data={DB_OPTIMIZATION_CASE} />}
      </div>
    );
  };

  return (
    <AppShell
      activeId={activeId}
      activeTab={activeTab}
      status={responseStats.status}
      time={responseStats.time}
      requestState={requestState}
      onChangeEndpoint={setActiveId}
      onChangeTab={setActiveTab}
      onSend={handleSend}
    >
      {renderView()}
    </AppShell>
  );
}
