
export default function MostPopular() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 md:px-20">
      <div className="container mx-auto bg-white shadow-sm rounded-lg overflow-hidden">

        <div className="flex flex-col lg:flex-row">

          <div className="lg:w-1/2 bg-[#F3E5F5] relative min-h-[400px] lg:min-h-[500px]">
            <img 
              src="/motocurier.jpg"
              alt="Fast Delivery Man" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h3 className="text-slate-800 font-bold text-2xl uppercase tracking-tight mb-4">
              MOST POPULAR
            </h3>
            <p className="text-gray-500 text-sm md:text-base max-w-md mb-8 font-medium">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </p>

            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
              <div className="w-48 h-48 mb-4">
                <img 
                  src="/meat.jpg"

                  alt="Popular Product"
                  className="w-full h-full object-contain"
                />
              </div>
              <h5 className="text-slate-800 font-bold text-sm uppercase mb-2">
                English Department
              </h5>
              <div className="flex gap-2 font-bold text-sm">
                <span className="text-gray-400 line-through">$16.48</span>
                <span className="text-green-600">$6.48</span>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10 border-t border-gray-100 bg-white">

          <div className="flex items-start space-x-4">
            <span className="text-red-500 font-black text-4xl leading-none">1.</span>
            <div>
              <h6 className="text-slate-800 font-bold text-sm mb-1 uppercase">Easy to use</h6>
              <p className="text-gray-400 text-xs font-bold">Things on a very small that you have any direct</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-red-500 font-black text-4xl leading-none">2.</span>
            <div>
              <h6 className="text-slate-800 font-bold text-sm mb-1 uppercase">Easy to use</h6>
              <p className="text-gray-400 text-xs font-bold">Things on a very small that you have any direct</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-red-500 font-black text-4xl leading-none">3.</span>
            <div>
              <h6 className="text-slate-800 font-bold text-sm mb-1 uppercase">Easy to use</h6>
              <p className="text-gray-400 text-xs font-bold">Things on a very small that you have any direct</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-red-500 font-black text-4xl leading-none">4.</span>
            <div>
              <h6 className="text-slate-800 font-bold text-sm mb-1 uppercase">Easy to use</h6>
              <p className="text-gray-400 text-xs font-bold">Things on a very small that you have any direct</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}