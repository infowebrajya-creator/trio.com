"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

/** Shared Motion spring physics and easing presets */
export const motionSprings = {
  gentle: { type: "spring", stiffness: 260, damping: 28 },
  snappy: { type: "spring", stiffness: 420, damping: 32 },
  architectural: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  bounce: { type: "spring", stiffness: 300, damping: 20 },
} as const;

/** Root motion provider enforcing prefers-reduced-motion user safety */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** GPU-accelerated scroll-triggered reveal with user-motion compliance */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li";
}) {
  const Component = motion[Tag as "div" | "section" | "li"] || motion.div;

  return (
    <Component
      className={`reveal-motion ${className}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: delay > 0 ? delay / 1000 : 0,
      }}
    >
      {children}
    </Component>
  );
}

export const isReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Writes a 0→1 scroll progress for its subtree to --hero-progress. Desktop only, reduced-motion aware, rAF-throttled. */
export function ScrollScene({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isReducedMotion()) return;
    const wide = window.matchMedia("(min-width: 861px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!wide.matches) {
        node.style.setProperty("--hero-progress", "0");
        return;
      }
      const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, node.offsetHeight)));
      node.style.setProperty("--hero-progress", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
