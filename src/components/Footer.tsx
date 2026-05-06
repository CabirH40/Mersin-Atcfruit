import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const navLinks = t.nav;
  const products = t.products;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white">
                ATC<span className="text-amber-500">FRUIT</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {t.language === 'tr' ? 'Hızlı Bağlantılar' : t.language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link: any) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {t.language === 'tr' ? 'Ürünlerimiz' : t.language === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h4>
            <ul className="space-y-4">
              {products.map((product: any) => (
                <li key={product.id}>
                  <Link to="/products" className="hover:text-amber-500 transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {t.language === 'tr' ? 'İletişim' : t.language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0 mt-1" size={18} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-500 shrink-0" size={18} />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0" size={18} />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Atcfruit. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;