import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/content";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-emerald-100 max-w-2xl">
            Premium fruit selection imported from the world's best origins and distributed with care.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wholesale & Distribution</h2>
          <p className="text-lg text-slate-600 mb-10">
            We provide flexible supply solutions for wholesalers, retailers, and regional distributors. Our products are available in various packaging options and ripening stages to meet your specific needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-amber-500 font-bold text-xl mb-2">Bulk Supply</div>
              <p className="text-sm text-slate-500">Container-level imports for large scale needs.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-emerald-600 font-bold text-xl mb-2">Ripening Control</div>
              <p className="text-sm text-slate-500">Customized ripening for bananas.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-blue-500 font-bold text-xl mb-2">Cold Chain</div>
              <p className="text-sm text-slate-500">100% refrigerated transport and storage.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;