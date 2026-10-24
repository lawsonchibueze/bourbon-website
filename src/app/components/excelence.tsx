import { Shield, Scale, Leaf, Users } from "lucide-react";

const Excellence = () => {
  const features = [
    {
      icon: Shield,
      title: "Ensure Safety for All",
      description:
        "We put the safety of our people, clients, and operations at the centre of everything we do.",
    },
    {
      icon: Scale,
      title: "Act with Ethics",
      description:
        "We act with integrity and remain compliant with our code of conduct and applicable laws and regulations.",
    },
    {
      icon: Leaf,
      title: "Reduce Our Environmental Impact",
      description:
        "We work responsibly to reduce the environmental impact of our marine operations.",
    },
    {
      icon: Users,
      title: "Trust in People and Develop Talents",
      description:
        "We invest in people and develop the talent needed to build a strong Nigerian maritime workforce.",
    },
  ];

  return (
    <section
      id="excellence"
      className="py-24 bg-secondary/60 border-y border-border scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 animate-fade-in">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Why Alpha
          </p>
          <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
            Why Choose Alpha
          </h2>
          <p className="md:col-span-4 text-muted-foreground leading-relaxed">
            Leading the offshore marine industry with unwavering commitment to
            excellence, safety, and innovation.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 border-r border-b border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-serif text-lg text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <feature.icon className="w-6 h-6 text-brand mt-4 mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
