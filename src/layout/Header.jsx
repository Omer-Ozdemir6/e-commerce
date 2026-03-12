import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X, LogOut, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/action/clientAction"; 
import { fetchCategories } from "../store/action/productActions";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const mainCourses = categories.filter(cat => cat.gender === 'k');
  const dessertsAndMore = categories.filter(cat => cat.gender === 'e');

  const handleLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 md:px-10 lg:px-20 container mx-auto">

        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-800">
          Bandage
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-500 items-center">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>

          <div className="relative group py-2">
            <Link to="/shop" className="hover:text-blue-500 flex items-center gap-1 transition">
              Menü <ChevronDown size={14} />
            </Link>

            <div className="absolute hidden group-hover:block bg-white shadow-2xl p-6 min-w-[400px] z-50 rounded-xl border border-gray-100 mt-0 top-full">
              <div className="flex gap-12">
                <div className="flex-1">
                  <h4 className="font-extrabold text-orange-500 mb-3 border-b pb-2">Ana Yemekler</h4>
                  <div className="flex flex-col gap-2">
                    {mainCourses.map(cat => (
                      <Link 
                        key={cat.id} 
                        to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-blue-500 mb-3 border-b pb-2">Tatlılar & Yanlar</h4>
                  <div className="flex flex-col gap-2">
                    {dessertsAndMore.map(cat => (
                      <Link 
                        key={cat.id} 
                        to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`}
                        className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/team" className="hover:text-blue-500 transition">Team</Link>
        </nav>

        <div className="flex items-center space-x-4 text-blue-500 text-sm font-bold">

          <div className="hidden md:flex items-center gap-2">
            {user && user.name ? (
              <div className="flex items-center gap-3 border-r pr-4 border-gray-200">
                <div className="flex items-center gap-2">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-8 h-8 rounded-full border border-gray-200 object-cover" 
                  />
                  <span className="text-slate-800">{user.name}</span>
                </div>
                <button onClick={handleLogout} className="text-red-500 hover:text-red-700 flex items-center gap-1">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <User size={18} />
                <Link to="/login" className="hover:underline">Login</Link>
                <span>/</span>
                <Link to="/signup" className="hover:underline">Register</Link>
              </div>
            )}
          </div>

          <Search size={20} className="cursor-pointer" />

          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart size={20} />
            <span className="font-normal text-xs">1</span>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-8 flex flex-col items-center space-y-6 text-2xl text-gray-500 font-normal">
          <Link onClick={() => setIsMenuOpen(false)} to="/">Home</Link>

          <div className="flex flex-col items-center gap-2 border-y py-4 w-full border-gray-50">
             <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Menü</span>
             {categories.slice(0, 6).map(cat => (
               <Link 
                key={cat.id}
                onClick={() => setIsMenuOpen(false)}
                to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`}
                className="text-lg text-slate-700"
               >
                 {cat.title}
               </Link>
             ))}
          </div>

          <Link onClick={() => setIsMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact">Contact</Link>

          <div className="flex flex-col items-center gap-6 pt-4 w-full border-t border-gray-50 mt-4">
            {user && user.name ? (
              <div className="flex flex-col items-center gap-4">
                <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-2 border-blue-500" />
                <span className="text-slate-800 font-bold">{user.name}</span>
                <button onClick={handleLogout} className="text-red-500 flex items-center gap-2 text-xl font-bold">
                  <LogOut size={24} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-blue-500 font-bold">
                <Link onClick={() => setIsMenuOpen(false)} to="/login">Login</Link>
                <Link onClick={() => setIsMenuOpen(false)} to="/signup">Register</Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}