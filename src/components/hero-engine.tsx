"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Arrow } from "@/components/icons";
import { motionSprings } from "@/components/motion";

const MotionLink = motion.create(Link);

type LensKey = "cpa" | "business" | "individual";

interface LensData {
  id: LensKey;
  label: string;
  badge: string;
  metricLabel: string;
  metricValue: string;
  focusTitle: string;
  focusDesc: string;
  activeNode: 1 | 2 | 3;
  deliverables: string[];
  ctaUrl: string;
  ctaText: string;
}

const LENSES: Record<LensKey, LensData> = {
  cpa: {
    id: "cpa",
    label: "For CPA Firms",
    badge: "US Firm Augmentation",
    metricLabel: "Capacity Release",
    metricValue: "40–60%",
    focusTitle: "Workpaper & Review-Ready Delivery",
    focusDesc: "White-label support that plugs seamlessly into your firm's standards, software stack, and review cycle.",
    activeNode: 1,
    deliverables: ["Workpaper Preparation", "Seasonal Staff Augmentation", "Tax Form Prep (1040/1120/1065)"],
    ctaUrl: "/cpa-firms",
    ctaText: "Explore CPA Support",
  },
  business: {
    id: "business",
    label: "For Businesses",
    badge: "Operational Accounting",
    metricLabel: "Monthly Close Cadence",
    metricValue: "5-Day Target",
    focusTitle: "Continuous Books & Decision Clarity",
    focusDesc: "Organized reconciliations, timely close routines, and clear visibility so leadership moves with certainty.",
    activeNode: 2,
    deliverables: ["Monthly Ledger Close", "Payroll & Compliance Routines", "Cash Flow & Controller Support"],
    ctaUrl: "/businesses",
    ctaText: "Explore Business Support",
  },
  individual: {
    id: "individual",
    label: "For Cross-Border",
    badge: "US ↔ India Dual Nexus",
    metricLabel: "Jurisdiction Harmony",
    metricValue: "Bilateral",
    focusTitle: "Cross-Border & Personal Tax Coordination",
    focusDesc: "Clarity at the intersection of US IRS filings, India ITR obligations, and NRI tax circumstances.",
    activeNode: 3,
    deliverables: ["US Federal & State Filing", "India ITR Compliance", "Cross-Border Treaty & NRI Analysis"],
    ctaUrl: "/individuals",
    ctaText: "Explore Personal Tax",
  },
};

