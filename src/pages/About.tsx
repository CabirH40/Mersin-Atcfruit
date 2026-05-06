import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Target, Eye, ShieldCheck } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SEO title={t.nav.find((n: any) => n.href === "/about")?.name || "About"} />
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.nav.find((n: any) => n.href === "/about")?.name} Atcfruit</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t.language === 'tr' ? 'Misyonumuz' : t.language === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.language === 'tr' 
                  ? 'Küresel meyve üreticileri ile bölgesel tüketiciler arasındaki boşluğu verimli, yüksek kaliteli lojistik ve dağıtım hizmetleri sunarak doldurmak.' 
                  : t.language === 'ar' 
                  ? 'سد الفجوة بين منتجي الفاكهة العالميين والمستهلكين الإقليميين من خلال تقديم خدمات لوجستية وتوزيع فعالة وعالية الجودة.' 
                  : 'To bridge the gap between global fruit producers and regional consumers by providing efficient, high-quality logistics and distribution services.'}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-amber-50 border border-amber-100">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t.language === 'tr' ? 'Vizyonumuz' : t.language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.language === 'tr' 
                  ? 'Tazelik ve operasyonel mükemmelliğe olan bağlılığımızla tanınan, meyve ithalatı ve re-exportu için en güvenilir bölgesel merkez olmak.' 
                  : t.language === 'ar' 
                  ? 'أن نكون المركز الإقليمي الأكثر ثقة لاستيراد وإعادة تصدير الفاكهة، والمعترف به لالتزامنا بالنضارة والتميز التشغيلي.' 
                  : 'To be the most trusted regional hub for fruit import and re-export, recognized for our commitment to freshness and operational excellence.'}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t.language === 'tr' ? 'Değerlerimiz' : t.language === 'ar' ? 'قيمنا' : 'Our Values'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.language === 'tr' 
                  ? 'Önce kalite, her sevkiyatta dürüstlük ve müşteri memnuniyetini sağlamak için soğuk zinciri korumaya yönelik amansız bir odaklanma.' 
                  : t.language === 'ar' 
                  ? 'الجودة أولاً، والنزاهة في كل شحنة، والتركيز المستمر على الحفاظ على سلسلة التبريد لضمان رضا العملاء.' 
                  : 'Quality first, integrity in every shipment, and a relentless focus on maintaining the cold chain to ensure customer satisfaction.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t.language === 'tr' ? 'Stratejik Lojistik Mükemmelliği' : t.language === 'ar' ? 'التميز اللوجستي الاستراتيجي' : 'Strategic Logistics Excellence'}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.language === 'tr' 
                  ? 'Atcfruit, Mersin, Türkiye merkezli bir meyve ithalat, dağıtım ve re-export şirketidir. Mersin Limanı\'na yakın stratejik konumu ile şirket, ithalat ve tahliyeden soğuk depolamaya, yeniden yüklemeye ve bölgesel dağıtıma kadar tüm tedarik zinciri sürecini yönetmektedir.' 
                  : t.language === 'ar' 
                  ? 'Atcfruit هي شركة استيراد وتوزيع وإعادة تصدير فاكهة مقرها في مرسين، تركيا. بفضل موقعها الاستراتيجي بالقرب من ميناء مرسين، تدير الشركة عملية سلسلة التوريد الكاملة من الاستيراد والتفريغ إلى التخزين البارد وإعادة التحميل والتوزيع الإقليمي.' 
                  : 'Atcfruit is a fruit import, distribution, and re-export company based in Mersin, Turkey. With its strategic location near the Port of Mersin, the company manages the full supply chain process from import and unloading to cold storage, reloading, and regional distribution.'}
              </p>
              <div className="space-y-4 pt-4">
                {[
                  t.language === 'tr' ? "Üreticilerle doğrudan ilişkiler" : t.language === 'ar' ? "علاقات مباشرة مع المزارعين" : "Direct relationships with origin growers",
                  t.language === 'tr' ? "Uzman muz olgunlaştırma kontrolü" : t.language === 'ar' ? "تحكم متخصص في نضج الموز" : "Specialized banana ripening control",
                  t.language === 'tr' ? "Modern soğuk hava depoları" : t.language === 'ar' ? "مرافق تخزين بارد حديثة" : "State-of-the-art cold storage facilities",
                  t.language === 'tr' ? "Verimli gümrük ve liman işlemleri" : t.language === 'ar' ? "مناولة فعالة في الميناء والجمارك" : "Efficient customs and port handling"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl h-64 w-full object-cover"
                  alt="Fruit Quality"
                />
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                  alt="Logistics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;