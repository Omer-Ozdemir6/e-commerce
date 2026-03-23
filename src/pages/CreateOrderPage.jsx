import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses, deleteAddress } from '../store/action/addressActions';
import AddressForm from '../components/AddressForm';
import { Plus, Trash2, Edit2, MapPin, Phone, User, CheckCircle2 } from 'lucide-react';

export default function CreateOrderPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.shoppingCart);
    const addressList = useSelector(state => state.shoppingCart.addressList || []);
    
    const [activeStep, setActiveStep] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState(null);
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [isSameAddress, setIsSameAddress] = useState(true);

    const totalAmount = cart.reduce((acc, item) => 
        item.checked ? acc + (item.product.price * item.count) : acc, 0
    );
    const shippingFee = totalAmount > 500 ? 0 : 29.90;
    const grandTotal = totalAmount + shippingFee;

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    return (
        <div className="bg-[#F3F3F3] min-h-screen py-10 px-4 md:px-20">
            <div className="container mx-auto">

                <div className="flex gap-4 mb-8">
                    <div className={`flex-1 p-5 rounded-t-xl border-b-4 transition-all bg-white ${activeStep === 1 ? 'border-[#23A6F0]' : 'border-gray-200'}`}>
                        <h3 className={`font-bold flex items-center gap-2 ${activeStep === 1 ? 'text-[#23A6F0]' : 'text-gray-400'}`}>
                            <span className="text-2xl font-black italic">1</span> Adres Bilgileri
                        </h3>
                    </div>
                    <div className={`flex-1 p-5 rounded-t-xl border-b-4 transition-all bg-white ${activeStep === 2 ? 'border-[#23A6F0]' : 'border-gray-200 opacity-50'}`}>
                        <h3 className="text-gray-400 font-bold flex items-center gap-2">
                            <span className="text-2xl font-black italic">2</span> Ödeme Seçenekleri
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    
                    <div className="flex-[3] space-y-6">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-bold text-[#252B42]">Teslimat Adresi</h2>
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-500 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={isSameAddress} 
                                        onChange={() => setIsSameAddress(!isSameAddress)}
                                        className="w-4 h-4 accent-[#23A6F0]"
                                    /> Faturamı Aynı Adrese Gönder
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div 
                                    onClick={() => { setEditData(null); setShowForm(true); }}
                                    className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-blue-50/50 hover:border-[#23A6F0] transition-all group"
                                >
                                    <div className="bg-gray-100 p-3 rounded-full group-hover:bg-blue-100 transition-all">
                                        <Plus className="text-[#23A6F0]" size={32}/>
                                    </div>
                                    <span className="font-bold text-slate-600">Yeni Adres Ekle</span>
                                </div>

        {addressList.map(addr => (
    <div 
        key={addr.id} 
        className={`p-5 border-2 rounded-xl cursor-pointer relative transition-all ${selectedShipping === addr.id ? 'border-[#23A6F0] bg-blue-50/20' : 'border-gray-100 bg-white'}`}
        onClick={() => setSelectedShipping(addr.id)}
    >
        <div className="flex justify-between items-start mb-4">
            <span className="font-bold text-xs uppercase tracking-widest text-[#252B42]">{addr.title}</span>

            <div className="flex gap-3">
                <button 
                    onClick={(e) => { 
                        e.stopPropagation();
                        setEditData(addr); 
                        setShowForm(true); 
                    }} 
                    className="text-gray-400 hover:text-[#23A6F0] transition-colors"
                    title="Düzenle"
                >
                    <Edit2 size={16} />
                </button>
                <button 
                    onClick={(e) => { 
                        e.stopPropagation();
                        if(window.confirm(`${addr.title} isimli adresi silmek istediğinize emin misiniz?`)) {
                            dispatch(deleteAddress(addr.id));
                        }
                    }} 
                    className="text-gray-300 hover:text-red-500 transition-colors"
                    title="Sil"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>

        <div className="space-y-2 text-xs text-slate-600">
            <p className="font-bold text-slate-800 flex items-center gap-2"><User size={14} className="text-[#23A6F0]"/> {addr.name} {addr.surname}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#23A6F0]"/> {addr.phone}</p>
            <p className="leading-relaxed mt-2">{addr.neighborhood}, {addr.district}/{addr.city}</p>
        </div>
    </div>
))}
                            </div>
                        </div>
                    </div>
                    <aside className="flex-1 min-w-[350px] space-y-4">
                        <button className="w-full bg-[#23A6F0] text-white py-4 rounded-lg font-bold shadow-lg hover:shadow-blue-200 transition-all text-lg">
                            Kaydet ve Devam Et
                        </button>
                        
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-xl text-[#252B42] mb-8 uppercase tracking-wide">Sipariş Özeti</h3>
                            <div className="space-y-5 text-sm">
                                <div className="flex justify-between text-gray-500 font-medium">
                                    <span>Ürünün Toplamı</span>
                                    <span className="text-[#252B42] font-bold">{totalAmount.toFixed(2)} TL</span>
                                </div>
                                <div className="flex justify-between text-gray-500 font-medium">
                                    <span>Kargo Toplam</span>
                                    <span className="text-[#252B42] font-bold">29.90 TL</span>
                                </div>
                                {totalAmount >= 500 && (
                                    <div className="flex justify-between text-green-500 italic font-bold">
                                        <span>500 TL Üzeri Kargo Bedava</span>
                                        <span>-29.90 TL</span>
                                    </div>
                                )}
                                <hr className="border-gray-50"/>
                                <div className="flex justify-between text-2xl font-black text-[#252B42]">
                                    <span>Toplam</span>
                                    <span className="text-[#23A6F0]">{grandTotal.toFixed(2)} TL</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200 flex gap-2">
                             <input type="text" placeholder="İndirim Kodu" className="flex-1 bg-gray-50 border-none rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#23A6F0]" />
                             <button className="bg-[#252B42] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-slate-700 transition-all">Uygula</button>
                        </div>
                    </aside>
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
                    <div className="relative z-[1000] w-full max-w-lg">
                        <AddressForm 
                            editAddress={editData} 
                            closeForm={() => setShowForm(false)} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}