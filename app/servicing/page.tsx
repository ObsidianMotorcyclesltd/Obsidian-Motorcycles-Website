import Link from "next/link";
import PageShell,{PageHero} from "../SiteChrome";
import BrushHeading from "../BrushHeading";

const packages=[
  {
    name:"Essential service",
    art:"/reference-headings/servicing/essential-service.png",
    image:"/servicing-images/essential-wheel.png",
    prices:[["Up to 125cc","£99"],["126–599cc","£119"],["600–999cc","£139"],["1000cc+","£159"]],
    intro:"A practical routine service covering the key safety and maintenance items.",
    items:["Engine oil and filter","Brake inspection","Tyre condition and pressure inspection","Chain or belt inspection and adjustment","Fluid-level checks","Battery and lights check","General safety check"]
  },
  {
    name:"Full service",
    art:"/reference-headings/servicing/full-service.png",
    image:"/servicing-images/full-engine.png",
    prices:[["Up to 125cc","£179"],["126–599cc","£219"],["600–999cc","£249"],["1000cc+","£279"]],
    intro:"Everything in the Essential Service, with a more detailed inspection and additional maintenance.",
    items:["Air-filter inspection or replacement where included","Spark-plug inspection or replacement where included","Steering and wheel-bearing checks","Suspension inspection","Cooling-system checks","Brake-fluid condition check","Diagnostic checks where supported"]
  },
  {
    name:"Major service",
    art:"/reference-headings/servicing/major-service.png",
    image:"/servicing-images/major-piston.png",
    prices:[["Up to 125cc","From £299"],["126–599cc","From £399"],["600–999cc","From £469"],["1000cc+","From £549"]],
    intro:"Manufacturer-scheduled maintenance tailored to the motorcycle, its mileage, age and service history.",
    items:["Manufacturer schedule reviewed before quoting","Service requirements confirmed for your exact model","Additional access and specialist labour allowed for","Any recommended extra work explained first","Final price agreed before work begins"]
  }
];

export default function Servicing(){return <PageShell>
  <PageHero eyebrow="Mobile motorcycle maintenance" title="Scheduled servicing" art="/reference-headings/servicing/scheduled-servicing.png" copy="Clear servicing packages for motorcycles of every capacity, delivered at your home or another suitable location across Shropshire and surrounding areas." actions={<Link className="button" href="/contact#email-enquiry">Register your interest ↗</Link>}/>
  <section className="service-package-section">
    <div className="service-package-grid">{packages.map(pkg=><article className="service-package-card" key={pkg.name}>
      <img className="service-package-image" src={pkg.image} alt=""/>
      <BrushHeading level={2} src={pkg.art} text={pkg.name}/>
      <p className="service-package-intro">{pkg.intro}</p>
      <dl className="service-price-list">{pkg.prices.map(([capacity,price])=><div key={capacity}><dt>{capacity}</dt><dd>{price}</dd></div>)}</dl>
      <BrushHeading level={3} src="/reference-headings/servicing/whats-included.png" text="What's included"/>
      <ul>{pkg.items.map(item=><li key={item}>{item}</li>)}</ul>
    </article>)}</div>
  </section>
  <section className="servicing-notes">
    <div><BrushHeading level={2} src="/reference-headings/servicing/important-pricing-notes.png" text="Important pricing notes"/><ul><li>Tyres are inspected only. Replacement tyres, valves, balancing and fitting cost extra.</li><li>Additional parts, fluids outside the stated package allowance and specialist work cost extra.</li><li>Prices assume reasonable access and a motorcycle in serviceable condition.</li><li>Major Service prices are starting prices because manufacturer schedules and access requirements vary considerably.</li><li>No additional work will be undertaken without the customer’s approval.</li></ul></div>
    <div className="servicing-terms-placeholder"><BrushHeading level={2} src="/reference-headings/servicing/terms-and-conditions.png" text="Terms & Conditions"/><p>Full Scheduled Servicing Terms &amp; Conditions will be added before online bookings open, once the company registration and registered-office details are available.</p><p>Until then, this page is an advance guide to the planned packages and pricing and does not create a confirmed booking.</p></div>
  </section>
</PageShell>}
