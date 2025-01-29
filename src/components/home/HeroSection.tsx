import React from "react";

const HeroSection = () => {
  return (
    <section className="text-white text-center py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-background opacity-80 -z-10"></div>
      {/* Mobile only text */}
      <h1 className="md:hidden text-3xl font-bold text-white mb-4">
        Quality Used Auto Parts<br />& Repairs
      </h1>
      <p className="md:hidden text-white/80 text-lg mb-8">
        Your trusted source for affordable<br />& reliable auto parts in Orlando, FL
      </p>
      <img 
        src="/lovable-uploads/2f110710-5090-4b3f-9fa5-85402f58365b.png" 
        alt="ECO Saving Auto Parts - Your trusted source for affordable & reliable auto parts in Orlando, FL" 
        className="hidden md:block w-full max-w-6xl mx-auto relative z-10"
      />
    </section>
  );
};

export default HeroSection;