import { HeartPulse, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HseHighlights = () => {
  const highlights = [
    {
      icon: HeartPulse,
      title: "Health",
      description:
        "Comprehensive medical support and wellbeing programs for every crew member, on board and ashore.",
    },
    {
      icon: ShieldCheck,
      title: "Safety",
      description:
        "Zero-compromise safety standards, rigorous training, and a fleet-wide culture of incident prevention.",
    },
    {
      icon: Leaf,
      title: "Environment",
      description:
        "Investing in cleaner tonnage and responsible operations to reduce our impact on the marine environment.",
    },
  ];

  return (
    <section
      id="hse-highlights"
      className="py-24 bg-secondary/60 border-y border-border scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="grid md:grid-cols-12 gap-6 md:flex-1">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              HSE & Sustainability
            </p>
            <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl text-foreground">
              HSE Highlights
            </h2>
          </div>
          <Button variant="link" className="hidden md:flex text-foreground shrink-0" asChild>
            <a href="/hse">
              View Our HSE Standards
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-border">
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
              View Our HSE Standards
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HseHighlights;
