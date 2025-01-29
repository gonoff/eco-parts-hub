import React from "react";
import HeroSection from "@/components/home/HeroSection";
import EbayStoreSection from "@/components/home/EbayStoreSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ComprehensiveServices from "@/components/home/ComprehensiveServices";
import GoogleReviews from "@/components/home/GoogleReviews";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <EbayStoreSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ComprehensiveServices />
      <GoogleReviews />
    </div>
  );
};

export default Home;