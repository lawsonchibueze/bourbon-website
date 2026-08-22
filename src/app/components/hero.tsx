import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-ocean.jpg"
          alt="Offshore support vessel at sea"
          fill
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-strong via-surface-strong/50 to-surface-strong/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl animate-fade-in">
            <p className="text-sm tracking-[0.2em] uppercase text-surface-strong-foreground/70 mb-6 border-l-2 border-brand pl-4">
              Alpha &mdash; Marine &amp; Offshore Services
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-surface-strong-foreground mb-6 leading-[1.05]">
              &quot;Crew stories&quot;: the podcast that gives a voice to our
              seafarers
            </h1>

            {/* Description */}
            <p className="text-lg text-surface-strong-foreground/85 mb-10 max-w-2xl leading-relaxed">
              Discover the untold stories of the men and women who navigate the
              world&lsquo;s oceans, delivering essential services to offshore
              energy operations.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="text-sm px-8 py-6 h-auto bg-surface-strong-foreground text-surface-strong hover:bg-surface-strong-foreground/90"
                asChild
              >
                <a href="/services">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
