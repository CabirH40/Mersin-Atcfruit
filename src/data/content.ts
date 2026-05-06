export const siteConfig = {
  name: "Atcfruit",
  location: "Mersin, Turkey",
  contact: {
    phone: "+90 5XX XXX XX XX",
    whatsapp: "+905XXXXXXXXX",
    email: "info@atcfruit.com",
    address: "Mersin International Port Area, Mersin, Turkey",
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Markets", href: "/markets" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export const products = [
  {
    id: "bananas",
    name: "Premium Bananas",
    origin: "Ecuador & India",
    description: "High-quality bananas with controlled ripening levels, perfect for wholesale distribution.",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
    tags: ["Fresh", "Imported", "Wholesale"],
  },
  {
    id: "citrus",
    name: "Citrus Fruits",
    origin: "South Africa",
    description: "Fresh oranges and lemons imported directly from South African orchards, ready for regional export.",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
    tags: ["Citrus", "Export Ready", "Cold Stored"],
  },
  {
    id: "apples",
    name: "Fresh Apples",
    origin: "South Africa",
    description: "Crisp and carefully handled apples, maintained in optimal cold storage conditions.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=800",
    tags: ["Fresh", "Premium", "Regional"],
  },
  {
    id: "pomegranates",
    name: "Pomegranates",
    origin: "South Africa",
    description: "Vibrant, high-quality pomegranates prepared for international distribution and export.",
    image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?auto=format&fit=crop&q=80&w=800",
    tags: ["Fresh", "High Quality", "Export Ready"],
  },
];

export const markets = [
  "Turkey", "Turkmenistan", "Tajikistan", "Syria", "Iran", 
  "Iraq", "Uzbekistan", "Cyprus", "Georgia", "Azerbaijan"
];

export const processSteps = [
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
];

export const highlights = [
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
];