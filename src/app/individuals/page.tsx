import type { Metadata } from "next";
import { ContactBand, Eyebrow, PageHero, ServiceCards } from "@/components/sections";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = { title: "Individuals", description: "US individual tax return support, India ITR and cross-border tax coordination." };

const services = [
  { title: "US individual tax returns", body: "Tax preparation support for eligible US individual situations, subject to review and engagement." },
  { title: "India ITR", body: "Income tax return support in India shaped around the information and filing needs of your situation." },
  { title: "NRI tax questions", body: "A place to start when residency, income or obligations span India and another country." },
  { title: "Cross-border coordination", body: "Help organising the questions and context to discuss your US–India tax picture." },
  { title: "Life and income changes", body: "Support when a move, new work arrangement or family change raises tax questions." },
  { title: "Tax records & readiness", body: "Practical help understanding what information may be useful for a tax discussion." },
];

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="For individuals & families" title="Personal tax support, with the bigger picture in mind." description="From US individual returns to India ITR and NRI or cross-border questions, find a thoughtful starting point for the tax matters in your life." />
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <Eyebrow>Support for your situation</Eyebrow>
            <h2 className="display">A considered approach across borders.</h2>
            <p>Tax needs can change as life, work and family connections evolve. We start by understanding your situation and the support you’re looking for.</p>
          </Reveal>
          <ServiceCards items={services} />
          <p className="privacy-note spaced">Tax outcomes depend on individual facts and current law. Services are confirmed only after an initial discussion and engagement review. Please do not send tax IDs, account details or documents through the enquiry form.</p>
        </div>
      </section>
      <ContactBand eyebrow="A clearer starting point" title="Tell us what is on your mind." body="A short note about where you live, work and file is enough to begin the conversation." />
    </main>
  );
}
