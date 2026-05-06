import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { t, language } = useLanguage();
  const { hero } = t;

  // Robust title rendering for different languages
  const renderTitle = () => {
    if (language === 'en') {
      return (
        <>
          Fresh Fruit <span className="text-emerald-500">Import</span> & <span className="text-amber-500">Distribution</span>
        </>
      );
    }
    if (language === 'tr') {
      return (
        <>
          Taze Meyve <span className="text-emerald-500">İthalatı</span> ve <span className="text-amber-500">Dağıtımı</span>
        </>
      );
    }
    if (language === 'ar') {
      return (
        <>
          <span className="text-emerald-500">استيراد</span> وتوزيع <span className="text-amber-500">الفاكهة</span> الطازجة
        </>
      );
    }
    return hero.title;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Atcfruit Logistics"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            {renderTitle()}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;