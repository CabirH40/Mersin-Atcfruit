import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";

const Hero = () => {
  const { hero } = content.en;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Atcfruit Logistics"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Fresh Fruit <span className="text-emerald-500">Import</span> & <span className="text-amber-500">Distribution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-10 py-8 text-xl font-semibold group transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Link to="/products">
                {hero.ctaPrimary}
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl px-10 py-8 text-xl font-semibold backdrop-blur-sm">
              <Link to="/contact">{hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;