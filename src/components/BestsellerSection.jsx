import React from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/iceCream.png" },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/apple.jpg" },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/meats.jpg" },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/iceCream.png" },
  { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/apple.jpg" },
  { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/meats.jpg" },
];

export default function BestsellerSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="bg-[#FFD335] p-10 flex flex-col lg:w-[28%] min-h-[600px] relative overflow-hidden">

          <div className="z-10 relative">
            <h3 className="text-[#252B42] font-bold text-2xl uppercase mb-2 tracking-tight">
              FURNITURE
            </h3>
            <p className="text-[#252B42] text-sm font-bold opacity-80">
              5 Items
            </p>
          </div>

          <div className="absolute -bottom-10 -left-10 w-[120%] z-0">
            <img 
              src="/yellowBanner.jpg" 
              alt="Quinwah Product" 

              className="w-full h-auto object-contain transform -rotate-6" 
            />
          </div>
        </div>

        <div className="flex-1 lg:pl-10">
          <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-[#252B42] uppercase">Bestseller Products</h2>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6 text-[13px] font-bold text-gray-400">
                <span className="text-[#23A6F0] cursor-pointer">Men</span>
                <span className="hover:text-[#23A6F0] cursor-pointer transition">Women</span>
                <span className="hover:text-[#23A6F0] cursor-pointer transition">Accessories</span>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50"><ChevronLeft size={20} /></button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50"><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                title={product.title}
                department={product.department}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                image={product.img}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}