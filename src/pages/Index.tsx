import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ProductCard from "@/components/ProductCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import QualitySection from "@/components/QualitySection";
import Footer from "@/components/Footer";
import { products, markets, siteConfig } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />
      
      <Highlights />

      {/* About Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                  alt="Atcfruit Operations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100 rounded-full -z-10 blur-3xl opacity-60" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full -z-10 blur-3xl opacity-60" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-wider">
                About Atcfruit
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Your Strategic Partner in <span className="text-emerald-600">Fruit Logistics</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Atcfruit is a fruit import, distribution, and re-export company based in Mersin, Turkey. With our strategic location near the Port of Mersin, we manage the full supply chain process from import and unloading to cold storage, reloading, and regional distribution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Strategic Mersin Location",
                  "Expert Import/Export Handling",
                  "Advanced Cold Storage",
                  "Wide Regional Network"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-bold uppercase tracking-wider mb-4">
              Our Products
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Premium Quality Selection</h2>
            <p className="text-lg text-slate-600">
              We source the finest fruits from global origins, ensuring peak freshness through our specialized cold chain management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <QualitySection />

      {/* Markets Section */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-sm font-bold uppercase tracking-wider">
                Regional Reach
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                From Mersin to the <span className="text-amber-400">Entire Region</span>
              </h2>
              <p className="text-lg text-emerald-100/80 leading-relaxed">
                From our logistics hub in Mersin, we distribute fresh imported fruits across Turkey and key regional markets. Our strategic position allows for rapid re-export and distribution.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {markets.map((market) => (
                  <div key={market} className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 flex items-center gap-2 hover:bg-white/20 transition-colors">
                    <MapPin size={16} className="text-amber-400" />
                    <span className="font-medium">{market}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="aspect-square relative flex items-center justify-center">
                  {/* Visual representation of Mersin as a hub */}
                  <div className="w-32 h-32 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)] animate-pulse">
                    <div className="text-center">
                      <div className="font-bold text-xl">MERSIN</div>
                      <div className="text-[10px] uppercase tracking-widest">Logistics Hub</div>
                    </div>
                  </div>
                  
                  {/* Orbiting elements representing markets */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <div 
                      key={i}
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{ transform: `rotate(${deg}deg)` }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full translate-x-32 md:translate-x-48" />
                      <div className="w-px h-32 md:h-48 bg-gradient-to-r from-amber-500/50 to-transparent origin-left" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-wider mb-4">
              How We Work
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Seamless Logistics Flow</h2>
            <p className="text-lg text-slate-600">
              Our optimized process ensures that every piece of fruit maintains its quality from the origin country to the final consumer.
            </p>
          </div>
          
          <ProcessTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Ready to partner with the region's leading fruit distributor?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-7 text-lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-full px-10 py-7 text-lg">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`}>WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;