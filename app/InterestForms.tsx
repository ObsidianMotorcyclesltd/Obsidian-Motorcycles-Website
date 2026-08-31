"use client";

import { FormEvent, useState } from "react";
import BrushHeading from "./BrushHeading";

const EMAIL = "info@obsidianmotorcycles.com";

function openEmail(subject: string, lines: string[]) {
  const body = lines.filter(Boolean).join("\n");
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function InterestForms() {
  const [interestSent, setInterestSent] = useState(false);
  const [mailingSent, setMailingSent] = useState(false);

  function registerInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openEmail("Register my interest — Obsidian Motorcycles Ltd", [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Interested in: ${data.get("interest")}`,
      `Bike / details: ${data.get("details") || "Not provided"}`,
      "",
      "I have read the privacy notice and understand that Obsidian will use these details to respond to my enquiry.",
    ]);
    setInterestSent(true);
  }

  function joinMailingList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openEmail("Add me to the Obsidian mailing list", [
      `Name: ${data.get("mailing-name")}`,
      `Email: ${data.get("mailing-email")}`,
      "",
      "Please add me to the Obsidian Motorcycles Ltd mailing list. I understand I can unsubscribe at any time.",
    ]);
    setMailingSent(true);
  }

  return <div className="signup-grid" id="register">
    <form className="signup-card interest-form" onSubmit={registerInterest}>
      <p className="form-number">01 / REGISTER</p>
      <BrushHeading level={3} src="/reference-headings/forms-legal/register-your-interest.png" text="Register your interest"/>
      <p>Tell us what you’re interested in and we’ll keep you updated as Obsidian prepares to launch.</p>
      <div className="field-row">
        <label><span>Your name *</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Email address *</span><input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <div className="field-row">
        <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label><span>I’m interested in *</span><select name="interest" required defaultValue=""><option value="" disabled>Select one</option><option>Mobile servicing</option><option>Repairs & diagnostics</option><option>Motorcycle transport</option><option>Motorcycle recovery</option><option>Membership options</option><option>Business launch updates</option><option>Something else</option></select></label>
      </div>
      <label><span>Your bike or enquiry details</span><textarea name="details" rows={4} placeholder="Bike, location and anything useful for us to know" /></label>
      <label className="check-field"><input name="privacy-notice-read" type="checkbox" required /><span>I have read the <a href="/privacy">privacy notice</a>, which explains how Obsidian uses my information to respond to this enquiry. *</span></label>
      <button className="button form-button" type="submit">Prepare my enquiry <span>↗</span></button>
      {interestSent && <p className="form-status" role="status">Your email app should now be open. Send the prepared message to complete your registration.</p>}
    </form>

    <form className="signup-card mailing-form" onSubmit={joinMailingList}>
      <p className="form-number">02 / STAY IN THE LOOP</p>
      <BrushHeading level={3} src="/reference-headings/forms-legal/join-the-mailing-list.png" text="Join the mailing list"/>
      <p>Get launch news, service updates, membership information and details of future rides and events.</p>
      <label><span>Your name *</span><input name="mailing-name" type="text" autoComplete="name" required /></label>
      <label><span>Email address *</span><input name="mailing-email" type="email" autoComplete="email" required /></label>
      <label className="check-field"><input name="mailing-consent" type="checkbox" required /><span>I agree to receive emails from Obsidian Motorcycles Ltd, have read the <a href="/privacy">privacy notice</a>, and understand I can unsubscribe at any time. *</span></label>
      <button className="button inverse form-button" type="submit">Join the list <span>↗</span></button>
      {mailingSent && <p className="form-status" role="status">Your email app should now be open. Send the prepared message to join the list.</p>}
      <p className="direct-email">Prefer to email us directly?<br/><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </form>
  </div>;
}
