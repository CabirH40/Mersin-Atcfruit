export type Language = 'en' | 'tr' | 'ar';

export const siteConfig = {
  name: "Atcfruit",
  location: "Mersin, Turkey",
  contact: {
    phone: "+90 5XX XXX XX XX",
    whatsapp: "905XXXXXXXXX",
    email: "info@atcfruit.com",
    address: "Mersin International Port Area, Mersin, Turkey",
  },
};

export const content = {
  en: {
    nav: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Markets", href: "/markets" },
      { name: "Process", href: "/process" },
      { name: "Contact", href: "/contact" },
    ],
    hero: {
      badge: "Strategic Logistics Hub",
      title: "Fresh Fruit Import & Distribution",
      subtitle: "Atcfruit is a Mersin-based fruit import and distribution company specializing in bananas, citrus fruits, apples, and pomegranates with cold storage and regional re-export solutions.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Contact Us",
    },
    metrics: [
      { label: "Target Markets", value: "10+" },
      { label: "Product Categories", value: "4" },
      { label: "Logistics Hub", value: "Mersin" },
      { label: "Cold Chain", value: "100%" },
    ],
    products: [
      {
        id: "bananas",
        name: "Premium Bananas",
        origin: "Ecuador & India",
        description: "High-quality bananas with specialized ripening control for wholesale distribution.",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
        tags: ["Fresh", "Imported", "Wholesale"],
        readiness: "Export Ready",
      },
      {
        id: "citrus",
        name: "Citrus Fruits",
        origin: "South Africa",
        description: "Fresh oranges and lemons imported directly from South African orchards.",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
        tags: ["Citrus", "Export Ready", "Cold Stored"],
        readiness: "Wholesale",
      },
      {
        id: "apples",
        name: "Fresh Apples",
        origin: "South Africa",
        description: "Crisp and carefully handled apples, maintained in optimal cold storage conditions.",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=800",
        tags: ["Fresh", "Premium", "Regional"],
        readiness: "Export Ready",
      },
      {
        id: "pomegranates",
        name: "Pomegranates",
        origin: "South Africa",
        description: "Vibrant, high-quality pomegranates prepared for international distribution.",
        image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?auto=format&fit=crop&q=80&w=800",
        tags: ["Fresh", "High Quality", "Export Ready"],
        readiness: "Wholesale",
      },
    ],
    markets: {
      title: "Regional Distribution Network",
      subtitle: "From our logistics hub in Mersin, we distribute fresh imported fruits across Turkey and key regional markets.",
      countries: ["Turkey", "Turkmenistan", "Tajikistan", "Syria", "Iran", "Iraq", "Uzbekistan", "Cyprus", "Georgia", "Azerbaijan"],
    },
    process: [
      { title: "Import from Origin", description: "Fruits are sourced and imported from premium growers.", icon: "Ship" },
      { title: "Arrival at Mersin", description: "Shipments arrive at the strategic Port of Mersin.", icon: "Anchor" },
      { title: "Cold Storage", description: "Products are stored in state-of-the-art refrigerated facilities.", icon: "Snowflake" },
      { title: "Reloading", description: "Fruits are carefully inspected and reloaded onto our fleet.", icon: "Truck" },
      { title: "Regional Distribution", description: "Fast delivery across Turkey and international markets.", icon: "Globe" },
    ],
    highlights: [
      { title: "Strategic Location", description: "Based in Mersin, the gateway to regional distribution.", icon: "MapPin" },
      { title: "Cold Storage", description: "Advanced climate control to preserve peak freshness.", icon: "ThermometerSnowflake" },
      { title: "Wide Network", description: "Active distribution across 10+ regional markets.", icon: "Network" },
      { title: "Fast Delivery", description: "Optimized logistics for rapid turnaround.", icon: "Zap" },
    ],
    whyChooseUs: {
      badge: "The Atcfruit Advantage",
      title: "Why Industry Leaders Trust Us",
      subtitle: "We combine strategic location, advanced technology, and decades of expertise to deliver excellence in every container.",
      reasons: [
        { title: "Quality Assurance", description: "Rigorous inspection protocols at every stage of the supply chain." },
        { title: "24/7 Operations", description: "Strategic location at the Port of Mersin allows for round-the-clock handling." },
        { title: "Global Sourcing", description: "Direct partnerships with premium growers in Ecuador, India, and South Africa." },
        { title: "Fast Re-export", description: "Optimized logistics flow designed for speed and efficiency." },
        { title: "Expert Ripening", description: "State-of-the-art ripening rooms specifically designed for bananas." },
        { title: "Dedicated Support", description: "A professional team committed to providing personalized service." }
      ]
    },
    quality: {
      title: "Uncompromising Standards in Freshness",
      subtitle: "At Atcfruit, we understand that quality is a race against time. Our infrastructure is designed to preserve the natural integrity of every fruit we handle.",
      features: [
        { title: "Precision Cooling", desc: "Advanced climate control systems for each fruit variety." },
        { title: "Quality Assurance", desc: "Rigorous inspection protocols at every stage." },
        { title: "Fast Turnaround", desc: "Optimized port operations to minimize time." },
        { title: "Freshness Guaranteed", desc: "Direct-from-origin sourcing ensures maximum shelf life." }
      ]
    },
    footer: {
      quickLinks: "Quick Links",
      products: "Our Products",
      contact: "Contact Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  tr: {
    nav: [
      { name: "Anasayfa", href: "/" },
      { name: "Hakkımızda", href: "/about" },
      { name: "Ürünler", href: "/products" },
      { name: "Pazarlar", href: "/markets" },
      { name: "Süreç", href: "/process" },
      { name: "İletişim", href: "/contact" },
    ],
    hero: {
      badge: "Stratejik Lojistik Merkezi",
      title: "Taze Meyve İthalatı ve Dağıtımı",
      subtitle: "Atcfruit, Mersin merkezli, muz, narenciye, elma ve nar konusunda uzmanlaşmış, soğuk hava deposu ve hızlı re-export çözümleri sunan bir ithalat ve dağıtım şirketidir.",
      ctaPrimary: "Ürünleri İncele",
      ctaSecondary: "Bize Ulaşın",
    },
    metrics: [
      { label: "Hedef Pazarlar", value: "10+" },
      { label: "Ürün Kategorileri", value: "4" },
      { label: "Lojistik Merkezi", value: "Mersin" },
      { label: "Soğuk Zincir", value: "100%" },
    ],
    products: [
      {
        id: "bananas",
        name: "Premium Muz",
        origin: "Ekvador ve Hindistan",
        description: "Toptan dağıtım için özel olgunlaştırma kontrollü yüksek kaliteli muzlar.",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
        tags: ["Taze", "İthal", "Toptan"],
        readiness: "İhracata Hazır",
      },
      {
        id: "citrus",
        name: "Narenciye",
        origin: "Güney Afrika",
        description: "Güney Afrika bahçelerinden doğrudan ithal edilen taze portakal ve limonlar.",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
        tags: ["Narenciye", "İhracata Hazır", "Soğuk Depo"],
        readiness: "Toptan",
      },
      {
        id: "apples",
        name: "Taze Elma",
        origin: "Güney Afrika",
        description: "Optimal soğuk hava koşullarında muhafaza edilen, özenle seçilmiş elmalar.",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=800",
        tags: ["Taze", "Premium", "Bölgesel"],
        readiness: "İhracata Hazır",
      },
      {
        id: "pomegranates",
        name: "Nar",
        origin: "Güney Afrika",
        description: "Uluslararası dağıtım için hazırlanan canlı, yüksek kaliteli narlar.",
        image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?auto=format&fit=crop&q=80&w=800",
        tags: ["Taze", "Yüksek Kalite", "İhracata Hazır"],
        readiness: "Toptan",
      },
    ],
    markets: {
      title: "Bölgesel Dağıtım Ağı",
      subtitle: "Mersin'deki lojistik merkezimizden, taze ithal meyveleri Türkiye ve kilit bölgesel pazarlara dağıtıyoruz.",
      countries: ["Türkiye", "Türkmenistan", "Tacikistan", "Suriye", "İran", "Irak", "Özbekistan", "Kıbrıs", "Gürcistan", "Azerbaycan"],
    },
    process: [
      { title: "Kaynaktan İthalat", description: "Meyveler premium üreticilerden tedarik edilir ve ithal edilir.", icon: "Ship" },
      { title: "Mersin'e Varış", description: "Sevkiyatlar stratejik Mersin Limanı'na ulaşır.", icon: "Anchor" },
      { title: "Soğuk Hava Deposu", description: "Ürünler tazeliğini korumak için son teknoloji tesislerde saklanır.", icon: "Snowflake" },
      { title: "Yeniden Yükleme", description: "Meyveler kontrol edilir ve dağıtım filomuza yüklenir.", icon: "Truck" },
      { title: "Bölgesel Dağıtım", description: "Türkiye ve uluslararası pazarlara hızlı teslimat.", icon: "Globe" },
    ],
    highlights: [
      { title: "Stratejik Konum", description: "Bölgesel meyve dağıtımının kapısı olan Mersin merkezli.", icon: "MapPin" },
      { title: "Soğuk Depolama", description: "Tazeliği korumak için gelişmiş iklim kontrolü.", icon: "ThermometerSnowflake" },
      { title: "Geniş Ağ", description: "10'dan fazla bölgesel pazarda aktif dağıtım.", icon: "Network" },
      { title: "Hızlı Teslimat", description: "Hızlı geri dönüş için optimize edilmiş lojistik.", icon: "Zap" },
    ],
    whyChooseUs: {
      badge: "Atcfruit Avantajı",
      title: "Neden Sektör Liderleri Bize Güveniyor",
      subtitle: "Her konteynerde mükemmelliği sunmak için stratejik konumu, ileri teknolojiyi ve onlarca yıllık uzmanlığı birleştiriyoruz.",
      reasons: [
        { title: "Kalite Güvencesi", description: "Tedarik zincirinin her aşamasında titiz denetim protokolleri." },
        { title: "7/24 Operasyon", description: "Mersin Limanı'ndaki stratejik konumumuz günün her saati işlem yapmamızı sağlar." },
        { title: "Küresel Tedarik", description: "Ekvador, Hindistan ve Güney Afrika'daki premium üreticilerle doğrudan ortaklıklar." },
        { title: "Hızlı Re-export", description: "Hız ve verimlilik için tasarlanmış optimize edilmiş lojistik akışı." },
        { title: "Uzman Olgunlaştırma", description: "Muzlar için özel olarak tasarlanmış son teknoloji olgunlaştırma odaları." },
        { title: "Özel Destek", description: "Kişiselleştirilmiş hizmet sunmaya kendini adamış profesyonel bir ekip." }
      ]
    },
    quality: {
      title: "Tazelikte Tavizsiz Standartlar",
      subtitle: "Atcfruit'te kalitenin zamana karşı bir yarış olduğunu biliyoruz. Altyapımız, her meyvenin doğal bütünlüğünü korumak için tasarlanmıştır.",
      features: [
        { title: "Hassas Soğutma", desc: "Her meyve çeşidi için gelişmiş iklim kontrol sistemleri." },
        { title: "Kalite Güvencesi", desc: "Her aşamada titiz denetim protokolleri." },
        { title: "Hızlı Geri Dönüş", desc: "Süreyi en aza indirmek için optimize edilmiş liman operasyonları." },
        { title: "Tazelik Garantisi", desc: "Kaynaktan doğrudan tedarik, maksimum raf ömrü sağlar." }
      ]
    },
    footer: {
      quickLinks: "Hızlı Bağlantılar",
      products: "Ürünlerimiz",
      contact: "Bize Ulaşın",
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları"
    }
  },
  ar: {
    nav: [
      { name: "الرئيسية", href: "/" },
      { name: "من نحن", href: "/about" },
      { name: "منتجاتنا", href: "/products" },
      { name: "أسواقنا", href: "/markets" },
      { name: "عملياتنا", href: "/process" },
      { name: "اتصل بنا", href: "/contact" },
    ],
    hero: {
      badge: "مركز لوجستي استراتيجي",
      title: "استيراد وتوزيع الفاكهة الطازجة",
      subtitle: "Atcfruit هي شركة استيراد وتوزيع فاكهة مقرها مرسين، متخصصة في الموز والحمضيات والتفاح والرمان، مع حلول التخزين البارد وإعادة التصدير السريع.",
      ctaPrimary: "استكشف المنتجات",
      ctaSecondary: "اتصل بنا",
    },
    metrics: [
      { label: "الأسواق المستهدفة", value: "10+" },
      { label: "فئات المنتجات", value: "4" },
      { label: "المركز اللوجستي", value: "مرسين" },
      { label: "سلسلة التبريد", value: "100%" },
    ],
    products: [
      {
        id: "bananas",
        name: "موز فاخر",
        origin: "الإكوادور والهند",
        description: "موز عالي الجودة مع تحكم متخصص في النضج للتوزيع بالجملة.",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
        tags: ["طازج", "مستورد", "جملة"],
        readiness: "جاهز للتصدير",
      },
      {
        id: "citrus",
        name: "حمضيات",
        origin: "جنوب أفريقيا",
        description: "برتقال وليمون طازج مستورد مباشرة من مزارع جنوب أفريقيا.",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
        tags: ["حمضيات", "جاهز للتصدير", "تخزين بارد"],
        readiness: "جملة",
      },
      {
        id: "apples",
        name: "تفاح طازج",
        origin: "جنوب أفريقيا",
        description: "تفاح مقرمش يتم التعامل معه بعناية، محفوظ في ظروف تخزين باردة مثالية.",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=800",
        tags: ["طازج", "فاخر", "إقليمي"],
        readiness: "جاهز للتصدير",
      },
      {
        id: "pomegranates",
        name: "رمان",
        origin: "جنوب أفريقيا",
        description: "رمان حيوي عالي الجودة معد للتوزيع الدولي.",
        image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?auto=format&fit=crop&q=80&w=800",
        tags: ["طازج", "جودة عالية", "جاهز للتصدير"],
        readiness: "جملة",
      },
    ],
    markets: {
      title: "شبكة التوزيع الإقليمية",
      subtitle: "من مركزنا اللوجستي في مرسين، نقوم بتوزيع الفواكه المستوردة الطازجة عبر تركيا والأسواق الإقليمية الرئيسية.",
      countries: ["تركيا", "تركمانستان", "طاجيكستان", "سوريا", "إيران", "العراق", "أوزبكستان", "قبرص", "جورجيا", "أذربيجان"],
    },
    process: [
      { title: "الاستيراد من المصدر", description: "يتم الحصول على الفواكه واستيرادها من مزارعين متميزين.", icon: "Ship" },
      { title: "الوصول إلى مرسين", description: "تصل الشحنات إلى ميناء مرسين الاستراتيجي.", icon: "Anchor" },
      { title: "التخزين البارد", description: "يتم تخزين المنتجات في مرافق مبردة متطورة للحفاظ على نضارتها.", icon: "Snowflake" },
      { title: "إعادة التحميل", description: "يتم فحص الفواكه بعناية وإعادة تحميلها على أسطول التوزيع الخاص بنا.", icon: "Truck" },
      { title: "التوزيع الإقليمي", description: "تسليم سريع عبر تركيا والأسواق الإقليمية الدولية.", icon: "Globe" },
    ],
    highlights: [
      { title: "موقع استراتيجي", description: "مقرنا في مرسين، بوابة توزيع الفاكهة الإقليمية.", icon: "MapPin" },
      { title: "تخزين بارد", description: "تحكم متقدم في المناخ للحفاظ على ذروة النضارة.", icon: "ThermometerSnowflake" },
      { title: "شبكة واسعة", description: "توزيع نشط عبر أكثر من 10 أسواق إقليمية.", icon: "Network" },
      { title: "تسليم سريع", description: "خدمات لوجستية محسنة لسرعة الإنجاز.", icon: "Zap" },
    ],
    whyChooseUs: {
      badge: "ميزة Atcfruit",
      title: "لماذا يثق بنا قادة الصناعة",
      subtitle: "نحن نجمع بين الموقع الاستراتيجي والتكنولوجيا المتقدمة وعقود من الخبرة لتقديم التميز في كل حاوية.",
      reasons: [
        { title: "ضمان الجودة", description: "بروتوكولات تفتيش صارمة في كل مرحلة من مراحل سلسلة التوريد." },
        { title: "عمليات 24/7", description: "موقعنا الاستراتيجي في ميناء مرسين يسمح بالمناولة على مدار الساعة." },
        { title: "مصادر عالمية", description: "شراكات مباشرة مع مزارعين متميزين في الإكوادور والهند وجنوب أفريقيا." },
        { title: "إعادة تصدير سريعة", description: "تدفق لوجستي محسن مصمم للسرعة والكفاءة." },
        { title: "إنضاج خبير", description: "غرف إنضاج حديثة مصممة خصيصاً للموز." },
        { title: "دعم مخصص", description: "فريق محترف ملتزم بتقديم خدمة شخصية." }
      ]
    },
    quality: {
      title: "معايير لا تهاون فيها في النضارة",
      subtitle: "في Atcfruit، ندرك أن الجودة هي سباق مع الزمن. تم تصميم بنيتنا التحتية للحفاظ على السلامة الطبيعية لكل فاكهة نتعامل معها.",
      features: [
        { title: "تبريد دقيق", desc: "أنظمة تحكم متقدمة في المناخ لكل نوع من أنواع الفاكهة." },
        { title: "ضمان الجودة", desc: "بروتوكولات تفتيش صارمة في كل مرحلة." },
        { title: "إنجاز سريع", desc: "عمليات ميناء محسنة لتقليل الوقت." },
        { title: "نضارة مضمونة", desc: "المصادر المباشرة من المنشأ تضمن أقصى مدة صلاحية." }
      ]
    },
    footer: {
      quickLinks: "روابط سريعة",
      products: "منتجاتنا",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  },
};

export const navLinks = content.en.nav;
export const products = content.en.products;
export const markets = content.en.markets.countries;
export const processSteps = content.en.process;
export const highlights = content.en.highlights;