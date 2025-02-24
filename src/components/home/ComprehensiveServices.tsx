import React from "react";
import { Car, Wrench } from "lucide-react";

const ComprehensiveServices = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Our Comprehensive Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-primary/30 to-secondary/20 p-8 rounded-lg hover:from-primary/40 hover:to-secondary/30 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-4">Used Auto Parts</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center">
              <Car className="w-5 h-5 text-secondary mr-2" />
              Quality-tested used car parts
            </li>
            <li className="flex items-center">
              <Car className="w-5 h-5 text-secondary mr-2" />
              Engine components
            </li>
            <li className="flex items-center">
              <Car className="w-5 h-5 text-secondary mr-2" />
              Transmission parts
            </li>
            <li className="flex items-center">
              <Car className="w-5 h-5 text-secondary mr-2" />
              Body panels and more
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-bl from-secondary/30 to-primary/20 p-8 rounded-lg hover:from-secondary/40 hover:to-primary/30 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-4">Mechanical Services</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center">
              <Wrench className="w-5 h-5 text-secondary mr-2" />
              Engine & Transmission Repair
            </li>
            <li className="flex items-center">
              <Wrench className="w-5 h-5 text-secondary mr-2" />
              Brake System Maintenance
            </li>
            <li className="flex items-center">
              <Wrench className="w-5 h-5 text-secondary mr-2" />
              Air Conditioning Repair
            </li>
            <li className="flex items-center">
              <Wrench className="w-5 h-5 text-secondary mr-2" />
              Computerized Diagnostics
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;