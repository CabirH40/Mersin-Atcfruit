import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessTimeline from "@/components/ProcessTimeline";
import { Ship, Anchor, Snowflake, Truck, Globe } from "lucide-react";

const Process = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-amber-500 text-slate-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">How We Work</h1>
          <p className="text-xl text-slate-800 max-w-2xl">
            Our end-to-end logistics process ensures the highest quality standards from origin to destination.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Atcfruit Supply Chain</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We manage every step of the journey with precision, utilizing advanced technology and strategic partnerships to maintain the cold chain.
            </p>
          </div>
          
          <ProcessTimeline />
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Quality Control at Every Step</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Snowflake size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Temperature Monitoring</h4>
                    <p className="text-slate-400">Continuous real-time monitoring of cold storage and transport temperatures.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Port Efficiency</h4>
                    <p className="text-slate-400">Rapid unloading and customs clearance at the Port of Mersin.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Specialized Fleet</h4>
                    <p className="text-slate-400">Refrigerated trucks equipped for long-distance regional distribution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590496793907-4999699801e4?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl"
                alt="Logistics Process"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;