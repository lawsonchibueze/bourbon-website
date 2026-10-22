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
    title: "Maritime Training Instructor",
    department: "Internal Maritime Training",
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
    department: "Crew Transportation",
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
        description="Develop your competence, strengthen your skills, and build a meaningful career in safe and reliable offshore marine operations."
      />

      {/* Job Opportunities */}
      <section id="jobs" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Open Roles
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Current Vacancies
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
                Working at Alpha
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
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <div className="relative overflow-hidden h-[420px]">
                <Image
                  width={1448}
                  height={1086}
                  src="/assets/marine-training-simulator.png"
                  alt="Marine personnel training in a bridge simulator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                  Bourbon Training Center
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                  Marine Training and Competence Development
                </h3>
                <p className="font-medium text-foreground">
                  Building Competence, Enhancing Safety, and Driving Operational Excellence
                </p>
                <p>
                  At <strong className="text-foreground">Bourbon Interoil Nigeria Limited (BINL)</strong>, we are committed to developing highly competent, safety-conscious, and performance-driven marine professionals capable of meeting the demanding requirements of the offshore marine industry. Our Marine Training programme is designed to enhance crew competence, strengthen operational reliability, and promote a culture of continuous learning and operational excellence.
                </p>
                <p>
                  Through a combination of practical deck and classroom training, simulator-based exercises, equipment familiarisation, and competency assessments, we equip our crew and personnel with the knowledge, technical skills, and confidence required to perform their duties safely and effectively in challenging offshore environments.
                </p>
              </div>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  Our Marine Training Capabilities
                </h3>
                <ul className="space-y-4">
                  <li><strong className="text-foreground">Type C IMO Bridge Simulator Training:</strong> We deliver practical and live bridge simulator exercises for newly recruited and serving Captains, focusing on vessel manoeuvring, navigational decision-making, emergency response, bridge team management, and operational readiness.</li>
                  <li><strong className="text-foreground">ECDIS Type-Specific Training:</strong> Our training includes familiarisation with the Furuno FMD-3200 Electronic Chart Display and Information System (ECDIS), supporting safe navigation, effective route planning, and the proper use of electronic navigation systems.</li>
                  <li><strong className="text-foreground">Garmin Navigation Equipment Training:</strong> We provide practical familiarisation with Garmin navigation equipment to strengthen users&apos; understanding of system functions and their effective application during vessel operations.</li>
                  <li><strong className="text-foreground">GPS Training:</strong> Our GPS training develops personnel competence in position fixing, waypoint management, route monitoring, and the effective use of satellite-based positioning systems.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Our Approach</h3>
                <p>
                  We believe that effective marine training goes beyond theoretical knowledge. Our approach combines structured instruction with practical exercises, scenario-based learning, equipment familiarisation, and competency evaluation. Training outcomes are reviewed to identify areas for improvement and ensure that learning translates into safer and more reliable onboard performance.
                </p>
              </div>

              <div>
                <p>
                  By aligning our training activities with operational requirements, applicable maritime standards, client expectations, and industry best practices, BINL continues to strengthen the competence of its marine workforce and support the delivery of dependable offshore marine services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Our Commitment</h3>
                <p>
                  At BINL, competence is a cornerstone of safe operations. We remain committed to investing in our people, improving technical capabilities, and promoting professional excellence to ensure that our personnel are prepared to meet operational challenges while protecting lives, assets, and the marine environment.
                </p>
              </div>

              <p className="font-serif text-xl text-foreground">
                Bourbon Interoil Nigeria Limited &mdash; Developing Competence. Promoting Safety. Delivering Operational Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
