import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Metrics = () => {
  const { t } = useLanguage();
  const metrics = t.metrics;

  return (
    <section className="relative z-20 -mt-20 container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl">
        {metrics.map((metric: any, index: number) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 md:p-14 text-center hover:bg-slate-50 transition-all duration-500 group"
          >
            <div className="text-5xl md:text-6xl font-black text-primary mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              {metric.value}
            </div>
            <div className="text-xs md:text-sm text-slate-400 font-black uppercase tracking-[0.3em]">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;