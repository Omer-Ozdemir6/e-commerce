import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight, LayoutGrid, List, Loader2 } from "lucide-react";
import ProductCard from "../components/ProductCard";
import BrandLogos from "../components/BrandLogos";
import { fetchProducts, fetchCategories, setOffset } from "../store/action/productActions";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const { productList, total, fetchState, categories, limit, offset } = useSelector((state) => state.product);

  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const params = {
      category: categoryId,
      filter: filterText,
      sort: sortOption,
      limit: limit,
      offset: offset
    };
    
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, filterText, sortOption, limit, offset]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  const handlePageChange = (page) => {
    const newOffset = (page - 1) * limit;
    dispatch(setOffset(newOffset));
    window.scrollTo(0, 0);
  };

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="w-full bg-white">

      <section className="bg-[#FAFAFA] py-8 px-4 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42]">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] pb-12 px-4 md:px-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topCategories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`}
              className="relative h-60 group cursor-pointer overflow-hidden rounded-md"
            >
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white">
                <h5 className="font-bold text-base uppercase tracking-tight">{cat.title}</h5>
                <p className="text-sm">Rating: {cat.rating}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold text-[#737373]">
            Showing {productList.length} of {total} results
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-[#737373]">Views:</span>
            <div className="flex gap-2">
              <button className="p-3 border border-[#ECECEC] rounded-md text-[#252B42]"><LayoutGrid size={16} /></button>
              <button className="p-3 border border-[#ECECEC] rounded-md text-[#737373]"><List size={16} /></button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">

            <input 
              type="text"
              placeholder="Filter products..."
              className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm p-3 rounded-md outline-none w-full sm:w-48"
              onChange={(e) => {
                setFilterText(e.target.value);
                dispatch(setOffset(0));
              }}
            />

            <select 
              className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm p-3 rounded-md outline-none w-full sm:w-auto"
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                dispatch(setOffset(0));
              }}
            >
              <option value="">Sort By</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20 min-h-[400px]">
        {fetchState === "FETCHING" ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-[#23A6F0] mb-4" size={50} />
            <p className="text-[#737373] font-bold">Yükleniyor...</p>
          </div>
        ) : (
          <>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
              {productList.map((product) => (
                <ProductCard 
                  key={product.id} 
                  id={product.id}
                  title={product.name}
                  department={product.description}
                  newPrice={product.price}
                  image={product.images[0]?.url}
                  rating={product.rating}
                />
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <div className="flex border border-[#E8E8E8] rounded-md overflow-hidden font-bold text-sm shadow-sm">
                <button 
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="px-6 py-5 bg-[#F3F3F3] text-[#23A6F0] hover:bg-gray-100 disabled:text-[#BDBDBD]"
                >
                  First
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                  const page = idx + 1;

                  if (page >= currentPage - 2 && page <= currentPage + 2) {
                    return (
                      <button 
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-5 py-5 border-x border-[#E8E8E8] transition-colors ${
                          currentPage === page ? "bg-[#23A6F0] text-white" : "text-[#23A6F0] hover:bg-blue-50"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })}

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-6 py-5 text-[#23A6F0] hover:bg-blue-50 disabled:text-[#BDBDBD]"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="bg-[#FAFAFA]">
        <BrandLogos />
      </section>
    </div>
  );
}