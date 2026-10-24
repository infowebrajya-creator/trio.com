import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Arrow, iconFor } from "@/components/icons";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/** Headline split into words for a staggered, CSS-only reveal. Words are always in the DOM; animation is purely visual. */
export function SplitWords({ text, start = 0, step = 60, italic = false }: { text: string; start?: number; step?: number; italic?: boolean }) {
  const words = text.split(" ");
  const inner = words.map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className="word"><span className="word-inner" style={{ animationDelay: `${start + i * step}ms` }}>{w}</span></span>
      {i < words.length - 1 ? " " : null}
    </Fragment>
  ));
  return italic ? <em>{inner}</em> : <>{inner}</>;
}

export function SectionIntro({
  eyebrow,
  index,
  title,
  body,
  tone = "light",
}: {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  body?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={`section-intro tone-${tone}`}>
      <div className="section-topline">
        <Eyebrow>{eyebrow}</Eyebrow>
        {index && <span className="section-index">{index}</span>}
      </div>
      <div className="section-heading-row">
        <h2 className="display">{title}</h2>
        {body && <p className="section-intro-body">{body}</p>}
      </div>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: boolean;
}) {
  return (
    <section className="page-hero">
      {/* Architectural Background Grid & Coordinates */}
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-crosshair" aria-hidden="true" />

      <div className="wrap page-hero-inner">
        <div className="page-hero-meta">
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="page-hero-edition">PRACTICE MONOGRAPH // 2026</span>
        </div>

        <h1 className="display page-hero-title">
          <SplitWords text={title} step={45} />
        </h1>

        <p className="page-hero-desc">{description}</p>

        {cta && (
          <div className="actions page-hero-actions">
            <Link className="button button-light page-hero-btn" href="/contact">
              <span>Initiate Conversation</span>
              <Arrow />
            </Link>
            <span className="page-hero-sla">
              Direct CA Review · Complete Discretion
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export type ServiceItem = { title: string; body: string; href?: string; cta?: string };

export function ServiceCards({ items, id }: { items: ServiceItem[]; id?: string }) {
  return (
    <ul className="service-grid" id={id}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={(i % 3) * 70 + Math.floor(i / 3) * 35}>
          <Link href={item.href ?? "/contact"} className="service-card">
            <span className="service-card-top">
              <span className="service-icon">{iconFor(item.title, i)}</span>
              <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
            </span>
            <h3 className="serif">{item.title}</h3>
            <p>{item.body}</p>
            <span className="service-more">
              <span>{item.cta ?? "Discuss this"}</span>
              <Arrow />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export function ContactBand({
  eyebrow = "A good first conversation goes a long way",
  title = "Make a little more room for the work that matters.",
  body = "Tell us what you’re exploring. We’ll take it one conversation at a time.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="dark-band" aria-labelledby="cta-title">
      <div className="band-grid-texture" aria-hidden="true" />
      <div className="wrap band-inner">
        <Reveal className="band-copy">
          <div className="band-topline">
            <Eyebrow>{eyebrow}</Eyebrow>
            <span className="band-status-pill">US ↔ INDIA COORDINATED</span>
          </div>
          <h2 id="cta-title" className="display band-title">{title}</h2>
          <p className="band-desc">{body}</p>
          <div className="band-credentials-strip">
            <span className="band-cred-item">Senior Chartered Accountant Leadership</span>
            <span className="band-cred-sep" aria-hidden="true">•</span>
            <span className="band-cred-item">UPC &amp; Associates</span>
            <span className="band-cred-sep" aria-hidden="true">•</span>
            <span className="band-cred-item">ARN-278052</span>
          </div>
        </Reveal>
        <Reveal delay={160} className="band-action-wrap">
          <Link className="button button-light band-cta" href="/contact">
            <span>Let&apos;s talk</span>
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function SplitVisual({ mark, one, two }: { mark: string; one: string; two: string }) {
  return (
    <div className="split-visual" aria-hidden="true">
      <div className="visual-grid-overlay" />
      <div className="visual-crosshair-h" />
      <div className="visual-crosshair-v" />
      <div className="visual-lines" />
      <div className="visual-core">
        <span>{mark}</span>
      </div>
      <div className="note-card note-one">
        <span className="note-tag">PRINCIPLE 01</span>
        <span>{one}</span>
      </div>
      <div className="note-card note-two">
        <span className="note-tag">PRINCIPLE 02</span>
        <span>{two}</span>
      </div>
    </div>
  );
}
