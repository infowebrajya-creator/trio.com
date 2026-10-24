import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { Reveal } from "@/components/motion";
import ContactForm from "./contact-form";
import { ContactSidebar } from "./contact-sidebar";

export const metadata: Metadata = {
  title: "Consultation & Intake Console | Trust Trio",
  description:
    "Initiate an exploratory consultation with Trust Trio. Tailored offshore capacity for US CPA firms, business accounting, multi-jurisdiction tax, and wealth stewardship.",
};

export default function Page() {
  return (
    <main id="main" className="contact-main">
      <PageHero
        eyebrow="INTAKE & CONSULTATION CONSOLE"
        title="Start with a considered conversation."
        description="Every engagement begins with understanding your operational reality. Tailored capacity for US CPA firms, business ledgers, and transatlantic tax compliance."
        cta={false}
      />

      <section className="section contact-section">
        <div className="wrap contact-layout">
          {/* Left Column: Telemetry, Chartered Leadership, & Guarantees */}
          <Reveal as="div">
            <ContactSidebar />
          </Reveal>

          {/* Right Column: Interactive Consultation Engine */}
          <Reveal delay={120} as="div">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
