export type HttpMethod = "GET" | "POST";

export interface Endpoint {
  method: HttpMethod;
  url: string;
  id: string;
  label: string;
}

export const BASE_URL = "api.kunalsengupta.dev";

export const ENDPOINTS: Endpoint[] = [
  { method: "GET", url: "/api/v1/overview", id: "overview", label: "Overview" },
  { method: "GET", url: "/api/v1/experience", id: "experience", label: "Work History" },
  { method: "GET", url: "/api/v1/migrations", id: "projects", label: "Project Diffs" },
  { method: "GET", url: "/api/v1/stack", id: "stack", label: "Tech Stack" },
  { method: "GET", url: "/api/v1/iam-policy", id: "iam-policy", label: "IAM/IaC Policy" },
  { method: "GET", url: "/api/v1/auth-system", id: "auth-system", label: "Auth Flow Design" },
  { method: "GET", url: "/api/v1/architecture", id: "architecture", label: "Architecture" },
  { method: "POST", url: "/api/v1/db/optimize", id: "optimization", label: "DB Query Tuner" }
];
