import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const navLinks = t.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-slate-100" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span className={cn(
              "text-3xl font-black tracking-tighter transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}>
              ATC<span className="text-secondary">FRUIT</span>
            </span>
            <span className={cn(
              "text-[8px] font-bold uppercase tracking-[0.3em] transition-colors duration-300",
              scrolled ? "text-slate-400" : "text-white/60"
            )}>
              Premium Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link: any) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-secondary relative group/link",
                  location.pathname === link.href 
                    ? "text-secondary" 
                    : scrolled ? "text-slate-700" : "text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover/link:w-full",
                  location.pathname === link.href ? "w-full" : "w-0"
                )} />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-slate-200/20 pl-8">
            <LanguageSwitcher scrolled={scrolled} />
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold shadow-lg shadow-primary/20">
              <Link to="/contact">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            className={cn(
              "p-2 rounded-xl transition-colors",
              scrolled ? "text-primary bg-slate-100" : "text-white bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-white z-40 md:hidden transition-all duration-500 ease-in-out transform",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col h-full p-8 pt-24 gap-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-4 p-2 text-primary"
          >
            <X size={32} />
          </button>
          {navLinks.map((link: any) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-3xl font-black text-primary border-b border-slate-100 pb-4 flex justify-between items-center group"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                →
              </span>
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-4">
            <Button asChild className="w-full bg-primary py-8 text-xl font-bold rounded-2xl">
              <Link to="/contact" onClick={() => setIsOpen(false)}>{t.hero.ctaSecondary}</Link>
            </Button>
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-3 text-primary font-bold text-lg py-4"
            >
              <Phone size={20} /> {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;