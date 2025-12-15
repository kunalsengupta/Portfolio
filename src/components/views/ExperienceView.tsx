import React from "react";
import { Activity } from "lucide-react";
import { ExperienceCard } from "../cards/ExperienceCard";

const EXPERIENCE_DATA = [
  {
    company: "Anotech India Solutions",
    role: "SDE – II (Backend & Infra)",
    period: "Nov 2024 – Sept 2025",
    type: "Remote",
    highlights: [
      "Architected microservices for a fintech platform processing 10K+ daily transactions with 99.8% uptime.",
      "Reduced deployment time by 73% (45m → 12m) via GitHub Actions & Docker pipelines.",
      "Eliminated 90% of manual infra errors by codifying AWS/DigitalOcean setup with Terraform.",
      "Decoupled 8 microservices using RabbitMQ for event-driven processing.",
      "Designed secure, stateless authentication using JWT Access Token + Refresh flow.",
    ],
  },
  {
    company: "Blufig Digital",
    role: "Web Developer (Backend Engineering Role)",
    period: "Mar 2024 – Oct 2024",
    type: "Bengaluru (On-site)",
    highlights: [
      "Reduced P95 latency from 850ms to 580ms by optimizing PostgreSQL queries.",
      "Implemented Redis caching, cutting frequent request response times by 45%.",
      "Deployed auto-scaling EC2 instances ensuring 99.5% uptime during traffic spikes.",
    ],
  },
  {
    company: "StoreApps LLP",
    role: "Backend Developer (Junior Role)",
    period: "Jul 2022 – Jul 2023",
    type: "Remote",
    highlights: [
      "Improved API throughput (200 → 500 req/sec) via query tuning.",
      "Implemented JWT RBAC for multi-tenant SaaS security.",
      "Integrated Stripe and SendGrid APIs for core business logic.",
    ],
  },
  {
    company: "Invistis Digital",
    role: "Trainee Engineer",
    period: "Oct 2020 – Mar 2022",
    type: "Remote",
    highlights: [
      "Developed internal CMS APIs using Node.js and MongoDB.",
      "Implemented schema validation using Joi and supported CI/CD workflows.",
    ],
  },
];

export const ExperienceView: React.FC = () => (
  <div className="max-w-3xl">
    <div className="flex items-center gap-2 mb-6 text-gray-300">
      <Activity className="text-blue-500" />
      <h2 className="text-lg font-bold">Execution Logs</h2>
    </div>

    {EXPERIENCE_DATA.map((exp, i) => (
      <ExperienceCard key={i} exp={exp} />
    ))}
  </div>
);
