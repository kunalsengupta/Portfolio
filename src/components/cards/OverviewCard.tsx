import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";
import { PROFILE_SUMMARY, RESUME_PDF_URL } from "../../data/profile";
import { umamiTrack } from "../../lib/telemetry";

interface OverviewCardProps {
  onResumeDownload?: () => void;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ onResumeDownload }) => (
  <div className="bg-[#252526] p-6 rounded border border-gray-700">
    <div className="flex flex-col md:flex-row gap-4 items-start">
      <div className="w-16 h-16 bg-gray-800 border-2 border-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-gray-300 shadow-xl shrink-0">
        KS
      </div>

      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-100">{PROFILE_SUMMARY.name}</h1>
        <div className="text-blue-400 font-mono mb-3 text-lg">{PROFILE_SUMMARY.role}</div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 border-l-2 border-orange-500 pl-4 bg-gray-800/20 p-2 rounded">
          {PROFILE_SUMMARY.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          <a
            href={`mailto:${PROFILE_SUMMARY.email}`}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-600"
          >
            <Mail size={14} className="text-orange-400" /> Email
          </a>
          <a
            href={PROFILE_SUMMARY.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-600"
          >
            <Linkedin size={14} className="text-blue-400" /> LinkedIn
          </a>
          <a
            href={PROFILE_SUMMARY.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-600"
          >
            <Github size={14} className="text-gray-400" /> GitHub
          </a>

          <a
  href={RESUME_PDF_URL}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    umamiTrack("resume_open");
    onResumeDownload?.();
  }}
  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-600"
>
  <FileText size={14} className="text-green-400" /> View CV
</a>

        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-gray-600" /> {PROFILE_SUMMARY.location}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-gray-600" /> {PROFILE_SUMMARY.phone}
          </div>
        </div>
      </div>
    </div>
  </div>
);
