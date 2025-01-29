import React from "react";
import { Car, Wrench, Settings } from "lucide-react";

const ServicesGrid = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,75,81,0.1)_0%,rgba(0,155,114,0.1)_100%)] rounded-lg"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="bg-primary/20 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-primary/30 transition-colors">
          <Car className="mx-auto text-secondary mb-4" size={48} />
          <h3 className="text-xl font-bold text-white mb-2">Quality Parts</h3>
          <p className="text-white/80">
            Extensive inventory of certified used auto parts
          </p>
        </div>
        <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-secondary/30 transition-colors">
          <Wrench className="mx-auto text-primary mb-4" size={48} />
          <h3 className="text-xl font-bold text-white mb-2">Expert Repairs</h3>
          <p className="text-white/80">
            Professional repair services by certified technicians
          </p>
        </div>
        <div className="bg-primary/20 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-primary/30 transition-colors">
          <Settings className="mx-auto text-secondary mb-4" size={48} />
          <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
          <p className="text-white/80">
            Committed to sustainable auto parts recycling
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;