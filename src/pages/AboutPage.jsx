import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import BrandLogos from '../components/BrandLogos';

export default function AboutPage() {
  return (
    <div className="w-full bg-white font-sans">
      

      <section className="container mx-auto px-4 md:px-20 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h5 className="font-bold text-[#252B42] text-sm tracking-widest hidden md:block">ABOUT COMPANY</h5>
          <h1 className="text-4xl md:text-6xl font-bold text-[#252B42]">ABOUT US</h1>
          <p className="text-lg text-[#737373] max-w-sm mx-auto lg:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all">
            Get Quote Now
          </button>
        </div>
        <div className="flex-1">

          <img src="/donut.jpg" alt="About Us" className="w-full h-auto object-contain" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div><h2 className="text-6xl font-bold text-[#252B42] mb-2">15K</h2><p className="font-bold text-[#737373]">Happy Customers</p></div>
          <div><h2 className="text-6xl font-bold text-[#252B42] mb-2">150K</h2><p className="font-bold text-[#737373]">Monthly Visitors</p></div>
          <div><h2 className="text-6xl font-bold text-[#252B42] mb-2">15</h2><p className="font-bold text-[#737373]">Countries Worldwide</p></div>
          <div><h2 className="text-6xl font-bold text-[#252B42] mb-2">100+</h2><p className="font-bold text-[#737373]">Top Partners</p></div>
        </div>
      </section>


      <section className="container mx-auto px-4 md:px-20 py-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
          <img src="/hero.jpg" alt="Video Placeholder" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-lg">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h2>
        <p className="text-sm text-[#737373] max-w-md mx-auto mb-20">Problems trying to resolve the conflict between the two major realms of Classical physics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full h-64 mb-6"><img src={`/team-${i}.jpg`} className="w-full h-full object-cover" /></div>
              <h5 className="font-bold text-[#252B42]">Username</h5>
              <p className="text-[#737373] text-sm font-bold mb-4">Profession</p>
              <div className="flex gap-4 text-[#23A6F0]"><Facebook size={20}/><Instagram size={20}/><Twitter size={20}/></div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-[#FAFAFA] py-20 px-4">
        <div className="container mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-[#252B42]">Big Companies Are Here</h2>
          <p className="text-sm text-[#737373] max-w-md mx-auto">Problems trying to resolve the conflict between the two major realms of Classical physics.</p>
          <BrandLogos />
        </div>
      </section>


      <section className="flex flex-col md:flex-row w-full min-h-[500px]">
        <div className="flex-1 bg-[#2A7CC7] text-white flex flex-col justify-center p-12 lg:p-24 space-y-6">
          <h5 className="font-bold text-sm">WORK WITH US</h5>
          <h2 className="text-4xl font-bold">Now Let's grow Yours</h2>
          <p className="text-sm opacity-90 max-w-xs">The gradual accumulation of information about atomic and small-scale behavior.</p>
          <button className="border border-white text-white px-10 py-3 rounded-md font-bold text-sm w-fit hover:bg-white hover:text-[#2A7CC7] transition-all">Button</button>
        </div>
        <div className="flex-1">
          <img src="/motocurier.jpg" alt="Working" className="w-full h-full object-cover" />
        </div>
      </section>

    </div>
  );
}