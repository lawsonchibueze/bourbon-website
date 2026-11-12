import ServiceCard from "./serviceCard";

const Services = () => {
  const services = [
    {
      image: "/assets/passenger-mobility.jpg",
      title: "Passenger Transportation",
      description:
        "Safe and efficient transport of personnel for daily offshore tasks through regular schedules and pre-defined routes.",
      link: "/services#crew",
    },
    {
      image: "/assets/marine-training-simulator.png",
      title: "Training & Development",
      description:
        "Training and competence development that builds a skilled Nigerian maritime workforce and supports safe, reliable operations.",
      link: "/services#training",
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
