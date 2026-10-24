"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Arrow } from "@/components/icons";
import { Eyebrow } from "@/components/sections";
import { Reveal, motionSprings } from "@/components/motion";

const MotionLink = motion.create(Link);

const PORTALS = [
  {
    num: "01",
    tag: "US CPA FIRM EXTENSION",
    title: "CPA Firms",
    subtitle: "Expand capacity without expanding domestic overhead.",
    desc: "An experienced offshore team for tax prep, workpaper assembly, and seasonal compression. We plug into your software and adopt your review standards.",
    highlights: ["100% White-Label Review", "UltraTax, CCH, Drake, ProConnect", "Immediate Busy Season Relief"],
    href: "/cpa-firms",
    cta: "Explore CPA Support",
    theme: "forest",
  },
  {
    num: "02",
    tag: "GROWING ENTERPRISES",
    title: "Businesses",
    subtitle: "Orderly books that make decision-making calm.",
    desc: "Reliable day-to-day bookkeeping, prompt monthly closes, payroll coordination, and controller-level reporting tailored to your growth stage.",
    highlights: ["QuickBooks Online & Xero", "5-Day Monthly Close Cadence", "Cash Flow & Margin Visibility"],
    href: "/businesses",
    cta: "Explore Business Accounting",
    theme: "stone",
  },
  {
    num: "03",
    tag: "CROSS-BORDER FAMILIES",
    title: "Individuals & NRIs",
    subtitle: "Clarity across US & India tax obligations.",
    desc: "A thoughtful starting point for personal tax filings, DTAA treaty implications, NRI financial transitions, and cross-border assets.",
    highlights: ["US IRS 1040 Preparation", "India ITR Compliance", "Non-Resident Indian (NRI) Advisory"],
    href: "/individuals",
    cta: "Explore Personal Tax",
    theme: "sand",
  },
  {
    num: "04",
    tag: "CAPITAL STEWARDSHIP",
    title: "Wealth in India",
    subtitle: "A considered conversation about real priorities.",
    desc: "Objective mutual fund distribution services in India through ARN-278052. We begin with your goals and horizon, not a generic product menu.",
    highlights: ["ARN-278052 Registered", "Zero Commission Ambiguity", "Long-Term Goal Alignment"],
    href: "/wealth",
    cta: "Explore Wealth Journey",
    theme: "ivory",
  },
];

export function QuadPortals() {
  return (
    <section className="portals-section" id="pathways" aria-labelledby="portals-title">
      <div className="wrap">
        {/* Topline Header */}
        <Reveal className="portals-header">
          <div className="portals-topline">
            <Eyebrow>FIND YOUR STARTING POINT</Eyebrow>
            <span className="portals-index">FOUR SPECIALIZED PORTALS</span>
          </div>
          <div className="portals-heading-row">
            <h2 id="portals-title" className="portals-title">
              Distinct engagements. <br />
              <em>One uncompromising standard.</em>
            </h2>
            <p className="portals-lede">
              Select the path that matches your current challenge. We begin with a candid introductory 
              discussion to determine if our capabilities match your exact requirements.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric Quad Grid */}
        <div className="portals-grid">
          {PORTALS.map((portal, idx) => (
            <Reveal as="div" key={portal.num} delay={idx * 80} className={`portal-cell portal-${portal.theme}`}>
              <motion.div
                className="portal-card"
                whileHover={{ y: -6 }}
                transition={motionSprings.gentle}
              >
                <div className="portal-top">
                  <div className="portal-badge-wrap">
                    <span className="portal-pill">{portal.tag}</span>
                  </div>
                  <span className="portal-num" aria-hidden="true">{portal.num}</span>
                </div>

                <div className="portal-main">
                  <h3 className="portal-heading">{portal.title}</h3>
                  <p className="portal-subtitle">{portal.subtitle}</p>
                  <p className="portal-desc">{portal.desc}</p>

                  <ul className="portal-highlights">
                    {portal.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <span className="bullet-dash" aria-hidden="true">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="portal-bottom">
                  <MotionLink
                    href={portal.href}
                    className="portal-link"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={motionSprings.snappy}
                  >
                    <span>{portal.cta}</span>
                    <Arrow />
                  </MotionLink>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
