import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyKazSection from "@/components/WhyKazSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <WhyKazSection />
      <PracticeAreasSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
