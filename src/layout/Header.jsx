import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 md:px-10 lg:px-20 container mx-auto">

        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-800">
          Bandage
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-500">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-500 transition">Shop</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/team" className="hover:text-blue-500 transition">Team</Link>
        </nav>

        <div className="flex items-center space-x-4 text-blue-500 text-sm font-bold">

          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <User size={18} />
            <Link to="/login" className="hover:underline">Login</Link>
            <span>/</span>
            <Link to="/signup" className="hover:underline">Register</Link>
          </div>

          <Search size={20} className="cursor-pointer" />

          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart size={20} />
            <span className="font-normal">1</span>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-6 flex flex-col items-center space-y-6 text-2xl text-gray-500 font-normal animate-in slide-in-from-top duration-300">
          <Link onClick={() => setIsMenuOpen(false)} to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/shop" className="hover:text-blue-500 transition">Shop</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/team" className="hover:text-blue-500 transition">Team</Link>

          <div className="flex flex-col items-center gap-4 text-blue-500 font-bold pt-4">
            <Link onClick={() => setIsMenuOpen(false)} to="/login">Login</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/signup">Register</Link>
          </div>
        </nav>
      )}
    </header>
  );
}