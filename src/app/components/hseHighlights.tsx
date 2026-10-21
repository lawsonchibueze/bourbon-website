import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./ui/button";

const HseHighlights = () => {
  const highlights = [
    {
      icon: CheckCircle2,
      title: "Quality",
      description:
        "Reliable operations, consistent service, and lasting client confidence through disciplined processes and continuous improvement.",
    },
    {
      icon: HeartPulse,
      title: "Health",
      description:
        "Protecting the health and wellbeing of employees, offshore passengers, contractors, and everyone affected by our operations.",
    },
    {
      icon: ShieldCheck,
      title: "Safety",
      description:
        "Preventing harm through effective operational controls, competent personnel, emergency preparedness, and safe behaviour.",
    },
    {
      icon: Leaf,
      title: "Environment",
      description:
        "Preventing pollution, managing environmental impacts responsibly, and continually improving the way we operate.",
    },
  ];

  return (
    <section
      id="hse-highlights"
      className="py-24 bg-secondary/60 border-y border-border scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            QHSE
          </p>
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.08]">
              Protecting People. Preserving the Environment. Delivering Excellence.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              At Bourbon Interoil Nigeria Limited, Quality, Health, Safety and
              Environment are fundamental to how we operate and deliver marine
              logistics services. In an industry where the safe transportation
              of personnel offshore is critical, we are committed to
              preventing harm, protecting the environment, safeguarding our
              assets, and delivering reliable services that meet our clients’
              expectations.
            </p>
          </div>
          <div className="md:col-span-3 flex md:items-end md:justify-end">
            <Button variant="link" className="hidden md:flex text-foreground shrink-0" asChild>
              <a href="/hse">
                View Our QHSE Standards
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="p-8 border-r border-b border-border bg-background"
            >
              <span className="font-serif text-lg text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <item.icon className="w-6 h-6 text-brand mt-4 mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="default" className="w-full" asChild>
            <a href="/hse">
              View Our QHSE Standards
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HseHighlights;
