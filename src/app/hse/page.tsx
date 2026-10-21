import { CheckCircle2, HeartPulse, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";

export const metadata: Metadata = {
  title: "HSE & Sustainability | Alpha",
  description:
    "Quality, health, safety, and environmental responsibility across Alpha's marine logistics operations.",
};

const qhseAreas = [
  {
    icon: CheckCircle2,
    title: "Quality",
    description:
      "Reliable operations and consistent marine logistics services delivered through effective processes, assurance, and continuous improvement.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    description:
      "Protecting the health and wellbeing of employees, offshore passengers, contractors, and other people affected by our operations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Preventing harm through effective operational controls, competent personnel, emergency preparedness, and a shared commitment to safe behaviour.",
  },
  {
    icon: Leaf,
    title: "Environment",
    description:
      "Preventing pollution, managing environmental impacts responsibly, and continually improving the way we use fuel, energy, and other resources.",
  },
];

const safetyPractices = [
  ["Safe Offshore Personnel Transfers", "Risk assessment, appropriate procedures, personnel readiness, suitable protective equipment, and consideration of prevailing environmental conditions."],
  ["Hazard Identification and Stop Work Authority", "Reporting unsafe conditions, unsafe behaviours, and near misses, with the authority to intervene when work cannot be performed safely."],
  ["Safety Leadership and Accountability", "Visible leadership, individual accountability, and engagement with vessel crews and shore-based personnel."],
  ["Emergency Preparedness", "Regular drills, emergency response arrangements, and lessons learned for offshore and shore-based emergencies."],
  ["Competence, Health and Wellbeing", "Safety awareness, relevant training, occupational health initiatives, and applicable drug and alcohol requirements."],
  ["Learning and Continuous Improvement", "Learning from incidents, near misses, audits, inspections, and safety observations."],
];

const qualityPractices = [
  ["Reliable Service Delivery", "Services are planned and delivered in accordance with agreed requirements, operational procedures, and applicable standards."],
  ["Compliance and Assurance", "Audits, inspections, and performance reviews help assess compliance and maintain management-system effectiveness."],
  ["Corrective Action and Continuous Improvement", "Identified gaps are investigated, addressed, and monitored through closure."],
  ["Document Control and Operational Discipline", "Accurate records and controlled documentation support decision-making and traceability."],
  ["Client Satisfaction", "Client feedback and engagement inform service improvements and long-term relationships."],
  ["Integrated Management Systems", "Quality, health, safety, and environmental performance are managed as interconnected responsibilities."],
];

const environmentalPriorities = [
  ["Pollution Prevention", "Identifying, reporting, and promptly addressing oil, fuel, and other pollution hazards."],
  ["Responsible Waste Management", "Proper waste segregation, handling, storage, and disposal in accordance with applicable requirements and approved procedures."],
  ["Efficient Fuel and Energy Use", "Reducing unnecessary fuel consumption, emissions, and energy waste across vessels and shore facilities."],
  ["Environmental Awareness", "Strengthening employee and contractor understanding of marine environmental risks and pollution prevention."],
  ["Compliance and Continuous Improvement", "Monitoring environmental performance, addressing gaps, and improving environmental practices."],
];

function PracticeList({ practices }: { practices: string[][] }) {
  return (
    <ul className="space-y-3 text-muted-foreground leading-relaxed">
      {practices.map(([title, description]) => (
        <li key={title}>
          <strong className="text-foreground">{title}:</strong> {description}
        </li>
      ))}
    </ul>
  );
}

export default function HsePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="QHSE"
        title="Quality, Health, Safety & Environment"
        description="Protecting people, preserving the environment, and delivering reliable marine logistics services through continuous improvement."
      />

      <section id="hse" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Our Standards
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Quality, Health, Safety &amp; Environment
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              At Bourbon Interoil Nigeria Limited, Quality, Health, Safety and
              Environment are fundamental to how we operate and deliver marine
              logistics services. In an industry where the safe transportation
              of personnel offshore is critical, we are committed to
              preventing harm, protecting the environment, safeguarding our
              assets, and delivering reliable services that meet our clients’
              expectations.
              <br />
              <br />
              Quality, health, safety, and environmental performance are
              interconnected. Together, they guide how we protect people,
              safeguard assets, preserve the marine environment, and meet our
              clients&apos; expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {qhseAreas.map((area, index) => (
              <div key={area.title} className="group p-8 border-r border-b border-border animate-fade-in">
                <span className="font-serif text-lg text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <area.icon className="w-6 h-6 text-brand mt-4 mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative overflow-hidden h-[420px]">
              <Image width={1920} height={1280} src="/assets/qhse-safety.jpg" alt="Offshore personnel transfer operation" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Health &amp; Safety</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Everyone Safe. Every Journey. Every Time.</h2>
              <p className="text-muted-foreground leading-relaxed">
                The safety of our employees, offshore passengers, contractors,
                and other people affected by our operations is our highest
                priority. We manage the risks associated with vessel
                operations, offshore personnel transfers, working at sea, and
                shore-base activities through effective operational controls,
                competent personnel, emergency preparedness, and a shared
                commitment to safe behaviour.
              </p>
              <PracticeList practices={safetyPractices} />
              <p className="text-muted-foreground leading-relaxed">
                We are working towards zero workplace injuries and safe
                passenger transfers by embedding prevention, operational
                discipline, and personal accountability into everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Quality Management</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Reliable Operations. Consistent Service. Lasting Client Confidence.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quality means delivering marine logistics services that
                consistently meet client requirements, applicable regulations,
                and established operational standards. Reliable service
                delivery depends on competent personnel, well-maintained
                assets, effective processes, accurate documentation, and a
                commitment to learning and improvement.
              </p>
              <PracticeList practices={qualityPractices} />
              <p className="text-muted-foreground leading-relaxed">
                We are committed to delivering dependable, compliant, and
                high-quality marine logistics services through accountability,
                disciplined execution, and continuous improvement.
              </p>
            </div>
            <div className="relative overflow-hidden h-[420px] order-1 lg:order-2">
              <Image width={1920} height={1280} src="/assets/qhse-quality.jpg" alt="Marine worker carrying out an operational inspection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="environment" className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative overflow-hidden h-[420px]">
              <Image width={1824} height={1366} src="/assets/qhse-environment.jpg" alt="Vessel operating responsibly in the marine environment" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Environmental Stewardship</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Protecting the Marine Environment, One Operation at a Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                The marine environment is central to our business. We recognise
                our responsibility to prevent pollution, manage our
                environmental impacts, and operate responsibly across our
                vessels and shore bases.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach focuses on preventing spills, complying with
                applicable environmental requirements, managing waste
                responsibly, and improving the efficiency with which we use
                fuel, energy, and other resources.
              </p>
              <PracticeList practices={environmentalPriorities} />
              <p className="text-muted-foreground leading-relaxed">
                We are committed to preventing pollution, complying with
                applicable environmental requirements, and continually
                improving our environmental performance to support responsible
                marine operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
