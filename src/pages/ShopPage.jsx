import { ChevronRight, LayoutGrid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import BrandLogos from '../components/BrandLogos';

const categories = [
  { name: "PRODUCT", items: 5, img: "/iceCream.png" },
  { name: "PRODUCT", items: 5, img: "/apple.jpg" },
  { name: "PRODUCT", items: 5, img: "/meats.jpg" },
  { name: "PRODUCT", items: 5, img: "/meats.jpg" },
  { name: "PRODUCT", items: 5, img: "/meats.jpg" },
];

const shopProducts = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/iceCream.png" },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/apple.jpg" },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/meats.jpg" },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/iceCream.png" },
  { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/apple.jpg" },
  { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/meats.jpg" },
  { id: 7, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/iceCream.png" },
  { id: 8, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/apple.jpg" },
  { id: 9, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/meats.jpg" },
  { id: 10, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/iceCream.png" },
  { id: 11, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/apple.jpg" },
  { id: 12, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", image: "/meats.jpg" },
];

export default function ShopPage() {
  return (
    <div className="w-full bg-white">

      <section className="bg-[#FAFAFA] py-8 px-4 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-[#252B42]">Home</span>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] pb-12 px-4 md:px-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative h-60 group cursor-pointer overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white">
                <h5 className="font-bold text-base uppercase tracking-tight">{cat.name}</h5>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold text-[#737373]">Showing all 12 results</p>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-[#737373]">Views:</span>
            <div className="flex gap-2">
              <button className="p-3 border border-[#ECECEC] rounded-md text-[#252B42]"><LayoutGrid size={16} /></button>
              <button className="p-3 border border-[#ECECEC] rounded-md text-[#737373]"><List size={16} /></button>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <select className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm p-3 rounded-md outline-none flex-grow md:flex-grow-0">
              <option>Popularity</option>
            </select>
            <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-colors">
              Filter
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {shopProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex border border-[#E8E8E8] rounded-md overflow-hidden font-bold text-sm shadow-sm">
            <button className="px-6 py-5 bg-[#F3F3F3] text-[#BDBDBD] hover:bg-gray-100">First</button>
            <button className="px-5 py-5 text-[#23A6F0] border-x border-[#E8E8E8] hover:bg-blue-50">1</button>
            <button className="px-5 py-5 text-white bg-[#23A6F0]">2</button>
            <button className="px-5 py-5 text-[#23A6F0] border-x border-[#E8E8E8] hover:bg-blue-50">3</button>
            <button className="px-6 py-5 text-[#23A6F0] hover:bg-blue-50">Next</button>
          </div>
        </div>
      </section>


      <section className="bg-[#FAFAFA]">
        <BrandLogos />
      </section>

    </div>
  );
}