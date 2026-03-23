import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

export default function SignupPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: { role_id: "3" }
  });

  const selectedRoleId = watch("role_id");
  const password = watch("password");

  useEffect(() => {
    axiosInstance.get('/roles')
      .then(res => setRoles(res.data))
      .catch(err => toast.error(`Roles could not be loaded: ${err.message}`));
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id)
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxId,
        bank_account: data.storeIban
      };
    }

    try {
      await axiosInstance.post('/signup', payload);
      toast.success("Success! Check your email to activate account.");
      navigate(-1);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-3xl font-bold text-center text-[#252B42] mb-10 uppercase">Sign Up</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-1">Name *</label>
          <input 
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 chars" } })}
            className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-[#E6E6E6]'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-1">Email *</label>
          <input 
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } 
            })}
            className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-[#E6E6E6]'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-1">Password *</label>
          <input 
            type="password"
            {...register("password", { 
              required: "Required", 
              minLength: { value: 4, message: "Min 4 chars" },
              pattern: { 

                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*._\-,:;])/, 
                message: "Password must include upper, lower, number and a special char." 
              }
            })}
            className={`w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'border-[#E6E6E6]'}`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>


        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-1">Confirm Password *</label>
          <input 
            type="password"
            {...register("confirmPassword", { 
              validate: value => value === password || "Passwords do not match" 
            })}
            className={`w-full p-3 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-[#E6E6E6]'}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>


        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-1">Role</label>
          <select {...register("role_id")} className="w-full p-3 border border-[#E6E6E6] rounded-md bg-white">
            {roles.map(role => <option key={role.id} value={role.id}>{role.name}</option>)}
          </select>
        </div>


        {selectedRoleId === "2" && (
          <div className="p-5 bg-blue-50 rounded-lg space-y-4 border border-blue-100">
            <h4 className="font-bold text-[#23A6F0] border-b border-blue-200 pb-2">Store Details</h4>
            <div>
              <label className="block text-xs font-bold">Store Name *</label>
              <input {...register("storeName", { required: "Required", minLength: 3 })} className="w-full p-2 border rounded mt-1" />
            </div>
            <div>
              <label className="block text-xs font-bold">Store Phone *</label>
              <input 
                placeholder="05XXXXXXXXX"
                {...register("storePhone", { 
                  required: "Required", 
                  pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Invalid TR phone" } 
                })} 
                className="w-full p-2 border rounded mt-1" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold">Tax ID *</label>
              <input 
                placeholder="T1234V567890"
                {...register("storeTaxId", { 
                  required: "Required", 
                  pattern: { value: /^T\d{4}V\d{6}$/, message: "Format: TXXXXVXXXXXX" } 
                })} 
                className="w-full p-2 border rounded mt-1" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold">IBAN *</label>
              <input 
                {...register("storeIban", { required: "Required", minLength: { value: 26, message: "IBAN must be 26 chars" } })} 
                className="w-full p-2 border rounded mt-1" 
              />
            </div>
          </div>
        )}

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold flex justify-center items-center gap-3 disabled:opacity-70"
        >
          {loading && <Loader2 className="animate-spin" size={20} />}
          Sign Up
        </button>
      </form>
    </div>
  );
}