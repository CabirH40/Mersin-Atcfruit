import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: {
    name: string;
    origin: string;
    description: string;
    image: string;
    tags: string[];
    readiness: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <Badge className="bg-white/95 text-emerald-700 hover:bg-white border-none shadow-lg py-1.5 px-4 rounded-full font-bold flex items-center gap-2">
            <Globe size={14} /> {product.origin}
          </Badge>
          <Badge className="bg-amber-500 text-white border-none shadow-lg py-1.5 px-4 rounded-full font-bold flex items-center gap-2">
            <CheckCircle2 size={14} /> {product.readiness}
          </Badge>
        </div>
      </div>

      <CardContent className="p-8 flex-grow space-y-4">
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 leading-relaxed line-clamp-3 font-light">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {product.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-8 pt-0">
        <button className="w-full py-4 rounded-xl border border-slate-100 text-slate-900 font-bold text-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all flex items-center justify-center gap-2 group/btn">
          Product Details
          <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;