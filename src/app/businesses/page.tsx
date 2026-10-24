import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Eyebrow, PageHero, ServiceCards, SplitVisual } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Businesses",
  description: "Bookkeeping, payroll, accounting and tax support for growing US small businesses.",
};

const services = [
  { title: "Bookkeeping", body: "Consistent transaction records, reconciliations and month-end close support." },
  { title: "Business accounting", body: "Regular financial reporting and accounting support shaped to your operations." },
  { title: "Payroll", body: "Help with payroll processes and the related records that keep your books aligned." },
  { title: "Tax support", body: "Coordination and preparation support for business tax needs, based on your engagement." },
  { title: "Catch-up & cleanup", body: "A structured reset when records have fallen behind or need a fresh review." },
  { title: "Controller & CFO support", body: "Additional reporting and decision support for planning, cash flow and business priorities." },
];

export default function Page() {
  return (
    <main id="main">
      <PageHero
        eyebrow="For US small businesses"
        title="Know your numbers. Move with confidence."
        description="A thoughtful partner for the financial work behind your business: bookkeeping, payroll, tax support and a clearer view of what comes next."
      />
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <Eyebrow>A clearer operating picture</Eyebrow>
            <h2 className="display">Solid day-to-day support. More space to plan.</h2>
            <p>Good financial routines make it easier to stay on top of the present and prepare for decisions ahead.</p>
          </Reveal>
          <ServiceCards items={services} />
        </div>
      </section>
      <section className="section surface-sage">
        <div className="wrap split">
          <Reveal className="split-copy">
            <Eyebrow>Start where you are</Eyebrow>
            <h2 className="display">Not sure what kind of support fits?</h2>
            <p>That’s a good place to start. Tell us what’s taking your time, where your numbers feel unclear, or what you’re planning next. We’ll help you work out the right conversation.</p>
            <Link className="button" href="/contact">Talk through your needs <Arrow /></Link>
          </Reveal>
          <Reveal delay={120}><SplitVisual mark="↗" one="Today’s picture" two="Next decision" /></Reveal>
        </div>
      </section>
      <ContactBand
        eyebrow="Keep your operations moving"
        title="Orderly books that make business leadership simpler."
        body="Tell us about your accounting software stack, reconciliation needs, or close routines."
      />
    </main>
  );
}
