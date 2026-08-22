import { Compass, ShieldCheck, Target, Users, User } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";

export const metadata: Metadata = {
  title: "About Us | Alpha",
  description:
    "The Alpha story, company history, vision & values, and leadership team behind four decades of offshore marine expertise.",
};

const milestones = [
  {
    year: "1986",
    title: "Company Founded",
    description:
      "Alpha begins operations as a single regional operator supporting offshore energy activity along the Mediterranean coast.",
  },
  {
    year: "1994",
    title: "First Fleet Expansion",
    description:
      "Acquisition of additional offshore support vessels marks the beginning of a modern, multi-vessel fleet.",
  },
  {
    year: "2001",
    title: "North Sea Entry",
    description:
      "Alpha establishes a regional base in Aberdeen, extending operations into the North Sea's demanding offshore environment.",
  },
  {
    year: "2008",
    title: "ISO Certification",
    description:
      "Achieves ISO 9001 and ISO 14001 certification, formalising the group's commitment to quality and environmental management.",
  },
  {
    year: "2013",
    title: "Asia-Pacific Expansion",
    description:
      "Opening of the Singapore office brings Alpha's marine services to the Asia-Pacific offshore market.",
  },
  {
    year: "2019",
    title: "Subsea Division Launched",
    description:
      "A dedicated subsea construction and inspection division is established, broadening the group's technical capability.",
  },
  {
    year: "2023",
    title: "Low-Emission Newbuilds",
    description:
      "Delivery of next-generation, low-emission vessels begins as part of Alpha's ongoing fleet renewal programme.",
  },
  {
    year: "2025",
    title: "Global Reach",
    description:
      "Alpha vessels and crews now operate across more than 37 countries, spanning every major offshore basin.",
  },
];

const values = [
  {
    icon: Compass,
    title: "Our Vision",
    description:
      "To be the world's most trusted partner in offshore marine services, setting the standard for safety, innovation, and environmental responsibility across every basin we operate in.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver reliable, high-performance marine support to the offshore energy industry — protecting our people, our clients' operations, and the marine environments we work in every day.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Integrity",
    description:
      "We hold ourselves to the highest standards of safety and ethical conduct, with zero compromise on the wellbeing of our crews and the integrity of our operations.",
  },
  {
    icon: Users,
    title: "Collaboration & Excellence",
    description:
      "We work as one team with our clients and partners, pursuing operational excellence and continuous improvement in everything we do.",
  },
];

const leadership = [
  { name: "Alex Moreau", role: "Chief Executive Officer" },
  { name: "Priya Nathan", role: "Chief Operating Officer" },
  { name: "Erik Lindqvist", role: "Chief Financial Officer" },
  { name: "Sofia Alvarenga", role: "Chief HSE Officer" },
  { name: "David Okoye", role: "VP, Fleet & Technical Operations" },
  { name: "Mei Lin Tan", role: "VP, Subsea Operations" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="About Us"
        title="About Alpha"
        description="A global marine services group built on four decades of offshore expertise."
      />

      {/* Company Profile */}
      <section id="profile" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <Image
                width={1200}
                height={900}
                src="/assets/crew-teamwork.jpg"
                alt="Alpha crew working together"
                className="w-full h-[420px] object-cover grayscale-[10%]"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Four decades of offshore expertise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 40 years, Alpha has supported the offshore energy
                  industry with a modern fleet, deep technical expertise, and
                  an unwavering commitment to safety. What began as a single
                  regional operator has grown into a global marine services
                  group spanning every major offshore basin.
                </p>
                <p>
                  Today, our vessels and crews operate across more than 37
                  countries, supporting marine logistics, subsea construction,
                  and crew transportation for the world&apos;s leading energy
                  operators. We continue to invest in newer, cleaner tonnage
                  and in the people who keep it running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section
        id="history"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Our History
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Four Decades of Milestones
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Illustrative timeline shown for site design purposes only.
            </p>
          </div>

          <div className="border-t border-border">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="grid md:grid-cols-12 gap-4 md:gap-6 items-start border-b border-border py-6"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-lg text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <p className="font-serif text-xl text-foreground">
                    {milestone.year}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="font-medium text-foreground">
                    {milestone.title}
                  </p>
                </div>
                <div className="md:col-span-6 text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section id="values" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              What Drives Us
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Vision, Mission &amp; Values
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              The principles that guide every operation, every vessel, and
              every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-8 border-r border-b border-border"
              >
                <span className="font-serif text-lg text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <value.icon className="w-6 h-6 text-brand mt-4 mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Leadership
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Executive Team
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Placeholder leadership profiles &mdash; illustrative names and
              roles for site design purposes only.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="border-r border-b border-border p-8 flex items-center gap-4 bg-background"
              >
                <div className="w-16 h-16 shrink-0 border border-border bg-muted flex items-center justify-center">
                  <User className="w-7 h-7 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{leader.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {leader.role}
                  </p>
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
