export default function ProductCard({ image, title, department, oldPrice, newPrice }) {
  return (

    <div className="flex flex-col items-center text-center p-2 hover:shadow-md transition-all cursor-pointer bg-white group">

      <div className="w-full max-w-[170px] aspect-square mb-4 overflow-hidden">
        <img 
          src={image || "https://placehold.co/200x200/png?text=Product"} 
          alt={title} 
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h5 className="text-slate-800 font-bold text-[14px] mb-1 leading-tight">
        {title}
      </h5>
      <p className="text-gray-400 text-[12px] font-bold mb-3 uppercase tracking-wide">
        {department}
      </p>

      <div className="flex gap-2 text-[14px] font-bold">
        <span className="text-gray-300 font-medium">${oldPrice}</span>
        <span className="text-[#23856D]">${newPrice}</span>
      </div>
    </div>
  );
}