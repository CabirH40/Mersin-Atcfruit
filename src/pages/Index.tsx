import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Highlights from "@/components/Highlights";
import ProductCard from "@/components/ProductCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import QualitySection from "@/components/QualitySection";
import MarketMap from "@/components/MarketMap";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const { t } = useLanguage();
  const { products } = t;

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <SEO 
        title="Home" 
        description="Atcfruit is a Mersin-based fruit import and distribution company specializing in bananas, citrus fruits, apples, and pomegranates." 
      />
      <Navbar />
      
      <Hero />
      
      <Metrics />
      
      <Highlights />

      {/* About Preview */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                  alt="Atcfruit Operations" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-amber-100 rounded-full -z-10 blur-3xl opacity-60" />
              <div className="absolute -top-12 -left-12 w-72 h-72 bg-emerald-100 rounded-full -z-10 blur-3xl opacity-60" />
              
              <div className="absolute top-12 -right-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Port Operations</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Legacy</span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Excellence in <span className="text-emerald-600">Fruit Logistics</span> Since Day One
                </h2>
              </div>
              
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Atcfruit is more than a distributor; we are a strategic bridge connecting global growers with regional markets. Our Mersin hub is engineered for speed, quality, and reliability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Strategic Mersin Location",
                  "Expert Import/Export Handling",
                  "Advanced Cold Storage",
                  "Wide Regional Network"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-semibold text-slate-800 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-2xl px-10 py-8 text-lg shadow-xl">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl space-y-4"
            >
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Premium Selection</h2>
              <p className="text-xl text-slate-600 font-light">
                Sourced from the world's finest orchards, delivered with uncompromising freshness.
              </p>
            </motion.div>
            <Button asChild variant="outline" size="lg" className="rounded-2xl border-slate-200 hover:bg-white px-10 py-8 text-lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product: any, index: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QualitySection />

      <WhyChooseUs />

      <MarketMap />

      {/* Process Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24 space-y-4"
          >
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">The Journey</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Seamless Logistics</h2>
            <p className="text-xl text-slate-600 font-light">
              Our optimized flow ensures peak quality from origin to destination.
            </p>
          </motion.div>
          
          <ProcessTimeline />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white mb-12 max-w-4xl mx-auto leading-tight"
          >
            Ready to Scale Your <span className="text-amber-400">Fruit Supply</span> Chain?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-slate-50 rounded-2xl px-12 py-9 text-xl font-bold shadow-2xl">
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-2xl px-12 py-9 text-xl font-bold backdrop-blur-sm">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`}>WhatsApp Support</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(34,197,94,0.4)] animate-bounce-slow"
      >
        <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default Index;