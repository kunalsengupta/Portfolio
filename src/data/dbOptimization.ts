export const DB_OPTIMIZATION_CASE = {
  scenario: "High-traffic Analytics Dashboard (Blufig Digital)",
  before: {
    latency: "850ms (P95)",
    query: `SELECT users.email, events.type, events.timestamp
FROM events
JOIN users ON events.user_id = users.id
WHERE events.timestamp > NOW() - INTERVAL '7 days'
ORDER BY events.timestamp DESC;`,
    issues: [
      "⚠️ Full Table Scan on 'events' table (15M rows)",
      "⚠️ Missing index on 'timestamp' column",
      "⚠️ N+1 problem in associated data fetching",
    ],
  },
  after: {
    latency: "45ms (Cached) / 580ms (Miss)",
    strategy: "Materialized View + Redis Cache-Aside",
    query: `// Check Redis Cache
const cacheKey = 'analytics:weekly:v1';
const cached = await redis.get(cacheKey);

// Fallback to Optimized Query
const result = await db.query(\`
  SELECT * FROM weekly_analytics_view
  WHERE timestamp > $1
\`);`,
    improvements: [
      "✅ Added Composite Index (user_id, timestamp)",
      "✅ Implemented Redis SetEx (TTL: 10 mins)",
      "✅ Reduced DB Load by 45%",
    ],
  },
};
