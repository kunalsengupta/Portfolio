// src/data/skillIcons.ts

export const SKILL_ICON_MAP: Record<string, string> = {
  // Languages
  "node": "nodejs/nodejs-original.svg",
  "typescript": "typescript/typescript-original.svg",
  "javascript": "javascript/javascript-original.svg",
  "python": "python/python-original.svg",

  // Databases
  "postgres": "postgresql/postgresql-original.svg",
  "mongodb": "mongodb/mongodb-original.svg",
  "redis": "redis/redis-original.svg",
  "mysql": "mysql/mysql-original.svg",

  // DevOps & Cloud (Fixed AWS)
  "terraform": "terraform/terraform-original.svg",
  "docker": "docker/docker-original.svg",
  "aws": "amazonwebservices/amazonwebservices-original-wordmark.svg",
  "digitalocean": "digitalocean/digitalocean-original.svg",

  // Architecture (Fixed Missing Icons)
  "microservices": "kubernetes/kubernetes-plain.svg",
  "rabbit": "rabbitmq/rabbitmq-original.svg",
  "rest": "fastapi/fastapi-original.svg", // Using FastAPI icon as a proxy for REST, or use a generic 'code' icon
  "graphql": "graphql/graphql-plain.svg",
  "system": "linux/linux-original.svg", // Fallback for System Design (or use a generic image)

  // CI/CD
  "github": "github/github-original.svg",
  "jenkins": "jenkins/jenkins-original.svg",
  "gitops": "argo/argo-original.svg",
};