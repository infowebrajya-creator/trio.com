import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = { title: "Resources", description: "Practical starting points for bookkeeping, tax preparation and financial conversations." };

const items = [
  { title: "Getting ready for a bookkeeping conversation", desc: "A simple list of topics to discuss when setting up or reviewing your monthly accounting." },
  { title: "A calmer start to tax season", desc: "How to think about gathering information and raising questions before a return is prepared." },
  { title: "Questions for a cross-border tax discussion", desc: "A starting point for describing the places, dates and income sources that shape your situation." },
  { title: "What to discuss with a bookkeeping partner", desc: "Ways to align on timing, close routines, communication and review responsibilities." },
];

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Resources" title="A little more clarity, one question at a time." description="Practical starting points for conversations about accounting, tax and financial decisions." cta={false} />
      <section className="section">
        <div className="wrap">
          <ul className="resource-list">
            {items.map((x, i) => (
              <Reveal as="li" key={x.title} delay={i * 70}>
                <article className="resource-row">
                  <div><span className="eyebrow">Guide · 0{i + 1}</span><h3 className="serif">{x.title}</h3><p>{x.desc}</p></div>
                  <Link className="text-link" href="/contact" aria-label={`Discuss ${x.title} with Trust Trio`}>Discuss <Arrow /></Link>
                </article>
              </Reveal>
            ))}
          </ul>
          <p className="privacy-note spaced">These topics are general conversation prompts, not tax, legal, accounting or investment advice. Contact us to discuss your situation.</p>
        </div>
      </section>
    </main>
  );
}
