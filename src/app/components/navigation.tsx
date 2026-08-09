"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Services",
      items: ["Marine & Logistics", "Subsea Operations", "Passenger Mobility"],
    },
    {
      label: "Group",
      items: ["About Us", "Leadership", "Locations"],
    },
    {
      label: "Careers",
      items: ["Job Opportunities", "Life at Sea", "Training"],
    },
    {
      label: "News & Media",
      items: ["Latest News", "Press Releases", "Media Kit"],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              width={160}
              height={48}
              src="/assets/bour.png"
              alt="logo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1.5 text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors font-medium">
                  <span>{item.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-3 w-60 bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted border-b border-border last:border-b-0 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="lg">CONTACT</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-6 border-t border-border">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <h3 className="text-sm tracking-wide uppercase font-medium text-foreground">
                  {item.label}
                </h3>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <Button size="lg" className="w-full">
              CONTACT
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
