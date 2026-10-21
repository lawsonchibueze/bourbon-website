import { Anchor, CheckCircle2, Ship, Wind } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { Fragment } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "Fleet & Assets | Alpha",
  description:
    "Vessel categories, fleet capabilities, and technical specifications across Alpha's global offshore support fleet.",
};

const vesselCategories = [
  {
    id: "ahts",
    icon: Anchor,
    type: "AHTS",
    name: "Anchor Handling Tug Supply",
    image: "/assets/fleet-ahts.jpg",
    description:
      "Powerful, high-bollard-pull vessels purpose-built for anchor handling, towing operations, and platform positioning in the most demanding offshore environments. Our AHTS fleet combines dynamic positioning with heavy-duty winch systems to support rig moves, mooring installations, and emergency towage on short notice.",
    capabilities: [
      "Anchor handling, towing & platform positioning",
      "Rig and platform mooring installation & recovery",
      "Emergency towage & salvage response",
      "DP2/DP3 dynamic positioning capability",
    ],
    stats: [
      { value: "18,000+", label: "Max BHP" },
      { value: "85+", label: "Vessels in class" },
    ],
  },
  {
    id: "psv",
    icon: Ship,
    type: "PSV",
    name: "Platform Supply Vessels",
    image: "/assets/fleet-psv.jpg",
    description:
      "Reliable supply chain vessels delivering bulk cargo, drilling fluids, and deck freight to offshore platforms with precision and efficiency. Our PSV fleet runs scheduled and on-demand resupply rotations, keeping installations stocked with fuel, water, mud, and equipment around the clock.",
    capabilities: [
      "Bulk cargo & liquid mud transport",
      "Deck cargo & containerized freight delivery",
      "Fuel, water & drilling fluid resupply",
      "Scheduled & on-demand platform runs",
    ],
    stats: [
      { value: "4,500+", label: "Max DWT" },
      { value: "95+", label: "Vessels in class" },
    ],
  },
  {
    id: "wind",
    icon: Wind,
    type: "Wind Farm",
    name: "Renewable Energy Support",
    image: "/assets/fleet-wind.jpg",
    description:
      "Specialized Service Operation Vessels (SOV) and Crew Transfer Vessels (CTV) supporting the renewable energy sector, engineered for safe crew transfer and long-duration service operations at offshore wind farms. Motion-compensated access systems keep technicians moving between vessel and turbine in a wider weather window.",
    capabilities: [
      "SOV accommodation & offshore logistics support",
      "Crew transfer vessel (CTV) operations",
      "Walk-to-work gangway & motion-compensated access",
      "Turbine component & spares transport",
    ],
    stats: [
      { value: "60+", label: "Offshore beds (SOV)" },
      { value: "40+", label: "Vessels in class" },
    ],
  },
];

const specifications = [
  {
    metric: "Deck Space",
    ahts: "750 m²",
    psv: "900 m²",
    wind: "600 m²",
  },
  {
    metric: "Deadweight (DWT)",
    ahts: "3,200 t",
    psv: "4,500 t",
    wind: "2,800 t",
  },
  {
    metric: "Bollard Pull / BHP",
    ahts: "18,000 BHP",
    psv: "9,000 BHP",
    wind: "6,500 BHP",
  },
  {
    metric: "Crew Capacity",
    ahts: "24",
    psv: "20",
    wind: "60 (SOV) / 24 (CTV)",
  },
  {
    metric: "Max Speed",
    ahts: "16 knots",
    psv: "15 knots",
    wind: "26 knots (CTV)",
  },
];

const crewBoatSeries = [
  {
    id: "crew-boat-27",
    name: "Crew Boat 27 Series",
    image: "/assets/crew-boat-27.jpg",
    alt: "Surfer 2702 crew boat underway",
    description:
      "Modern vessels meeting updated class and industry requirements, focused on passenger comfort and safety as well as technical reliability through redundant system design and carbon footprint reduction. Two configurations are available: 50 passengers and 70 passengers.",
    stats: [
      { value: "50 / 70", label: "Passenger configurations" },
      { value: "20%", label: "Fuel savings versus previous generations" },
    ],
  },
  {
    id: "crew-boat-26",
    name: "Crew Boat 26 Series",
    image: "/assets/crew-boat-26.jpg",
    alt: "Surfer 2622 crew boat alongside an offshore vessel",
    description:
      "50-seat crew boats capable of speeds up to 28 knots. Forward and aft cargo spaces provide the flexibility to transfer passengers and cargo as required for the mission. The vessels are upgraded with modern navigation, satellite communication, and electronic fuel monitoring systems.",
    stats: [
      { value: "50", label: "Passenger capacity" },
      { value: "28 kts", label: "Maximum speed" },
    ],
  },
  {
    id: "crew-boat-25",
    name: "Crew Boat 25 Series",
    image: "/assets/crew-boat-25.jpg",
    alt: "Surfer 257 crew boat viewed from above at sea",
    description:
      "Designed for large crew changes, these vessels can transport up to 70 passengers. The passenger cabin is mounted on resilient mounts to reduce vibration and sound, supporting passenger comfort during operations. Satellite communication, electronic fuel monitoring, and electronic navigation systems are fitted onboard.",
    stats: [
      { value: "70", label: "Passenger capacity" },
      { value: "Resilient", label: "Passenger cabin mounts" },
    ],
  },
  {
    id: "crew-boat-21",
    name: "Crew Boat 21 Series",
    image: "/assets/crew-boat-21.jpg",
    alt: "New-generation green crew boat underway",
    description:
      "New-generation crew boats carrying up to 30 passengers and meeting the latest industry and regulatory requirements. Key design elements include passenger comfort and safety, technical reliability, navigational safety, and specialised roles such as search and rescue, with man-overboard recovery stations fitted on both sides of the bow.",
    stats: [
      { value: "30", label: "Passenger capacity" },
      { value: "Hamilton", label: "Waterjet propulsion" },
    ],
  },
  {
    id: "crew-boat-19",
    name: "Crew Boat 19 Series",
    image: "/assets/crew-boat-19.jpg",
    alt: "Surfer 1942 crew boat operating in an industrial harbour",
    description:
      "Designed for the oil and gas industry where crew transfers take place through boat landings. With a very shallow draft and waterjet propulsion, these vessels are suited to shallow-water and riverine operations, as well as tasks requiring high levels of manoeuvrability.",
    stats: [
      { value: "Shallow", label: "Draft operations" },
      { value: "Waterjet", label: "Propulsion" },
    ],
  },
];

