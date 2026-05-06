import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const location = useLocation();
  const siteTitle = "Atcfruit | Premium Fruit Import & Distribution";
  const defaultDescription = "Atcfruit is a Mersin-based fruit import and distribution company specializing in bananas, citrus fruits, apples, and pomegranates with cold storage and regional re-export solutions.";

  useEffect(() => {
    document.title = `${title} | Atcfruit`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || defaultDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description || defaultDescription;
      document.head.appendChild(meta);
    }
  }, [title, description, location]);

  return null;
};

export default SEO;