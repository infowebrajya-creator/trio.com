import type { Metadata } from "next";
import { ContactBand, Eyebrow, PageHero, ServiceCards } from "@/components/sections";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "CPA Firms",
  description: "Flexible offshore accounting, bookkeeping and tax preparation support for US CPA firms.",
};

const services = [
  { title: "Bookkeeping & accounting", body: "Transaction coding, reconciliations, monthly close support and accounting workpapers." },
  { title: "Tax preparation support", body: "Organised preparation support for individual and business returns, aligned with your review workflow." },
  { title: "Seasonal capacity", body: "Flexible staff augmentation to help manage changing workloads and busy-season demands." },
  { title: "Payroll support", body: "Assistance with recurring payroll processes, reconciliations and related bookkeeping." },
  { title: "Cleanup & catch-up", body: "Structured help bringing records and reconciliations up to date." },
  { title: "Review support", body: "Workpaper preparation, schedules and documentation support for your firm's review." },
];

export default function Page() {
  return (
    <main id="main">
      <PageHero
        eyebrow="For US CPA firms"
        title="A capable extension of your firm."
        description="Flexible offshore accounting and tax support that helps your team make room for the work ahead. Built around your processes, review standards and client experience."
      />

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <Eyebrow>Flexible capacity, considered support</Eyebrow>
            <h2 className="display">More room for the work only your team can do.</h2>
            <p>We work as an extension of your team, supporting delivery behind the scenes while your firm retains its client relationships and review process.</p>
          </Reveal>
          <ServiceCards items={services} />
          <p className="privacy-note spaced">Scope, data handling, access and review responsibilities are agreed with each firm before work begins. Services are subject to engagement terms and applicable professional requirements.</p>
        </div>
      </section>

      <ContactBand
        eyebrow="Let’s compare notes"
        title="Tell us where your team could use an extra set of hands."
        body="Share the kind of work, timing and workflow you have in mind. Please don’t include client records or tax documents."
      />
    </main>
  );
}
