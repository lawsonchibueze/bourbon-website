import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const News = () => {
  const articles = [
    {
      image: "/assets/events/crew-seminar-11.jpg",
      category: "Crew Seminar",
      date: "Amadi Base, NLNG Road, Port Harcourt",
      title: "Crew Seminar",
      excerpt:
        "A gathering focused on our crew, operational excellence, and the people who keep our marine services moving.",
      featured: true,
    },
    {
      image: "/assets/events/crew-seminar-02.jpg",
      category: "People & Culture",
      date: "Crew Seminar",
      title: "Building Capability Together",
      excerpt:
        "Highlights from the Crew Seminar and the continuing development of our Nigerian maritime workforce.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/60 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 animate-fade-in">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Newsroom
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Latest Event
            </h2>
          </div>
          <Button variant="link" className="hidden md:flex text-foreground" asChild>
            <a href="/news#events">
              View Event Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
          {/* Featured Article */}
          <div className="lg:row-span-2 group animate-fade-in bg-background">
            <div className="relative h-full overflow-hidden">
              <div className="relative h-[400px] lg:h-full overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-strong via-surface-strong/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-surface-strong-foreground">
                  <div className="flex items-center gap-4 mb-4 text-xs tracking-[0.15em] uppercase">
                    <span>{articles[0].category}</span>
                    <span className="flex items-center text-surface-strong-foreground/80">
                      {articles[0].date}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl mb-3">
                    {articles[0].title}
                  </h3>
                  <p className="text-surface-strong-foreground/85 mb-4 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <Button
                    size="sm"
                    className="bg-surface-strong-foreground text-surface-strong hover:bg-surface-strong-foreground/90 cursor-pointer"
                    asChild
                  >
                    <a href="/news#events">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Articles */}
          {articles.slice(1).map((article, index) => (
            <div
              key={article.title}
              className="group bg-background overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  <span className="text-brand font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-brand transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                <Button size="sm" className="cursor-pointer" asChild>
                  <a href="/news#events">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="default" className="w-full" asChild>
            <a href="/news">
              View Event Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