export default function FleetPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Fleet & Assets"
        title="Our Fleet & Assets"
        description="A diverse fleet of modern vessels equipped to handle any offshore challenge with reliability and precision."
      />

      {/* Vessel Categories & Fleet Capabilities */}
      <section id="categories" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Vessel Categories
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Built for Every Offshore Mission
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Three specialized vessel classes, each engineered around a
              distinct mission profile and outfitted with the capabilities
              our clients depend on offshore.
            </p>
          </div>

          <div
            id="capabilities"
            className="divide-y divide-border border-y border-border scroll-mt-20"
          >
            {vesselCategories.map((vessel, index) => (
              <div
                key={vessel.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center py-16`}
              >
                {/* Image */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative overflow-hidden">
                    <Image
                      width={1200}
                      height={900}
                      src={vessel.image}
                      alt={vessel.name}
                      className="w-full h-[420px] object-cover grayscale-[10%]"
                    />
                    <div className="absolute top-0 left-0 bg-surface-strong px-4 py-2 flex items-center gap-2">
                      <vessel.icon className="w-4 h-4 text-surface-strong-foreground" />
                      <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                        {String(index + 1).padStart(2, "0")} &mdash;{" "}
                        {vessel.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 w-full space-y-8">
                  <div className="space-y-4">
                    <p className="text-brand font-medium text-sm tracking-wide uppercase">
                      {vessel.type}
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                      {vessel.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {vessel.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {vessel.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 border-t border-l border-border max-w-md">
                    {vessel.stats.map((stat) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Crew Boat Series */}
      <section id="crew-boats" className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Crew Boats
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Crew Boat Series
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Purpose-built vessels supporting safe, comfortable, and reliable
              offshore personnel transfers across a range of operating
              environments.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {crewBoatSeries.map((vessel, index) => (
              <div
                key={vessel.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center py-16`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative overflow-hidden">
                    <Image
                      width={1200}
                      height={900}
                      src={vessel.image}
                      alt={vessel.alt}
                      className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-surface-strong px-4 py-2">
                      <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                        {String(index + 1).padStart(2, "0")} &mdash; Crew Boat
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full space-y-8">
                  <div className="space-y-4">
                    <p className="text-brand font-medium text-sm tracking-wide uppercase">
                      Marine Fleet
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                      {vessel.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {vessel.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 border-t border-l border-border max-w-md">
                    {vessel.stats.map((stat) => (
                      <div key={stat.label} className="border-r border-b border-border p-6">
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
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section
        id="specifications"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              By the Numbers
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Technical Specifications
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Illustrative fleet-wide figures shown for site design purposes
              &mdash; exact specifications vary by vessel and are confirmed
              at charter.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-4 border-t border-l border-border min-w-[640px]">
              <div className="border-r border-b border-border p-6 bg-surface-strong">
                <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                  Metric
                </span>
              </div>
              <div className="border-r border-b border-border p-6 bg-surface-strong">
                <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                  AHTS
                </span>
              </div>
              <div className="border-r border-b border-border p-6 bg-surface-strong">
                <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                  PSV
                </span>
              </div>
              <div className="border-r border-b border-border p-6 bg-surface-strong">
                <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                  Wind Farm (SOV/CTV)
                </span>
              </div>

              {specifications.map((row) => (
                <Fragment key={row.metric}>
                  <div className="border-r border-b border-border p-6">
                    <span className="text-sm font-medium text-foreground">
                      {row.metric}
                    </span>
                  </div>
                  <div className="border-r border-b border-border p-6">
                    <span className="text-sm text-muted-foreground">
                      {row.ahts}
                    </span>
                  </div>
                  <div className="border-r border-b border-border p-6">
                    <span className="text-sm text-muted-foreground">
                      {row.psv}
                    </span>
                  </div>
                  <div className="border-r border-b border-border p-6">
                    <span className="text-sm text-muted-foreground">
                      {row.wind}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
