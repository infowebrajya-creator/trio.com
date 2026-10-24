"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Arrow } from "@/components/icons";
import { motionSprings } from "@/components/motion";

interface LensOption {
  id: "cpa" | "business" | "tax" | "wealth";
  num: string;
  label: string;
  tag: string;
  icon: string;
  desc: string;
  topics: string[];
  suggestedPrompt: string;
}

const PRACTICE_LENSES: LensOption[] = [
  {
    id: "cpa",
    num: "01",
    label: "CPA Firm Augmentation",
    tag: "CAPACITY & REVIEW",
    icon: "🏛️",
    desc: "Offshore capacity for seasonal compression, workpaper assembly, and tax preparation.",
    topics: [
      "1040 & Business Tax Returns",
      "Workpaper Standardization",
      "Busy Season Capacity (40-60%)",
      "UltraTax / Drake / ProConnect",
      "Trial Balance Reconciliations",
      "Partner Review-Ready Delivery",
    ],
    suggestedPrompt: "We're exploring capacity augmentation for our firm's upcoming workflow. We'd like to understand workpaper alignment and review turnaround.",
  },
  {
    id: "business",
    num: "02",
    label: "Business Accounting & Close",
    tag: "CONTINUOUS LEDGERS",
    icon: "📊",
    desc: "Orderly books, timely month-end close cycles, and controller oversight.",
    topics: [
      "Monthly Ledger Close Cadence",
      "Catch-Up & Clean-Up Bookkeeping",
      "QuickBooks / Xero Management",
      "Bank & Credit Card Recs",
      "Payroll Alignment & Support",
      "Management Financial Packages",
    ],
    suggestedPrompt: "We're looking for structured monthly close support and clean reconciliations to maintain ongoing visibility over cash and margins.",
  },
  {
    id: "tax",
    num: "03",
    label: "Personal & Cross-Border Tax",
    tag: "DUAL-JURISDICTION",
    icon: "🌐",
    desc: "Tax strategy and dual-country coordination across US (IRS) and India (ITR).",
    topics: [
      "US-India DTAA Treaty Review",
      "FBAR & Form 8938 Disclosures",
      "Dual Residency Tax Strategy",
      "Foreign Remittance & 15CA/CB",
      "Cross-Border Capital Gains",
      "US 1040 + India ITR Alignment",
    ],
    suggestedPrompt: "We have financial assets and compliance requirements spanning both the US and India, and need coordinated schedule preparation and treaty review.",
  },
  {
    id: "wealth",
    num: "04",
    label: "Wealth & Capital Stewardship",
    tag: "ARN-278052 LICENSED",
    icon: "🛡️",
    desc: "Mutual fund distribution in India and grounded cross-border capital stewardship.",
    topics: [
      "Mutual Fund Distribution (ARN-278052)",
      "NRI Portfolio Navigation",
      "Direct Senior CA Dialogue",
      "Capital Repatriation Review",
      "Tax-Aware Portfolio Hygiene",
      "Long-Horizon Asset Planning",
    ],
    suggestedPrompt: "We're exploring disciplined capital stewardship and mutual fund distribution under ARN-278052 with direct Chartered Accountant oversight.",
  },
];

const CORRIDORS = [
  { id: "transatlantic", label: "US ↔ India Transatlantic", icon: "🌐", badge: "Overnight Production Overlap" },
  { id: "us", label: "US Domestic", icon: "🇺🇸", badge: "IRS & US GAAP Alignment" },
  { id: "india", label: "India Domestic", icon: "🇮🇳", badge: "ICAI & IT Act Compliance" },
] as const;

const URGENCIES = [
  { id: "immediate", label: "Immediate Capacity", time: "Within 7–14 Days", badge: "Priority Intake" },
  { id: "quarter", label: "Upcoming Quarter", time: "Within 30–60 Days", badge: "Planned Rollout" },
  { id: "exploratory", label: "Exploratory Fit", time: "Flexible Timing", badge: "Strategic Dialogue" },
] as const;

