export const IAM_POLICY_DATA = {
  title: "Terraform Execution IAM Policy",
  context: "Securing IaC pipelines using Principle of Least Privilege (PoLP).",
  aws_policy: {
    role: "TerraformDeploymentRole",
    statement: JSON.stringify(
      {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "AllowOnlyECSDeployment",
            Effect: "Allow",
            Action: ["ecs:UpdateService", "ecr:GetAuthorizationToken", "s3:GetObject"],
            Resource: [
              "arn:aws:ecs:ap-south-1:*:service/payment-cluster/*",
              "arn:aws:ecr:ap-south-1:*:repository/app-images",
              "arn:aws:s3:::infra-state-bucket/*",
            ],
          },
          {
            Sid: "DenyIAMChanges",
            Effect: "Deny",
            Action: ["iam:*", "organizations:*"],
            Resource: "*",
          },
        ],
      },
      null,
      2
    ),
    summary:
      "This policy enforces PoLP, allowing Terraform only the specific actions needed to deploy ECS services and denying sensitive IAM/Org changes.",
  },
};
