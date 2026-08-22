import ServiceCard from "./serviceCard";

const Services = () => {
  const services = [
    {
      image: "/assets/marine-logistics.jpg",
      title: "Marine Logistics",
      description:
        "Comprehensive offshore support vessel services including supply, anchor handling, and platform support for the global energy industry.",
      link: "/services#marine",
    },
    {
      image: "/assets/passenger-mobility.jpg",
      title: "Crew Transportation",
      description:
        "Safe and efficient crew transfer services connecting offshore installations with onshore facilities across the globe.",
      link: "/services#crew",
    },
    {
      image: "/assets/maritime-training.jpg",
      title: "Internal Maritime Training",
      description:
        "STCW-aligned safety training, simulator-based instruction, and cadet-to-officer development pathways for our maritime workforce.",
      link: "/services#training",
    },
    {
      image: "/assets/subsea-operations.jpg",
      title: "Subsea Operations",
      description:
        "Advanced subsea construction, inspection, and maintenance services utilizing state-of-the-art ROVs and specialized equipment.",
      link: "/services#subsea",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6 mb-16 animate-fade-in">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Capabilities
          </p>
          <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl text-foreground">
            Our Services
          </h2>
          <p className="md:col-span-3 text-muted-foreground leading-relaxed">
            Delivering excellence in offshore marine services with safety,
            innovation, and reliability at our core.
          </p>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
