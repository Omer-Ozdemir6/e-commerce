import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Star, Heart, ShoppingCart, Eye, ChevronLeft, Loader2 } from 'lucide-react';
import BrandLogos from '../components/BrandLogos';
import ProductCard from '../components/ProductCard';
import { fetchProductDetail } from '../store/action/productActions';
import { addToCart } from '../store/action/shoppingCartActions'; 

export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId || params.id; 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeProduct, fetchState, productList } = useSelector((state) => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
      window.scrollTo(0, 0);
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    if (activeProduct) {
      dispatch(addToCart(activeProduct));
    }
  };
  if (fetchState === "FETCHING" || (!activeProduct && fetchState !== "FAILED")) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-[#23A6F0] mb-4" size={64} />
        <p className="text-[#737373] font-bold text-xl">Ürün detayları hazırlanıyor...</p>
      </div>
    );
  }
  if (fetchState === "FAILED") {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Ürün Yüklenemedi!</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 underline flex items-center gap-2">
          <ChevronLeft size={16} /> Geri Dön
        </button>
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
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#23A6F0] font-bold text-sm hover:underline">
          <ChevronLeft size={16} /> Geri Dön
        </button>
      </div>
      <section className="container mx-auto px-4 md:px-20 pb-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] bg-white rounded-sm overflow-hidden mb-4 shadow-sm group">
              {activeProduct?.images?.[0] ? (
                <img src={activeProduct.images[0].url} alt={activeProduct.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center italic text-gray-400">Görsel Yok</div>
              )}
            </div>
            <div className="flex gap-4">
               {activeProduct?.images?.map((img, idx) => (
                 <div key={idx} className="w-24 h-20 border rounded overflow-hidden cursor-pointer hover:border-blue-500 transition-all">
                   <img src={img.url} className="w-full h-full object-cover" alt="thumb" />
                 </div>
               ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col py-2">
            <h2 className="text-2xl font-medium text-[#252B42] mb-3">{activeProduct?.name}</h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#F3CD03]">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(activeProduct?.rating || 0) ? "currentColor" : "none"} />
                 ))}
              </div>
              <span className="text-sm font-bold text-[#737373] ml-2">{activeProduct?.sell_count} Satış</span>
            </div>

            <h3 className="text-3xl font-bold text-[#252B42] mb-2">{activeProduct?.price} TL</h3>
            <p className="text-sm font-bold text-[#737373] mb-8">
              Availability : <span className="text-[#23A6F0]">{activeProduct?.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </p>

            <p className="text-sm text-[#858585] mb-8 leading-relaxed">
              {activeProduct?.description}
            </p>

            <hr className="mb-8 border-gray-200" />

            <div className="flex items-center gap-4">
              <button 
                onClick={handleAddToCart}
                disabled={activeProduct?.stock === 0}
                className="bg-[#23A6F0] text-white px-10 py-3 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all active:scale-95 disabled:bg-gray-400"
              >
                {activeProduct?.stock > 0 ? "Sepete Ekle" : "Stokta Yok"}
              </button>
              <div className="flex gap-3">
                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"><Heart size={18} /></button>
                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"><ShoppingCart size={18} /></button>
                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"><Eye size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-gray-100 py-12 px-4 md:px-20">
        <div className="container mx-auto">
          <div className="flex justify-center gap-8 mb-10 text-sm font-bold text-[#737373] border-b border-gray-100">
            <span className="text-[#252B42] border-b-2 border-[#252B42] pb-4 cursor-pointer">Açıklama</span>
            <span className="pb-4 cursor-pointer hover:text-blue-500">Ek Bilgiler</span>
            <span className="pb-4 cursor-pointer hover:text-blue-500">Yorumlar ({activeProduct?.rating})</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-4">{activeProduct?.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{activeProduct?.description}</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4">Ürün Özellikleri</h4>
              <div className="flex justify-between text-sm border-b pb-2"><span className="text-gray-500">Stok Adedi</span><span className="font-bold">{activeProduct?.stock}</span></div>
              <div className="flex justify-between text-sm border-b pb-2"><span className="text-gray-500">Mağaza ID</span><span className="font-bold">{activeProduct?.store_id}</span></div>
              <div className="flex justify-between text-sm border-b pb-2"><span className="text-gray-500">Kategori ID</span><span className="font-bold">{activeProduct?.category_id}</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-20">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-[#252B42] uppercase mb-10 text-center md:text-left">İlginizi Çekebilir</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellerProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                title={product.name} 
                image={product.images[0]?.url} 
                newPrice={product.price} 
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#FAFAFA] py-12 border-t border-gray-100">
        <BrandLogos />
      </div>
    </div>
  );
}