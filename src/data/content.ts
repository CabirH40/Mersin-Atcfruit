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
      title: "Fresh Fruit Import & Distribution from Mersin to the Region",
      subtitle: "Atcfruit is a Mersin-based fruit import and distribution company specializing in bananas, citrus fruits, apples, and pomegranates, with cold storage and fast re-export solutions across regional markets.",
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
      hub: "Mersin Logistics Hub",
      countries: [
        "Turkey", "Turkmenistan", "Tajikistan", "Syria", "Iran", 
        "Iraq", "Uzbekistan", "Cyprus", "Georgia", "Azerbaijan"
      ],
    },
    process: [
      {
        title: "Import from Origin",
        description: "Fruits are sourced and imported from premium growers in Ecuador, India, and South Africa.",
        icon: "Ship",
      },
      {
        title: "Arrival at Mersin",
        description: "Shipments arrive at the strategic Port of Mersin for efficient handling.",
        icon: "Anchor",
      },
      {
        title: "Cold Storage",
        description: "Products are stored in state-of-the-art refrigerated facilities to maintain freshness.",
        icon: "Snowflake",
      },
      {
        title: "Reloading",
        description: "Fruits are carefully inspected and reloaded onto our specialized distribution fleet.",
        icon: "Truck",
      },
      {
        title: "Regional Distribution",
        description: "Fast delivery across Turkey and international regional markets.",
        icon: "Globe",
      },
    ],
    highlights: [
      {
        title: "Strategic Location",
        description: "Based in Mersin, the gateway to regional fruit distribution.",
        icon: "MapPin",
      },
      {
        title: "Cold Storage",
        description: "Advanced climate control to preserve peak freshness.",
        icon: "ThermometerSnowflake",
      },
      {
        title: "Wide Network",
        description: "Active distribution across 10+ regional markets.",
        icon: "Network",
      },
      {
        title: "Fast Delivery",
        description: "Optimized logistics for rapid turnaround and re-export.",
        icon: "Zap",
      },
    ],
  },
};

// Exporting top-level constants for component compatibility
export const navLinks = content.en.nav;
export const products = content.en.products;
export const markets = content.en.markets.countries;
export const processSteps = content.en.process;
export const highlights = content.en.highlights;