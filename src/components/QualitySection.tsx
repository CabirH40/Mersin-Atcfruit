import React from "react";
import { ShieldCheck, Thermometer, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const QualitySection = () => {
  const { t } = useLanguage();
  const { quality } = t;

  const iconMap = [
    <Thermometer className="text-emerald-600" />,
    <ShieldCheck className="text-emerald-600" />,
    <Zap className="text-emerald-600" />,
    <Clock className="text-emerald-600" />,
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[3rem] overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
              alt="Quality Background"
            />
          </div>
          
          <div className="relative z-10 p-8 md:p-16 lg:p-24">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {quality.title.split('Freshness')[0]} <span className="text-emerald-400">{t.language === 'tr' ? 'Tazelikte' : t.language === 'ar' ? 'النضارة' : 'Freshness'}</span> {quality.title.split('Freshness')[1]}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {quality.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quality.features.map((f: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                    {iconMap[i]}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;