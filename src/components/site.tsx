"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Arrow } from "@/components/icons";
import { motionSprings } from "@/components/motion";

const MotionLink = motion.create(Link);

const nav = [
  ["CPA Firms", "/cpa-firms"],
  ["Businesses", "/businesses"],
  ["Individuals", "/individuals"],
  ["Wealth", "/wealth"],
  ["Resources", "/resources"],
  ["About", "/about"],
] as const;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Trust Trio home">
      <motion.span
        className={`brandmark${light ? " brandmark-light" : ""}`}
        whileHover={{ rotate: 12, scale: 1.05 }}
        transition={motionSprings.snappy}
        aria-hidden="true"
      >
        <span>t</span>
      </motion.span>
      <div className="brand-text-group">
        <span className="brand-name">trust trio</span>
        <span className="brand-sub">accounting · tax · wealth</span>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) =>
    pathname === href || pathname.startsWith(href + "/") ? "page" : undefined;

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}>
      {/* Top Architectural Micro-Rail */}
      <div className="header-top-ticker">
        <div className="wrap ticker-inner">
          <div className="ticker-left">
            <span className="ticker-dot" aria-hidden="true" />
            <span className="ticker-text">TRANSATLANTIC FINANCIAL ARCHITECTURE · US ↔ INDIA</span>
          </div>
          <div className="ticker-right">
            <span>CHARTERED ACCOUNTANT OVERSIGHT · ARN-278052</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="wrap header-inner">
        <Brand />

        <nav className="nav" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} aria-current={current(href)} className="nav-link" style={{ position: "relative" }}>
              <span>{label}</span>
              {current(href) && (
                <motion.span
                  layoutId="nav-active-pip"
                  className="nav-active-pip"
                  transition={motionSprings.snappy}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
          <MotionLink
            className="nav-cta"
            href="/contact"
            aria-current={current("/contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={motionSprings.snappy}
          >
            <span>Let&apos;s talk</span>
            <Arrow />
          </MotionLink>
        </nav>

        <motion.button
          ref={buttonRef}
          className="mobile-menu"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.94 }}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-glyph" aria-hidden="true">
            <i />
            <i />
          </span>
        </motion.button>
      </div>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-links open"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={motionSprings.gentle}
          >
            <div className="wrap mobile-links-inner">
              <div className="mobile-meta-bar">
                <span>TRANSATLANTIC PRACTICE</span>
                <span>US ↔ INDIA</span>
              </div>
              <div className="mobile-nav-list">
                {nav.map(([label, href], idx) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={href}
                      aria-current={current(href)}
                      tabIndex={open ? 0 : -1}
                      className="mobile-link-item"
                    >
                      <span>{label}</span>
                      <span className="mobile-arrow" aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mobile-cta-wrap">
                <Link className="mobile-cta" href="/contact" tabIndex={open ? 0 : -1}>
                  <span>Initiate Conversation</span>
                  <Arrow />
                </Link>
                <p className="mobile-disclaimer">
                  Strict confidentiality. No client tax data in initial web enquiries.
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand Block */}
          <div className="footer-brand-block">
            <Brand light />
            <p className="footer-tagline">
              Rigorous thinking and continuous operational clarity for the numbers behind your next step. 
              Comprehensive accounting, multi-jurisdiction tax, and wealth support across the US and India.
            </p>
            <div className="footer-credentials-box">
              <div className="cred-row">
                <span className="cred-lbl">Supervising Principal:</span>
                <span className="cred-val">CA Uday Chhabria</span>
              </div>
              <div className="cred-row">
                <span className="cred-lbl">Association:</span>
                <span className="cred-val">UPC &amp; Associates</span>
              </div>
              <div className="cred-row">
                <span className="cred-lbl">Mutual Funds (India):</span>
                <span className="cred-val">ARN-278052</span>
              </div>
            </div>
            <MotionLink
              className="button button-light footer-cta"
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={motionSprings.snappy}
            >
              <span>Initiate Conversation</span>
              <Arrow />
            </MotionLink>
          </div>

          {/* Navigation Column 1: Practices */}
          <nav aria-label="Practice Areas" className="footer-col">
            <h2 className="footer-heading">Practice Areas</h2>
            <div className="footer-links">
              <MotionLink href="/cpa-firms" whileHover={{ x: 4 }} transition={motionSprings.snappy}>CPA Firm Augmentation</MotionLink>
              <MotionLink href="/businesses" whileHover={{ x: 4 }} transition={motionSprings.snappy}>Business Bookkeeping &amp; Close</MotionLink>
              <MotionLink href="/individuals" whileHover={{ x: 4 }} transition={motionSprings.snappy}>Personal &amp; Cross-Border Tax</MotionLink>
              <MotionLink href="/wealth" whileHover={{ x: 4 }} transition={motionSprings.snappy}>Wealth &amp; Mutual Funds</MotionLink>
            </div>
          </nav>

          {/* Navigation Column 2: Firm */}
          <nav aria-label="Firm Details" className="footer-col">
            <h2 className="footer-heading">Firm &amp; Resources</h2>
            <div className="footer-links">
              <MotionLink href="/about" whileHover={{ x: 4 }} transition={motionSprings.snappy}>About Trust Trio</MotionLink>
              <MotionLink href="/resources" whileHover={{ x: 4 }} transition={motionSprings.snappy}>Client Guides &amp; Resources</MotionLink>
              <MotionLink href="/contact" whileHover={{ x: 4 }} transition={motionSprings.snappy}>Direct Contact &amp; Terms</MotionLink>
            </div>
            <div className="footer-corridor-box">
              <span className="corridor-title">OPERATING CORRIDOR</span>
              <div className="corridor-cities">
                <span>New York (EST)</span>
                <span className="corridor-sep">↔</span>
                <span>Mumbai (IST)</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Regulatory Disclosure (Full Integrity) */}
        <div className="footer-disclosure-block">
          <p className="disclosure">
            <strong>Professional Disclosures &amp; Terms:</strong> Services are subject to formal engagement 
            terms and applicable professional requirements. Tax information presented on this site is general in 
            nature and does not constitute formal tax, legal, investment, or accounting advice. Mutual fund distribution 
            services in India are offered strictly through ARN-278052; mutual fund investments are subject to market risks. 
            Please read all scheme-related documents carefully before investing. No Portfolio Management Services (PMS), 
            Alternative Investment Funds (AIF), or Specialized Investment Funds (SIF) distribution is represented as available.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Trust Trio. All rights reserved.</span>
            <span className="footer-sep">·</span>
            <span>trusttrio.com</span>
          </div>
          <div className="footer-badge">
            <span className="footer-dot" aria-hidden="true" />
            <span>BESPOKE FINANCIAL ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
