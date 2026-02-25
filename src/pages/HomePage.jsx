import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import BestsellerSection from '../components/BestsellerSection';
import MostPopular from '../components/MostPopular';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">

      <Hero />


      <CategoryCards />


      <BestsellerSection />


      <MostPopular />
    </div>
  );
}