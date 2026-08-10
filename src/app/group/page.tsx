import { MapPin, User } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";

export const metadata: Metadata = {
  title: "Group | Alpha",
  description:
    "The Alpha story, leadership team, and global office locations supporting our offshore marine operations.",
};

const leadership = [
  { name: "Alex Moreau", role: "Chief Executive Officer" },
  { name: "Priya Nathan", role: "Chief Operating Officer" },
  { name: "Erik Lindqvist", role: "Chief Financial Officer" },
  { name: "Sofia Alvarenga", role: "Chief HSE Officer" },
  { name: "David Okoye", role: "VP, Fleet & Technical Operations" },
  { name: "Mei Lin Tan", role: "VP, Subsea Operations" },
];

const locations = [
  { city: "Marseille", country: "France", role: "Group Headquarters" },
  { city: "Houston", country: "United States", role: "Americas Region" },
  { city: "Aberdeen", country: "United Kingdom", role: "North Sea Region" },
  { city: "Singapore", country: "Singapore", role: "Asia-Pacific Region" },
  { city: "Rio de Janeiro", country: "Brazil", role: "South America Region" },
  { city: "Lagos", country: "Nigeria", role: "West Africa Region" },
];

export default function GroupPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="The Group"
        title="About Alpha"
        description="A global marine services group built on four decades of offshore expertise."
      />

      {/* About */}
      <section id="about" className="py-24 scroll-mt-20">
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
                  and passenger mobility for the world&apos;s leading energy
                  operators. We continue to invest in newer, cleaner tonnage
                  and in the people who keep it running.
                </p>
              </div>
            </div>
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

      {/* Locations */}
      <section id="locations" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Global Presence
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Our Locations
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Regional offices supporting operations across every major
              offshore basin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {locations.map((location) => (
              <div
                key={location.city}
                className="border-r border-b border-border p-8"
              >
                <MapPin className="w-5 h-5 text-brand mb-4" />
                <p className="font-serif text-xl text-foreground mb-1">
                  {location.city}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {location.country}
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-brand font-medium">
                  {location.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
