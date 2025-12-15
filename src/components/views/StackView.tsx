import React from "react";
// Assuming SKILLS_DATA and SKILL_ICON_MAP are imported from a relative path
import { SKILLS_DATA } from "../../data/skills";
import { SKILL_ICON_MAP } from "../../data/skillIcons";

// --- Helper Functions (Preserved) ---
const parseSkill = (skill: string) => {
  const match = skill.match(/(.+?)\s*\((\d+)y\)/i);
  return match
    ? { name: match[1].trim(), years: match[2] }
    : { name: skill.trim(), years: null };
};

const getIcon = (name: string) => {
  const lower = name.toLowerCase();

  const key = Object.keys(SKILL_ICON_MAP).find((k) =>
    lower.includes(k)
  );

  return key
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${SKILL_ICON_MAP[key]}`
    : null;
};

// --- Component ---
export const StackCardsView: React.FC = () => {
  // Define which categories go into Section 1 and Section 2
  const section1Categories = ["languages", "architecture"];
  const section2Categories = ["databases", "devops", "ci_cd"];

  const sections = [
    {
      title: "Core Development & Architecture",
      categories: section1Categories,
      key: "core",
    },
    {
      title: "Databases & Infrastructure",
      categories: section2Categories,
      key: "infra",
    },
  ];

  const renderSkillCard = (raw: string) => {
    const { name, years } = parseSkill(raw);
    const iconUrl = getIcon(name);

    return (
      <div
        key={raw}
        className="flex gap-4 items-center bg-[#252525] p-3 rounded-lg border border-gray-700 hover:bg-[#2d2d2d] transition cursor-pointer"
        onClick={() => navigator.clipboard.writeText(name)}
      >
        {/* Icon (The part that adds separate icons for each tech stack) */}
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={name}
            className="w-8 h-8 object-contain" // Reduced size slightly for better fit
          />
        ) : (
          <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs">
            N/A
          </div>
        )}

        <div className="flex flex-col">
          <span className="text-gray-200 font-medium">{name}</span>
          {years && (
            <span className="text-[10px] mt-1 px-2 py-[1px] bg-gray-800 text-gray-400 rounded w-fit">
              {years} years
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderCategory = (category: string) => {
    const items = SKILLS_DATA[category as keyof typeof SKILLS_DATA];
    if (!items || items.length === 0) return null;

    return (
      <div key={category} className="mb-6 last:mb-0">
        <h4 className="text-lg capitalize font-medium mb-3 text-cyan-400">
          {category.replace("_", " ")}
        </h4>
        <div className="flex flex-col gap-3">
          {items.map(renderSkillCard)}
        </div>
      </div>
    );
  };

  return (
    // Main grid to establish the two main sections (columns on large screens)
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {sections.map((section) => (
        // Container for each section/column
        <div
          key={section.key}
          className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all shadow-xl"
        >
          {/* Section Title (e.g., Core Development & Architecture) */}
          <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-600 pb-3">
            {section.title}
          </h3>

          {/* Render categories within this section */}
          {section.categories.map(renderCategory)}
        </div>
      ))}
    </div>
  );
};