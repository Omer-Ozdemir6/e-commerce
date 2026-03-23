import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';

export default function OrderSuccessPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F6F6F6] flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-10 text-center border border-gray-100">

                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-5 rounded-full animate-bounce">
                        <CheckCircle size={60} className="text-green-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-black text-[#252B42] mb-4">
                    Siparişiniz Alındı!
                </h1>
                
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Tebrikler! Siparişin başarıyla sisteme kaydedildi.
                    Hazırlanmaya başladığında sana haber vereceğiz.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                        <Package className="mx-auto text-[#23A6F0] mb-2" size={24} />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Durum</span>
                        <p className="text-xs font-bold text-[#252B42]">Hazırlanıyor</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                        <ArrowRight className="mx-auto text-[#23A6F0] mb-2" size={24} />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Teslimat</span>
                        <p className="text-xs font-bold text-[#252B42]">2-3 İş Günü</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full bg-[#23A6F0] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1b8ecf] transition-all shadow-lg"
                    >
                        <Home size={18} /> Alışverişe Devam Et
                    </button>
                </div>
            </div>
        </div>
    );
}