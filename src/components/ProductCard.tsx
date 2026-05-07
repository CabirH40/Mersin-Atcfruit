import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border-none shadow-2xl hover:shadow-[0_30px_60px_rgba(0,92,58,0.15)] transition-all duration-500 rounded-[3rem] bg-white flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-8 left-8 flex flex-col gap-3">
            <Badge className="bg-white/95 text-primary hover:bg-white border-none shadow-xl py-2 px-5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 backdrop-blur-md">
              <Globe size={14} className="text-secondary" /> {product.origin}
            </Badge>
            <Badge className="bg-secondary text-primary border-none shadow-xl py-2 px-5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 size={14} /> {product.readiness}
            </Badge>
          </div>
        </div>

        <CardContent className="p-10 flex-grow space-y-6">
          <h3 className="text-3xl font-black text-primary group-hover:text-secondary transition-colors duration-300 tracking-tighter">
            {product.name}
          </h3>
          <p className="text-slate-500 leading-relaxed line-clamp-3 font-medium text-lg">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {product.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 group-hover:border-primary/20 group-hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-10 pt-0">
          <button className="w-full py-5 rounded-2xl border-2 border-slate-100 text-primary font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-3 group/btn shadow-sm">
            Product Details
            <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={20} />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;