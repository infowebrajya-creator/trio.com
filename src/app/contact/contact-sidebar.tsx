"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Eyebrow } from "@/components/sections";
import { motionSprings } from "@/components/motion";

export function ContactSidebar() {
  const [times, setTimes] = useState<{ nyc: string; mum: string }>({ nyc: "--:--", mum: "--:--" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    function updateClocks() {
      const now = new Date();
      const nyc = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      const mum = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      setTimes({ nyc, mum });
    }

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleCopyEmail() {
    navigator.clipboard.writeText("inquiries@trusttrio.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  }

  return (
    <aside className="contact-sidebar">
      {/* 1. Live Transatlantic Telemetry Card */}
      <div className="telemetry-card">
        <div className="telemetry-top">
          <span className="telemetry-pulse-dot" aria-hidden="true" />
          <span className="telemetry-badge">TRANSATLANTIC CORRIDOR // LIVE</span>
        </div>
        <div className="telemetry-clocks">
          <div className="clock-col">
            <span className="clock-city">NEW YORK (EST)</span>
            <span className="clock-time">{times.nyc}</span>
            <span className="clock-sub">Primary Client Window</span>
          </div>
          <div className="clock-divider" aria-hidden="true">↔</div>
          <div className="clock-col">
            <span className="clock-city">MUMBAI (IST)</span>
            <span className="clock-time">{times.mum}</span>
            <span className="clock-sub">Chartered Oversight Hub</span>
          </div>
        </div>
        <p className="telemetry-note">
          <strong>The Overnight Advantage:</strong> Hand off work at 5:00 PM EST. Our senior Chartered Accountant team in Mumbai reviews and processes overnight. Your team opens with clean, review-ready files at 9:00 AM EST.
        </p>
      </div>

      {/* 2. Executive Leadership & Credential Monograph */}
      <div className="leadership-card">
        <div className="leadership-badge">
          <span className="seal-star">★</span>
          <span>SENIOR FIDUCIARY OVERSIGHT</span>
        </div>
        <h3 className="leadership-name">CA Uday Chhabria</h3>
        <p className="leadership-title">Senior Chartered Accountant &amp; Practice Lead</p>
        
        <div className="leadership-creds">
          <div className="cred-chip">
            <span className="chip-lbl">Association:</span>
            <span className="chip-val">UPC &amp; Associates</span>
          </div>
          <div className="cred-chip">
            <span className="chip-lbl">Mutual Funds (India):</span>
            <span className="chip-val">ARN-278052</span>
          </div>
        </div>

        <blockquote className="leadership-quote">
          &ldquo;Every engagement is personally supervised and reviewed by qualified Chartered Accountants. We build quiet, defensible financial backbones—never commoditized outsourcing.&rdquo;
        </blockquote>
      </div>

      {/* 3. Four Fiduciary Commitments */}
      <div className="fiduciary-commitments">
        <Eyebrow>OUR OPERATIONAL COVENANT</Eyebrow>
        
        <ul className="commitment-list">
          <li className="commitment-item">
            <div className="comm-marker">01</div>
            <div>
              <strong>100% Direct CA Review</strong>
              <p>Every schedule, workpaper, and journal entry is verified by a qualified professional, never unvetted junior pools.</p>
            </div>
          </li>
          <li className="commitment-item">
            <div className="comm-marker">02</div>
            <div>
              <strong>Zero Automated Guesswork</strong>
              <p>We do not use algorithmic shortcuts or generic automation on sensitive client tax records or general ledgers.</p>
            </div>
          </li>
          <li className="commitment-item">
            <div className="comm-marker">03</div>
            <div>
              <strong>Bilateral Non-Disclosure</strong>
              <p>Standard bilateral confidentiality protocols and NDAs executed prior to accessing firm or client repositories.</p>
            </div>
          </li>
          <li className="commitment-item">
            <div className="comm-marker">04</div>
            <div>
              <strong>24-Hour SLA Response</strong>
              <p>We review every intake brief within one business day to assess operational alignment and capacity.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 4. Direct Correspondence Fallback */}
      <div className="direct-channel-card">
        <span className="direct-lbl">PREFER DIRECT CORRESPONDENCE?</span>
        <p className="direct-desc">Skip the console and reach our senior partners directly via encrypted transmission.</p>
        <motion.button
          type="button"
          onClick={handleCopyEmail}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={motionSprings.snappy}
          className="direct-email-btn"
          aria-label="Copy direct email address to clipboard"
        >
          <span className="email-addr">inquiries@trusttrio.com</span>
          <span className="copy-action">
            {copiedEmail ? "✓ Copied" : "Copy Address"}
          </span>
        </motion.button>
      </div>
    </aside>
  );
}
