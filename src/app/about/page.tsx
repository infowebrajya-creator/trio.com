import type { Metadata } from "next";
import { ContactBand, Eyebrow, PageHero, SplitVisual } from "@/components/sections";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = { title: "About", description: "Meet Trust Trio and its approach to accounting, tax and wealth support." };

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="About Trust Trio" title="Professional support begins with a real conversation." description="Trust Trio brings accounting, tax and wealth support into one place, with a thoughtful, responsive approach built around the person or team we’re working with." />
      <section className="section">
        <div className="wrap split">
          <Reveal className="split-copy">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="display">Good work is clear, considered and personal.</h2>
            <p>We believe the details matter—and so does the way they’re handled. Our approach starts with listening, setting clear expectations and making the work understandable.</p>
            <ul className="check-list">
              <li>Understand the context before defining the work</li>
              <li>Agree on scope, communication and responsibilities</li>
              <li>Keep the next step clear and practical</li>
            </ul>
          </Reveal>
          <Reveal delay={120}><SplitVisual mark="t" one="Listen first" two="Work with care" /></Reveal>
        </div>
      </section>
      <section className="section section-flush">
        <Reveal className="wrap content-narrow prose">
          <h2 className="serif">Meet CA Uday Chhabria</h2>
          <p>CA Uday Chhabria brings a thoughtful, detail-oriented perspective to client conversations across accounting, tax and wealth. Trust Trio is designed to make it easier to find the right starting point and have a clear discussion about your needs.</p>
          <p>Trust Trio is associated with UPC &amp; Associates. Services, professional responsibilities and engagement arrangements are confirmed individually. This website does not make a representation of regulatory approval or professional status beyond the details stated here.</p>
        </Reveal>
      </section>
      <ContactBand />
    </main>
  );
}
