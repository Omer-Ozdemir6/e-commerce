import { Download } from 'lucide-react';

export default function PromoSection() {
  return (
    <section className="w-full bg-white py-8">

      <div className="container mx-auto flex flex-col lg:flex-row items-stretch overflow-hidden border border-gray-100 rounded-sm">
        

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-16 px-6 md:px-20 text-center bg-white">
          <div className="max-w-xs w-full flex flex-col items-center">

            <h5 className="text-[#252B42] font-bold text-base uppercase mb-4 tracking-wide">
              MOST POPULAR
            </h5>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </p>

            <div className="mb-6 w-full flex justify-center bg-[#F9F9F9] py-6 rounded-sm">
              <img 
                src="/package_jelly.jpg" 
                alt="Product Package" 
                className="h-44 object-contain" 
              />
            </div>

            <h4 className="text-[#252B42] font-bold text-sm mb-2">
              English Department
            </h4>
            
            <div className="flex items-center gap-2 text-[#737373] text-xs font-bold mb-4">
              <Download size={14} className="text-[#23A6F0]" />
              <span>15 Sales</span>
            </div>

            <div className="flex gap-2 font-bold mb-6 text-base">
              <span className="text-[#BDBDBD] line-through">$16.48</span>
              <span className="text-[#23856D]">$6.48</span>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#23A6F0] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
              <div className="w-6 h-6 rounded-full bg-[#23856D] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
              <div className="w-6 h-6 rounded-full bg-[#E77C40] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
              <div className="w-6 h-6 rounded-full bg-[#252B42] cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px] bg-[#FFD335]">
          <img 
            src="/burger_girl.jpg" 
            alt="Promo Woman" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
        </div>

      </div>
    </section>
  );
}