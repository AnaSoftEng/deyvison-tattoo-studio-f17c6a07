import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <BookingSection />
      <LocationSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
