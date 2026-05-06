import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm" 
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-bold tracking-tighter transition-colors",
            scrolled ? "text-emerald-700" : "text-white"
          )}>
            ATC<span className="text-amber-500">FRUIT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-500",
                location.pathname === link.href 
                  ? "text-amber-500" 
                  : scrolled ? "text-slate-700" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-md",
            scrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-4">
            <Button asChild className="w-full bg-emerald-600 py-6 text-lg">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Button>
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-2 text-emerald-700 font-medium"
            >
              <Phone size={18} /> {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;