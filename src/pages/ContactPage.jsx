import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full bg-white font-sans">
      
      <section className="container mx-auto px-4 md:px-20 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h5 className="font-bold text-[#252B42] text-sm tracking-widest uppercase">CONTACT US</h5>
          <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] leading-tight">
            Get in touch <br /> today!
          </h1>
          <p className="text-lg text-[#737373] max-w-sm mx-auto lg:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="space-y-2 text-xl font-bold text-[#252B42]">
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 pt-4 text-[#252B42]">
            <Twitter className="cursor-pointer hover:text-[#23A6F0]" size={26} />
            <Facebook className="cursor-pointer hover:text-[#23A6F0]" size={26} />
            <Instagram className="cursor-pointer hover:text-[#23A6F0]" size={26} />
            <Linkedin className="cursor-pointer hover:text-[#23A6F0]" size={26} />
          </div>
        </div>


        <div className="flex-1">
          <img 
            src="/burger_girl.jpg" 
            alt="Family Shopping" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </section>


      <section className="bg-white py-20 px-4 text-center">
        <h5 className="font-bold text-[#252B42] text-sm mb-4 uppercase">VISIT OUR OFFICE</h5>
        <h2 className="text-3xl md:text-5xl font-bold text-[#252B42] mb-20 leading-tight">
          We help small businesses <br className="hidden md:block" /> with big ideas
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center">

          <div className="p-12 space-y-4 flex flex-col items-center">
            <Phone size={72} className="text-[#23A6F0] mb-4" />
            <div className="text-sm font-bold text-[#252B42]">
               <p>georgia.young@example.com</p>
               <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold text-[#252B42] pt-4">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-all">
              Submit Request
            </button>
          </div>

          <div className="bg-[#252B42] p-16 space-y-4 text-white flex flex-col items-center md:py-20 shadow-xl">
            <MapPin size={72} className="text-[#23A6F0] mb-4" />
            <div className="text-sm font-bold">
               <p>georgia.young@example.com</p>
               <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold pt-4 text-white">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-all">
              Submit Request
            </button>
          </div>

          <div className="p-12 space-y-4 flex flex-col items-center">
            <Mail size={72} className="text-[#23A6F0] mb-4" />
            <div className="text-sm font-bold text-[#252B42]">
               <p>georgia.young@example.com</p>
               <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold text-[#252B42] pt-4">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-all">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="container mx-auto flex flex-col items-center space-y-6">

          <img src="/Arrow.png" alt="arrow" className="w-12 h-auto mb-4" />
          <h5 className="font-bold text-[#252B42] text-sm uppercase tracking-widest">WE CAN'T WAIT TO MEET YOU</h5>
          <h2 className="text-5xl md:text-6xl font-bold text-[#252B42]">Let’s Talk</h2>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all uppercase">
            Try it free now
          </button>
        </div>
      </section>

    </div>
  );
}