import { Anchor, Ship, Wind } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Fleet = () => {
  const vessels = [
    {
      image: "/assets/bour-10.jpeg",
      icon: Anchor,
      type: "Surfer 1800 Series",
      name: "Surfer 1800 Series",
      specs: "25 Passengers | 30 Knots | 4-Ton Payload",
      description:
        "Light craft designed for reliable offshore personnel transportation, with a Fi-Fi pump and monitor capacity of 300m³.",
    },
    {
      image: "/assets/bour-8.jpeg",
      icon: Ship,
      type: "Surfer 25 Series",
      name: "Surfer 25 Series",
      specs: "70 Passengers | 30 Knots | 4-Ton Payload",
      description:
        "A high-capacity light craft series built for efficient passenger transportation, with a cruising speed at full load of 23 knots.",
    },
    {
      image: "/assets/bour-4.jpeg",
      icon: Wind,
      type: "Surfer 2600 Series",
      name: "Surfer 2600 Series",
      specs: "50 Passengers | 30 Knots | 9-Ton Payload",
      description:
        "A versatile light craft series with a 26-knot cruising speed at full load and a 600m³ / 10-bar Fi-Fi pump and monitor.",
    },
    {
      image: "/assets/crew-boat-27.jpg",
      icon: Ship,
      type: "New Build Surfer 260X Series",
      name: "New Build Surfer 260X Series",
      specs: "50–70 Passengers | 32 Knots",
      description:
        "New-build crew boats designed to support efficient offshore passenger transportation with speed, reliability, and operational flexibility.",
    },
  ];

  return (
    <section
      id="fleet"
      className="py-24 bg-background relative overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 animate-fade-in">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Assets
          </p>
          <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
            Our Fleet
          </h2>
          <p className="md:col-span-4 text-muted-foreground leading-relaxed">
            A diverse fleet of modern vessels equipped to handle any offshore
            challenge with reliability and precision.
          </p>
        </div>

        {/* Fleet rows */}
        <div className="divide-y divide-border border-y border-border">
          {vessels.map((vessel, index) => (
            <div
              key={vessel.type}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center py-16 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative group w-full">
                <div className="relative overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={vessel.image}
                    alt={vessel.name}
                    className="w-full h-[400px] object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Type Badge */}
                  <div className="absolute top-0 left-0 bg-surface-strong px-4 py-2 flex items-center gap-2">
                    <vessel.icon className="w-4 h-4 text-surface-strong-foreground" />
                    <span className="text-xs tracking-[0.15em] uppercase font-medium text-surface-strong-foreground">
                      {vessel.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="font-serif text-3xl text-foreground mb-2">
                    {vessel.name}
                  </h3>
                  <p className="text-brand font-medium text-sm tracking-wide uppercase">
                    {vessel.specs}
                  </p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {vessel.description}
                </p>
                <Button variant="outline" size="lg" asChild>
                  <a href="/fleet">Explore Fleet Details</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
