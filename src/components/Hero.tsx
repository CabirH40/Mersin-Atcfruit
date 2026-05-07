import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { t, language } = useLanguage();
  const { hero } = t;

  const renderTitle = () => {
    if (language === 'en') {
      return (
        <>
          Premium Fruit <span className="text-secondary">Logistics</span> & Global <span className="text-secondary">Supply</span>
        </>
      );
    }
    if (language === 'tr') {
      return (
        <>
          Premium Meyve <span className="text-secondary">Lojistiği</span> ve Küresel <span className="text-secondary">Tedarik</span>
        </>
      );
    }
    if (language === 'ar') {
      return (
        <>
          لوجستيات <span className="text-secondary">فاكهة</span> فاخرة وتوريد <span className="text-secondary">عالمي</span>
        </>
      );
    }
    return hero.title;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Atcfruit Logistics"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/90 to-primary" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              {hero.badge}
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
              {renderTitle()}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl font-medium">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary rounded-2xl px-12 py-9 text-xl font-black group transition-all shadow-2xl shadow-secondary/20">
                <Link to="/products">
                  {hero.ctaPrimary}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-2xl px-12 py-9 text-xl font-black backdrop-blur-md">
                <Link to="/contact" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Play size={16} fill="currentColor" />
                  </div>
                  {hero.ctaSecondary}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="hidden lg:block lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border-[12px] border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Fruit" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest">Quality Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
</dyad-write path="src/components/Hero.tsx" description="تحديث قسم الـ Hero ليعكس الفخامة بالألوان الجديدة (الأخضر العميق والذهبي).">
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { t, language } = useLanguage();
  const { hero } = t;

  const renderTitle = () => {
    if (language === 'en') {
      return (
        <>
          Premium Fruit <span className="text-secondary">Logistics</span> & Global <span className="text-secondary">Supply</span>
        </>
      );
    }
    if (language === 'tr') {
      return (
        <>
          Premium Meyve <span className="text-secondary">Lojistiği</span> ve Küresel <span className="text-secondary">Tedarik</span>
        </>
      );
    }
    if (language === 'ar') {
      return (
        <>
          لوجستيات <span className="text-secondary">فاكهة</span> فاخرة وتوريد <span className="text-secondary">عالمي</span>
        </>
      );
    }
    return hero.title;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Atcfruit Logistics"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/90 to-primary" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              {hero.badge}
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
              {renderTitle()}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl font-medium">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary rounded-2xl px-12 py-9 text-xl font-black group transition-all shadow-2xl shadow-secondary/20">
                <Link to="/products">
                  {hero.ctaPrimary}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-2xl px-12 py-9 text-xl font-black backdrop-blur-md">
                <Link to="/contact" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Play size={16} fill="currentColor" />
                  </div>
                  {hero.ctaSecondary}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="hidden lg:block lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border-[12px] border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Fruit" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest">Quality Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;