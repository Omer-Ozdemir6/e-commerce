export default function Hero() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[600px] bg-[#B71C1C] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <img 
          src="../../public/hero.jpg"
          alt="Food Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-6">
        <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight">
          GROCERIES DELIVERY
        </h1>
        <p className="text-white text-sm md:text-lg max-w-xl font-medium opacity-90 leading-relaxed">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <button className="bg-[#00A8E8] text-white px-10 py-4 rounded-md font-bold hover:bg-sky-500 transition-all uppercase text-sm shadow-xl">
          Start Now
        </button>
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-4xl cursor-pointer hidden md:block">
        &lt;
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 text-4xl cursor-pointer hidden md:block">
        &gt;
      </div>

      <div className="absolute bottom-6 w-24 h-1 bg-white rounded-full"></div>
    </section>
  );
}