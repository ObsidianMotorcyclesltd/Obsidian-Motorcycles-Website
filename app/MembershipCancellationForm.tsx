"use client";

import {FormEvent} from "react";
import BrushHeading from "./BrushHeading";

const EMAIL="info@obsidianmotorcycles.com";

export default function MembershipCancellationForm(){
  function submit(event:FormEvent<HTMLFormElement>){
    if(!window.location.hostname.endsWith("chatgpt.site"))return;
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const body=[
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")||"Not provided"}`,
      `Package: ${data.get("plan")}`,
      `Motorcycle registration: ${data.get("registration")}`,
      `Request type: ${data.get("request_type")}`,
      `Preferred end date: ${data.get("end_timing")}`,
      `Reason or notes: ${data.get("notes")||"Not provided"}`,
      "",
      "I am asking Obsidian Motorcycles Ltd to cancel my membership contract."
    ].join("\n");
    window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Membership cancellation request")}&body=${encodeURIComponent(body)}`;
  }

  return <form className="membership-form cancellation-form" name="membership-cancellation" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/cancellation-received" onSubmit={submit}>
    <input type="hidden" name="form-name" value="membership-cancellation"/>
    <p className="hidden-form-field" aria-hidden="true"><label>Do not fill this in<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></p>
    <BrushHeading level={2} src="/brand-phrases/cancellation-by-the-member.png" text="Cancel membership"/>
    <p className="membership-form-guide">Use this form to end the membership contract. Obsidian will match the request to your membership and GoCardless subscription, stop future collections and confirm the effective cancellation date in writing.</p>
    <div className="form-grid">
      <label>Full name *<input name="name" required autoComplete="name"/></label>
      <label>Email used for membership *<input name="email" type="email" required autoComplete="email"/></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel"/></label>
      <label>Membership package *<select name="plan" required defaultValue=""><option value="" disabled>Choose your package</option><option>Bronze</option><option>Silver</option><option>Gold</option><option>Platinum</option><option>Not sure</option></select></label>
      <label>Motorcycle registration *<input name="registration" required autoComplete="off"/></label>
      <label>Request type *<select name="request_type" required defaultValue="Ordinary cancellation"><option>Ordinary cancellation</option><option>14-day cooling-off cancellation</option><option>Cancellation after a price or benefit change</option><option>Other statutory cancellation right</option></select></label>
      <label className="wide">When should membership end? *<select name="end_timing" required defaultValue="End of current paid period"><option>End of current paid period</option><option>As soon as possible</option></select></label>
      <label className="wide">Reason or other details (optional)<textarea name="notes" rows={4}/></label>
    </div>
    <label className="consent"><input type="checkbox" name="contract-cancellation-confirmed" value="Yes" required/><span>I am asking Obsidian Motorcycles Ltd to cancel my membership contract. I understand that cancelling only the bank mandate may not update my membership record, and that Obsidian will confirm any final payment, refund or benefit end date that applies.</span></label>
    <label className="consent"><input type="checkbox" name="privacy-notice-read" value="Yes" required/><span>I have read the <a href="/privacy">privacy notice</a>, which explains how Obsidian uses my information to process this cancellation request.</span></label>
    <button className="button" type="submit">Submit cancellation request</button>
    <p className="cancellation-help">If the form is unavailable, email <a href="mailto:info@obsidianmotorcycles.com?subject=Membership%20cancellation%20request">info@obsidianmotorcycles.com</a>. You do not need to telephone to cancel.</p>
  </form>;
}
