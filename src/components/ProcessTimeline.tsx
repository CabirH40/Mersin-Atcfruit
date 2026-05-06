import React from "react";
import { Ship, Anchor, Snowflake, Truck, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  Ship: Ship,
  Anchor: Anchor,
  Snowflake: Snowflake,
  Truck: Truck,
  Globe: Globe,
};

const ProcessTimeline = () => {
  const { t } = useLanguage();
  const processSteps = t.process;

  return (
    <div className="relative">
      {/* Desktop Line */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 z-0" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        {processSteps.map((step: any, index: number) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap];
          return (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:border-emerald-500 transition-all duration-300 relative">
                <Icon size={36} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;