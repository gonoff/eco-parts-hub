import React from "react";
import { Shield, DollarSign, Recycle, ExternalLink } from "lucide-react";

const EbayStoreSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm rounded-lg my-8 shadow-xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Browse Our Auto Parts Store
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Find quality used auto parts for your vehicle at competitive prices. Visit our eBay store for our complete inventory of tested and reliable parts.
        </p>
        <a 
          href="https://www.ebay.com/usr/ecosavingauto0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
        >
          Shop Now on eBay
          <ExternalLink className="w-5 h-5" />
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Shield className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Quality Tested</h3>
            <p className="text-white/80">All parts thoroughly tested before listing</p>
          </div>
          <div className="text-center">
            <DollarSign className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
            <p className="text-white/80">Competitive prices on all parts</p>
          </div>
          <div className="text-center">
            <Recycle className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
            <p className="text-white/80">Supporting sustainable auto repair</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbayStoreSection;