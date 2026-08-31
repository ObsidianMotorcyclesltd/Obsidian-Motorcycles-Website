import Link from "next/link";
import PageShell,{LaunchBanner} from "./SiteChrome";
import BrushHeading from "./BrushHeading";
import GoFundMeLink from "./GoFundMeLink";

const services=[
  {title:"Motorcycle mechanics",art:"/reference-headings/home-services/mobile-mechanics.png",icon:"/mobile-servicing.png",copy:"Mobile motorcycle servicing, repairs, diagnostics and maintenance.",href:"/services",label:"View mechanical services"},
  {title:"Breakdown & recovery",art:"/reference-headings/home-services/breakdown-assistance.png",icon:"/reference-headings/home-services/emergency-recovery-beacon.png",copy:"Roadside motorcycle assistance, recovery and transportation throughout Shropshire and beyond.",href:"/breakdown",label:"View breakdown services"},
  {title:"Motorcycle transport",art:"/reference-headings/home-services/recovery-and-transport.png",icon:"/motorcycle-transport.png",copy:"Motorcycle collection, delivery and transport available locally and nationwide by arrangement.",href:"/services#transport",label:"View transport"}
];
const reasons=[
  ["Biker-led","/reference-headings/why-home/biker-led.png","Built around the real-world needs of motorcycle owners and riders.","/motorcycle-recovery.png"],
  ["Mobile","/reference-headings/why-home/mobile.png","Mechanical support brought directly to the customer where practical.","/mobile-servicing.png"],
  ["Transparent pricing","","Clear labour rates and charges, with approval before additional work.","/repairs-diagnostics.png"],
  ["Built for the community","/reference-headings/why-home/built-for-the-community.png","A long-term vision including events, ride-outs, memberships and a biker-focused location.","/obsidian-vtwin-support-icon.png"]
];

const manufacturers=[
  ["Honda","/manufacturer-logos/honda.svg"],["Yamaha","/manufacturer-logos/yamaha.svg"],
  ["Suzuki","/manufacturer-logos/suzuki.svg"],["Ducati","/manufacturer-logos/ducati.svg"],["Triumph","/manufacturer-logos/triumph.png"],
  ["BMW Motorrad","/manufacturer-logos/bmw.svg"],["Harley-Davidson","/manufacturer-logos/harley-davidson.png"],["KTM","/manufacturer-logos/ktm.svg"],
  ["Royal Enfield","/manufacturer-logos/royal-enfield.png"],["Husqvarna","/manufacturer-logos/husqvarna.svg"]
];

function ManufacturerBanner(){const row=[...manufacturers,...manufacturers];return <section className="make-banner" aria-label="Motorcycle manufacturers we cater for"><BrushHeading level={2} src="/reference-headings/home-services/all-makes-all-styles-all-riders.png" text="All makes. All styles. All riders."/><div className="make-window"><div className="make-track">{row.map(([name,asset],i)=><div className="make-logo" key={`${name}-${i}`} aria-hidden={i>=manufacturers.length}><img src={asset} alt={i<manufacturers.length?`${name} logo`:""}/><b>{name}</b></div>)}</div></div><p className="make-disclaimer">Manufacturer marks belong to their respective owners and are shown only to identify the makes of motorcycle we support.</p></section>}

export default function Home(){return <PageShell showLaunchBanner={false}>
  <section className="home-hero home-hero-refined home-hero-logo-only"><div className="home-copy"><img className="hero-wordmark" src="/obsidian-official-wordmark.png" alt="Obsidian Motorcycles Ltd"/><BrushHeading level={1} src="/reference-headings/home-services/built-different.png" text="Built different"/><p className="hero-services">Motorcycle Mechanics · Breakdown &amp; Recovery · Transport</p><p className="lead">Shropshire &amp; surrounding areas</p><div className="hero-actions"><Link className="button" href="/services">View services</Link><Link className="ghost-button" href="/contact">Contact Obsidian</Link><a className="mobile-call-button" href="tel:07709225038">Call now – 07709 225 038</a></div></div></section>
  <LaunchBanner/>
  <ManufacturerBanner/>
  <section className="content-section home-core"><div className="section-heading"><p className="eyebrow">What we do</p><BrushHeading level={2} src="/reference-headings/home-services/keeping-riders-moving.png" text="Keeping riders moving"/></div><div className="feature-grid core-three">{services.map((s,i)=><article key={s.title}><div className="card-top"><span>0{i+1}</span><img className="card-icon" src={s.icon} alt=""/></div><BrushHeading level={3} src={s.art} text={s.title}/><p>{s.copy}</p><Link href={s.href}>{s.label} →</Link></article>)}</div></section>
  <section className="membership-feature"><div><p className="eyebrow">Breakdown assistance</p><BrushHeading level={2} src="/reference-headings/members-about/breakdown-assistance-membership.png" text="Breakdown assistance"/><BrushHeading level={3} src="/reference-headings/members-about/practical-rider-support-not-insurance.png" text="Built for bikers"/><p className="tier-summary">Bronze · Silver · Gold · Platinum</p><p>Standard call-out and recovery allowances, multiple-bike options, mobile labour and merchandise discounts, MOT collection and return discounts, member event benefits and early access to selected events.</p><p className="disclaimer">An assistance membership, not an insurance product.</p><Link className="button" href="/memberships">View memberships</Link></div><img src="/motorcycle-recovery.png" alt="Distressed motorcycle recovery icon"/></section>
  <section className="diagnostics-feature" id="diagnostics"><img src="/repairs-diagnostics.png" alt="Motorcycle diagnostics equipment"/><div><p className="eyebrow">Fault finding</p><BrushHeading level={2} src="/heading-repairs-diagnostics.png" text="Motorcycle diagnostics"/><p>Professional motorcycle fault-code scanning, electronic system diagnosis and diagnostic investigation using dedicated motorcycle diagnostic equipment.</p><Link className="ghost-button" href="/services#diagnostics">View diagnostics</Link></div></section>
  <section className="content-section why-home"><div className="section-heading"><BrushHeading level={2} src="/reference-headings/members-about/why-obsidian.png" text="Why Obsidian?"/></div><div className="values-section">{reasons.map(([title,art,copy,icon],i)=><article key={title}><div className="card-top"><b>0{i+1}</b><img className="card-icon" src={icon} alt=""/></div>{art?<BrushHeading level={3} src={art} text={title}/>:<h3>{title}</h3>}<p>{copy}</p></article>)}</div></section>
  <section className="home-contact-cta"><BrushHeading level={2} src="/reference-headings/forms-legal/ready-to-ride-with-us.png" text="Need Obsidian?"/><p>Shropshire and surrounding areas. Longer-distance recovery and motorcycle transport available by arrangement.</p><div className="hero-actions"><a className="button" href="tel:07709225038">Call 07709 225 038</a><Link className="ghost-button" href="/contact">Contact Obsidian</Link></div><GoFundMeLink/></section>
</PageShell>}
