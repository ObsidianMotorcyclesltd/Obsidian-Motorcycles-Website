import PageShell,{PageHero} from "../SiteChrome";
import BrushHeading from "../BrushHeading";
import GoFundMeLink from "../GoFundMeLink";

export default function About(){return <PageShell>
  <PageHero eyebrow="About Obsidian" title="Our story" art="/reference-headings/members-about/the-story-behind-the-name.png" copy="An independent motorcycle company with a rider-focused approach, a strong identity and a long-term plan."/>
  <section className="story-grid story-steps"><div>
    <h2>Where we started</h2><p>Obsidian Motorcycles Ltd was created to provide motorcycle mechanics, breakdown recovery and motorcycle transport with a strong independent identity and rider-focused approach.</p>
    <h2>What we’re building</h2><p>The next stage is to establish a dedicated workshop and motorcycle community space, while expanding servicing, diagnostics, recovery, transport and membership services.</p>
    <h2>Where we’re going</h2><p>Long-term ambitions include motorcycle events and ride-outs, apprentice training, custom motorcycle builds and expanding the Obsidian Motorcycles concept into additional locations.</p>
    <p className="draft-warning">These are future ambitions and are not currently available services.</p>
  </div><div className="meaning-card"><BrushHeading level={3} src="/reference-headings/members-about/protection-grounding-truth.png" text="Protection · Grounding · Truth"/><p>Spiritually, obsidian is associated with protection, grounding and truth. Formed from volcanic glass, it represents resilience and transformation: intense pressure becoming something strong and purposeful.</p><p>That meaning reflects the business, the journey behind it and the riders Obsidian is here to serve.</p></div></section>
  <section className="founder-section" id="founder"><img src="/meet-the-founder-tom-matthews.png" alt="Tom Matthews, founder and managing director of Obsidian Motorcycles Ltd"/><div>
    <p className="eyebrow">Meet the founder</p><h2>Founded by Tom Matthews</h2>
    <p>Obsidian Motorcycles Ltd was built from a lifelong passion for motorcycles, a strong mechanical background and a desire to create something with real purpose. During some of the most difficult periods of my life, motorcycles gave me freedom, focus and a reason to keep moving forward. Working on bikes, riding and being part of the motorcycle community had a genuinely positive impact on my mental health.</p>
    <p>I built Obsidian because I want others to experience that same sense of purpose, connection and belonging. It is more than a motorcycle business. It is about dependable support, honest workmanship and creating an inclusive community where riders can meet, talk and feel welcome without judgement.</p>
    <p>Obsidian represents resilience, individuality and the belief that difficult chapters can become the foundation for something meaningful. It was built different—because so was the journey behind it.</p>
    <p>My background includes a Level 3 automotive mechanical qualification, mechanical engineering, previous mobile mechanic experience, and former Centre Manager and Recovery Manager experience within a mainstream fast-fit centre.</p>
  </div></section>
  <section className="gofundme-section"><GoFundMeLink/></section>
</PageShell>}