export function HeroEngine() {
  const [activeLens, setActiveLens] = useState<LensKey>("cpa");
  const [timeNY, setTimeNY] = useState<string>("");
  const [timeMum, setTimeMum] = useState<string>("");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimeNY(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );
      setTimeMum(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );
    };
    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const cur = LENSES[activeLens];
  const highlightedNode = hoveredNode ?? cur.activeNode;

  return (
    <div className="hero-monograph">
      {/* Top Architectural Metadata Rail */}
      <div className="hero-rail">
        <div className="hero-rail-item">
          <div className="rail-tag-row">
            <span className="rail-dot" aria-hidden="true" />
            <span className="rail-label">Transatlantic Corridor</span>
          </div>
          <span className="rail-val">US ↔ India Financial Bridge</span>
        </div>
        <div className="hero-rail-item">
          <div className="rail-tag-row">
            <span className="rail-label">Practice Credential</span>
          </div>
          <span className="rail-val">UPC &amp; Associates · ARN-278052</span>
        </div>
        <div className="hero-rail-clocks">
          <div className="rail-clock">
            <span className="clock-city">NYC</span>
            <span className="clock-time">{timeNY || "09:30 AM"} EST</span>
          </div>
          <span className="clock-sep" aria-hidden="true">/</span>
          <div className="rail-clock">
            <span className="clock-city">MUM</span>
            <span className="clock-time">{timeMum || "07:00 PM"} IST</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Hero Stage */}
      <div className="hero-stage">
        {/* Left Column: Bold Editorial Composition */}
        <div className="hero-editorial">
          <div className="hero-kicker-badge">
            <span className="badge-pill">Fiduciary &amp; Operational Excellence</span>
            <span className="badge-line" aria-hidden="true" />
            <span className="badge-code">TRIO-SYS // V4</span>
          </div>

          <h1 className="hero-headline">
            <span className="headline-block headline-serif">A capable extension</span>
            <span className="headline-block headline-sans">
              of your <em className="headline-italic">firm</em> &amp; future.
            </span>
          </h1>

          <p className="hero-synopsis">
            Meticulous accounting, strategic tax coordination, and grounded wealth stewardship. 
            We build the quiet operational backbone that gives your leaders room to do their best work.
          </p>

          {/* Interactive Lens Switcher */}
          <div className="lens-controller" role="region" aria-label="Perspective selector">
            <div className="lens-label-row">
              <span className="lens-label">Select Your Perspective:</span>
              <span className="lens-status">Dynamic Model Active</span>
            </div>
            <div className="lens-buttons" role="tablist">
              {(Object.keys(LENSES) as LensKey[]).map((key) => {
                const item = LENSES[key];
                const active = activeLens === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveLens(key)}
                    className={`lens-btn ${active ? "is-active" : ""}`}
                    style={{ position: "relative" }}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-lens-indicator"
                        className="lens-active-pill"
                        transition={motionSprings.snappy}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "inherit",
                          backgroundColor: "var(--forest)",
                          zIndex: 0,
                        }}
                      />
                    )}
                    <span className="lens-btn-indicator" style={{ position: "relative", zIndex: 1 }} aria-hidden="true" />
                    <span className="lens-btn-text" style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Action Group */}
          <div className="hero-cta-group">
            <MotionLink
              className="hero-btn-primary"
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={motionSprings.snappy}
            >
              <span>Initiate Conversation</span>
              <Arrow />
            </MotionLink>
            <AnimatePresence mode="wait">
              <MotionLink
                key={cur.ctaUrl}
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={motionSprings.gentle}
                className="hero-btn-secondary"
                href={cur.ctaUrl}
              >
                <span>{cur.ctaText}</span>
                <span className="arrow-inline" aria-hidden="true">→</span>
              </MotionLink>
            </AnimatePresence>
          </div>

          {/* Micro-Trust Footnote */}
          <div className="hero-credentials">
            <div className="cred-mark">
              <span>TR</span>
            </div>
            <p className="cred-text">
              <strong>Considered. Dispassionate. Rigorous.</strong> Zero automated guesswork, 
              full confidentiality protocols, and senior Chartered Accountant oversight.
            </p>
          </div>
        </div>

        {/* Right Column: Bespoke Architectural Triad Diagram */}
        <div className="hero-diagram-container">
          <div className="diagram-card">
            {/* Header with Coordinates */}
            <div className="diagram-header">
              <div className="diagram-title-wrap">
                <span className="diagram-tag">DYNAMIC ARCHITECTURE</span>
                <span className="diagram-id">FIG 01.3 — THE TRUST TRIAD</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.badge}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={motionSprings.gentle}
                  className="diagram-live-pill"
                >
                  <span className="live-dot" />
                  <span>{cur.badge}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Precision SVG Vector Blueprint */}
            <div className="diagram-svg-wrap">
              <svg
                viewBox="0 0 540 420"
                className="triad-svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Gradients for Nodes and Rays */}
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E4B87E" />
                    <stop offset="100%" stopColor="#9C6D36" />
                  </linearGradient>
                  <linearGradient id="forestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E5C4B" />
                    <stop offset="100%" stopColor="#0B2922" />
                  </linearGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D9A66C" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#123D32" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="archGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(246, 244, 237, 0.04)" strokeWidth="1" />
                  </pattern>
                </defs>

                {/* Technical Architectural Grid Background */}
                <rect width="540" height="420" fill="url(#archGrid)" />

                {/* Coordinate Crosshairs */}
                <line x1="40" y1="210" x2="500" y2="210" stroke="rgba(246, 244, 237, 0.07)" strokeDasharray="3 3" />
                <line x1="270" y1="30" x2="270" y2="390" stroke="rgba(246, 244, 237, 0.07)" strokeDasharray="3 3" />

                {/* Ambient Center Glow */}
                <circle cx="270" cy="220" r="140" fill="url(#centerGlow)" />

                {/* Outer Precision Triangulation Arc */}
                <circle
                  cx="270"
                  cy="220"
                  r="165"
                  fill="none"
                  stroke="rgba(217, 166, 108, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="rotating-orbit"
                />

                {/* Connecting Vector Lines between Node 1 (Accounting: 140, 110), Node 2 (Tax: 400, 110), Node 3 (Wealth: 270, 330) */}
                <path
                  d="M 140 120 L 400 120 L 270 330 Z"
                  fill="none"
                  stroke={highlightedNode ? "rgba(217, 166, 108, 0.45)" : "rgba(246, 244, 237, 0.15)"}
                  strokeWidth="1.5"
                />

                {/* Active Tracer Line */}
                <motion.path
                  d={
                    highlightedNode === 1
                      ? "M 140 120 L 400 120"
                      : highlightedNode === 2
                      ? "M 400 120 L 270 330"
                      : "M 270 330 L 140 120"
                  }
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="2.5"
                  className="tracer-line"
                  animate={{
                    d:
                      highlightedNode === 1
                        ? "M 140 120 L 400 120"
                        : highlightedNode === 2
                        ? "M 400 120 L 270 330"
                        : "M 270 330 L 140 120",
                  }}
                  transition={motionSprings.architectural}
                />

                {/* Center Fusion Nexus */}
                <g transform="translate(270, 200)">
                  <motion.g
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <circle r="28" fill="url(#forestGradient)" stroke="rgba(217, 166, 108, 0.4)" strokeWidth="1.5" />
                    <circle r="4" fill="#E4B87E" />
                    <text
                      y="4"
                      textAnchor="middle"
                      fill="#E4B87E"
                      fontSize="11"
                      fontFamily="serif"
                      fontStyle="italic"
                    >
                      Trio
                    </text>
                  </motion.g>
                </g>

                {/* NODE 01: Continuous Accounting (Top Left) */}
                <g transform="translate(140, 120)">
                  <motion.g
                    className={`diagram-node ${highlightedNode === 1 ? "is-node-active" : ""}`}
                    onMouseEnter={() => setHoveredNode(1)}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.06 }}
                    transition={motionSprings.snappy}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r="42" fill="#0B2922" stroke={highlightedNode === 1 ? "#E4B87E" : "rgba(246,244,237,0.2)"} strokeWidth={highlightedNode === 1 ? "2.5" : "1.2"} />
                    <circle r="34" fill="none" stroke="rgba(217,166,108,0.18)" strokeDasharray="2 3" />
                    <text y="-8" textAnchor="middle" fill="#E4B87E" fontSize="10" fontWeight="600" letterSpacing="0.1em">01</text>
                    <text y="8" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="serif">Accounting</text>
                    <text y="22" textAnchor="middle" fill="rgba(246,244,237,0.6)" fontSize="9">Ledger &amp; Close</text>
                  </motion.g>
                </g>

                {/* NODE 02: Strategic Tax (Top Right) */}
                <g transform="translate(400, 120)">
                  <motion.g
                    className={`diagram-node ${highlightedNode === 2 ? "is-node-active" : ""}`}
                    onMouseEnter={() => setHoveredNode(2)}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.06 }}
                    transition={motionSprings.snappy}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r="42" fill="#0B2922" stroke={highlightedNode === 2 ? "#E4B87E" : "rgba(246,244,237,0.2)"} strokeWidth={highlightedNode === 2 ? "2.5" : "1.2"} />
                    <circle r="34" fill="none" stroke="rgba(217,166,108,0.18)" strokeDasharray="2 3" />
                    <text y="-8" textAnchor="middle" fill="#E4B87E" fontSize="10" fontWeight="600" letterSpacing="0.1em">02</text>
                    <text y="8" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="serif">Tax Strategy</text>
                    <text y="22" textAnchor="middle" fill="rgba(246,244,237,0.6)" fontSize="9">US · India · NRI</text>
                  </motion.g>
                </g>

                {/* NODE 03: Wealth Stewardship (Bottom Center) */}
                <g transform="translate(270, 330)">
                  <motion.g
                    className={`diagram-node ${highlightedNode === 3 ? "is-node-active" : ""}`}
                    onMouseEnter={() => setHoveredNode(3)}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.06 }}
                    transition={motionSprings.snappy}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r="42" fill="#0B2922" stroke={highlightedNode === 3 ? "#E4B87E" : "rgba(246,244,237,0.2)"} strokeWidth={highlightedNode === 3 ? "2.5" : "1.2"} />
                    <circle r="34" fill="none" stroke="rgba(217,166,108,0.18)" strokeDasharray="2 3" />
                    <text y="-8" textAnchor="middle" fill="#E4B87E" fontSize="10" fontWeight="600" letterSpacing="0.1em">03</text>
                    <text y="8" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="serif">Wealth</text>
                    <text y="22" textAnchor="middle" fill="rgba(246,244,237,0.6)" fontSize="9">ARN-278052</text>
                  </motion.g>
                </g>
              </svg>
            </div>

            {/* Live Contextual Card with Smooth AnimatePresence Transition */}
            <div className="diagram-readout">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLens}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={motionSprings.gentle}
                >
                  <div className="readout-header">
                    <div>
                      <span className="readout-label">{cur.metricLabel}</span>
                      <div className="readout-value">{cur.metricValue}</div>
                    </div>
                    <div className="readout-status-pill">
                      <span className="pulse-indicator" />
                      <span>Synchronized</span>
                    </div>
                  </div>
                  <h4 className="readout-title">{cur.focusTitle}</h4>
                  <p className="readout-desc">{cur.focusDesc}</p>

                  <div className="readout-tags">
                    {cur.deliverables.map((item, idx) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.25 }}
                        className="readout-tag"
                      >
                        <span className="tag-check" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Technical Footer */}
            <div className="diagram-footer">
              <span className="footer-code">LAT: 40.7128° N (NYC) ↔ 19.0760° N (BOM)</span>
              <span className="footer-mode">INTEGRATED PROTOCOL</span>
            </div>
          </div>

          {/* Overlapping Archival Fiduciary Slip */}
          <div className="fiduciary-slip" aria-hidden="true">
            <div className="slip-inner">
              <div className="slip-top">
                <span className="slip-org">TRUST TRIO LEDGER</span>
                <span className="slip-no">REF #0849-26</span>
              </div>
              <div className="slip-rule" />
              <div className="slip-body">
                <span className="slip-line">AUDIT TRAIL · VERIFIED</span>
                <span className="slip-line">NO OUTSOURCED COMMODITIZATION</span>
                <span className="slip-highlight">DIRECT CA LEADERSHIP</span>
              </div>
              <div className="slip-footer">
                <span>ESTABLISHED DISCIPLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
