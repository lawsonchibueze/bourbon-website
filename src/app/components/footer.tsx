import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import AlphaMark from "./alpha-mark";

const Footer = () => {
  const footerLinks = {
    Services: [
      { label: "Marine Logistics", href: "/services#marine" },
      { label: "Crew Transportation", href: "/services#crew" },
      { label: "Training & Development", href: "/services#training" },
    ],
    Company: [
      { label: "Company Profile", href: "/about#profile" },
      { label: "Vision, Mission & Values", href: "/about#values" },
      { label: "Careers", href: "/careers" },
    ],
    Resources: [
      { label: "Fleet & Assets", href: "/fleet" },
      { label: "HSE & Sustainability", href: "/hse" },
      { label: "News & Media", href: "/news" },
      { label: "Photo Gallery", href: "/news#gallery" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  };

  return (
    <footer className="bg-surface-strong text-surface-strong-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="flex items-center gap-2">
                <AlphaMark variant="inverted" className="text-4xl" />
                <span className="font-serif text-2xl tracking-wide">
                  ALPHA
                </span>
              </Link>
            </div>
            <p className="text-surface-strong-foreground/75 mb-6 leading-relaxed">
              Leading provider of marine services to the offshore oil and gas
              industry worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-surface-strong-foreground/25 hover:bg-surface-strong-foreground/10 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-surface-strong-foreground/25 hover:bg-surface-strong-foreground/10 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-surface-strong-foreground/25 hover:bg-surface-strong-foreground/10 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-surface-strong-foreground/25 hover:bg-surface-strong-foreground/10 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-4 text-surface-strong-foreground/60">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-surface-strong-foreground/85 hover:text-surface-strong-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-surface-strong-foreground/15 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-surface-strong-foreground/60 mt-1" />
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-1 text-surface-strong-foreground/60">
                  Head Office
                </h4>
                <p className="text-surface-strong-foreground/85 text-sm">
                  16C Lugard Avenue, Ikoyi, Lagos
                  <br />
                  <span className="text-surface-strong-foreground/60">
                    Operations Office:
                  </span>{" "}
                  Amadi Base, NLNG Road, Port Harcourt
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-surface-strong-foreground/60 mt-1" />
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-1 text-surface-strong-foreground/60">
                  Contact
                </h4>
                <p className="text-surface-strong-foreground/85 text-sm">
                  Mobile: +234 8150893453
                  <br />
                  +234 9169827730
                  <br />
                  IP Phone (DID): 02013301335
                  <br />
                  Ext: 23493
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-surface-strong-foreground/60 mt-1" />
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-1 text-surface-strong-foreground/60">
                  Email
                </h4>
                <p className="text-surface-strong-foreground/85 text-sm">
                  Unyimeabasi.nelsonjames@bourbon-interoil.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-strong-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-strong-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Alpha. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-surface-strong-foreground/60 hover:text-surface-strong-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-surface-strong-foreground/60 hover:text-surface-strong-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-surface-strong-foreground/60 hover:text-surface-strong-foreground transition-colors"
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
