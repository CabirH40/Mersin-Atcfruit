import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { markets } from "@/data/content";
import { MapPin, Globe2, Navigation } from "lucide-react";

const Markets = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Markets</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Strategic distribution network connecting Mersin to key regional and international markets.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-wider mb-6">
                Logistics Hub
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Mersin: The Gateway to the Region</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our operations are centered in Mersin, Turkey's most important logistics city. Its world-class port and strategic location allow us to receive shipments from South America, India, and Africa, and redistribute them efficiently across the Middle East, Central Asia, and the Caucasus.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {markets.map((market) => (
                  <div key={market} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm">
                      <MapPin size={16} />
                    </div>
                    <span className="font-bold text-slate-800">{market}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="bg-slate-100 rounded-3xl p-12 aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover"
                    alt="Map Background"
                  />
                </div>
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-24 h-24 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                    <Globe2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Regional Distribution Hub</h3>
                  <p className="text-slate-500">Connecting 10+ countries through optimized trade routes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Markets;