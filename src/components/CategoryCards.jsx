const categories = [
  { id: 1, title: "Unique Life", sub: "Explore Items", img: "/iceCream.png" },
  { id: 2, title: "Elements Style", sub: "Explore Items", img: "/apple.jpg" },
  { id: 3, title: "Elements Style", sub: "Explore Items", img: "/meats.jpg" },
];

export default function CategoryCards() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-center">
        {categories.map((item) => (
          <div key={item.id} className="bg-white flex-1 flex items-center p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Your Space</span>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="text-xs text-blue-500 font-bold mt-2 cursor-pointer uppercase">{item.sub}</p>
            </div>
            <div className="w-24 h-24">
              <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}