import { Link } from "react-router-dom";
import slugify from "slugify";

export default function ProductCard({ id, title, image, newPrice, rating, category_id, gender }) {

  const nameSlug = slugify(title, { lower: true });

  const detailUrl = `/shop/kadin/ceket/3/${nameSlug}/${id}`;

  return (
    <Link 
      to={detailUrl} 
      className="group cursor-pointer flex flex-col h-full bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-xl overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-4 flex flex-col flex-grow items-center text-center">
        <h5 className="font-bold text-[#252B42] text-base mb-2">{title}</h5>
        <p className="text-[#737373] text-sm font-bold mb-3">English Department</p>
        <div className="flex gap-2 mb-2">
          <span className="text-[#23A6F0] font-bold">{newPrice} TL</span>
        </div>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
           ★ {rating}
        </div>
      </div>
    </Link>
  );
}