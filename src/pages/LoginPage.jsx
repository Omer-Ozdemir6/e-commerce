import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../store/action/clientAction';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    setLoading(true);
    const { email, password, rememberMe } = data;

    dispatch(loginUser({ email, password }, rememberMe))
      .then(() => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-md">
      <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-1">Email *</label>
          <input 
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="example@commerce.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Password *</label>
          <input 
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-3 border border-gray-300 rounded"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div className="flex items-center">
          <input type="checkbox" {...register("rememberMe")} id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
        </div>

        <button 
          disabled={loading}
          className="w-full bg-[#23A6F0] text-white py-3 rounded font-bold flex justify-center items-center gap-2"
        >
          {loading && <Loader2 className="animate-spin" size={20} />}
          Login
        </button>
      </form>
    </div>
  );
}