import React from "react";
import { ShieldCheck, Clock, Globe, Zap, Award, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = [
  <ShieldCheck className="text-emerald-600" />,
  <Clock className="text-amber-500" />,
  <Globe className="text-blue-600" />,
  <Zap className="text-emerald-600" />,
  <Award className="text-amber-500" />,
  <Users className="text-blue-600" />,
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const { whyChooseUs } = t;

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{whyChooseUs.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
            {whyChooseUs.title.split('Trust Us')[0]} <span className="text-emerald-600">{t.language === 'tr' ? 'Bize Güveniyor' : t.language === 'ar' ? 'يثق بنا' : 'Trust Us'}</span>
          </h2>
          <p className="text-xl text-slate-600 font-light">
            {whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.reasons.map((reason: any, index: number) => (
            <div key={index} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {iconMap[index]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;