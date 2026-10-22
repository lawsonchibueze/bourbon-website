import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HseHighlights = () => {
  return (
    <section
      id="hse-highlights"
      className="py-24 bg-secondary/60 border-y border-border scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            QHSE
          </p>
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.08]">
              Protecting People. Preserving the Environment. Delivering Excellence.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              At Bourbon Interoil Nigeria Limited, Quality, Health, Safety and
              Environment are fundamental to how we operate and deliver marine
              logistics services. In an industry where the safe transportation
              of personnel offshore is critical, we are committed to
              preventing harm, protecting the environment, safeguarding our
              assets, and delivering reliable services that meet our clients’
              expectations.
            </p>
          </div>
          <div className="md:col-span-3 flex md:items-end md:justify-end">
            <Button variant="link" className="hidden md:flex text-foreground shrink-0" asChild>
              <a href="/hse">
                View Our QHSE Standards
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="default" className="w-full" asChild>
            <a href="/hse">
              View Our QHSE Standards
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HseHighlights;
