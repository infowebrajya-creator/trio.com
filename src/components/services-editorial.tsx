"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Arrow, iconFor } from "@/components/icons";
import { motionSprings } from "@/components/motion";

const MotionLink = motion.create(Link);

export interface ServiceDetail {
  number: string;
  title: string;
  category: "cpa" | "business" | "individual";
  categoryLabel: string;
  synopsis: string;
  deliverables: string[];
  engagementNote: string;
  href: string;
  ctaText: string;
}

export const ALL_SERVICES: ServiceDetail[] = [
  {
    number: "01",
    title: "Seasonal Capacity & Staff Augmentation",
    category: "cpa",
    categoryLabel: "CPA Firm Leverage",
    synopsis: "Structured senior assistance to absorb peak-season compression, filing spikes, and unexpected staffing shortages without compromising review standards.",
    deliverables: ["Workpaper documentation", "Trial balance reconciliation", "Multi-tier review checklists", "Seamless firm stack integration"],
    engagementNote: "Operates 100% white-label behind your firm's brand and client confidentiality framework.",
    href: "/cpa-firms",
    ctaText: "Explore CPA Support",
  },
  {
    number: "02",
    title: "Bookkeeping & Monthly Ledger Close",
    category: "business",
    categoryLabel: "Business Accounting",
    synopsis: "Accurate transaction categorization, structured bank reconciliations, and regular reporting that give business owners true visibility over cash and margins.",
    deliverables: ["Monthly close cycles", "Accounts payable/receivable oversight", "Management financial statements", "Clean audit trail"],
    engagementNote: "Configured around QuickBooks Online, Xero, or your custom ERP environment.",
    href: "/businesses",
    ctaText: "Explore Business Books",
  },
  {
    number: "03",
    title: "Tax Preparation & Schedule Coordination",
    category: "individual",
    categoryLabel: "Personal & Cross-Border",
    synopsis: "Organized intake, schedule preparation, and dual-jurisdiction tax coordination for individuals, expatriates, and cross-border families.",
    deliverables: ["US 1040 prep assistance", "India ITR compliance", "DTAA treaty review support", "Capital gains & asset reporting"],
    engagementNote: "Subject to individual engagement review; strictly zero generic automated tax filing.",
    href: "/individuals",
    ctaText: "Explore Tax Support",
  },
  {
    number: "04",
    title: "Payroll Operations & Reconciliations",
    category: "business",
    categoryLabel: "Business Operations",
    synopsis: "Reliable coordination of payroll cycles, journal entries, and reconciliation against general ledger accounts so your team remains focused on growth.",
    deliverables: ["Payroll journal alignment", "Withholding reconciliations", "Quarterly checks", "Benefits allocation tracking"],
    engagementNote: "Integrated with major US payroll providers (Gusto, ADP, Paychex).",
    href: "/businesses",
    ctaText: "Explore Payroll Support",
  },
  {
    number: "05",
    title: "Ledger Cleanup & Historical Catch-Up",
    category: "business",
    categoryLabel: "Business Recovery",
    synopsis: "A structured, non-judgmental overhaul for books that have fallen behind, suffered broken reconciliations, or require due-diligence readiness.",
    deliverables: ["Multi-year catch-up", "Unidentified balance resets", "Chart of accounts restructuring", "Bank feed untangling"],
    engagementNote: "Fixed-scope milestone delivery to bring books fully current before tax deadlines.",
    href: "/businesses",
    ctaText: "Explore Cleanup Support",
  },
  {
    number: "06",
    title: "Workpaper Preparation & Review Support",
    category: "cpa",
    categoryLabel: "CPA Workpapers",
    synopsis: "Standardized lead sheets, tick-mark documentation, and supporting schedules crafted so your senior reviewers spend minutes instead of hours on sign-offs.",
    deliverables: ["Standardized workpaper indexes", "Supporting schedule tying", "Prior-year variance analysis", "Review note turnaround"],
    engagementNote: "Built specifically to match US CPA firm quality-control and peer review standards.",
    href: "/cpa-firms",
    ctaText: "Explore Review Support",
  },
];

