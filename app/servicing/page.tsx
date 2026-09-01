import Link from "next/link";
import PageShell,{PageHero} from "../SiteChrome";
import BrushHeading from "../BrushHeading";

const packages=[
  {
    name:"Basic service",
    art:"/reference-headings/servicing/essential-service.png",
    image:"/servicing-images/essential-wheel.png",
    prices:[["Up to 125cc","£89"],["126–500cc","£99"],["501–750cc","£109"],["751–1000cc","£119"],["1001cc+","£129"]],
    intro:"Labour for a practical routine service covering the key safety and maintenance items.",
    items:["Drain and refill engine oil","Replace oil filter where applicable","Chain inspection and adjustment where applicable","Tyre pressure and condition check","Brake visual inspection","Fluid-level checks","General motorcycle safety inspection"],
    note:"Oil, the oil filter and any other parts, fluids or consumables are charged separately."
  },
  {
    name:"Interim service",
    art:"/reference-headings/servicing/full-service.png",
    image:"/servicing-images/full-engine.png",
    prices:[["Up to 125cc","£129"],["126–500cc","£149"],["501–750cc","£159"],["751–1000cc","£169"],["1001cc+","£179"]],
    intro:"The Basic Service labour plus additional inspection work appropriate to the motorcycle’s mileage and age.",
    items:["All Basic Service labour","Air-filter inspection","Spark-plug inspection","Battery condition check","Clutch and throttle operation or adjustment where applicable","Steering inspection","Suspension inspection","Fastener and general-condition checks","Applicable manufacturer-scheduled inspection items"],
    note:"Replacement parts, oils, fluids, lubricants and other service consumables are charged separately."
  },
  {
    name:"Full service",
    art:"/reference-headings/servicing/major-service.png",
    image:"/servicing-images/major-piston.png",
    prices:[["Up to 125cc","£169"],["126–500cc","£199"],["501–750cc","£219"],["751–1000cc","£239"],["1001cc+","£259"]],
    intro:"The Interim Service labour plus a more comprehensive inspection and deeper service review of the motorcycle.",
    items:["All Interim Service labour","Drive-system inspection","Braking-system inspection","Electrical-system inspection","Steering and suspension inspection","General mechanical-condition inspection","Applicable manufacturer-specific service items","Deeper service review and report"],
    note:"The fixed labour price does not include unlimited manufacturer work. Extra labour and all parts or consumables are quoted separately where applicable."
  }
];

export default function Servicing(){return <PageShell>
  <PageHero eyebrow="Mobile motorcycle maintenance" title="Scheduled servicing" art="/reference-headings/servicing/scheduled-servicing.png" copy="Clear labour-only servicing packages for motorcycles of every capacity, delivered at your home or another suitable location across Shropshire and surrounding areas." actions={<Link className="button" href="/contact#email-enquiry">Register your interest ↗</Link>}/>
  <section className="service-pricing-poster-section">
    <a href="/scheduled-service-labour-pricing.png" target="_blank" rel="noreferrer" aria-label="Open the Scheduled Service Labour Pricing poster at full size">
      <img src="/scheduled-service-labour-pricing.png" alt="Obsidian Motorcycles Ltd scheduled service labour-only pricing for Basic, Interim and Full services"/>
    </a>
    <p className="service-labour-alert"><strong>Labour-only service rates</strong> – parts, oils, lubricants and other service consumables are charged separately.</p>
  </section>
  <section className="service-package-section">
    <div className="service-package-grid">{packages.map(pkg=><article className="service-package-card" key={pkg.name}>
      <img className="service-package-image" src={pkg.image} alt=""/>
      <BrushHeading level={2} src={pkg.art} text={pkg.name}/>
      <p className="service-package-intro">{pkg.intro}</p>
      <dl className="service-price-list">{pkg.prices.map(([capacity,price])=><div key={capacity}><dt>{capacity}</dt><dd>{price}</dd></div>)}</dl>
      <p className="service-price-basis">Labour only</p>
      <BrushHeading level={3} src="/reference-headings/servicing/whats-included.png" text="What's included"/>
      <ul>{pkg.items.map(item=><li key={item}>{item}</li>)}</ul>
      <p className="service-package-note">{pkg.note}</p>
    </article>)}</div>
  </section>
  <section className="service-inclusions-section">
    <div><BrushHeading level={2} src="/reference-headings/servicing/whats-included.png" text="What's included?"/><p><strong>The advertised scheduled service price covers the labour required to carry out the applicable service work and inspections in accordance with the motorcycle manufacturer’s service schedule, where reasonably practicable.</strong></p></div>
    <div><BrushHeading level={3} src="/reference-headings/servicing/important-pricing-notes.png" text="Parts, oils & lubricants"/><p>Parts, engine oil, filters, spark plugs, lubricants, fluids and other service consumables are not included in the advertised labour price unless specifically stated otherwise.</p><p>These are charged separately according to:</p><ul><li>The motorcycle’s specification</li><li>Manufacturer requirements</li><li>Oil and fluid capacity</li><li>Parts availability</li><li>Customer preference</li><li>Whether standard, premium or specialist products are requested</li></ul><p>Obsidian Motorcycles Ltd can supply standard or specialist oils to suit the motorcycle and customer preference.</p><p>Where practical, any additional parts, lubricants or costs will be discussed and agreed with the customer before they are supplied or fitted.</p></div>
  </section>
  <section className="servicing-notes">
    <div><BrushHeading level={2} src="/reference-headings/servicing/important-pricing-notes.png" text="Additional labour"/><p>Additional labour may be required for work outside the standard package, including:</p><ul><li>Valve-clearance checking or adjustment</li><li>Extensive fairing or bodywork removal</li><li>Seized or damaged components</li><li>Additional fluid systems</li><li>Primary or transmission servicing</li><li>Specialist motorcycles or manufacturer-specific procedures</li><li>Additional diagnostic investigation</li><li>Repairs discovered during servicing</li></ul><p>These items will be quoted separately where applicable.</p></div>
    <div className="servicing-terms-placeholder"><BrushHeading level={2} src="/reference-headings/servicing/terms-and-conditions.png" text="Transparent pricing"/><p>Obsidian Motorcycles Ltd aims to operate transparent pricing. Where additional parts, labour or repair work is identified, the customer will normally be contacted for approval before the additional work is carried out.</p><p>Prices assume reasonable access and a motorcycle in reasonably serviceable condition. Read the full <Link href="/service-terms">Service Terms &amp; Conditions</Link>.</p></div>
  </section>
</PageShell>}
