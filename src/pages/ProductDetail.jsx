import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Star, Heart, ShoppingCart, Eye, ChevronLeft, Loader2 } from 'lucide-react';
import BrandLogos from '../components/BrandLogos';
import ProductCard from '../components/ProductCard';
import { fetchProductDetail } from '../store/action/productActions';

export default function ProductDetail() {

  const params = useParams();
  const productId = params.productId || params.id; 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeProduct, fetchState, productList } = useSelector((state) => state.product);

  console.log("DEBUG -> URL Parametreleri:", params);
  console.log("DEBUG -> Çekilen productId:", productId);
  console.log("DEBUG -> Store'daki Ürün:", activeProduct);
  console.log("DEBUG -> Güncel Fetch Durumu:", fetchState);

  useEffect(() => {
    if (productId) {
      console.log("DEBUG -> fetchProductDetail tetikleniyor...");
      dispatch(fetchProductDetail(productId));
    }
  }, [dispatch, productId]);


  if (fetchState === "FETCHING" || (!activeProduct && fetchState !== "FAILED")) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-[#23A6F0] mb-4" size={64} />
        <p className="text-[#737373] font-bold text-xl">Ürün detayları hazırlanıyor...</p>
        <p className="text-xs text-gray-400 mt-2">ID: {productId || "Bulunamadı"}</p>
      </div>
    );
  }

  if (fetchState === "FAILED") {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Ürün Yüklenemedi!</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 underline">Geri Dön</button>
      </div>
    );
  }

  const bestsellerProducts = productList.slice(0, 8);

  return (
    <div className="w-full bg-[#FAFAFA]">

      <div className="container mx-auto px-4 md:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" onClick={() => navigate("/")}>Home</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD] cursor-pointer hover:text-[#23A6F0]" onClick={() => navigate("/shop")}>Shop</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD] truncate max-w-[150px]">{activeProduct?.name}</span>
        </div>
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#23A6F0] font-bold text-sm">
          <ChevronLeft size={16} /> Geri Dön
        </button>
      </div>


      <section className="container mx-auto px-4 md:px-20 pb-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] bg-white rounded-sm overflow-hidden mb-4 shadow-sm">
              {activeProduct?.images?.[0] ? (
                <img src={activeProduct.images[0].url} alt={activeProduct.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">Resim Yok</div>
              )}
            </div>
          </div>

          <div className="flex-1 flex flex-col py-2">
            <h4 className="text-xl font-medium text-[#252B42] mb-3">{activeProduct?.name}</h4>
            <div className="flex items-center gap-2 mb-6 text-[#F3CD03]">
               {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(activeProduct?.rating || 0) ? "currentColor" : "none"} />
               ))}
               <span className="text-sm font-bold text-[#737373] ml-2">{activeProduct?.sell_count} Satış</span>
            </div>
            <h3 className="text-2xl font-bold text-[#252B42] mb-2">{activeProduct?.price} TL</h3>
            <p className="text-sm font-bold text-[#737373] mb-8">
              Availability : <span className="text-[#23A6F0]">{activeProduct?.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </p>
            <p className="text-sm text-[#858585] mb-8">{activeProduct?.description}</p>
            
            <button className="bg-[#23A6F0] text-white w-fit px-10 py-3 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all">
              Sepete Ekle
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-20">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-[#252B42] uppercase mb-10">İlginizi Çekebilir</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} {...product} title={product.name} image={product.images[0]?.url} newPrice={product.price} />
            ))}
          </div>
        </div>
      </section>

      <div className='bg-[#FAFAFA] py-12'><BrandLogos /></div>
    </div>
  );
}