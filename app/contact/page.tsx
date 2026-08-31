import PageShell,{PageHero} from "../SiteChrome";
import ContactEmailForm from "../ContactEmailForm";
import GoFundMeLink from "../GoFundMeLink";

export default function Contact(){return <PageShell>
  <PageHero eyebrow="Contact Obsidian" title="Need Obsidian?" art="/reference-headings/forms-legal/ready-to-ride-with-us.png" copy="For service enquiries, recovery, transport, membership questions or launch updates, contact Obsidian Motorcycles Ltd." actions={<><a className="button" href="tel:07709225038">Call Obsidian</a><a className="ghost-button" href="mailto:info@obsidianmotorcycles.com">Email Obsidian</a></>}/>
  <section className="contact-grid">
    <a href="tel:07709225038"><img className="card-icon" src="/contact-icons/phone.png" alt=""/><span>PHONE</span><strong className="contact-detail-art"><img src="/contact-text/phone.png" alt="07709 225 038"/></strong><p>Call for enquiries and breakdown assistance.</p></a>
    <a href="mailto:info@obsidianmotorcycles.com"><img className="card-icon" src="/contact-icons/email.png" alt=""/><span>EMAIL</span><strong className="contact-detail-art contact-email-art"><img src="/contact-text/email.png" alt="info@obsidianmotorcycles.com"/></strong><p>Send bike details, locations and photographs.</p></a>
    <div><img className="card-icon" src="/contact-icons/location.png" alt=""/><span>AREA</span><strong className="contact-detail-art contact-area-art"><img src="/contact-text/area.png" alt="Shropshire and surrounding areas"/></strong><p>Longer-distance motorcycle recovery and transport available by arrangement.</p></div>
  </section>
  <ContactEmailForm/>
  <section className="gofundme-section"><GoFundMeLink/></section>
  <section className="social-section"><img className="social-heading" src="/social-icons/join-us-on.png" alt="Join us"/><div className="social-grid">
    <a href="https://www.facebook.com/profile.php?id=61593416126912" target="_blank" rel="noopener noreferrer" aria-label="Follow Obsidian Motorcycles Ltd on Facebook"><span className="social-icon social-icon-facebook" aria-hidden="true"/><img className="social-name" src="/social-icons/facebook-text.png" alt="Facebook"/></a>
    <a href="https://www.instagram.com/obsidianmotorcyclesltd/" target="_blank" rel="noopener noreferrer" aria-label="Follow Obsidian Motorcycles Ltd on Instagram"><span className="social-icon social-icon-instagram" aria-hidden="true"/><img className="social-name" src="/social-icons/instagram-text.png" alt="Instagram"/></a>
    <a href="https://www.youtube.com/channel/UCQAuhwag7eAEKAyVKKWpzOw" target="_blank" rel="noopener noreferrer" aria-label="Visit Obsidian Motorcycles Ltd on YouTube"><span className="social-icon social-icon-youtube" aria-hidden="true"/><img className="social-name" src="/social-icons/youtube-text.png" alt="YouTube"/></a>
  </div></section>
  <section className="broken-down-cta"><h2>Broken down?</h2><a className="button" href="tel:07709225038">Call 07709 225 038</a></section>
</PageShell>}
