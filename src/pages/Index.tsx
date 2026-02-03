import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WhySection from "@/components/WhySection";
import WhatIncludesSection from "@/components/WhatIncludesSection";
import TargetSection from "@/components/TargetSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <WhySection />
        <WhatIncludesSection />
        <TargetSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
