import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import BestsellerSection from '../components/BestsellerSection';
import MostPopular from '../components/MostPopular';
import DonutBannerSection from '../components/DonutBannerSection';
import PromoSection from '../components/PromoSection';
import BottomBestseller from '../components/BottomBestseller';
import BrandLogos from '../components/BrandLogos';
import FeaturedPosts from '../components/FeaturedPosts';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">

      <Hero />

      <CategoryCards />

      <BestsellerSection />

      <MostPopular />

      <DonutBannerSection />

      <PromoSection />

      <BottomBestseller />

      <BrandLogos />
      
      <FeaturedPosts />
    </div>
  );
}