export function ServicesEditorial() {
  const [filter, setFilter] = useState<"all" | "cpa" | "business" | "individual">("all");
  const [activeItem, setActiveItem] = useState<string>("01");

  const filtered = filter === "all" ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.category === filter);

  return (
    <div className="services-monograph">
      {/* Top Editorial Control Bar */}
      <div className="services-bar">
        <div className="services-bar-info">
          <span className="services-bar-tag">PRACTICE CAPABILITIES</span>
          <span className="services-bar-count">Showing {filtered.length} of 06 Capabilities</span>
        </div>
        
        {/* Filter Pills with Sliding Layout Indicator */}
        <div className="services-filters" role="tablist" aria-label="Filter practice areas">
          {[
            { id: "all", label: "All Capabilities" },
            { id: "cpa", label: "CPA Firm Augmentation" },
            { id: "business", label: "Growing Businesses" },
            { id: "individual", label: "Personal & Cross-Border" },
          ].map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`filter-pill ${active ? "is-active" : ""}`}
                style={{ position: "relative" }}
              >
                {active && (
                  <motion.span
                    layoutId="active-service-filter-pill"
                    className="filter-pill-active-bg"
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
                <span style={{ position: "relative", zIndex: 1 }}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Spotlight Asymmetry with Hover Motion */}
      {filter === "all" && (
        <div className="services-spotlight-duo">
          {/* Spotlight 01: CPA Leverage */}
          <motion.div
            className="spotlight-card spotlight-cpa"
            whileHover={{ y: -6 }}
            transition={motionSprings.gentle}
          >
            <div className="spotlight-badge">
              <span>FEATURED PRACTICE 01</span>
              <span className="badge-bullet">•</span>
              <span>US CPA FIRM EXTENSION</span>
            </div>
            <h3 className="spotlight-title">
              Seasonal Capacity &amp; Workpaper Architecture
            </h3>
            <p className="spotlight-desc">
              When busy season accelerates, our dedicated offshore accountants absorb heavy compliance 
              and prep loads. We adhere to your firm&apos;s review templates, ensuring every workpaper is 
              defensible, tied out, and ready for partner sign-off.
            </p>
            <div className="spotlight-workflow">
              <div className="workflow-step">
                <span className="step-num">A</span>
                <span className="step-txt">Intake &amp; Scope Tie-Down</span>
              </div>
              <div className="workflow-connector" aria-hidden="true">→</div>
              <div className="workflow-step">
                <span className="step-num">B</span>
                <span className="step-txt">Standardized Workpapers</span>
              </div>
              <div className="workflow-connector" aria-hidden="true">→</div>
              <div className="workflow-step">
                <span className="step-num">C</span>
                <span className="step-txt">Partner Review Ready</span>
              </div>
            </div>
            <div className="spotlight-cta-row">
              <MotionLink
                href="/cpa-firms"
                className="spotlight-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={motionSprings.snappy}
              >
                <span>View Firm Augmentation Model</span>
                <Arrow />
              </MotionLink>
              <span className="spotlight-note">100% White-Label Delivery</span>
            </div>
          </motion.div>

          {/* Spotlight 02: Business Accounting */}
          <motion.div
            className="spotlight-card spotlight-business"
            whileHover={{ y: -6 }}
            transition={motionSprings.gentle}
          >
            <div className="spotlight-badge">
              <span>FEATURED PRACTICE 02</span>
              <span className="badge-bullet">•</span>
              <span>CONTINUOUS BOOKS</span>
            </div>
            <h3 className="spotlight-title">
              Month-End Close Cadence &amp; Controller Oversight
            </h3>
            <p className="spotlight-desc">
              Clean books are not an annual scramble; they are an ongoing operational habit. 
              We maintain orderly ledgers, reconcile accounts promptly, and provide clear monthly 
              financial packages so founders make decisions with real confidence.
            </p>
            <div className="spotlight-metrics">
              <div className="spot-metric">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">Reconciled Accounts</span>
              </div>
              <div className="spot-metric">
                <span className="metric-val">Monthly</span>
                <span className="metric-lbl">Structured Close</span>
              </div>
              <div className="spot-metric">
                <span className="metric-val">Direct</span>
                <span className="metric-lbl">Chartered Oversight</span>
              </div>
            </div>
            <div className="spotlight-cta-row">
              <MotionLink
                href="/businesses"
                className="spotlight-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={motionSprings.snappy}
              >
                <span>View Business Solutions</span>
                <Arrow />
              </MotionLink>
              <span className="spotlight-note">QuickBooks &amp; Xero Certified</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Numbered Editorial Master Index with Fluid Spring Reordering */}
      <div className="services-index-table" role="region" aria-label="Service capabilities index">
        <div className="index-table-header">
          <span className="col-idx">No.</span>
          <span className="col-title">Capability &amp; Scope</span>
          <span className="col-category">Domain</span>
          <span className="col-action">Action</span>
        </div>

        <div className="index-table-body">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const isHovered = activeItem === item.number;
              return (
                <motion.article
                  key={item.number}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={motionSprings.gentle}
                  whileHover={{ x: 6 }}
                  className={`index-row ${isHovered ? "is-row-active" : ""}`}
                  onMouseEnter={() => setActiveItem(item.number)}
                >
                  <div className="row-main">
                    <div className="row-num-block">
                      <span className="row-number">{item.number}</span>
                      <span className="row-icon-wrap" aria-hidden="true">
                        {iconFor(item.title, parseInt(item.number, 10))}
                      </span>
                    </div>

                    <div className="row-content">
                      <div className="row-topline">
                        <span className="row-category-badge">{item.categoryLabel}</span>
                        <span className="row-badge-pill">{item.engagementNote}</span>
                      </div>

                      <h3 className="row-title">
                        <Link href={item.href}>{item.title}</Link>
                      </h3>

                      <p className="row-synopsis">{item.synopsis}</p>

                      {/* Deliverables tags */}
                      <div className="row-deliverables">
                        {item.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="deliverable-tag">
                            <span className="tag-dot" aria-hidden="true" />
                            <span>{del}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="row-actions">
                      <MotionLink
                        href={item.href}
                        className="row-cta-btn"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={motionSprings.snappy}
                      >
                        <span>{item.ctaText}</span>
                        <Arrow />
                      </MotionLink>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
