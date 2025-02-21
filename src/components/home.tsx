import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import FeaturesSection from "./landing/FeaturesSection";
import TechSpecsSection from "./landing/TechSpecsSection";
import PricingSection from "./landing/PricingSection";
import Footer from "./landing/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechSpecsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
