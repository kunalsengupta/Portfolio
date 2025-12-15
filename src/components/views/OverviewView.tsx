import React from "react";
import { OverviewCard } from "../cards/OverviewCard";
import { HeroProjectScaffold } from "../cards/HeroProjectScaffold";
import { DeploymentPlanCard } from "../cards/DeploymentPlanCard";

export const OverviewView: React.FC = () => (
  <div className="space-y-6">
    <OverviewCard />
    <div className="flex flex-wrap gap-2 text-xs">
    {[
      "4+ years backend & infra",
      "Node.js + TypeScript",
      "Postgres + Redis",
      "Terraform on AWS/DO",
      "Event-driven (RabbitMQ)"
    ].map((stat) => (
      <span
        key={stat}
        className="px-2 py-1 rounded-full bg-[#252526] border border-gray-700 text-gray-300"
      >
        {stat}
      </span>
    ))}
  </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <HeroProjectScaffold />
      <div className="bg-[#252526] p-4 rounded border border-gray-700">
        <DeploymentPlanCard />
      </div>
    </div>
  </div>
);
