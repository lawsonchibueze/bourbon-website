import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const CompanyOverview = () => {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative overflow-hidden h-[420px]">
            <Image
              width={1200}
              height={900}
              src="/assets/bour-1.jpeg"
              alt="Alpha vessel at sea"
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Four decades of offshore expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bourbon Interoil Nigeria Limited (BINL) is a leading marine
              services and logistics provider incorporated in Nigeria in 2004.
              We support the oil and gas industry with safe, reliable, and
              efficient offshore solutions while maintaining world-class
              operational standards.
            </p>
            <Button variant="link" className="px-0 text-foreground" asChild>
              <a href="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
