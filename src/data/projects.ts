export const PROJECTS_DIFF = [
  {
    id: "proj_ai_log",
    title: "Error / AI Log Analyzer",
    filename: "packages/core/src/analyzer/run.ts",
    liveDemo: undefined,
    codebaseLink: "https://github.com/kunalsengupta/error-log-analyzer",
    context:
      "Monorepo with core domain + adapters (Gemini, Postgres, Winston) for AI-powered log analysis.",
    problemState: [
      "// Scattered logs across services",
      "// Manual grep, ad-hoc queries, no central clustering of incidents"
    ],
    solutionState: [
      "// Monorepo with core domain + ports",
      "// Adapters for Winston (source), Gemini (LLM), Postgres (sink)",
      "// Summaries & clusters exposed via a clean API"
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Monorepo (packages/*)",
      "Ports & Adapters (Hexagonal)",
      "Prisma + PostgreSQL",
      "Winston",
      "Gemini API (LLM)",
      "Docker / docker-compose"
    ]
  },
  {
    id: "proj_fintech",
    title: "Fintech Infra Automation",
    filename: "infra/terraform/main.tf",
    liveDemo: undefined,
    codebaseLink: undefined,
    context: "Transitioning from manual ClickOps to Infrastructure as Code.",
    problemState: [
      "# Manual AWS Console Configuration",
      "resource 'aws_instance' 'manual_server' {",
      "  ami = 'ami-0c55b159cbfafe1f0' # Hardcoded",
      "  # Security groups added manually via GUI",
      "}",
    ],
    solutionState: [
      "# Automated Multi-Cloud Provisioning",
      "module 'payment_cluster' {",
      "  source = './modules/compute'",
      "  instance_count = var.traffic_load > 1000 ? 5 : 2",
      "  security_groups = [aws_security_group.app_sg.id]",
      "}",
    ],
    tech: ["Terraform", "AWS IAM", "Docker"],
  },
  {
    id: "proj_eda",
    title: "Microservice Decoupling (RabbitMQ)",
    filename: "workers/processor.ts",
    liveDemo: undefined,
    codebaseLink: "",
    context: "Migrating from synchronous HTTP calls to asynchronous event queues for resilience.",
    problemState: [
      "// Payment Service: synchronous call",
      "try {",
      "  await http.post('/email-service/send', payload);",
      "} catch (e) {",
      "  throw new Error('Transaction failed');",
      "}",
    ],
    solutionState: [
      "// Payment Service: asynchronous event push",
      "await rabbitmq.publish('user.payment.success', payload);",
      "// Email Service consumes event independently.",
    ],
    tech: ["RabbitMQ", "TypeScript", "Microservices"],
  },
  {
    id: "proj_perf",
    title: "Analytics Engine Optimization",
    filename: "services/analytics/query.ts",
    liveDemo: undefined,
    codebaseLink: undefined,
    context: "Optimizing database load for high-traffic dashboards.",
    problemState: [
      "// Direct DB hit on every request",
      "const data = await db.query('SELECT * FROM large_events_table WHERE user_id = $1');",
      "return res.json(data); // Latency: ~850ms",
    ],
    solutionState: [
      "// Redis Cache-Aside Strategy",
      "const cached = await redis.get(`analytics:${userId}`);",
      "if (cached) return res.json(JSON.parse(cached));",
      "const data = await db.query(...); // Fallback",
      "await redis.setex(key, 3600, JSON.stringify(data));",
    ],
    tech: ["Node.js", "Redis", "PostgreSQL"],
  },
];
