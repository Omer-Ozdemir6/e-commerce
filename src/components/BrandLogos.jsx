export default function BrandLogos() {
  const logos = [
    { id: 1, src: "/hooli.png", alt: "Hooli" },
    { id: 2, src: "/lyft.png", alt: "Lyft" },
    { id: 3, src: "/yaprak.png", alt: "Pied Piper" },
    { id: 4, src: "/stripe.png", alt: "Stripe" },
    { id: 5, src: "/aws.png", alt: "AWS" },
    { id: 6, src: "/reddit.png", alt: "Reddit" },
  ];

  return (
    <section className="py-12 px-4 md:px-20 bg-[#FAFAFA]">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60">
        {logos.map((logo) => (
          <img 
            key={logo.id} 
            src={logo.src} 
            alt={logo.alt} 
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}