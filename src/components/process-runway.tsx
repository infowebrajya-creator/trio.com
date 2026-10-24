"use client";

import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/sections";

const PROCESS_STEPS = [
  {
    num: "01",
    phase: "PHASE 01 // INTAKE & DISCOVERY",
    title: "Start with context, not documents.",
    body: "Tell us where your team is losing time, where reconciliations feel uncertain, or what deadlines loom ahead. We focus first on understanding the operational reality before requesting files.",
    deliverable: "Scope Alignment Memo",
    sla: "Day 01–03",
    tag: "Context Mapping",
  },
  {
    num: "02",
    phase: "PHASE 02 // WORKFLOW CALIBRATION",
    title: "Shape the exact delivery protocol.",
    body: "We agree on communication cadences, security protocols, review checklists, and software integrations. For CPA firms, we adopt your exact workpaper standards and sign-off formats.",
    deliverable: "Engagement Blueprint",
    sla: "Day 04–07",
    tag: "Protocol Lock",
  },
  {
    num: "03",
    phase: "PHASE 03 // QUIET EXECUTION",
    title: "Predictable velocity, zero surprises.",
    body: "Work flows consistently behind the scenes. Workpapers are tied out, journal entries are verified, and your team receives clean, review-ready packages ahead of every deadline.",
    deliverable: "Review-Ready Output",
    sla: "Ongoing Cadence",
    tag: "Cadence Mastery",
  },
];

export function ProcessRunway() {
  return (
    <section className="runway-section" aria-labelledby="runway-title">
      <div className="wrap">
        {/* Header */}
        <Reveal className="runway-header">
          <div className="runway-topline">
            <Eyebrow>OPERATIONAL METHODOLOGY</Eyebrow>
            <span className="runway-code">STANDARDS // 03-TIER ENGINE</span>
          </div>
          <div className="runway-heading-row">
            <h2 id="runway-title" className="runway-title">
              Disciplined support that makes <br />
              <em>every subsequent step effortless.</em>
            </h2>
            <p className="runway-lede">
              We eliminate friction with an intentional onboarding rhythm that respects your time 
              and safeguards data confidentiality from day one.
            </p>
          </div>
        </Reveal>

        {/* The Stepped Runway Grid */}
        <div className="runway-grid">
          {/* Connecting Hairline Conduit Line */}
          <div className="runway-conduit" aria-hidden="true">
            <div className="conduit-line" />
            <div className="conduit-pulse" />
          </div>

          <ol className="runway-steps">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal as="li" key={step.num} delay={idx * 120} className="runway-step-item">
                <div className="runway-card">
                  <div className="card-topline">
                    <span className="step-beacon" aria-hidden="true">
                      <span className="beacon-inner" />
                    </span>
                    <span className="step-phase">{step.phase}</span>
                    <span className="step-sla">{step.sla}</span>
                  </div>

                  <div className="card-num-block">
                    <span className="card-number">{step.num}</span>
                    <span className="card-tag">{step.tag}</span>
                  </div>

                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-body">{step.body}</p>

                  <div className="card-footer">
                    <span className="deliverable-label">Key Deliverable:</span>
                    <span className="deliverable-val">
                      <span className="check-icon" aria-hidden="true">✓</span>
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
