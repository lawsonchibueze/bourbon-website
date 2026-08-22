import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "News & Media | Alpha",
  description:
    "Press releases, upcoming events, and a photo gallery from Alpha's global marine services operations.",
};

const pressReleases = [
  {
    date: "March 18, 2025",
    title: "Alpha Reports Full-Year Consolidated Revenues of €733M",
  },
  {
    date: "February 27, 2025",
    title: "Alpha Signs Framework Agreement for Offshore Wind Support",
  },
  {
    date: "January 30, 2025",
    title: "Alpha Appoints New VP of Crew Transportation",
  },
  {
    date: "December 12, 2024",
    title: "Alpha Named Preferred Marine Contractor by Regional Operator",
  },
];

const events = [
  {
    date: "September 9-11, 2026",
    title: "Offshore Safety Summit — Aberdeen",
  },
  {
    date: "October 6, 2026",
    title: "Alpha Fleet Open Day — Marseille Terminal",
  },
  {
    date: "November 3-5, 2026",
    title: "Global Marine Logistics Conference — Singapore",
  },
  {
    date: "December 1, 2026",
    title: "Training Academy Graduation — Class of 2026",
  },
  {
    date: "January 20, 2027",
    title: "Maritime Training & Safety Forum — Houston",
  },
];

const galleryImages = [
  "/assets/bour-1.jpeg",
  "/assets/bour-2.jpeg",
  "/assets/bour-3.jpeg",
  "/assets/bour-4.jpeg",
  "/assets/bour-5.jpeg",
  "/assets/bour-6.jpeg",
  "/assets/bour-7.jpeg",
  "/assets/bour-8.jpeg",
  "/assets/bour-9.jpeg",
  "/assets/bour-10.jpeg",
];

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Newsroom"
        title="News & Media"
        description="Press releases, events, and a photo gallery from across the Alpha group."
      />

      {/* Press Releases */}
      <section
        id="press"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Official
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Press Releases
            </h2>
          </div>

          <div className="border-t border-border">
            {pressReleases.map((release) => (
              <div
                key={release.title}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border py-6"
              >
                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-brand mt-1 shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                      {release.date}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-brand transition-colors">
                      {release.title}
                    </p>
                  </div>
                </div>
                <Button variant="link" className="px-0 md:px-4 text-foreground shrink-0">
                  Read Release
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Calendar
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Events
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Illustrative events shown for site design purposes only &mdash;
              our calendar is updated regularly with industry summits,
              conferences, and fleet activities.
            </p>
          </div>

          <div className="border-t border-border">
            {events.map((event) => (
              <div
                key={event.title}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border py-6"
              >
                <div className="flex items-start gap-4">
                  <CalendarDays className="w-5 h-5 text-brand mt-1 shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                      {event.date}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-brand transition-colors">
                      {event.title}
                    </p>
                  </div>
                </div>
                <Button variant="link" className="px-0 md:px-4 text-foreground shrink-0">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        id="gallery"
        className="py-24 scroll-mt-20 bg-secondary/60 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Gallery
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Photo Gallery
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              A look at our fleet and crews at work across the world&apos;s
              offshore energy markets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  fill
                  src={image}
                  alt={`Alpha fleet and crew photo ${index + 1}`}
                  className="object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
