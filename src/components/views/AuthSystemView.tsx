import React from "react";
import { Shield } from "lucide-react";
import { AUTH_FLOW_DATA } from "../../data/authFlow";

interface AuthSystemViewProps {
  data?: typeof AUTH_FLOW_DATA;
}

export const AuthSystemView: React.FC<AuthSystemViewProps> = ({ data = AUTH_FLOW_DATA }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-2">
      <Shield className="text-yellow-400" />
      <h2 className="text-lg font-bold text-gray-100">{data.title}</h2>
    </div>

    <p className="text-sm text-gray-300 border-l-2 border-gray-600 pl-3">{data.summary}</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.flow_steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div
            key={step.id}
            className="bg-[#252526] p-4 rounded border border-gray-700 relative"
          >
            <div className="absolute -top-3 left-4 bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
              {idx + 1}
            </div>
            <div className="ml-10">
              <div className="flex items-center gap-2 mb-2">
                <Icon size={18} className="text-yellow-400" />
                <h4 className="text-sm font-semibold text-gray-100">{step.title}</h4>
              </div>
              <p className="text-xs text-gray-300">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
