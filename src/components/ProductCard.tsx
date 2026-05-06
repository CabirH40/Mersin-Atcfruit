import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface ProductCardProps {
  product: {
    name: string;
    origin: string;
    description: string;
    image: string;
    tags: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg group h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-emerald-700 hover:bg-white flex items-center gap-1 py-1 px-3">
            <Globe size={14} /> {product.origin}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
        <p className="text-slate-600 mb-6 line-clamp-3">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase tracking-widest font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="w-full h-px bg-slate-100 mb-4" />
        <button className="text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors flex items-center gap-2">
          Learn More
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;