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
    image: "/assets/maritime-training.jpg",
    description:
      "Alpha's internal training academy prepares crew and offshore personnel to the highest standards of safety and technical competence. From STCW-aligned certification to simulator-based technical instruction, we build the skills our fleet runs on and offer that same rigor to clients building out their own offshore workforce.",
    capabilities: [
      "STCW-aligned safety & survival training",
      "Simulator-based technical & DP training",
      "Cadet-to-officer development pathways",
      "Ongoing certification & recertification programs",
    ],
    stats: [
      { value: "40+", label: "Years of experience" },
      { value: "100%", label: "STCW-aligned crew" },
    ],
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

                <Button asChild size="lg">
                  <a href="/contact">Discuss a Project</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
