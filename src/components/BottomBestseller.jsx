import ProductCard from './ProductCard';

const bestsellerItems = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/blue_thing.png" },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/blackYellow_chesee.jpg" },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/white_cup.jpg" },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", img: "/werther_original.jpg" },
];

export default function BottomBestseller() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-20">
      <div className="container mx-auto">

        <div className="mb-12 text-left">
          <h3 className="text-xl font-bold text-[#252B42] uppercase tracking-tight">
            BESTSELLER PRODUCTS
          </h3>
          <div className="w-full h-[1px] bg-gray-100 mt-4"></div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestsellerItems.map((item) => (

            <ProductCard 
              key={item.id}
              title={item.title}
              department={item.department}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              image={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}