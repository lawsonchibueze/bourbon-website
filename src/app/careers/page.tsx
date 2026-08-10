import { Award, GraduationCap, Shield } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "Careers | Alpha",
  description:
    "Open roles, life at sea, and training & development opportunities with Alpha's global marine services team.",
};

const openRoles = [
  {
    title: "Able Seaman",
    department: "Deck Department",
    location: "Marseille, France",
    type: "Full-time",
  },
  {
    title: "ROV Pilot Technician",
    department: "Subsea Operations",
    location: "Aberdeen, UK",
    type: "Full-time",
  },
  {
    title: "Chief Engineer",
    department: "Marine Engineering",
    location: "Singapore",
    type: "Full-time",
  },
  {
    title: "HSE Officer",
    department: "Health, Safety & Environment",
    location: "Houston, US",
    type: "Full-time",
  },
  {
    title: "Crew Transfer Vessel Master",
    department: "Passenger Mobility",
    location: "Esbjerg, Denmark",
    type: "Contract",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Careers"
        title="Build Your Career at Sea"
        description="Join a global team of mariners, engineers, and offshore specialists keeping the world's energy industry moving."
      />

      {/* Job Opportunities */}
      <section id="jobs" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Open Roles
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Job Opportunities
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Illustrative openings shown for site design purposes &mdash;
              current vacancies are updated regularly.
            </p>
          </div>

          <div className="border-t border-border">
            {openRoles.map((role, index) => (
              <div
                key={role.title}
                className="grid md:grid-cols-12 gap-4 md:gap-6 items-center border-b border-border py-6"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-lg text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <p className="font-medium text-foreground">{role.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {role.department}
                  </p>
                </div>
                <div className="md:col-span-3 text-sm text-muted-foreground">
                  {role.location}
                </div>
                <div className="md:col-span-2 text-xs tracking-[0.15em] uppercase text-brand font-medium">
                  {role.type}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <Button asChild variant="outline" size="sm">
                    <a href="/contact">Apply</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Sea */}
      <section
        id="life-at-sea"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Life at Sea
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                A career unlike any other
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Life aboard an Alpha vessel means working alongside a tight
                  crew, tackling real challenges, and seeing the world along
                  the way. Rotations balance time offshore with meaningful
                  time at home, and every vessel is built around the comfort
                  and wellbeing of the people who live and work there.
                </p>
                <p>
                  From the bridge to the engine room, our crews take pride in
                  the vessels they run and the standards they hold each other
                  to.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden h-64">
                <Image
                  width={800}
                  height={800}
                  src="/assets/bour-5.jpeg"
                  alt="Crew at work aboard an Alpha vessel"
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
              <div className="relative overflow-hidden h-64 mt-8">
                <Image
                  width={800}
                  height={800}
                  src="/assets/crew-teamwork.jpg"
                  alt="Alpha crew teamwork"
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Development
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Training &amp; Development
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              We invest in our people at every stage, from cadet to captain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-border">
            <div className="border-r border-b border-border p-8">
              <Shield className="w-6 h-6 text-brand mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Safety Certification
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ongoing STCW-aligned safety and survival training for every
                crew member, refreshed on a regular cycle.
              </p>
            </div>
            <div className="border-r border-b border-border p-8">
              <GraduationCap className="w-6 h-6 text-brand mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Cadet &amp; Apprenticeship Programs
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structured pathways from entry-level cadet through to
                certified officer and engineering roles.
              </p>
            </div>
            <div className="border-r border-b border-border p-8">
              <Award className="w-6 h-6 text-brand mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Leadership Development
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Management and technical leadership programs preparing senior
                crew for shore-based and command roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
