import {AlarmClock, MessageCircle, ChevronRight } from "lucide-react";


export default function BlogCard({ image, tag, title, description, date, comments }) {
  return (
    <div className="flex flex-col bg-white shadow-sm border border-gray-100 overflow-hidden group">

      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <span className="absolute top-4 left-4 bg-[#E74C3C] text-white text-[12px] font-bold px-3 py-1 rounded-sm uppercase">
          {tag}
        </span>
      </div>

      <div className="p-6 flex flex-col">
        <div className="flex gap-4 text-[12px] text-gray-400 mb-3">
          <span className="text-[#8EC2F2]">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        <h4 className="text-[#252B42] text-xl font-bold mb-3 leading-snug">
          {title}
        </h4>
        <p className="text-[#737373] text-sm mb-6">
          {description}
        </p>

        <div className="flex justify-between items-center text-[12px] text-[#737373] font-medium pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <AlarmClock size={14} className="text-[#23A6F0]" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={14} className="text-[#23856D]" />
            {comments} comments
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm font-bold text-[#737373] hover:text-[#23A6F0] transition-colors mt-4 w-fit">
            Learn More <ChevronRight size={16} className="text-[#23A6F0]" /> 
        </button>
        </div>
    </div>
  );
}