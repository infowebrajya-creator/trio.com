import type { Metadata } from "next";
import { ContactBand, Eyebrow, PageHero, ServiceCards } from "@/components/sections";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Wealth",
  description: "A considered mutual fund distribution conversation in India, with clear disclosures.",
};

const steps = [
  { title: "Understand your priorities", body: "Talk through what you want your money to support and when you may need it.", cta: "Start the conversation" },
  { title: "Explore mutual funds", body: "Discuss mutual fund options available through our distribution activity in India.", cta: "Start the conversation" },
  { title: "Review the picture", body: "Revisit your goals and investment choices as your circumstances change.", cta: "Start the conversation" },
];

export default function Page() {
  return (
    <main id="main">
      <PageHero
        eyebrow="For your wealth journey"
        title="A thoughtful conversation about what matters to you."
        description="Explore your goals, time horizon and questions in a considered conversation. Mutual fund distribution services in India are offered through ARN-278052."
      />
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <Eyebrow>A considered starting point</Eyebrow>
            <h2 className="display">Start with your goals, not a product list.</h2>
            <p>We make room for questions and context before discussing mutual fund options. Any investment decision should reflect your circumstances and comfort with risk.</p>
          </Reveal>
          <ServiceCards items={steps} />
          <Reveal className="prose content-narrow spaced-top">
            <p><strong>Distribution disclosure:</strong> Mutual fund distribution services are offered in India through ARN-278052. Trust Trio may receive commissions from asset management companies for mutual fund distribution. Commissions can vary by scheme and plan; please request the applicable commission details and scheme information before investing. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance does not guarantee future returns. The information here is general and is not personalised investment advice.</p>
            <p>No PMS, AIF or SIF distribution service is presented as currently available on this website.</p>
          </Reveal>
        </div>
      </section>
      <ContactBand
        eyebrow="A considered discussion"
        title="Start with what you want your capital to support."
        body="Reach out for an unhurried conversation about your horizon and goals under ARN-278052."
      />
    </main>
  );
}
