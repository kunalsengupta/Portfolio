import React from "react";
import { Lock } from "lucide-react";
import { IAM_POLICY_DATA } from "../../data/iamPolicy";

interface IamPolicyViewProps {
  data?: typeof IAM_POLICY_DATA;
}

export const IamPolicyView: React.FC<IamPolicyViewProps> = ({ data = IAM_POLICY_DATA }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Lock className="text-red-400" />
      <h2 className="text-lg font-bold text-gray-100">{data.title}</h2>
    </div>

    <p className="text-sm text-gray-300 border-l-2 border-gray-600 pl-3">{data.context}</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-[#0d1117] p-3 rounded border border-gray-700">
        <div className="text-xs text-gray-400 font-mono mb-2">
          IAM Role: <span className="text-gray-200 font-semibold">{data.aws_policy.role}</span>
        </div>
        <pre className="text-[12px] text-gray-300 font-mono bg-[#0b0d0f] p-2 rounded overflow-auto">
          {data.aws_policy.statement}
        </pre>
      </div>

      <div className="bg-[#0d1117] p-3 rounded border border-gray-700">
        <h4 className="text-sm text-gray-200 font-semibold mb-2">Summary</h4>
        <p className="text-xs text-gray-300">{data.aws_policy.summary}</p>
        <div className="mt-3">
          <h5 className="text-xs text-gray-400 mb-1">Key decisions</h5>
          <ul className="text-xs text-gray-300 list-disc pl-4">
            <li>Principle of Least Privilege for IaC</li>
            <li>Limit Terraform role to deployment-only actions</li>
            <li>Deny all IAM/Organization changes</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
