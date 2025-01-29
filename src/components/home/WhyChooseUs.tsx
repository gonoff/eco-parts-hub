import React from "react";
import { Shield, DollarSign, Wrench, Recycle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white/5 rounded-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Why Choose ECO Saving Auto Parts?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center bg-primary/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary/20 transition-colors">
          <Shield className="mx-auto text-secondary mb-4" size={36} />
          <h3 className="text-xl font-bold text-white mb-2">High Quality</h3>
          <p className="text-white/80">All parts tested for reliability</p>
        </div>
        <div className="text-center bg-primary/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary/20 transition-colors">
          <DollarSign className="mx-auto text-secondary mb-4" size={36} />
          <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
          <p className="text-white/80">Competitive rates vs dealerships</p>
        </div>
        <div className="text-center bg-primary/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary/20 transition-colors">
          <Wrench className="mx-auto text-secondary mb-4" size={36} />
          <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
          <p className="text-white/80">Skilled automotive professionals</p>
        </div>
        <div className="text-center bg-primary/10 p-6 rounded-lg backdrop-blur-sm hover:bg-primary/20 transition-colors">
          <Recycle className="mx-auto text-secondary mb-4" size={36} />
          <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
          <p className="text-white/80">Supporting sustainable auto repair</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;