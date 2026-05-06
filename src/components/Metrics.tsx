import React from "react";
import { content } from "@/data/content";

const Metrics = () => {
  const { metrics } = content.en;

  return (
    <section className="relative z-20 -mt-16 container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-8 md:p-12 text-center hover:bg-slate-50 transition-colors">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
              {metric.value}
            </div>
            <div className="text-sm md:text-base text-slate-500 font-semibold uppercase tracking-widest">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;