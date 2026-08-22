import { HeartPulse, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";

export const metadata: Metadata = {
  title: "HSE & Sustainability | Alpha",
  description:
    "Health, safety & environment standards, ISO-certified quality management, and environmental stewardship across Alpha's offshore operations.",
};

const hseAreas = [
  {
    icon: HeartPulse,
    title: "Health",
    description:
      "Comprehensive medical fitness screening, onboard health monitoring, and welfare programs designed around the realities of life at sea for every crew member.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Zero-compromise safety standards built on rigorous training, proactive risk assessment, and a reporting culture that puts every crew member's wellbeing first.",
  },
  {
    icon: Leaf,
    title: "Environment",
    description:
      "Responsible operations that minimize impact on the marine environments we work in, from spill prevention to emissions management across the fleet.",
  },
];

const sustainabilityStats = [
  { value: "28%", label: "Emissions reduction since 2015" },
  { value: "12", label: "Hybrid & low-emission vessels" },
  { value: "15%", label: "Fuel efficiency gains fleet-wide" },
  { value: "0", label: "Reportable spills, past 3 years" },
];

export default function HsePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="HSE & Sustainability"
        title="Health, Safety & Sustainability"
        description="Zero-compromise safety standards and a long-term commitment to responsible offshore operations."
      />

      {/* Health, Safety & Environment */}
      <section id="hse" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Our Standards
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Health, Safety &amp; Environment
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Every operation is guided by a single principle: everyone goes
              home safely, and the environments we work in are protected for
              the long term.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-border">
            {hseAreas.map((area, index) => (
              <div
                key={area.title}
                className="group p-8 border-r border-b border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-serif text-lg text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <area.icon className="w-6 h-6 text-brand mt-4 mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section
        id="quality"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Quality Management
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                ISO-certified, audited, and consistent
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Alpha operates under an ISO-certified quality management
                  system, with documented procedures and rigorous internal
                  auditing applied consistently across every vessel and every
                  region we work in.
                </p>
                <p>
                  From vendor qualification to voyage close-out, quality
                  control checkpoints are built into each stage of a project,
                  giving clients confidence that service delivery meets the
                  same exacting standard, wherever in the world it takes
                  place.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-[420px]">
              <Image
                width={1200}
                height={900}
                src="/assets/hse-quality.jpg"
                alt="Alpha vessel operating under certified quality standards"
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section id="environment" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="relative overflow-hidden h-[420px] order-2 lg:order-1">
              <Image
                width={1200}
                height={900}
                src="/assets/hse-environment.jpg"
                alt="Alpha vessel supporting environmental stewardship initiatives"
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Environmental Stewardship
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Investing in a cleaner offshore future
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are investing in hybrid and low-emission vessel
                  technology, optimized voyage planning, and fuel-efficiency
                  programs to reduce the environmental footprint of our fleet
                  without compromising the reliability our clients depend on.
                </p>
                <p>
                  Illustrative sustainability metrics shown below for site
                  design purposes only.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-surface-strong-foreground/15 border border-surface-strong-foreground/15 bg-surface-strong">
            {sustainabilityStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center py-10 px-4 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-serif text-4xl md:text-5xl text-surface-strong-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-surface-strong-foreground/70">
                  {stat.label}
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
