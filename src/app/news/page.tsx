import { CalendarDays } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import EventGallery from "../components/event-gallery";

export const metadata: Metadata = {
  title: "News & Media | Alpha",
  description:
    "Upcoming events and a photo gallery from Alpha's global marine services operations.",
};

const crewSeminarImages = Array.from(
  { length: 11 },
  (_, index) => `/assets/events/crew-seminar-${String(index + 1).padStart(2, "0")}.jpg`,
);

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
        description="Events and a photo gallery from across the Alpha group."
      />

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
              Crew Seminar hosted at our Operations Office in Port Harcourt.
            </p>
          </div>

          <div className="border-t border-border pt-10">
            <div className="flex items-start gap-4 mb-8">
              <CalendarDays className="w-5 h-5 text-brand mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                  Crew Seminar
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Amadi Base, NLNG Road, Port Harcourt
                </p>
              </div>
            </div>

            <EventGallery images={crewSeminarImages} eventName="Crew Seminar" />
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
