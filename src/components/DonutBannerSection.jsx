import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/iceCream.png" },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/apple.jpg" },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/meats.jpg" },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/iceCream.png" },
  { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/apple.jpg" },
  { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/meats.jpg" },
];

export default function DonutBannerSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse border border-gray-100 rounded-sm">

        <div className="lg:w-[33%] min-h-[600px] relative overflow-hidden group">
          

          <img 
            src="/donut.jpg" 
            alt="Furniture Banner" 

            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
          />
          

          <div className="absolute inset-0 bg-black opacity-10 z-0"></div>


          <div className="absolute top-10 left-10 z-10 text-white">
            <h3 className="font-bold text-2xl uppercase mb-2 tracking-tight">FURNITURE</h3>
            <p className="text-sm font-bold opacity-90">5 Items</p>
          </div>
        </div>

        <div className="flex-1 p-8 lg:pr-10 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-[#252B42] uppercase tracking-tight mb-4 md:mb-0">
              Bestseller Products
            </h2>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6 text-[13px] font-bold text-gray-400">
                <span className="text-[#23A6F0] cursor-pointer">Men</span>
                <span className="hover:text-[#23A6F0] cursor-pointer transition">Women</span>
                <span className="hover:text-[#23A6F0] cursor-pointer transition">Accessories</span>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
                  <ChevronRight size={20} />
                </button>
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