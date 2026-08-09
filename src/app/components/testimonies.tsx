import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Bourbon's reliability and professionalism have been instrumental in our offshore operations. Their commitment to safety and on-time delivery is unmatched in the industry.",
      author: "Sarah Mitchell",
      role: "Operations Director",
      company: "Global Energy Corp",
      rating: 5,
    },
    {
      quote:
        "The technical expertise and innovative solutions provided by Bourbon have significantly improved our operational efficiency. They're truly partners in our success.",
      author: "James Chen",
      role: "Project Manager",
      company: "Offshore Solutions Ltd",
      rating: 5,
    },
    {
      quote:
        "Working with Bourbon has been exceptional. Their crew's professionalism and the quality of their vessels consistently exceed our expectations on every project.",
      author: "Maria Rodriguez",
      role: "Supply Chain Director",
      company: "Atlantic Energy Partners",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 animate-fade-in">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Testimonials
          </p>
          <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="md:col-span-4 text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it&mdash;hear what our clients
            have to say about their experience with Bourbon.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 border-t border-l border-border">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 border-r border-b border-border animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="font-serif text-5xl text-navy/20 leading-none">
                &ldquo;
              </span>

              {/* Rating */}
              <div className="flex gap-1 mb-4 -mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-navy text-navy" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-navy font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
