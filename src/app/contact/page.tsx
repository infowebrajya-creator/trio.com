import type { Metadata } from "next";
import { Eyebrow, PageHero } from "@/components/sections";
import { Reveal } from "@/components/motion";
import ContactForm from "./contact-form";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation with Trust Trio about accounting, tax or wealth support." };

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Contact" title="Start with a conversation." description="A little context helps us understand what kind of support you’re exploring. Please keep sensitive information out of this form." cta={false} />
      <section className="section">
        <div className="wrap contact-layout">
          <Reveal as="div">
            <aside>
              <Eyebrow>A good place to begin</Eyebrow>
              <div className="contact-detail"><h3>Who we work with</h3><p>CPA firms, businesses and individuals with US, India or cross-border needs.</p></div>
              <div className="contact-detail"><h3>What happens next</h3><p>We’ll learn more about your needs and discuss whether the services and engagement are a fit.</p></div>
              <div className="contact-detail"><h3>Keep it general</h3><p>Please don’t share tax identification numbers, account details, client information or documents through an initial enquiry.</p></div>
            </aside>
          </Reveal>
          <Reveal delay={120}><ContactForm /></Reveal>
        </div>
      </section>
    </main>
  );
}
