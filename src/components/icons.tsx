import type { ReactElement } from "react";

const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const icons: Record<string, ReactElement> = {
  ledger: <g {...p}><rect x="5" y="4" width="14" height="16" rx="1.5" /><path d="M9 4v16M12.5 9h3.5M12.5 13h3.5M12.5 17h2" /></g>,
  form: <g {...p}><path d="M7 3.5h7l4 4V20.5H7z" /><path d="M14 3.5v4h4M10 12h5M10 15.5h5" /></g>,
  calendar: <g {...p}><rect x="4" y="5.5" width="16" height="14" rx="1.5" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" /><path d="M8 15c1.2-1.6 2.4-1.6 4 0s2.8 1.6 4 0" /></g>,
  coins: <g {...p}><ellipse cx="10" cy="7" rx="5.5" ry="2.5" /><path d="M4.5 7v5c0 1.4 2.5 2.5 5.5 2.5M4.5 12v5c0 1.4 2.5 2.5 5.5 2.5" /><circle cx="16.5" cy="14.5" r="3.5" /></g>,
  refresh: <g {...p}><path d="M19 8a7.5 7.5 0 0 0-13-1.5M5 16a7.5 7.5 0 0 0 13 1.5" /><path d="M6 3v4h4M18 21v-4h-4" /></g>,
  review: <g {...p}><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5M8 10.5l2 2 3.5-3.5" /></g>,
  compass: <g {...p}><circle cx="12" cy="12" r="8" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></g>,
};

export function iconFor(title: string, index: number) {
  const t = title.toLowerCase();
  const key =
    /payroll/.test(t) ? "coins" :
    /clean|catch|reset|records|revisit|review the/.test(t) ? "refresh" :
    /review|controller|cfo/.test(t) ? "review" :
    /season|capacity|life and income|change/.test(t) ? "calendar" :
    /tax|itr|nri|return|cross-border/.test(t) ? "form" :
    /book|account/.test(t) ? "ledger" :
    ["compass", "ledger", "form", "calendar", "coins", "refresh"][index % 6];
  return <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">{icons[key]}</svg>;
}

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
