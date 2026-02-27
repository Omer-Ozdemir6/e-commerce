import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#252B42] text-white pt-16 pb-6 px-4 md:px-20">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Consulting Agency For Your Business
            </h2>
            <p className="text-sm font-medium opacity-80">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <button className="bg-[#23A6F0] hover:bg-[#1b8ecf] text-white px-10 py-4 rounded-md font-bold transition-all text-sm uppercase">
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">

          <div className="flex flex-col gap-5">
            <h5 className="font-bold text-base">Company Info</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold opacity-80">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="font-bold text-base">Legal</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold opacity-80">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="font-bold text-base">Features</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold opacity-80">
              <a href="#" className="hover:text-[#23A6F0]">Business Marketing</a>
              <a href="#" className="hover:text-[#23A6F0]">User Analytic</a>
              <a href="#" className="hover:text-[#23A6F0]">Live Chat</a>
              <a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="font-bold text-base">Resources</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold opacity-80">
              <a href="#" className="hover:text-[#23A6F0]">IOS & Android</a>
              <a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a>
              <a href="#" className="hover:text-[#23A6F0]">Customers</a>
              <a href="#" className="hover:text-[#23A6F0]">API</a>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="font-bold text-base">Get In Touch</h5>
            <div className="flex flex-col gap-4 text-sm font-bold opacity-80">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#23A6F0]" />
                <span>(480) 555-0103</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#23A6F0]" />
                <span className="leading-tight">4517 Washington Ave.</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#23A6F0]" />
                <span>debra.holt@example.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold opacity-70">
            Made With Love By Finland All Right Reserved
          </p>
          <div className="flex items-center gap-5">
            <Facebook size={20} className="text-[#23A6F0] cursor-pointer hover:scale-110 transition-transform" />
            <Instagram size={20} className="text-[#23A6F0] cursor-pointer hover:scale-110 transition-transform" />
            <Twitter size={20} className="text-[#23A6F0] cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

      </div>
    </footer>
  );
}