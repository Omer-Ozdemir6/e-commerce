import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPreviousOrders } from '../store/action/orderActions';
import { ChevronDown, ChevronUp, Package, Calendar, CreditCard } from 'lucide-react';

export default function PreviousOrdersPage() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.shoppingCart.previousOrders || []);
    const [openOrder, setOpenOrder] = useState(null);

    useEffect(() => {
        dispatch(fetchPreviousOrders());
    }, [dispatch]);

    return (
        <div className="bg-[#F6F6F6] min-h-screen py-10 px-4 md:px-20">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-2xl font-black text-[#252B42] mb-8 flex items-center gap-3">
                    <Package className="text-[#23A6F0]" /> Siparişlerim
                </h1>

                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                            <div 
                                onClick={() => setOpenOrder(openOrder === order.id ? null : order.id)}
                                className="p-6 cursor-pointer hover:bg-gray-50 transition-all flex flex-wrap justify-between items-center gap-4"
                            >
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sipariş Tarihi</p>
                                        <p className="text-sm font-bold text-slate-700">{new Date(order.order_date).toLocaleDateString('tr-TR')}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Toplam Tutar</p>
                                        <p className="text-sm font-bold text-[#23A6F0]">{order.price.toFixed(2)} TL</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-full uppercase">Sipariş Alındı</span>
                                    {openOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>
                            {openOrder === order.id && (
                                <div className="p-6 border-t bg-blue-50/20 animate-in slide-in-from-top duration-300">
                                    <h4 className="font-bold text-sm mb-4 border-b pb-2">Ürün Detayları</h4>
                                    <div className="space-y-3">
                                        {order.products.map((p, idx) => (
                                            <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-xs border border-gray-100">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-[#23A6F0] font-bold">{p.count}x</div>
                                                    <p className="text-sm font-medium text-slate-600">{p.detail}</p>
                                                </div>
                                                <p className="text-sm font-bold text-slate-800">Ürün ID: {p.product_id}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {orders.length === 0 && <p className="text-center text-gray-400 italic">Henüz bir siparişiniz bulunmuyor.</p>}
                </div>
            </div>
        </div>
    );
}