import { Anchor, Ship, Wind } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Fleet = () => {
  const vessels = [
    {
      image: "/assets/bour-10.jpeg",
      icon: Anchor,
      type: "AHTS",
      name: "Anchor Handling Tug Supply",
      specs: "15,000+ BHP | 200+ Vessels",
      description:
        "Powerful vessels designed for anchor handling, towing operations, and platform positioning in the most demanding offshore environments.",
    },
    {
      image: "/assets/bour-8.jpeg",
      icon: Ship,
      type: "PSV",
      name: "Platform Supply Vessels",
      specs: "4,000+ DWT | 150+ Vessels",
      description:
        "Reliable supply chain solutions delivering cargo, equipment, and materials to offshore platforms with precision and efficiency.",
    },
    {
      image: "/assets/bour-4.jpeg",
      icon: Wind,
      type: "Wind Farm",
      name: "Renewable Energy Support",
      specs: "SOV & CTV | 50+ Vessels",
      description:
        "Specialized vessels supporting the renewable energy sector with crew transfer and service operation capabilities for offshore wind farms.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
                <Button variant="outline" size="lg">
                  Explore Fleet Details
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
