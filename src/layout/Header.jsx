import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X, LogOut, ChevronDown, Trash2, Package } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/action/clientAction"; 
import { fetchCategories } from "../store/action/productActions";
import { removeFromCart } from "../store/action/shoppingCartActions";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);
  const mainCourses = categories.filter(cat => cat.gender === 'k');
  const dessertsAndMore = categories.filter(cat => cat.gender === 'e');

  const handleLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
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
            <div className="absolute hidden group-hover:block bg-white shadow-2xl p-6 min-w-[400px] z-50 rounded-xl border border-gray-100 top-full">
              <div className="flex gap-12">
                <div className="flex-1">
                  <h4 className="font-extrabold text-orange-500 mb-3 border-b pb-2">Ana Yemekler</h4>
                  <div className="flex flex-col gap-2">
                    {mainCourses.map(cat => (
                      <Link key={cat.id} to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`} className="text-sm text-gray-600 hover:text-orange-500">
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-blue-500 mb-3 border-b pb-2">Tatlılar & Yanlar</h4>
                  <div className="flex flex-col gap-2">
                    {dessertsAndMore.map(cat => (
                      <Link key={cat.id} to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`} className="text-sm text-gray-600 hover:text-blue-500">
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
        </nav>

        <div className="flex items-center space-x-4 text-blue-500 text-sm font-bold">
          <div className="hidden md:flex items-center gap-2">
            {user && user.name ? (

              <div className="relative group py-2">
                <div className="flex items-center gap-3 cursor-pointer pr-4 border-r border-gray-200">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border-2 border-blue-100" />
                  <span className="text-slate-800 flex items-center gap-1">{user.name} <ChevronDown size={14} /></span>
                </div>

                <div className="absolute hidden group-hover:block bg-white shadow-2xl min-w-[160px] z-50 rounded-lg border border-gray-100 top-full right-4 py-2">
                  <Link to="/user/orders" className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-500 transition-colors border-b border-gray-50">
                    <Package size={16} /> Siparişlerim
                  </Link>
                  <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1 pr-4 border-r border-gray-200">
                <User size={18} />
                <Link to="/login" className="hover:underline">Login</Link>
                <span>/</span>
                <Link to="/signup" className="hover:underline">Register</Link>
              </div>
            )}
          </div>

          <Search size={20} className="cursor-pointer" />

          <div className="relative group py-2">
            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart size={20} />
              <span className="font-normal text-xs">{totalItemCount}</span>
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-2xl p-4 min-w-[320px] z-50 rounded-xl border border-gray-100 top-full right-0">
              <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Sepetim ({totalItemCount} Ürün)</h4>
              <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-gray-400 text-xs py-4 text-center">Sepetiniz şu an boş.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3 items-center border-b border-gray-50 pb-3 last:border-0">
                      <img src={item.product.images?.[0]?.url} alt={item.product.name} className="w-12 h-12 object-cover rounded shadow-sm" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-800 truncate">{item.product.name}</p>
                        <p className="text-[10px] text-gray-500">Adet: {item.count}</p>
                        <p className="text-xs text-blue-500 font-extrabold">{item.product.price} TL</p>
                      </div>
                      <button onClick={() => handleRemove(item.product.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="mt-4 flex gap-2">
                  <Link to="/cart" className="flex-1 bg-blue-500 text-white text-center py-2 rounded-md text-xs hover:bg-blue-600 transition">
                    Sepete Git
                  </Link>
                </div>
              )}
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-8 flex flex-col items-center space-y-6 text-2xl text-gray-500 font-normal">
          <Link onClick={() => setIsMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/shop">Shop</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact">Contact</Link>
          {user && user.name && (
             <Link onClick={() => setIsMenuOpen(false)} to="/user/orders" className="text-blue-500 font-bold">Siparişlerim</Link>
          )}
        </nav>
      )}
    </header>
  );
}