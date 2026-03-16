import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, MapPin, Phone, User, Trash2, Edit2 } from 'lucide-react';
import { fetchAddresses } from '../store/action/AddressActions';

export default function CreateOrderPage() {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.shoppingCart.addressList || []);
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [selectedBilling, setSelectedBilling] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 md:px-20">
            <div className="container mx-auto flex flex-col lg:flex-row gap-10">

                <div className="flex-[3] bg-white p-8 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Teslimat Adresi</h2>
                        <button 
                            onClick={() => setShowForm(true)}
                            className="flex items-center gap-2 bg-[#252B42] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-slate-700"
                        >
                            <Plus size={18} /> Yeni Adres Ekle
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addresses.map((addr) => (
                            <div 
                                key={addr.id}
                                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedShipping === addr.id ? 'border-[#23A6F0] bg-blue-50/30' : 'border-gray-100'}`}
                                onClick={() => setSelectedShipping(addr.id)}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-bold text-slate-800 uppercase text-xs tracking-wider">{addr.title}</h4>
                                    <div className="flex gap-2">
                                        <button className="text-gray-400 hover:text-blue-500"><Edit2 size={14}/></button>
                                        <button className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p className="flex items-center gap-2"><User size={14}/> {addr.name} {addr.surname}</p>
                                    <p className="flex items-center gap-2"><Phone size={14}/> {addr.phone}</p>
                                    <p className="flex items-start gap-2 leading-tight">
                                        <MapPin size={14} className="mt-1 flex-shrink-0"/> 
                                        {addr.neighborhood}, {addr.district}, {addr.city}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="flex-1">
                </aside>
            </div>
        </div>
    );
}