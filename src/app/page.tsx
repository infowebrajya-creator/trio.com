import { HeroEngine } from "@/components/hero-engine";
import { ApproachDossier } from "@/components/approach-dossier";
import { ServicesEditorial } from "@/components/services-editorial";
import { ProcessRunway } from "@/components/process-runway";
import { QuadPortals } from "@/components/quad-portals";
import { ContactBand, SectionIntro } from "@/components/sections";

export default function Home() {
  return (
    <main id="main" className="home-main">
      {/* 1 — Signature Hero Monograph */}
      <section className="hero-section" aria-label="Trust Trio Introduction">
        <HeroEngine />
      </section>

      {/* 2 — Fiduciary Approach & Comparative Dossier */}
      <ApproachDossier />

      {/* 3 — Editorial Practice & Capability Monograph */}
      <section className="section services-section-editorial" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <SectionIntro
            eyebrow="SPECIALIZED CAPABILITIES"
            index="MONOGRAPH 03"
            title={
              <span id="services-title">
                A sound foundation <br />
                <em>for every critical financial decision.</em>
              </span>
            }
            body="Disciplined execution across seasonal CPA capacity, ongoing business accounting, multi-jurisdiction tax, and goal-directed wealth stewardship."
          />
          <ServicesEditorial />
        </div>
      </section>

      {/* 4 — Operational Methodology & Process Runway */}
      <ProcessRunway />

      {/* 5 — Asymmetric Quad-Portal Pathways */}
      <QuadPortals />

      {/* 6 — Final Fiduciary Contact Band */}
      <ContactBand
        eyebrow="INITIATE AN EXPLORATORY DIALOGUE"
        title="Make meaningful room for the work that truly matters."
        body="Tell us what you're exploring—whether it's seasonal firm capacity, bringing overdue ledgers current, or coordinating cross-border tax. We take every inquiry one thoughtful conversation at a time."
      />
    </main>
  );
}
