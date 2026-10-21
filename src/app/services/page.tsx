import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "Services | Alpha",
  description:
    "Marine logistics, crew transportation, and internal maritime training services delivered across the global offshore energy industry.",
};

const services = [
  {
    id: "marine",
    title: "Marine Logistics",
    image: "/assets/marine-logistics.jpg",
    description:
      "Comprehensive offshore support vessel services including supply, anchor handling, and platform support for the global energy industry. Our fleet operates around the clock to keep offshore installations supplied, secured, and moving.",
    capabilities: [
      "Anchor handling, towing & platform positioning",
      "Platform supply & bulk cargo runs",
      "Offshore logistics planning & scheduling",
      "24/7 emergency response readiness",
    ],
    stats: [
      { value: "223", label: "Vessels in service" },
      { value: "37", label: "Countries served" },
    ],
  },
  {
    id: "crew",
    title: "Crew Transportation",
    image: "/assets/passenger-mobility.jpg",
    description:
      "Safe and efficient crew transfer services connecting offshore installations with onshore facilities across the globe, engineered around comfort, punctuality, and safety at every handover.",
    capabilities: [
      "Crew transfer vessel (CTV) operations",
      "Walk-to-work gangway systems",
      "Offshore accommodation logistics",
      "24/7 scheduling & dispatch coordination",
    ],
    stats: [
      { value: "24/7", label: "Crew transfer coverage" },
      { value: "98%", label: "On-time departure rate" },
    ],
  },
  {
    id: "training",
    title: "Internal Maritime Training",
    image: "/assets/marine-training-simulator.png",
    description:
      "Bourbon Training Center develops competent, safety-conscious, and performance-driven marine professionals through practical deck and classroom training, simulator-based exercises, equipment familiarisation, and competency assessments.",
    capabilities: [
      "Type C IMO Bridge Simulator Training",
      "Furuno FMD-3200 ECDIS Type-Specific Training",
      "Garmin Navigation Equipment Training",
      "GPS Training",
    ],
    stats: [],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Capabilities"
        title="Our Services"
        description="Delivering excellence in offshore marine services with safety, innovation, and reliability at our core."
      />

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 scroll-mt-20 ${
            index % 2 === 1 ? "bg-secondary/60 border-y border-border" : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative overflow-hidden">
                  <Image
                    width={1200}
                    height={900}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover grayscale-[10%]"
                  />
                  <div className="absolute top-0 left-0 bg-surface-strong px-4 py-2">
                    <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                      {String(index + 1).padStart(2, "0")} &mdash;{" "}
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full space-y-8">
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>

                {service.stats.length > 0 && (
                  <div className="grid grid-cols-2 border-t border-l border-border max-w-md">
                    {service.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="border-r border-b border-border p-6"
                      >
                        <div className="font-serif text-3xl text-brand mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Button asChild size="lg">
                  <a href="/contact">Discuss a Project</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="training-center" className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Bourbon Training Center
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Building Competence, Enhancing Safety, and Driving Operational Excellence
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              At Bourbon Interoil Nigeria Limited (BINL), marine training is
              designed to strengthen crew competence, operational reliability,
              and a culture of continuous learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Through a combination of practical deck and classroom
                training, simulator-based exercises, equipment familiarisation,
                and competency assessments, we equip our crew and personnel
                with the knowledge, technical skills, and confidence required
                to perform their duties safely and effectively in challenging
                offshore environments.
              </p>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Our Approach
                </p>
                <p>
                  Effective marine training goes beyond theoretical knowledge.
                  Our approach combines structured instruction with practical
                  exercises, scenario-based learning, equipment familiarisation,
                  and competency evaluation. Training outcomes are reviewed to
                  identify areas for improvement and ensure that learning
                  translates into safer and more reliable onboard performance.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Operational Alignment
                </p>
                <p>
                  By aligning training activities with operational requirements,
                  applicable maritime standards, client expectations, and
                  industry best practices, BINL continues to strengthen the
                  competence of its marine workforce and support dependable
                  offshore marine services.
                </p>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Our Commitment
                </p>
                <p>
                  At BINL, competence is a cornerstone of safe operations. We
                  remain committed to investing in our people, improving
                  technical capabilities, and promoting professional excellence
                  to ensure that our personnel are prepared to meet operational
                  challenges while protecting lives, assets, and the marine
                  environment.
                </p>
              </div>
              <p className="font-serif text-xl text-foreground">
                Bourbon Interoil Nigeria Limited &mdash; Developing Competence.
                Promoting Safety. Delivering Operational Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
