import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/data/content";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess(t.language === 'tr' ? "Teşekkürler! Mesajınız gönderildi. Sizinle kısa süre içinde iletişime geçeceğiz." : t.language === 'ar' ? "شكراً لك! تم إرسال رسالتك. سنتصل بك قريباً." : "Thank you! Your message has been sent. We will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title={t.nav.find((n: any) => n.href === "/contact")?.name || "Contact"} />
      <Navbar />
      
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              {t.language === 'tr' ? 'İletişime Geçin' : t.language === 'ar' ? 'اتصل بنا' : 'Get in Touch'}
            </h1>
            <p className="text-xl text-slate-600">
              {t.language === 'tr' 
                ? 'Ürünlerimiz veya dağıtım hizmetlerimiz hakkında sorularınız mı var? Ekibimiz size yardımcı olmaya hazır.' 
                : t.language === 'ar' 
                ? 'هل لديك أسئلة حول منتجاتنا أو خدمات التوزيع لدينا؟ فريقنا مستعد لمساعدتك.' 
                : 'Have questions about our products or distribution services? Our team is ready to assist you.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  {t.language === 'tr' ? 'İletişim Bilgileri' : t.language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                        {t.language === 'tr' ? 'Telefon' : t.language === 'ar' ? 'الهاتف' : 'Phone'}
                      </p>
                      <p className="text-lg font-medium text-slate-900">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                        {t.language === 'tr' ? 'E-posta' : t.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </p>
                      <p className="text-lg font-medium text-slate-900">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                        {t.language === 'tr' ? 'Konum' : t.language === 'ar' ? 'الموقع' : 'Location'}
                      </p>
                      <p className="text-lg font-medium text-slate-900">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl text-lg">
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageSquare size={20} /> {t.language === 'tr' ? 'WhatsApp\'tan Yazın' : t.language === 'ar' ? 'تحدث معنا عبر واتساب' : 'Chat on WhatsApp'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  {t.language === 'tr' ? 'Bize Mesaj Gönderin' : t.language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t.language === 'tr' ? 'Ad Soyad' : t.language === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                      <Input placeholder="John Doe" className="rounded-xl py-6" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t.language === 'tr' ? 'Şirket Adı' : t.language === 'ar' ? 'اسم الشركة' : 'Company Name'}</label>
                      <Input placeholder="Your Company" className="rounded-xl py-6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t.language === 'tr' ? 'E-posta Adresi' : t.language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                      <Input type="email" placeholder="john@example.com" className="rounded-xl py-6" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t.language === 'tr' ? 'Telefon Numarası' : t.language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</label>
                      <Input placeholder="+90..." className="rounded-xl py-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t.language === 'tr' ? 'Mesaj' : t.language === 'ar' ? 'الرسالة' : 'Message'}</label>
                    <Textarea placeholder={t.language === 'tr' ? 'Size nasıl yardımcı olabiliriz?' : t.language === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'} className="rounded-xl min-h-[150px]" required />
                  </div>
                  <Button type="submit" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-7 rounded-xl text-lg group">
                    {t.language === 'tr' ? 'Mesaj Gönder' : t.language === 'ar' ? 'إرسال الرسالة' : 'Send Message'} <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;