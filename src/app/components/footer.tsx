import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Services: [
      "Marine & Logistics",
      "Subsea Operations",
      "Passenger Mobility",
      "Fleet Overview",
    ],
    Company: ["About Us", "Leadership", "Locations", "Careers"],
    Resources: ["News & Media", "Sustainability", "Safety", "Innovation"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
    ],
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center">
                <Image
                  width={160}
                  height={64}
                  src="/assets/logo.png"
                  alt="logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-navy-foreground/75 mb-6 leading-relaxed">
              Leading provider of marine services to the offshore oil and gas
              industry worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/bourbonoffshore/"
                className="w-9 h-9 border border-navy-foreground/25 hover:bg-navy-foreground/10 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-navy-foreground/25 hover:bg-navy-foreground/10 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/bourbonrbonoffshore/"
                className="w-9 h-9 border border-navy-foreground/25 hover:bg-navy-foreground/10 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-navy-foreground/25 hover:bg-navy-foreground/10 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-4 text-navy-foreground/60">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-navy-foreground/85 hover:text-navy-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-navy-foreground/15 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-navy-foreground/60 mt-1" />
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-1 text-navy-foreground/60">
                  Head Office
                </h4>
                <p className="text-navy-foreground/85 text-sm">
                  50, Rue de Forbin - CS 60703 -13235
                  <br />
                  Marseille Cedex 02 - France
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-navy-foreground/60 mt-1" />
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-1 text-navy-foreground/60">
                  Phone
                </h4>
                <p className="text-navy-foreground/85 text-sm">
                  +33 (0)4 91 13 08 00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-navy-foreground/60 mt-1" />
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-1 text-navy-foreground/60">
                  Email
                </h4>
                <p className="text-navy-foreground/85 text-sm">
                  contact@bourbon-offshore.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Bourbon. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-navy-foreground/60 hover:text-navy-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-navy-foreground/60 hover:text-navy-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-navy-foreground/60 hover:text-navy-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
