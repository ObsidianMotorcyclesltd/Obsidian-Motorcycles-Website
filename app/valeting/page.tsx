import Link from "next/link";
import BrushHeading from "../BrushHeading";
import PageShell from "../SiteChrome";

export default function Valeting(){
  return <PageShell>
    <section className="valeting-coming-soon">
      <div className="valeting-coming-soon-copy">
        <BrushHeading level={1} src="/reference-headings/home-services/coming-soon.png" text="Motorcycle valeting coming soon"/>
        <h2>Website under construction</h2>
        <p>Obsidian Motorcycle Valeting is being prepared as part of our launch plans. Service details, packages, availability and pricing are still being finalised and will be added here before valeting bookings open.</p>
        <p>If you would like to hear when motorcycle valeting becomes available, register your interest with Obsidian.</p>
        <Link className="button" href="/contact#email-enquiry">Register valeting interest</Link>
      </div>
      <div className="valeting-tread" aria-hidden="true"/>
    </section>
  </PageShell>;
}
