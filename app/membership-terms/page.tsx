import Link from "next/link";
import PageShell,{PageHero} from "../SiteChrome";
import BrushHeading from "../BrushHeading";

export default function MembershipTerms(){return <PageShell>
  <PageHero eyebrow="Breakdown membership" title="Membership terms" copy="Terms for Obsidian Breakdown Assistance Membership. Last updated 27 August 2026."/>
  <section className="legal-copy">
    <BrushHeading level={2} src="/reference-headings/forms-legal/important-headline-terms.png" text="Important headline terms"/>
    <ul>
      <li>This is a service assistance membership and is not an insurance product.</li>
      <li>Membership activates seven full days after completed registration and cleared payment.</li>
      <li>Pre-existing breakdowns, known faults and incidents during the activation period are excluded.</li>
      <li>Only motorcycles registered and accepted on the membership are eligible.</li>
      <li>Recovery allowances are shared across all motorcycles registered to the membership.</li>
      <li>Members can cancel the membership contract online at any time without a minimum-term obligation.</li>
    </ul>

    <h2>Membership contract</h2>
    <p>The membership contract begins when Obsidian accepts the application and payment. A Direct Debit Instruction is authority to collect payment; it is not the membership contract itself. Applicants must be at least 18, provide accurate details and have authority to register each motorcycle. We may decline an application where eligibility, location, vehicle condition or intended use falls outside the service.</p>
    <h2>Plans and benefits</h2>
    <p>Bronze, Silver, Gold and Platinum benefits, prices, registered-motorcycle limits, recovery allowances, collection radius and discounts are those displayed and confirmed at purchase. Benefits are personal to the member, cannot be sold or transferred and have no cash value. Discounts apply only to eligible Obsidian services and products and cannot be combined unless expressly agreed.</p>
    <h2>Activation and existing faults</h2>
    <p>Membership becomes active seven full days after registration and payment. It does not cover any incident occurring before activation, a breakdown already present or developing when the member applies, or a fault the member knew or reasonably should have known about. Misrepresenting an existing fault may result in refusal, cancellation and recovery of reasonable costs.</p>
    <h2>Payments and renewal</h2>
    <p>Monthly memberships renew each month by Direct Debit unless cancelled. Where an annual option is expressly offered, it renews each year using the agreed payment method unless cancelled. Failed, reversed or indemnity-claimed payments may suspend benefits until cleared. Obsidian will give clear notice of price or material benefit changes before they apply and will provide renewal reminders and other subscription notices where required by the law in force at the time.</p>
    <h2>Payment</h2>
    <p>GoCardless provides the secure Direct Debit setup and payment service. Where GoCardless hosted notifications are used, mandate confirmation and advance notice of collections are sent under the applicable GoCardless and Bacs timetable. Members must keep their email address current and should review those notices promptly.</p>
    <p>The Direct Debit Guarantee protects customers if an error is made in the payment of a Direct Debit. It does not make the bank mandate the membership contract, and it does not itself determine service eligibility, benefit use, contractual cancellation or refunds. A member may cancel a Direct Debit with their bank, but should also use Obsidian’s online cancellation form so that the membership contract, benefits and customer records are correctly closed.</p>
    <h2>Cancellation by the member</h2>
    <p>Members may cancel at any time without a minimum-term obligation by using the <Link href="/cancel-membership">online cancellation form</Link> or emailing info@obsidianmotorcycles.com. A member is not required to telephone or to cancel only through their bank. Cancellation stops the next renewal. Unless statutory rights require otherwise or immediate cancellation is agreed, benefits continue until the end of the period already paid for and no part-period refund is due.</p>
    <p>Obsidian will acknowledge an online cancellation without undue delay, with an operational aim of normally doing so within 24 hours. We will confirm the effective end date and any final payment or refund position in writing. Membership may later be restarted, subject to current eligibility, pricing and a new seven-day activation period.</p>
    <h2>Cooling-off rights</h2>
    <p>A consumer joining online or by telephone will normally have 14 days to cancel from the day after the contract is made. If no assistance has been used, payments will be refunded as required by law. If the member expressly requests and receives a service during that period, a proportionate charge may be deducted for the service supplied. The right may end once a service has been fully performed where the consumer gave the express request and acknowledgement required by law. Any refund due will be made without undue delay and within the applicable statutory deadline.</p>
    <h2>Changes</h2>
    <p>The subscription-contract provisions of the Digital Markets, Competition and Consumers Act 2024 are expected to commence in spring 2027. Before they apply, Obsidian will review these terms and its sign-up, reminder, cooling-off, cancellation, confirmation and refund processes against the final commencement regulations and statutory guidance. Nothing in these terms limits any additional right that applies when the law changes.</p>
    <h2>Cancellation by Obsidian</h2>
    <p>We may suspend or cancel membership for non-payment, fraud, false information, abuse, threatening behaviour, unsafe conduct, commercial misuse, attempted use for an ineligible or unregistered motorcycle, or serious or repeated breach. We may recover reasonable costs caused by fraudulent or deliberate misuse. Where we cancel for reasons unrelated to breach, we will normally provide a proportionate refund for the unused paid period.</p>
    <h2>Using assistance</h2>
    <p>The member must contact Obsidian as soon as reasonably possible, remain in a safe location, follow safety instructions and provide accurate location, motorcycle and fault information. Attendance and arrival times are estimates. Assistance is subject to staff, recovery vehicle, road, weather and safe-access availability.</p>
    <h2>Allowances and fair use</h2>
    <p>Plan recovery limits apply per membership year and are shared between all registered motorcycles. Unused recoveries do not roll over, transfer or generate credit. Where an incident exceeds the included radius, mileage, time or service allowance, we will explain applicable additional charges wherever reasonably possible before they are incurred.</p>
    <h2>Exclusions</h2>
    <p>Assistance may be refused or separately charged for: pre-existing or known faults; incidents during activation; unregistered motorcycles; repeated attendance for the same unrepaired fault; deliberate, reckless or competitive use; unlawful use; absent keys or immobiliser access; inaccessible or unsafe locations; incorrect fuel; avoidable battery depletion; unauthorised modification; overloading; commercial courier, hire or delivery use unless agreed; and recovery following seizure by authorities.</p>
    <h2>Roadside repair and recovery</h2>
    <p>We do not guarantee roadside repair. If a safe repair is not reasonably possible, recovery may be offered within the member’s plan allowance to an appropriate agreed destination. Destination acceptance, opening times, access and additional transport remain the member’s responsibility.</p>
    <h2>Member discounts and events</h2>
    <p>Labour, merchandise and MOT collection or return discounts apply at the rate attached to the active plan and only where the service is available. Event entry and early access are subject to eligibility, capacity, separate event rules and cancellation. Future events are ambitions until individually announced and are not guaranteed.</p>
    <h2>Motorcycle changes</h2>
    <p>Members must request and receive confirmation before replacing or adding a registered motorcycle. A newly added or substituted motorcycle may be subject to eligibility checks and an activation period. The number of motorcycles cannot exceed the selected plan.</p>
    <h2>Our responsibility</h2>
    <p>We will provide membership services with reasonable care and skill. Nothing excludes liability that cannot legally be excluded. We are not responsible for losses caused by inaccurate information, pre-existing defects, a member ignoring safety advice, or circumstances beyond reasonable control. Membership is not a substitute for legally required motor insurance or motorcycle maintenance.</p>
    <h2>Complaints</h2>
    <p>Email info@obsidianmotorcycles.com. We aim to acknowledge complaints within five working days and provide a final response within 14 working days. We are not currently subscribed to an alternative dispute resolution scheme.</p>
    <h2>Law</h2>
    <p>These terms are governed by the law of England and Wales. Consumers retain mandatory rights and access to the courts applicable to where they live.</p>
  </section>
</PageShell>}
