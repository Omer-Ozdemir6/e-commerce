import React from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Star, Heart, ShoppingCart, Eye, ChevronLeft } from 'lucide-react';
import BrandLogos from '../components/BrandLogos';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {

  const { id } = useParams();


  const bestsellerProducts = Array(8).fill({
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "16.48",
    newPrice: "6.48",
    image: "/white_cup.jpg"
  });

  return (
    <div className="w-full bg-[#FAFAFA]">
      

      <div className="container mx-auto px-4 md:px-20 py-6 flex items-center gap-2 text-sm font-bold">
        <span className="text-[#252B42]">Home</span>
        <ChevronRight size={16} className="text-[#BDBDBD]" />
        <span className="text-[#BDBDBD] cursor-pointer hover:text-[#23A6F0]">Shop</span>
      </div>


      <section className="container mx-auto px-4 md:px-20 pb-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          

          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] bg-white rounded-sm overflow-hidden mb-4 group">
              <img 
                src="/donut.jpg" 
                alt="Product Detail" 
                className="w-full h-full object-cover" 
              />

              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all">
                <ChevronLeft size={48} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all">
                <ChevronRight size={48} />
              </button>
            </div>

            <div className="flex gap-4">
              <div className="w-24 h-20 bg-gray-200 cursor-pointer overflow-hidden opacity-50 border hover:opacity-100 transition-all">
                <img src="/donut.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-20 bg-gray-200 cursor-pointer overflow-hidden border hover:opacity-100 transition-all">
                <img src="/donut.jpg" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col py-2">
            <h4 className="text-xl font-medium text-[#252B42] mb-3">Floating Phone</h4>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#F3CD03]">
                {[...Array(4)].map((_, i) => <Star key={i} size={18} fill="currentColor"/>)}
                <Star size={18} />
              </div>
              <span className="text-sm font-bold text-[#737373]">10 Reviews</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#252B42] mb-2">$1,139.33</h3>
            <p className="text-sm font-bold text-[#737373] mb-8">
              Availability : <span className="text-[#23A6F0]">In Stock</span>
            </p>
            
            <p className="text-sm text-[#858585] mb-8 leading-relaxed max-w-sm">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            <hr className="border-gray-200 mb-8 w-full" />

            <div className="flex gap-3 mb-12">
              <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
              <div className="w-8 h-8 rounded-full bg-[#23856D] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
              <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
              <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all">
                Select Options
              </button>
              <div className="flex gap-3">
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-[#252B42]" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                  <ShoppingCart size={20} className="text-[#252B42]" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                  <Eye size={20} className="text-[#252B42]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-12 px-4 md:px-20 border-t border-gray-100">
        <div className="container mx-auto">

          <div className="flex justify-center gap-6 md:gap-12 mb-12 text-sm font-bold text-[#737373]">
            <span className="text-[#252B42] border-b-2 border-[#252B42] pb-4 cursor-pointer">Description</span>
            <span className="hover:text-[#252B42] pb-4 cursor-pointer">Additional Information</span>
            <span className="hover:text-[#252B42] pb-4 cursor-pointer">Reviews (0)</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            <div className="h-[350px] rounded-lg overflow-hidden shadow-md">
              <img src="/donut.jpg" alt="Description" className="w-full h-full object-cover" />
            </div>
            

            <div className="space-y-6">
              <h5 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over</h5>
              <p className="text-sm text-[#737373] leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            

            <div className="space-y-6">
               <h5 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over</h5>
               <ul className="space-y-3">
                 {[1,2,3].map(i => (
                   <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#737373]">
                     <ChevronRight size={16} className="text-[#BDBDBD] flex-shrink-0" />
                     <span>the quick fox jumps over the lazy dog</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 md:px-20">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-[#252B42] uppercase mb-10 text-center md:text-left">
            Bestseller Products
          </h3>
          <hr className='mb-10 border-gray-100'/>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {bestsellerProducts.map((product, idx) => (
              <ProductCard 
                key={idx}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>


      <div className='bg-[#FAFAFA] py-12 border-t border-gray-100'>
        <BrandLogos />
      </div>

    </div>
  );
}