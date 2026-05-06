import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProcessTimeline from "@/components/ProcessTimeline";
import { useLanguage } from "@/context/LanguageContext";
import { Anchor, Snowflake, Truck } from "lucide-react";

const Process = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SEO title={t.nav.find((n: any) => n.href === "/process")?.name || "Process"} />
      <Navbar />
      
      <section className="pt-40 pb-20 bg-amber-500 text-slate-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{t.nav.find((n: any) => n.href === "/process")?.name}</h1>
          <p className="text-xl text-slate-800 max-w-2xl">
            {t.language === 'tr' 
              ? 'Uçtan uca lojistik sürecimiz, kaynaktan varış noktasına kadar en yüksek kalite standartlarını sağlar.' 
              : t.language === 'ar' 
              ? 'تضمن عمليتنا اللوجستية الشاملة أعلى معايير الجودة من المصدر إلى الوجهة.' 
              : 'Our end-to-end logistics process ensures the highest quality standards from origin to destination.'}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t.language === 'tr' ? 'Atcfruit Tedarik Zinciri' : t.language === 'ar' ? 'سلسلة توريد Atcfruit' : 'The Atcfruit Supply Chain'}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.language === 'tr' 
                ? 'Yolculuğun her adımını hassasiyetle yönetiyor, soğuk zinciri korumak için ileri teknoloji ve stratejik ortaklıklardan yararlanıyoruz.' 
                : t.language === 'ar' 
                ? 'نحن ندير كل خطوة في الرحلة بدقة، ونستخدم التكنولوجيا المتقدمة والشراكات الاستراتيجية للحفاظ على سلسلة التبريد.' 
                : 'We manage every step of the journey with precision, utilizing advanced technology and strategic partnerships to maintain the cold chain.'}
            </p>
          </div>
          
          <ProcessTimeline />
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">
                {t.language === 'tr' ? 'Her Adımda Kalite Kontrol' : t.language === 'ar' ? 'مراقبة الجودة في كل خطوة' : 'Quality Control at Every Step'}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Snowflake size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {t.language === 'tr' ? 'Sıcaklık İzleme' : t.language === 'ar' ? 'مراقبة درجة الحرارة' : 'Temperature Monitoring'}
                    </h4>
                    <p className="text-slate-400">
                      {t.language === 'tr' ? 'Soğuk hava deposu ve taşıma sıcaklıklarının sürekli gerçek zamanlı izlenmesi.' : t.language === 'ar' ? 'مراقبة مستمرة في الوقت الفعلي لدرجات حرارة التخزين البارد والنقل.' : 'Continuous real-time monitoring of cold storage and transport temperatures.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {t.language === 'tr' ? 'Liman Verimliliği' : t.language === 'ar' ? 'كفاءة الميناء' : 'Port Efficiency'}
                    </h4>
                    <p className="text-slate-400">
                      {t.language === 'tr' ? 'Mersin Limanı\'nda hızlı tahliye ve gümrükleme.' : t.language === 'ar' ? 'تفريغ سريع وتخليص جمركي في ميناء مرسين.' : 'Rapid unloading and customs clearance at the Port of Mersin.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {t.language === 'tr' ? 'Uzman Filo' : t.language === 'ar' ? 'أسطول متخصص' : 'Specialized Fleet'}
                    </h4>
                    <p className="text-slate-400">
                      {t.language === 'tr' ? 'Uzun mesafeli bölgesel dağıtım için donatılmış soğutmalı kamyonlar.' : t.language === 'ar' ? 'شاحنات مبردة مجهزة للتوزيع الإقليمي لمسافات طويلة.' : 'Refrigerated trucks equipped for long-distance regional distribution.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590496793907-4999699801e4?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl"
                alt="Logistics Process"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;