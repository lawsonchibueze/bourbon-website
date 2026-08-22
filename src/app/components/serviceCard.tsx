import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard = ({ image, title, description, link, index }: ServiceCardProps) => {
  return (
    <div className="group grid md:grid-cols-12 gap-6 md:gap-10 items-center border-t border-border py-10 first:border-t-0 md:first:border-t md:first:pt-0">
      <div className="md:col-span-1">
        <span className="font-serif text-2xl text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="md:col-span-4 relative h-56 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="md:col-span-7 space-y-4">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>
        <Button variant="link" className="px-0 text-foreground" asChild>
          <a href={link}>
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
