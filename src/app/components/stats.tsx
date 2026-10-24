import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Stats = () => {
  return (
    <section className="py-20 bg-surface-strong">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center border-y border-surface-strong-foreground/15 py-12">
          <div className="lg:col-span-5">
            <p className="text-sm tracking-[0.2em] uppercase text-surface-strong-foreground/70 mb-4">
              Our Fleet
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-surface-strong-foreground">
              Built for dependable offshore operations
            </h2>
            <p className="mt-5 text-surface-strong-foreground/75 leading-relaxed">
              Our 34-vessel fleet supports safe and reliable marine logistics,
              passenger transportation, and offshore operations.
            </p>
            <Button
              variant="link"
              className="mt-5 px-0 text-surface-strong-foreground"
              asChild
            >
              <a href="/fleet">
                Explore Our Fleet
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-surface-strong-foreground/15 border border-surface-strong-foreground/15">
            <div className="sm:row-span-2 bg-surface-strong py-8 px-6 md:px-10 flex flex-col justify-center">
              <div className="font-serif text-7xl md:text-8xl text-surface-strong-foreground leading-none">
                34
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase text-surface-strong-foreground/70">
                Vessels in our fleet
              </div>
            </div>
            <div className="bg-surface-strong py-6 px-6 text-surface-strong-foreground">
              <p className="text-xs tracking-[0.15em] uppercase text-surface-strong-foreground/60">
                Fleet series
              </p>
              <p className="mt-2 font-serif text-xl">Surfer 1800 &amp; 25</p>
            </div>
            <div className="bg-surface-strong py-6 px-6 text-surface-strong-foreground">
              <p className="text-xs tracking-[0.15em] uppercase text-surface-strong-foreground/60">
                Fleet series
              </p>
              <p className="mt-2 font-serif text-xl">Surfer 2600 &amp; 260X</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
