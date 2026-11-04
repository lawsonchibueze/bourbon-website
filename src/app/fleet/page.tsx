import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "Fleet & Assets | Alpha",
  description:
    "Crew boat series supporting safe, comfortable, and reliable offshore personnel transfers.",
};

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

      {/* Crew Boat Series */}
      <section id="crew-boats" className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Crew Boats
            </p>
            <h2 className="md:col-span-10 font-serif text-4xl md:text-5xl text-foreground">
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

      <Footer />
    </main>
  );
}
