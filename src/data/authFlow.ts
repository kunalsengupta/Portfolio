import { User, Key, Send, Clock, RefreshCcw, CheckCircle2 } from "lucide-react";

export const AUTH_FLOW_DATA = {
  title: "Access Token & Refresh Token Auth Flow (Anotech)",
  summary:
    "Short-lived Access Token for API calls + long-lived Refresh Token in secure HttpOnly cookie for safe renewal.",
  flow_steps: [
    {
      id: 1,
      title: "Initial Login",
      icon: User,
      description: "User credentials verified by Auth Service.",
    },
    {
      id: 2,
      title: "Token Issuance",
      icon: Key,
      description: "Access Token (15m) + Refresh Token (30d, HttpOnly).",
    },
    {
      id: 3,
      title: "API Usage",
      icon: Send,
      description: "Access Token used in Authorization header.",
    },
    {
      id: 4,
      title: "Expiration & 401",
      icon: Clock,
      description: "Access Token expires; API returns 401.",
    },
    {
      id: 5,
      title: "Silent Renewal",
      icon: RefreshCcw,
      description: "Client posts Refresh Token to /refresh endpoint.",
    },
    {
      id: 6,
      title: "New Tokens Issued",
      icon: CheckCircle2,
      description: "If valid, new tokens issued.",
    },
  ],
};
