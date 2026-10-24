"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "@/components/icons";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const destination = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    if (destination) {
      const subject = encodeURIComponent(`Trust Trio enquiry — ${d.get("interest")}`);
      const body = encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nI’m looking for: ${d.get("interest")}\n\n${d.get("message")}`);
      window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
      setStatus("Your email app should open with a draft addressed to Trust Trio. Review and send it there.");
    } else {
      setStatus("Your enquiry is ready, but this site has no contact destination configured yet. Your information has not been sent or stored. Please configure NEXT_PUBLIC_CONTACT_EMAIL before publishing.");
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      {status && <div className="form-success" role="status">{status}</div>}
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={100} /></div>
      <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={200} /></div>
      <div className="field full">
        <label htmlFor="interest">I’m looking for</label>
        <select id="interest" name="interest" required defaultValue="">
          <option value="" disabled>Select a starting point</option>
          <option>CPA firm support</option>
          <option>Business accounting and tax</option>
          <option>Individual tax support</option>
          <option>Wealth conversation</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field full"><label htmlFor="message">A little context <span className="optional">(optional)</span></label><textarea id="message" name="message" maxLength={1500} placeholder="What kind of support are you exploring?" /></div>
      <p className="privacy-note field full">Please don’t include tax IDs, account numbers, client records or financial documents. This form uses your email app when a contact address is configured; it does not upload files.</p>
      <div className="field full"><button className="button" type="submit">Prepare enquiry <Arrow /></button></div>
    </form>
  );
}
