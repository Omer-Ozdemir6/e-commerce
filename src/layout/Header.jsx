import { Search, User, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
    return(
        <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-4 md:px-10 lg:px-20">
            <div className="text-2xl font-bold tracking-tight text-slate-800">
                Bandage
            </div>

            <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-500">
                <a href="/" className="hover:text-blue-500 transition">Home</a>
                <a href="/shop" className="hover:text-blue-500 transition">Shop</a>
                <a href="/about" className="hover:text-blue-500 transition">About</a>
                <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4 text-blue-500 text-sm font-bold">
                <div className="hidden md:flex items-center gap-1 cursor-pointer">
                    <User size={18} />
                    <span>Login / Register</span>
                </div>

                <Search size={20} className="cursor-pointer" />

                <div className="flex items-center gap-1 cursor-pointer">
                    <ShoppingCart size={20} />
                    <span className="font-normal">1</span>
                </div>

                <Menu size={24} className="md:hidden text-slate-800 cursor-pointer" />
            </div>
            </div> 
        </header>
    );
}