export default function ContactForm() {
  const [lensId, setLensId] = useState<LensOption["id"]>("cpa");
  const [corridorId, setCorridorId] = useState<string>("transatlantic");
  const [urgencyId, setUrgencyId] = useState<string>("immediate");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "1040 & Business Tax Returns",
    "Workpaper Standardization",
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  const activeLens = PRACTICE_LENSES.find((l) => l.id === lensId)!;
  const activeCorridor = CORRIDORS.find((c) => c.id === corridorId)!;
  const activeUrgency = URGENCIES.find((u) => u.id === urgencyId)!;

  const refCode = "TT-2026-INTAKE";

  function handleLensChange(newLensId: LensOption["id"]) {
    setLensId(newLensId);
    const newLens = PRACTICE_LENSES.find((l) => l.id === newLensId)!;
    // Pre-select first 2 default topics for the new lens
    setSelectedTopics(newLens.topics.slice(0, 2));
    if (!message || PRACTICE_LENSES.some((l) => l.suggestedPrompt === message)) {
      setMessage(newLens.suggestedPrompt);
    }
  }

  function toggleTopic(topic: string) {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  }

  function generateDossierText() {
    return [
      `=======================================================`,
      `TRUST TRIO // INTAKE MEMORANDUM & ENGAGEMENT BRIEF`,
      `REFERENCE CODE: ${refCode}`,
      `SUPERVISING PRINCIPAL: CA Uday Chhabria (UPC & Associates / ARN-278052)`,
      `=======================================================`,
      ``,
      `1. CLIENT IDENTITY & COORDINATES:`,
      `   • Full Name / Organization: ${name || "[Pending Input]"}`,
      `   • Business Email: ${email || "[Pending Input]"}`,
      `   • Contact Phone / WhatsApp: ${phone || "[Not Specified]"}`,
      ``,
      `2. PRACTICE DOMAIN & JURISDICTION:`,
      `   • Practice Lens: ${activeLens.label} (${activeLens.tag})`,
      `   • Operating Corridor: ${activeCorridor.label}`,
      `   • Target Timeline: ${activeUrgency.label} (${activeUrgency.time})`,
      ``,
      `3. SELECTED ENGAGEMENT SCOPES & TOPICS:`,
      ...(selectedTopics.length > 0
        ? selectedTopics.map((t) => `   [✓] ${t}`)
        : [`   [None Selected]`]),
      ``,
      `4. CONTEXT & OPERATIONAL NOTES:`,
      `   ${message || activeLens.suggestedPrompt}`,
      ``,
      `=======================================================`,
      `TRANSMISSION SECURITY: Standard Bilateral NDA by Default`,
      `CONFIDENTIALITY: No Client PII Stored on Public Web Server`,
      `=======================================================`,
    ].join("\n");
  }

  function handleCopyBrief() {
    const text = generateDossierText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const destination = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "inquiries@trusttrio.com";
    const subject = encodeURIComponent(
      `Trust Trio Engagement Brief [${activeLens.label}] — ${name || "Prospective Client"}`
    );
    const body = encodeURIComponent(generateDossierText());
    window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
    setStatus(
      "Your default email application has been initiated with the complete engagement brief. Review and dispatch from your email client."
    );
  }

  return (
    <div className="consultation-console" id="consultation-console">
      {/* Console Header Bar */}
      <div className="console-header-bar">
        <div className="console-header-left">
          <span className="console-live-dot" aria-hidden="true" />
          <span className="console-header-title">ENGAGEMENT BRIEF ENGINE</span>
          <span className="console-version-pill">VERSION 4.2</span>
        </div>
        <div className="console-header-right">
          <span className="console-ref-badge">{refCode}</span>
        </div>
      </div>

      <form className="console-form" onSubmit={handleSubmit}>
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="console-status-box"
              role="status"
            >
              <span className="status-icon">✓</span>
              <div>
                <strong>Brief Ready for Dispatch</strong>
                <p>{status}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STEP 1: Select Practice Lens */}
        <div className="console-tier">
          <div className="tier-label-row">
            <span className="tier-num">01</span>
            <div>
              <h3 className="tier-title">Select Practice Domain</h3>
              <p className="tier-sub">Choose the core architecture tailored to your firm or personal needs.</p>
            </div>
          </div>

          <div className="lens-cards-grid">
            {PRACTICE_LENSES.map((lens) => {
              const isSelected = lens.id === lensId;
              return (
                <button
                  type="button"
                  key={lens.id}
                  onClick={() => handleLensChange(lens.id)}
                  className={`lens-card-btn${isSelected ? " is-active" : ""}`}
                >
                  <div className="lens-card-top">
                    <span className="lens-card-icon">{lens.icon}</span>
                    <span className="lens-card-num">{lens.num}</span>
                  </div>
                  <h4 className="lens-card-title">{lens.label}</h4>
                  <p className="lens-card-desc">{lens.desc}</p>
                  <div className="lens-card-footer">
                    <span className="lens-card-tag">{lens.tag}</span>
                    <span className="lens-card-check">{isSelected ? "● ACTIVE" : "SELECT"}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Transatlantic Operating Corridor */}
        <div className="console-tier">
          <div className="tier-label-row">
            <span className="tier-num">02</span>
            <div>
              <h3 className="tier-title">Operating Corridor &amp; Jurisdiction</h3>
              <p className="tier-sub">Determine the geographical regulatory framework for your engagement.</p>
            </div>
          </div>

          <div className="corridor-segmented">
            {CORRIDORS.map((corridor) => {
              const isSelected = corridor.id === corridorId;
              return (
                <button
                  type="button"
                  key={corridor.id}
                  onClick={() => setCorridorId(corridor.id)}
                  className={`corridor-btn${isSelected ? " is-active" : ""}`}
                >
                  <span className="corridor-icon">{corridor.icon}</span>
                  <div className="corridor-info">
                    <span className="corridor-name">{corridor.label}</span>
                    <span className="corridor-badge">{corridor.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 3: Dynamic Scope & Topic Chips */}
        <div className="console-tier">
          <div className="tier-label-row">
            <span className="tier-num">03</span>
            <div>
              <h3 className="tier-title">Target Scope &amp; Deliverables</h3>
              <p className="tier-sub">
                Click specific focus areas to instantly integrate them into your engagement brief.
              </p>
            </div>
          </div>

          <div className="chips-cloud">
            {activeLens.topics.map((topic) => {
              const isChecked = selectedTopics.includes(topic);
              return (
                <button
                  type="button"
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`scope-chip${isChecked ? " is-checked" : ""}`}
                >
                  <span className="chip-symbol">{isChecked ? "✓" : "+"}</span>
                  <span>{topic}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 4: Timeline & Urgency */}
        <div className="console-tier">
          <div className="tier-label-row">
            <span className="tier-num">04</span>
            <div>
              <h3 className="tier-title">Target Operational Cadence</h3>
              <p className="tier-sub">Indicate when your team or practice needs workpapers or active support.</p>
            </div>
          </div>

          <div className="urgency-grid">
            {URGENCIES.map((urg) => {
              const isSelected = urg.id === urgencyId;
              return (
                <button
                  type="button"
                  key={urg.id}
                  onClick={() => setUrgencyId(urg.id)}
                  className={`urgency-card${isSelected ? " is-active" : ""}`}
                >
                  <span className="urgency-badge">{urg.badge}</span>
                  <span className="urgency-label">{urg.label}</span>
                  <span className="urgency-time">{urg.time}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 5: Coordinates & Context Input */}
        <div className="console-tier">
          <div className="tier-label-row">
            <span className="tier-num">05</span>
            <div>
              <h3 className="tier-title">Client Identity &amp; Operational Notes</h3>
              <p className="tier-sub">Share your contact channel and any specific software or deadlines.</p>
            </div>
          </div>

          <div className="console-fields-grid">
            <div className="field-block">
              <label htmlFor="name-input">Your Name or Firm Name <span className="req">*</span></label>
              <input
                id="name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Sterling &amp; Co. CPAs / Jane Doe"
                className="console-input"
              />
            </div>

            <div className="field-block">
              <label htmlFor="email-input">Direct Corporate or Personal Email <span className="req">*</span></label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="partner@sterlingcpa.com"
                className="console-input"
              />
            </div>

            <div className="field-block full">
              <label htmlFor="phone-input">Phone or WhatsApp <span className="optional">(Optional for faster coordination)</span></label>
              <input
                id="phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000 or +91 98000 00000"
                className="console-input"
              />
            </div>

            <div className="field-block full">
              <div className="field-label-split">
                <label htmlFor="message-input">Operational Context &amp; Objectives</label>
                <span className="char-count">{message.length} / 1500</span>
              </div>
              <textarea
                id="message-input"
                rows={4}
                maxLength={1500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={activeLens.suggestedPrompt}
                className="console-textarea"
              />
            </div>
          </div>
        </div>

        {/* STEP 6: Live Dynamic Intake Dossier Slip */}
        <div className="dossier-ticket-slip" aria-label="Real-time brief summary">
          <div className="slip-edge-cut" aria-hidden="true" />
          <div className="slip-header">
            <span className="slip-brand">TRUST TRIO ARCHIVAL BRIEF</span>
            <span className="slip-id">{refCode}</span>
          </div>

          <div className="slip-metadata-grid">
            <div className="slip-meta-item">
              <span className="slip-meta-lbl">PRACTICE DOMAIN</span>
              <span className="slip-meta-val">{activeLens.label}</span>
            </div>
            <div className="slip-meta-item">
              <span className="slip-meta-lbl">CORRIDOR</span>
              <span className="slip-meta-val">{activeCorridor.label}</span>
            </div>
            <div className="slip-meta-item">
              <span className="slip-meta-lbl">TIMELINE</span>
              <span className="slip-meta-val">{activeUrgency.label} ({activeUrgency.time})</span>
            </div>
            <div className="slip-meta-item">
              <span className="slip-meta-lbl">SUPERVISION</span>
              <span className="slip-meta-val">CA Uday Chhabria (ARN-278052)</span>
            </div>
          </div>

          {selectedTopics.length > 0 && (
            <div className="slip-topics-row">
              <span className="slip-topics-lbl">TARGET SCOPE:</span>
              <div className="slip-topics-tags">
                {selectedTopics.map((t) => (
                  <span key={t} className="slip-topic-pill">
                    ✓ {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="slip-footer">
            <span className="slip-security-notice">
              🔒 TLS Encrypted · Zero Cloud Storage of Client Financial Data · Direct CA Route
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="console-actions">
          <motion.button
            type="submit"
            className="button console-submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={motionSprings.snappy}
          >
            <span>Dispatch Engagement Brief</span>
            <Arrow />
          </motion.button>

          <motion.button
            type="button"
            onClick={handleCopyBrief}
            className="console-copy-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={motionSprings.snappy}
          >
            <span>{copied ? "✓ Copied to Clipboard" : "Copy Formatted Brief"}</span>
          </motion.button>
        </div>

        <p className="console-privacy-disclaimer">
          <strong>Confidentiality Notice:</strong> Services are subject to formal engagement agreements and professional review standards. Please do not transmit sensitive client tax identification numbers, social security numbers, or banking credentials through an exploratory enquiry.
        </p>
      </form>
    </div>
  );
}
