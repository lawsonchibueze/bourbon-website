import { Compass, ShieldCheck, Target, Users } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";

export const metadata: Metadata = {
  title: "About Us | Alpha",
  description:
    "The Bourbon Interoil Nigeria Limited story, history, vision, mission, values, and commitments in Nigeria's offshore marine sector.",
};

const coreValues = [
  {
    icon: Compass,
    title: "Ambition",
    description: "We pursue progress and sustainable growth in everything we do.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "We work together with trust, respect, and shared responsibility.",
  },
  {
    icon: ShieldCheck,
    title: "High Standards",
    description: "We are committed to quality, professionalism, and operational excellence.",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "Ensure safety for all",
  },
  {
    icon: Target,
    title: "Act with ethics being compliant",
  },
  {
    icon: Compass,
    title: "Reduce our impact on environment",
  },
  {
    icon: Users,
    title: "Trust in people and develop talents",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="About Us"
        title="About Alpha"
        description="Bourbon Interoil Nigeria Limited — a trusted marine services and logistics provider supporting Nigeria's offshore energy industry."
      />

      {/* Company Profile */}
      <section id="profile" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <Image
                width={1200}
                height={900}
                src="/assets/about-company.jpg"
                alt="Bourbon Interoil Nigeria Limited crew aboard a vessel"
                className="w-full h-[420px] object-cover grayscale-[10%]"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Bourbon Interoil Nigeria Limited
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bourbon Interoil Nigeria Limited (BINL) is a leading marine
                  services and logistics provider incorporated in Nigeria in
                  2004. We support the oil and gas industry with safe,
                  reliable, and efficient offshore solutions while maintaining
                  world-class operational standards.
                </p>
                <p>
                  Committed to Nigeria&apos;s local content development objectives,
                  we invest in the training and development of Nigerian talent,
                  the in-country construction of aluminium-hull vessels, and
                  the engagement of local suppliers and service providers.
                  Through these initiatives, we continue to create sustainable
                  value for our clients, employees, and the Nigerian economy.
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
              Our Growth and Evolution
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              More than two decades of operational experience, local capacity
              building, and sustainable growth in Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-10">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Over the years, BINL expanded its operational footprint,
                developed a fleet of Nigerian-crewed vessels, and invested
                significantly in local capacity building, becoming a key
                contributor to Nigeria&apos;s maritime and offshore sectors.
              </p>
              <p>
                Following the global restructuring of the Bourbon Group in
                2020, BINL underwent strategic ownership and organizational
                changes. In 2022, the Company&apos;s shareholding structure was
                reconfigured to include Bourbon Mobility SAS, Evare Marine
                Services Limited, and local management interests.
              </p>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A significant milestone was reached in 2025 when Bourbon
                Mobility SAS initiated the divestment of its 40% stake in BINL
                to Global Streams Marine Limited (GSML), marking the beginning
                of a new chapter in the Company&apos;s evolution while ensuring
                continuity of operations and long-term growth in Nigeria.
              </p>
              <p>
                Today, BINL remains a trusted offshore logistics partner,
                leveraging over two decades of operational experience, a
                skilled Nigerian workforce, and a strong commitment to safety,
                operational excellence, and sustainable value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section id="values" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Our Direction
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Vision, Mission &amp; Values
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              The principles and commitments that guide BINL&apos;s operations
              and relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="border-t border-border pt-8">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Our Vision
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Committed to supporting offshore energies development as a
                reference partner, building sustainable and innovative
                maritime solutions.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Our Mission
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Develop a sustainable relationship with all stakeholders based
                on trust and the quality of our services to provide safe,
                reliable and cost-effective solutions in accordance with our
                code of conduct and all applicable laws and regulations.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Our Core Values
              </p>
              <div className="border-t border-border">
                {coreValues.map((value, index) => (
                  <div
                    key={value.title}
                    className="group grid grid-cols-[2rem_2.5rem_1fr] gap-4 items-start border-b border-border py-7"
                  >
                    <span className="font-serif text-lg text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Our Commitments
              </p>
              <div className="border-t border-border">
                {commitments.map((commitment, index) => (
                  <div
                    key={commitment.title}
                    className="group grid grid-cols-[2rem_2.5rem_1fr] gap-4 items-center border-b border-border py-7"
                  >
                    <span className="font-serif text-lg text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                      <commitment.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">
                      {commitment.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
