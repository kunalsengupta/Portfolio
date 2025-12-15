import React, { useEffect, useRef } from "react";

interface MermaidDiagramProps {
  chart: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const containerIdRef = useRef(`mermaid-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    let mounted = true;

    async function renderMermaid() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({ startOnLoad: false, theme: "dark", securityLevel: "loose" });
        const { svg } = await mermaid.render(containerIdRef.current + "-svg", chart);
        const container = document.getElementById(containerIdRef.current);
        if (mounted && container) container.innerHTML = svg;
      } catch (e) {
        console.error("Mermaid render error", e);
        const container = document.getElementById(containerIdRef.current);
        if (container) container.innerText = "Mermaid rendering failed (check console).";
      }
    }

    renderMermaid();
    return () => {
      mounted = false;
    };
  }, [chart]);

  return <div id={containerIdRef.current} className="overflow-auto" />;
};
