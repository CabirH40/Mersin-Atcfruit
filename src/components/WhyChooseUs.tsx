import React from "react";
import { ShieldCheck, Clock, Globe, Zap, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="text-emerald-600" />,
      title: "Quality Assurance",
      description: "Rigorous inspection protocols at every stage of the supply chain to ensure only the finest fruit reaches our partners."
    },
    {
      icon: <Clock className="text-amber-500" />,
      title: "24/7 Operations",
      description: "Our strategic location at the Port of Mersin allows for round-the-clock handling and rapid customs clearance."
    },
    {
      icon: <Globe className="text-blue-600" />,
      title: "Global Sourcing",
      description: "Direct partnerships with premium growers in Ecuador, India, and South Africa for consistent year-round supply."
    },
    {
      icon: <Zap className="text-emerald-600" />,
      title: "Fast Re-export",
      description: "Optimized logistics flow designed for speed, minimizing the time between arrival and regional distribution."
    },
    {
      icon: <Award className="text-amber-500" />,
      title: "Expert Ripening",
      description: "State-of-the-art ripening rooms specifically designed for bananas to ensure perfect color and texture."
    },
    {
      icon: <Users className="text-blue-600" />,
      title: "Dedicated Support",
      description: "A professional team committed to providing personalized service and flexible wholesale solutions."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">The Atcfruit Advantage</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Why Industry Leaders <span className="text-emerald-600">Trust Us</span></h2>
          <p className="text-xl text-slate-600 font-light">
            We combine strategic location, advanced technology, and decades of expertise to deliver excellence in every container.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {reason.icon}
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