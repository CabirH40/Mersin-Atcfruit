import React from "react";
import { MapPin, Globe2, ArrowUpRight } from "lucide-react";
import { content } from "@/data/content";
import { Badge } from "@/components/ui/badge";

const MarketMap = () => {
  const { markets } = content.en;

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,200 Q300,100 500,200 T900,200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          <path d="M200,400 Q400,300 600,400 T800,400" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-8">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1 text-sm">
              Global Reach
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Strategic <span className="text-amber-500">Regional</span> Distribution
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {markets.subtitle}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {markets.countries.map((country) => (
                <div key={country} className="group flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <span className="font-semibold text-lg">{country}</span>
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-emerald-500 transition-colors" size={18} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Hub Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-emerald-600/20 rounded-full animate-ping absolute inset-0" />
                  <div className="w-48 h-48 bg-emerald-600/40 rounded-full animate-pulse absolute inset-0" />
                  <div className="w-48 h-48 bg-emerald-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.4)] relative z-10 border-4 border-white/10">
                    <MapPin size={40} className="mb-2 text-amber-400" />
                    <span className="font-black text-2xl tracking-tighter">MERSIN</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">Central Hub</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Market Indicators */}
              {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full translate-x-40 md:translate-x-56 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                  <div className="w-px h-40 md:h-56 bg-gradient-to-t from-emerald-500/50 to-transparent origin-bottom" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketMap;