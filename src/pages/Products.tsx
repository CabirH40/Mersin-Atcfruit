import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Products = () => {
  const { t } = useLanguage();
  const { products } = t;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={t.nav.find((n: any) => n.href === "/products")?.name || "Products"} />
      <Navbar />
      
      <section className="pt-40 pb-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t.nav.find((n: any) => n.href === "/products")?.name}</h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              {t.language === 'tr' 
                ? 'Dünyanın en iyi bölgelerinden ithal edilen ve özenle dağıtılan premium meyve seçkisi.' 
                : t.language === 'ar' 
                ? 'مجموعة مختارة من الفواكه الفاخرة المستوردة من أفضل المصادر العالمية والموزعة بعناية.' 
                : 'Premium fruit selection imported from the world\'s best origins and distributed with care.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product: any, i: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {t.language === 'tr' ? 'Toptan Satış ve Dağıtım' : t.language === 'ar' ? 'البيع بالجملة والتوزيع' : 'Wholesale & Distribution'}
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              {t.language === 'tr' 
                ? 'Toptancılar, perakendeciler ve bölgesel distribütörler için esnek tedarik çözümleri sunuyoruz. Ürünlerimiz, özel ihtiyaçlarınızı karşılamak için çeşitli paketleme seçenekleri ve olgunlaşma aşamalarında mevcuttur.' 
                : t.language === 'ar' 
                ? 'نحن نقدم حلول توريد مرنة لتجار الجملة وتجار التجزئة والموزعين الإقليميين. منتجاتنا متوفرة في خيارات تعبئة ومراحل نضج مختلفة لتلبية احتياجاتكم الخاصة.' 
                : 'We provide flexible supply solutions for wholesalers, retailers, and regional distributors. Our products are available in various packaging options and ripening stages to meet your specific needs.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: t.language === 'tr' ? 'Toplu Tedarik' : t.language === 'ar' ? 'توريد بالجملة' : 'Bulk Supply',
                  desc: t.language === 'tr' ? 'Büyük ölçekli ihtiyaçlar için konteyner düzeyinde ithalat.' : t.language === 'ar' ? 'استيراد على مستوى الحاويات للاحتياجات الكبيرة.' : 'Container-level imports for large scale needs.',
                  color: "text-amber-500"
                },
                {
                  title: t.language === 'tr' ? 'Olgunlaştırma Kontrolü' : t.language === 'ar' ? 'التحكم في النضج' : 'Ripening Control',
                  desc: t.language === 'tr' ? 'Muzlar için özelleştirilmiş olgunlaştırma.' : t.language === 'ar' ? 'نضج مخصص للموز.' : 'Customized ripening for bananas.',
                  color: "text-emerald-600"
                },
                {
                  title: t.language === 'tr' ? 'Soğuk Zincir' : t.language === 'ar' ? 'سلسلة التبريد' : 'Cold Chain',
                  desc: t.language === 'tr' ? '%100 soğutmalı taşıma ve depolama.' : t.language === 'ar' ? 'نقل وتخزين مبرد بنسبة 100٪.' : '100% refrigerated transport and storage.',
                  color: "text-blue-500"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className={`${item.color} font-bold text-xl mb-2`}>
                    {item.title}
                  </div>
                  <p className="text-sm text-slate-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;