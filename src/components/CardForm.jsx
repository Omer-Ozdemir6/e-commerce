import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/action/paymentActions';

export default function CardForm({ closeForm }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const payload = {
            card_no: data.card_no.replace(/\s/g, ''),
            expire_month: parseInt(data.expire_month),
            expire_year: parseInt(data.expire_year),
            name_on_card: data.name_on_card
        };

        dispatch(addCard(payload)).then(() => {
            closeForm();
        });
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border">
            <h3 className="text-xl font-bold mb-6 text-[#252B42]">Yeni Kart Ekle</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Kart Üzerindeki İsim</label>
                    <input {...register("name_on_card", { required: true })} className="w-full border-2 p-3 rounded-xl outline-none focus:border-[#23A6F0]" placeholder="Ad Soyad" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Kart Numarası</label>
                    <input {...register("card_no", { required: true, maxLength: 16 })} className="w-full border-2 p-3 rounded-xl outline-none focus:border-[#23A6F0]" placeholder="16 Haneli Kart Numarası" />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Ay</label>
                        <select {...register("expire_month")} className="w-full border-2 p-3 rounded-xl outline-none">
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>)}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Yıl</label>
                        <select {...register("expire_year")} className="w-full border-2 p-3 rounded-xl outline-none">
                            {Array.from({ length: 10 }, (_, i) => 2026 + i).map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 pt-4">
                    <button type="button" onClick={closeForm} className="flex-1 py-3 font-bold text-gray-400">Vazgeç</button>
                    <button type="submit" className="flex-1 bg-[#23A6F0] text-white py-3 rounded-xl font-bold hover:bg-[#1b8ecf] transition-all">Kaydet</button>
                </div>
            </form>
        </div>
    );
}