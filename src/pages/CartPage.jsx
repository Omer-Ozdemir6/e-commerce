import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, ChevronLeft, ShoppingBag } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { updateItemCount, removeFromCart, toggleItemCheck } from '../store/action/shoppingCartActions';

export default function CartPage() {
    const { cart } = useSelector((state) => state.shoppingCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalAmount = cart.reduce((acc, item) => 
        item.checked ? acc + (item.product.price * item.count) : acc, 0
    );

    const shippingFee = 29.90;
    const freeShippingThreshold = 500;

    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 md:px-20">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-[#252B42]">Alışveriş Sepetim</h2>
                    <button 
                        onClick={() => navigate(-1)} 
                        className="flex items-center gap-2 text-[#23A6F0] font-bold hover:underline transition-all"
                    >
                        <ChevronLeft size={20} /> Alışverişe Devam Et
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="flex-[2] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-full">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b text-[#737373] text-xs uppercase tracking-wider font-bold">
                                        <th className="p-6 w-16 text-center">Seç</th>
                                        <th className="p-6">Ürün Detayı</th>
                                        <th className="p-6 text-center">Adet</th>
                                        <th className="p-6">Birim Fiyat</th>
                                        <th className="p-6">Toplam</th>
                                        <th className="p-6"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {cart.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="p-20 text-center">
                                                <div className="flex flex-col items-center gap-4">
                                                    <ShoppingBag size={64} className="text-gray-200" />
                                                    <p className="text-gray-400 font-medium text-lg">Sepetiniz şu an boş.</p>
                                                    <button 
                                                        onClick={() => navigate("/shop")} 
                                                        className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1b8ecf] transition-all"
                                                    >
                                                        Hemen Keşfet
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        cart.map((item) => (
                                            <tr key={item.product.id} className="hover:bg-gray-50/50 transition-all group">
                                                <td className="p-6 text-center">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={item.checked} 
                                                        onChange={() => dispatch(toggleItemCheck(item.product.id))}
                                                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-[#23A6F0] focus:ring-[#23A6F0]"
                                                    />
                                                </td>
                                                <td className="p-6">
                                                    <Link 
                                                        to={`/shop/urun/${item.product.category_id}/${createSlug(item.product.name)}/${item.product.id}`}
                                                        className="flex items-center gap-4 group/item"
                                                    >
                                                        <img 
                                                            src={item.product.images[0]?.url} 
                                                            className="w-20 h-24 object-cover rounded shadow-sm group-hover/item:opacity-80 transition-all" 
                                                            alt={item.product.name} 
                                                        />
                                                        <div className="min-w-0">
                                                            <p className="font-bold text-slate-800 group-hover/item:text-[#23A6F0] transition-colors truncate w-48 md:w-64">
                                                                {item.product.name}
                                                            </p>
                                                            <p className="text-xs text-gray-400 mt-1 italic">Stok Durumu: {item.product.stock > 0 ? 'Mevcut' : 'Tükendi'}</p>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="p-6">
                                                    <div className="flex items-center justify-center gap-3 bg-gray-50 w-fit mx-auto rounded-lg p-1 border">
                                                        <button 
                                                            onClick={() => dispatch(updateItemCount(item.product.id, item.count - 1))}
                                                            disabled={item.count <= 1}
                                                            className="p-1.5 rounded-md hover:bg-white hover:text-red-500 disabled:opacity-30 transition-all"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="font-bold w-6 text-center text-sm">{item.count}</span>
                                                        <button 
                                                            onClick={() => dispatch(updateItemCount(item.product.id, item.count + 1))}
                                                            className="p-1.5 rounded-md hover:bg-white hover:text-[#23A6F0] transition-all"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="p-6 font-bold text-slate-600 text-sm">
                                                    {item.product.price.toFixed(2)} TL
                                                </td>
                                                <td className="p-6 font-extrabold text-[#23A6F0] text-sm">
                                                    {(item.product.price * item.count).toFixed(2)} TL
                                                </td>
                                                <td className="p-6 text-right">
                                                    <button 
                                                        onClick={() => dispatch(removeFromCart(item.product.id))}
                                                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                                        title="Ürünü Listeden Kaldır"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <aside className="lg:w-[380px] w-full space-y-4 lg:sticky lg:top-24">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-wide">Sipariş Özeti</h3>
                            
                            <div className="space-y-4 mb-8 text-sm">
                                <div className="flex justify-between text-[#737373]">
                                    <span>Ürünün Toplamı</span>
                                    <span className="font-bold text-slate-800">{totalAmount.toFixed(2)} TL</span>
                                </div>
                                <div className="flex justify-between text-[#737373]">
                                    <span>Kargo Toplam</span>
                                    <span className="font-bold text-slate-800">{shippingFee.toFixed(2)} TL</span>
                                </div>
                                {totalAmount >= freeShippingThreshold && (
                                    <div className="flex justify-between text-green-500 italic font-medium">
                                        <span>{freeShippingThreshold} TL Üzeri Kargo Bedava</span>
                                        <span className="font-bold">-{shippingFee.toFixed(2)} TL</span>
                                    </div>
                                )}
                            </div>
                            
                            <hr className="border-gray-100 mb-6" />
                            <div className="flex justify-between text-2xl font-extrabold text-slate-800 mb-8">
                                <span>Toplam</span>
                                <span className="text-[#23A6F0]">
                                    {(totalAmount >= freeShippingThreshold ? totalAmount : totalAmount + shippingFee).toFixed(2)} TL
                                </span>
                            </div>
                            <button 
                                disabled={cart.filter(i => i.checked).length === 0}
                                className="w-full bg-[#23A6F0] text-white py-4 rounded-lg font-bold shadow-lg shadow-blue-100 hover:bg-[#1b8ecf] hover:-translate-y-1 transition-all active:scale-95 disabled:bg-gray-200 disabled:shadow-none disabled:translate-y-0"
                            >
                                Sepeti Onayla
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-dashed border-gray-200 flex gap-2">
                             <input type="text" placeholder="İndirim Kodu" className="flex-1 bg-gray-50 border-none rounded px-3 py-2 text-xs focus:ring-1 focus:ring-blue-500" />
                             <button className="bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold">Uygula</button>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}