import React from 'react';
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    { name: "Nicholas Runolfsdottir", role: "Project Manager", image: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg" },
    { name: "Kurtis Weissnat", role: "Full Stack Developer", image: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg" },
    { name: "Ervin Howell", role: "UI/UX Designer", image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg" },
    { name: "Clementine Bauch", role: "Frontend Developer", image: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg" },
    { name: "Patricia Lebsack", role: "Backend Developer", image: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg" },
    { name: "Chelsey Dietrich", role: "DevOps Engineer", image: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg" },
    { name: "Mrs. Dennis Schulist", role: "Marketing", image: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg" },
    { name: "Kurtis Weissnat", role: "Product Designer", image: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg" },
    { name: "Nicholas Runolfsdottir", role: "Quality Assurance", image: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg" },
  ];

  return (
    <div className="w-full bg-white font-sans">

      <section className="text-center py-16 px-4">
        <h5 className="font-bold text-[#737373] text-sm uppercase mb-4 tracking-widest">WHAT WE DO</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6">Innovation tailored for you</h1>
        <div className="flex justify-center items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#737373]">Team</span>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-2 mb-24">
        <div className="md:col-span-2 h-[530px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="team large" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-1 grid grid-rows-2 gap-2 h-[530px]">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="team small" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="team small" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-1 grid grid-rows-2 gap-2 h-[530px]">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="team small" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" alt="team small" className="w-full h-full object-cover" />
        </div>
      </section>


      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-[#252B42] mb-20">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-[230px] mb-6 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h5 className="font-bold text-[#252B42] text-base mb-2">{member.name}</h5>
              <p className="text-[#737373] text-sm font-bold mb-4">{member.role}</p>
              <div className="flex gap-4 text-[#23A6F0]">
                <Facebook size={20} className="cursor-pointer hover:text-[#252B42]" />
                <Instagram size={20} className="cursor-pointer hover:text-[#252B42]" />
                <Twitter size={20} className="cursor-pointer hover:text-[#252B42]" />
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="py-24 px-4 text-center bg-white">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-[#252B42]">Start your 14 days free trial</h2>
          <p className="text-sm text-[#737373] leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
            RELIT official consequent door ENIM RELIT Mollie.
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all">
            Try it free now
          </button>
          <div className="flex justify-center gap-8 pt-4">
            <Twitter className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" size={30} />
            <Facebook className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" size={30} />
            <Instagram className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" size={30} />
            <Linkedin className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" size={30} />
          </div>
        </div>
      </section>
    </div>
  );
}