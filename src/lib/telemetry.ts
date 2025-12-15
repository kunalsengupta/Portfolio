const UMAMI_SCRIPT_URL = "https://analytics.kunalsengupta.dev/umami.js";
const UMAMI_WEBSITE_ID = "YOUR_UMAMI_WEBSITE_ID";

export function loadUmami() {
  if (typeof window === "undefined") return;
  if ((window as any).umami) return;
  if (!UMAMI_SCRIPT_URL || !UMAMI_WEBSITE_ID) return;

  const s = document.createElement("script");
  s.async = true;
  s.defer = true;
  s.setAttribute("data-website-id", UMAMI_WEBSITE_ID);
  s.src = UMAMI_SCRIPT_URL;
  document.head.appendChild(s);
}

export function umamiTrack(eventName: string, _props: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    const w = window as any;
    if (w.umami) w.umami(eventName);
  } catch {
    // silent
  }
}
