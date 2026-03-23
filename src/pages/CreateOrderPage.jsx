import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses, deleteAddress } from '../store/action/addressActions';
import { fetchCards, deleteCard } from '../store/action/paymentActions';
import AddressForm from '../components/AddressForm';
import CardForm from '../components/CardForm';
import { Plus, Trash2, Edit2, User, Phone, CreditCard, ChevronRight, Check, Info } from 'lucide-react';

export default function CreateOrderPage() {
    const dispatch = useDispatch();
    const { cart, addressList, cardList } = useSelector((state) => state.shoppingCart);
    
    const [activeStep, setActiveStep] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [showCardForm, setShowCardForm] = useState(false);
    const [editData, setEditData] = useState(null);
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isSameAddress, setIsSameAddress] = useState(true);
    const [agreed, setAgreed] = useState(false);


    const activeAddress = addressList?.find(a => a.id === selectedShipping);


    const totalAmount = cart.reduce((acc, item) => 
        item.checked ? acc + (item.product.price * item.count) : acc, 0
    );
    const shippingFee = totalAmount >= 500 ? 0 : 29.90;
    const grandTotal = totalAmount + shippingFee;

    useEffect(() => {
        dispatch(fetchAddresses());
        dispatch(fetchCards());
    }, [dispatch]);

    const handleNextStep = () => {
        if (activeStep === 1) {
            if (!selectedShipping) return alert("Lütfen devam etmek için bir adres seçin!");
            setActiveStep(2);
        } else {
            if (!selectedCard) return alert("Lütfen ödeme için bir kart seçin!");
            if (!agreed) return alert("Lütfen satış sözleşmesini onaylayın!");
            alert("Siparişiniz başarıyla alındı! Teşekkür ederiz.");
        }
    };

    return (
        <div className="bg-[#F6F6F6] min-h-screen py-8 px-4 md:px-20 font-sans">
            <div className="container mx-auto">

                <div className="flex bg-white rounded-lg shadow-sm mb-6 overflow-hidden border border-gray-100">
                    <div 
                        onClick={() => setActiveStep(1)}
                        className={`flex-1 p-5 cursor-pointer border-r transition-all ${activeStep === 1 ? 'border-b-4 border-[#23A6F0] bg-blue-50/10' : ''}`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className={`font-bold text-lg ${activeStep === 1 ? 'text-[#23A6F0]' : 'text-gray-400'}`}>Adres Bilgileri</h3>
                                {activeAddress && (
                                    <p className="text-xs text-gray-500 mt-1 truncate w-48 md:w-64">
                                        <span className="font-bold text-slate-700">{activeAddress.title}:</span> {activeAddress.neighborhood}
                                    </p>
                                )}
                            </div>
                            {activeStep === 2 && <button className="text-[10px] text-[#23A6F0] font-bold border border-[#23A6F0] px-2 py-1 rounded hover:bg-blue-50">DEĞİŞTİR</button>}
                        </div>
                    </div>
                    <div 
                        className={`flex-1 p-5 border-l transition-all ${activeStep === 2 ? 'border-b-4 border-[#23A6F0] bg-blue-50/10' : 'opacity-50'}`}
                    >
                        <h3 className={`font-bold text-lg ${activeStep === 2 ? 'text-[#23A6F0]' : 'text-gray-400'}`}>Ödeme Seçenekleri</h3>
                        <p className="text-[10px] text-gray-400 mt-1 italic">Güvenli ödeme yöntemini seçiniz.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-[3] w-full space-y-6">
                        
                        {activeStep === 1 ? (

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-xl font-bold text-[#252B42]">Teslimat Adresi</h2>
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-500 cursor-pointer">
                                        <input type="checkbox" checked={isSameAddress} onChange={() => setIsSameAddress(!isSameAddress)} className="w-4 h-4 accent-[#23A6F0]" /> 
                                        Faturamı Aynı Adrese Gönder
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div onClick={() => { setEditData(null); setShowForm(true); }} className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-blue-50/50 hover:border-[#23A6F0] transition-all group h-44">
                                        <Plus className="text-[#23A6F0]" size={32}/>
                                        <span className="font-bold text-slate-600">Yeni Adres Ekle</span>
                                    </div>
                                    {addressList.map(addr => (
                                        <div key={addr.id} className={`p-5 border-2 rounded-xl cursor-pointer relative transition-all h-44 ${selectedShipping === addr.id ? 'border-[#23A6F0] bg-blue-50/10' : 'border-gray-100 bg-white'}`} onClick={() => setSelectedShipping(addr.id)}>
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="font-bold text-xs uppercase tracking-widest text-[#252B42]">{addr.title}</span>
                                                <div className="flex gap-3">
                                                    <button onClick={(e) => { e.stopPropagation(); setEditData(addr); setShowForm(true); }} className="text-gray-400 hover:text-[#23A6F0]"><Edit2 size={16} /></button>
                                                    <button onClick={(e) => { e.stopPropagation(); if(window.confirm("Bu adresi silmek istediğinize emin misiniz?")) dispatch(deleteAddress(addr.id)); }} className="text-gray-300 hover:text-red-500"><Trash2 size={16} /></button>
                                                </div>
                                            </div>
                                            <div className="space-y-2 text-xs text-slate-600">
                                                <p className="font-bold text-slate-800 flex items-center gap-2"><User size={14} className="text-[#23A6F0]"/> {addr.name} {addr.surname}</p>
                                                <p className="flex items-center gap-2"><Phone size={14} className="text-[#23A6F0]"/> {addr.phone}</p>
                                                <p className="leading-relaxed mt-1 line-clamp-2">{addr.neighborhood}, {addr.district}/{addr.city}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-[#F8FBFF] p-5 border-b border-blue-50 flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full border-2 border-[#23A6F0] flex items-center justify-center">
                                        <div className="w-3 h-3 bg-[#23A6F0] rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#23A6F0]">Kart ile Öde</h3>
                                        <p className="text-[11px] text-gray-500">Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.</p>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col xl:flex-row gap-12">

                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="font-bold text-sm text-slate-700">Kart Bilgileri</h4>
                                            <button onClick={() => setShowCardForm(true)} className="text-xs text-[#23A6F0] font-bold underline">Başka bir Kart ile Öde</button>
                                        </div>
                                        <div className="space-y-3">
                                            {cardList.map(card => (
                                                <div 
                                                    key={card.id} 
                                                    className={`p-4 border-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${selectedCard === card.id ? 'border-[#23A6F0] bg-blue-50/20' : 'border-gray-100'}`} 
                                                    onClick={() => setSelectedCard(card.id)}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedCard === card.id ? 'border-[#23A6F0]' : 'border-gray-300'}`}>
                                                            {selectedCard === card.id && <div className="w-2 h-2 bg-[#23A6F0] rounded-full"></div>}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-sm text-slate-800">{card.name_on_card}</p>
                                                            <p className="text-xs text-gray-500">**** **** **** {card.card_no.slice(-4)}</p>
                                                        </div>
                                                    </div>
                                                    <button onClick={(e) => { e.stopPropagation(); if(window.confirm("Bu kartı silmek istiyor musunuz?")) dispatch(deleteCard(card.id)); }} className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-slate-700 mb-4">Taksit Seçenekleri</h4>
                                        <div className="border rounded-lg overflow-hidden">
                                            <table className="w-full text-xs">
                                                <thead className="bg-gray-50 text-gray-500 border-b">
                                                    <tr>
                                                        <th className="p-3 text-left font-bold">Taksit Sayısı</th>
                                                        <th className="p-3 text-left font-bold">Aylık Ödeme</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="p-4 flex items-center gap-2">
                                                            <input type="radio" checked readOnly className="accent-[#23A6F0]"/> Tek Çekim
                                                        </td>
                                                        <td className="p-4 font-black text-slate-800">{grandTotal.toFixed(2)} TL</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="flex-1 min-w-[320px] space-y-4 lg:sticky lg:top-8">

                        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    checked={agreed} 
                                    onChange={(e) => setAgreed(e.target.checked)} 
                                    className="mt-1 w-5 h-5 accent-[#23A6F0] cursor-pointer" 
                                />
                                <span className="text-[11px] text-gray-500 leading-tight">
                                    <span className="underline hover:text-slate-800 transition-colors font-medium">Ön Bilgilendirme Koşulları</span>'nı ve <span className="underline hover:text-slate-800 transition-colors font-medium">Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                                </span>
                            </label>
                        </div>

                        <button 
                            onClick={handleNextStep}
                            className={`w-full text-white py-4 rounded-lg font-bold shadow-lg transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2
                                ${activeStep === 2 && (!selectedCard || !agreed) ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-[#23A6F0] hover:bg-[#1b8ecf] hover:-translate-y-0.5'}
                            `}
                        >
                            {activeStep === 1 ? "Kaydet ve Devam Et" : "Ödemeyi Tamamla"}
                            <ChevronRight size={18} />
                        </button>
 
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-[#252B42] mb-6 uppercase tracking-wide text-center">Sipariş Özeti</h3>
                            <div className="space-y-4 text-xs">
                                <div className="flex justify-between text-gray-500">
                                    <span>Ürünün Toplamı</span>
                                    <span className="font-bold text-slate-800">{totalAmount.toFixed(2)} TL</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Kargo Toplam</span>
                                    <span className="font-bold text-slate-800">29.90 TL</span>
                                </div>
                                {shippingFee === 0 && (
                                    <div className="flex justify-between text-green-600 italic font-bold">
                                        <span>500 TL Üzeri Kargo Bedava</span>
                                        <span>-29.90 TL</span>
                                    </div>
                                )}
                                <hr className="border-gray-50 my-4" />
                                <div className="flex justify-between text-xl font-black text-[#252B42]">
                                    <span>Toplam</span>
                                    <span className="text-[#23A6F0]">{grandTotal.toFixed(2)} TL</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200 flex gap-2">
                             <input type="text" placeholder="İndirim Kodu" className="flex-1 bg-gray-50 border-none rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#23A6F0]" />
                             <button className="bg-[#252B42] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-700 transition-all">Uygula</button>
                        </div>
                    </aside>
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setShowForm(false)}></div>
                    <div className="relative z-[10000] w-full max-w-lg">
                        <AddressForm editAddress={editData} closeForm={() => setShowForm(false)} />
                    </div>
                </div>
            )}

            {showCardForm && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setShowCardForm(false)}></div>
                    <div className="relative z-[10000] w-full max-w-lg">
                        <CardForm closeForm={() => setShowCardForm(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}