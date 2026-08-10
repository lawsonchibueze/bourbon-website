import { ArrowRight, Calendar, Download, FileText } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "News & Media | Alpha",
  description:
    "Latest news, press releases, and media resources from Alpha's global marine services operations.",
};

const articles = [
  {
    image: "/assets/news-image.png",
    category: "People & Culture",
    date: "March 15, 2025",
    title: "Celebrating Excellence: Our Crew Members' Stories",
    excerpt:
      "Meet the dedicated professionals behind our success as we highlight their achievements and commitment to maritime excellence.",
  },
  {
    image: "/assets/bour-6.jpeg",
    category: "Operations",
    date: "March 10, 2025",
    title: "Expanding Our Presence in the Gulf of Mexico",
    excerpt:
      "New contract wins strengthen our position as the leading offshore service provider in key energy markets.",
  },
  {
    image: "/assets/bour-9.jpeg",
    category: "Innovation",
    date: "March 5, 2025",
    title: "Pioneering Subsea Technology for Deeper Waters",
    excerpt:
      "Investment in next-generation ROV systems enables operations at unprecedented depths with enhanced safety.",
  },
  {
    image: "/assets/bour-7.jpeg",
    category: "Sustainability",
    date: "February 20, 2025",
    title: "Alpha Adds Two Hybrid-Powered PSVs to the Fleet",
    excerpt:
      "New low-emission platform supply vessels mark another step toward a cleaner offshore support fleet.",
  },
  {
    image: "/assets/bour-4.jpeg",
    category: "Safety",
    date: "February 8, 2025",
    title: "Ten Million Hours Without a Lost-Time Incident",
    excerpt:
      "A fleet-wide safety milestone reflects the discipline and training of crews across every region we operate in.",
  },
  {
    image: "/assets/bour-2.jpeg",
    category: "Operations",
    date: "January 22, 2025",
    title: "New Long-Term Charter Agreement in the North Sea",
    excerpt:
      "A multi-year agreement extends our support of offshore wind and energy operators across the region.",
  },
];

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
    title: "Alpha Appoints New VP of Subsea Operations",
  },
  {
    date: "December 12, 2024",
    title: "Alpha Named Preferred Marine Contractor by Regional Operator",
  },
];

const mediaKitItems = [
  { label: "Brand & Logo Guidelines", type: "PDF" },
  { label: "Company Fact Sheet", type: "PDF" },
  { label: "Executive Bios & Headshots", type: "ZIP" },
  { label: "Fleet Photography Library", type: "ZIP" },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Newsroom"
        title="News & Media"
        description="Company news, press releases, and media resources from across the Alpha group."
      />

      {/* Latest News */}
      <section id="latest" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Newsroom
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Latest News
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {articles.map((article) => (
              <div
                key={article.title}
                className="group bg-background overflow-hidden"
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
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-brand transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {article.excerpt}
                  </p>
                  <Button size="sm" className="cursor-pointer">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Media Kit */}
      <section id="media-kit" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Resources
            </p>
            <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl text-foreground">
              Media Kit
            </h2>
            <p className="md:col-span-4 text-muted-foreground leading-relaxed">
              Logos, fact sheets, and imagery for journalists and media
              partners. For interview requests, reach the press office via
              our{" "}
              <a href="/contact" className="text-brand underline">
                contact page
              </a>
              .
            </p>
          </div>

          <div className="grid sm:grid-cols-2 border-t border-l border-border">
            {mediaKitItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 border-r border-b border-border p-6"
              >
                <span className="text-foreground">{item.label}</span>
                <span className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  <Download className="w-4 h-4" />
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
