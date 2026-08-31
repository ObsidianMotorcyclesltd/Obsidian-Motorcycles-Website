"use client";

import {FormEvent} from "react";

const EMAIL="info@obsidianmotorcycles.com";

export default function ContactEmailForm(){
  function submit(event:FormEvent<HTMLFormElement>){
    if(!window.location.hostname.endsWith("chatgpt.site"))return;
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const body=[`Name: ${data.get("name")}`,`Email: ${data.get("email")}`,`Telephone: ${data.get("phone")||"Not provided"}`,"",String(data.get("message")||"")].join("\n");
    window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Website enquiry — Obsidian Motorcycles Ltd")}&body=${encodeURIComponent(body)}`;
  }
  return <section className="contact-email-section" id="email-enquiry"><div className="contact-email-intro"><h2>Email Obsidian</h2><p>Send your motorcycle, location and enquiry details directly through the website. Enquiries are managed at info@obsidianmotorcycles.com.</p></div><form className="contact-email-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you" onSubmit={submit}><input type="hidden" name="form-name" value="contact"/><p className="form-trap" aria-hidden="true"><label>Do not complete this field<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></p><label>Name<input type="text" name="name" autoComplete="name" required/></label><label>Email address<input name="email" type="email" autoComplete="email" required/></label><label>Telephone<input name="phone" type="tel" autoComplete="tel"/></label><label className="wide">Your enquiry<textarea name="message" rows={7} required placeholder="Tell us about your motorcycle and what help you need"/></label><label className="consent wide"><input type="checkbox" name="privacy-notice-read" value="Yes" required/><span>I have read the <a href="/privacy">privacy notice</a>, which explains how Obsidian uses my information to respond to this enquiry.</span></label><button className="button" type="submit">Send enquiry</button></form></section>;
}
