"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import AlphaMark from "./alpha-mark";
import ThemeToggle from "./theme-toggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Services",
      href: "/services",
      items: [
        { label: "Marine & Logistics", href: "/services#marine" },
        { label: "Subsea Operations", href: "/services#subsea" },
        { label: "Passenger Mobility", href: "/services#passenger" },
      ],
    },
    {
      label: "Group",
      href: "/group",
      items: [
        { label: "About Us", href: "/group#about" },
        { label: "Leadership", href: "/group#leadership" },
        { label: "Locations", href: "/group#locations" },
      ],
    },
    {
      label: "Careers",
      href: "/careers",
      items: [
        { label: "Job Opportunities", href: "/careers#jobs" },
        { label: "Life at Sea", href: "/careers#life-at-sea" },
        { label: "Training", href: "/careers#training" },
      ],
    },
    {
      label: "News & Media",
      href: "/news",
      items: [
        { label: "Latest News", href: "/news#latest" },
        { label: "Press Releases", href: "/news#press" },
        { label: "Media Kit", href: "/news#media-kit" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <AlphaMark className="text-3xl" />
            <span className="font-serif text-xl tracking-wide text-foreground">
              ALPHA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors font-medium"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
                </Link>
                <div className="absolute top-full left-0 mt-3 w-60 bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted border-b border-border last:border-b-0 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button size="lg" asChild>
              <Link href="/contact">CONTACT</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-6 border-t border-border">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm tracking-wide uppercase font-medium text-foreground"
                >
                  {item.label}
                </Link>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button size="lg" className="w-full" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
