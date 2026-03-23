
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAddress, updateAddress } from '../store/action/addressActions';

const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya"];

export default function AddressForm({ editAddress, closeForm }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: editAddress || {}
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = { ...data };
    if (editAddress?.id) {
      dispatch(updateAddress({ ...payload, id: editAddress.id }));
    } else {
      dispatch(addAddress(payload));
    }
    closeForm();
  };

  return (
    <div className="bg-white w-full max-w-lg mx-auto rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#252B42]">
            {editAddress ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
          </h3>
          <button onClick={closeForm} className="text-gray-400 hover:text-red-500 text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Adres Başlığı</label>
            <input {...register("title", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none transition-all" placeholder="Ev, İş vb." />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">Ad</label>
              <input {...register("name", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">Soyad</label>
              <input {...register("surname", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Telefon</label>
            <input {...register("phone", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none" placeholder="05XXXXXXXXX" />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">Şehir</label>
              <select {...register("city", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none">
                <option value="">Seçiniz</option>
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">İlçe</label>
              <input {...register("district", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Adres Detayı</label>
            <textarea {...register("neighborhood", { required: true })} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#23A6F0] outline-none h-24" placeholder="Mahalle, sokak, no..."></textarea>
          </div>

          <button type="submit" className="w-full bg-[#23A6F0] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#1b8ecf] transition-all mt-4">
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
}