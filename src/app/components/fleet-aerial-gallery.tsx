import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const aerialViews = [
  {
    src: "/assets/fleet-aerial-0313.webp",
    alt: "Aerial view of Alpha Interoil vessels moored along the harbor",
    label: "Fleet overview",
  },
  {
    src: "/assets/fleet-aerial-0337.webp",
    alt: "Panoramic aerial view of the harbor base and vessels",
    label: "Harbor base",
  },
  {
    src: "/assets/fleet-aerial-0321.webp",
    alt: "Offshore support vessels seen from above at the dock",
    label: "Vessels at the dock",
  },
];

const FleetAerialGallery = () => {
  const [leadImage, ...supportingImages] = aerialViews;

  return (
    <section
      id="fleet-aerial"
      aria-labelledby="fleet-aerial-heading"
      className="overflow-hidden border-b border-border bg-background py-20 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Our Fleet · Aerial Views
            </p>
            <h2
              id="fleet-aerial-heading"
              className="font-serif text-4xl text-foreground md:text-5xl"
            >
              A wider view of our fleet
            </h2>
          </div>
          <div className="flex items-end justify-between gap-5 md:col-span-5 md:justify-end">
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              Aerial views of Alpha Interoil&apos;s vessels and harbor base.
            </p>
            <a
              href="/fleet"
              className="inline-flex shrink-0 items-center gap-1 border-b border-brand pb-1 text-sm font-medium text-brand transition-colors hover:text-foreground"
            >
              Explore fleet <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:h-[360px] lg:grid-cols-12 lg:grid-rows-2">
          <figure className="group relative aspect-[1.9/1] overflow-hidden bg-secondary sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:aspect-auto">
            <Image
              src={leadImage.src}
              alt={leadImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-[center_68%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 flex items-end justify-between p-5 text-white md:p-7">
              <span className="text-xs tracking-[0.18em] uppercase text-white/85">
                01 <span className="mx-2 text-white/50">/</span> {leadImage.label}
              </span>
              <span className="hidden font-serif text-2xl md:block">At a glance</span>
            </figcaption>
          </figure>

          {supportingImages.map((image, index) => (
            <figure
              key={image.src}
              className="group relative aspect-[1.9/1] overflow-hidden bg-secondary lg:col-span-5 lg:aspect-auto"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_68%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-4 text-xs tracking-[0.16em] uppercase text-white md:p-5">
                0{index + 2} <span className="mx-2 text-white/55">/</span> {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetAerialGallery;
