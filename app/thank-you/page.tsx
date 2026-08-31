import Link from "next/link";
import PageShell,{PageHero} from "../SiteChrome";

export default function ThankYou(){return <PageShell><PageHero eyebrow="Message sent" title="Thank you" copy="Your enquiry has been submitted to Obsidian Motorcycles Ltd. We will respond using the contact details you provided."/><section className="home-contact-cta"><h2>We’ll be in touch</h2><p>If your enquiry is urgent, call 07709 225 038.</p><div className="hero-actions"><a className="button" href="tel:07709225038">Call Obsidian</a><Link className="ghost-button" href="/">Return home</Link></div></section></PageShell>}
