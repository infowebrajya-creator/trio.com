"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/sections";
import { Arrow } from "@/components/icons";
import { Reveal } from "@/components/motion";

export function ApproachDossier() {
  return (
    <section className="dossier-section" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        {/* Section Pre-Header */}
        <Reveal className="dossier-topline">
          <div className="dossier-index-badge">
            <Eyebrow>PRACTICE PHILOSOPHY</Eyebrow>
            <span className="dossier-index-num">SECTION 02 // ARCHITECTURE</span>
          </div>
          <span className="dossier-status-tag">TRANSATLANTIC SYNCHRONICITY</span>
        </Reveal>

        {/* Asymmetric Dossier Stage */}
        <div className="dossier-grid">
          {/* Left: The Architectural Ledger Document */}
          <Reveal className="dossier-ledger-column">
            <div className="dossier-sheet">
              {/* Document Stamp Header */}
              <div className="sheet-masthead">
                <div className="sheet-seal">
                  <span className="seal-text">TRUST TRIO</span>
                  <span className="seal-year">2026</span>
                </div>
                <div className="sheet-meta">
                  <span className="sheet-title-tag">BILATERAL LEDGER MEMO</span>
                  <span className="sheet-ref">DOCUMENT REF: TT-USIN-04</span>
                </div>
              </div>

              {/* Headline */}
              <div className="sheet-title-block">
                <span className="sheet-kicker">Core Principle</span>
                <h3 className="sheet-title">
                  The details, <br />
                  <em className="sheet-italic">in complete context.</em>
                </h3>
              </div>

              {/* Three-Pillar Fiduciary Audit Breakdown */}
              <div className="sheet-pillars">
                <div className="sheet-pillar">
                  <div className="pillar-top">
                    <span className="pillar-num">01</span>
                    <span className="pillar-name">Accounting Infrastructure</span>
                  </div>
                  <p className="pillar-desc">
                    Reconciled daily, closed monthly. Clean general ledgers, audited workpapers, and zero lingering question marks.
                  </p>
                  <div className="pillar-spec">
                    <span>US GAAP / ASC ↔ India AS Alignment</span>
                  </div>
                </div>

                <div className="sheet-pillar">
                  <div className="pillar-top">
                    <span className="pillar-num">02</span>
                    <span className="pillar-name">Strategic Tax Calibration</span>
                  </div>
                  <p className="pillar-desc">
                    Dual-nexus tax coordination. IRS individual &amp; corporate returns aligned with Indian ITR compliance without conflict.
                  </p>
                  <div className="pillar-spec">
                    <span>Article 25 DTAA Cross-Border Treaty Review</span>
                  </div>
                </div>

                <div className="sheet-pillar">
                  <div className="pillar-top">
                    <span className="pillar-num">03</span>
                    <span className="pillar-name">Capital &amp; Wealth Governance</span>
                  </div>
                  <p className="pillar-desc">
                    Mutual fund distribution in India through ARN-278052 with complete transparency and zero commission ambiguity.
                  </p>
                  <div className="pillar-spec">
                    <span>SEBI/AMFI Code of Conduct Adherence</span>
                  </div>
                </div>
              </div>

              {/* Ledger Sheet Footer & Stamp */}
              <div className="sheet-footer">
                <div className="sheet-signature">
                  <span className="sig-label">Supervising Authority:</span>
                  <span className="sig-name">CA Uday Chhabria</span>
                  <span className="sig-firm">Chartered Accountant · UPC &amp; Associates</span>
                </div>
                <div className="sheet-verification-badge">
                  <span className="verify-dot" aria-hidden="true" />
                  <span>DIRECT SENIOR OVERSIGHT</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: The Editorial Comparative Narrative */}
          <Reveal className="dossier-narrative-column" delay={120}>
            <div className="narrative-content">
              <h2 id="approach-title" className="dossier-headline">
                Numbers are silent. <br />
                <em>Until given thoughtful context.</em>
              </h2>

              <p className="dossier-lede">
                From the balance sheet your board reviews to complex cross-border tax schedules spanning oceans, 
                high-stakes accounting requires more than mechanical data entry. It demands experienced professionals 
                who understand the strategic business decisions behind every figure.
              </p>

              {/* Asymmetric Comparative Matrix */}
              <div className="comparative-matrix">
                <div className="matrix-card matrix-trio">
                  <div className="matrix-badge">
                    <span className="matrix-icon">★</span>
                    <span>The Trust Trio Standard</span>
                  </div>
                  <ul className="matrix-list">
                    <li>
                      <strong>Direct Senior CA Leadership:</strong> Every client workpaper is reviewed by qualified Chartered Accountants, not unvetted junior pools.
                    </li>
                    <li>
                      <strong>Overnight Transatlantic Velocity:</strong> Tasks handed off at the close of US business are ready for review when your office opens.
                    </li>
                    <li>
                      <strong>Integrated Financial Vision:</strong> Tax implications inform bookkeeping, and business liquidity informs personal wealth planning.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="dossier-actions">
                <Link className="dossier-btn-primary" href="/about">
                  <span>Explore Our Practice Story</span>
                  <Arrow />
                </Link>
                <Link className="dossier-text-link" href="/contact">
                  <span>Inquire About Engagement Terms</span>
                  <span className="arrow-inline" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
