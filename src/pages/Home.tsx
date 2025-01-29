import { Car, Wrench, Settings, Clock, MapPin, Phone, Mail, Shield, Recycle, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
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

      {/* eBay Store Section */}
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

      {/* Services Grid */}
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose ECO Saving Auto Parts?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Shield className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">High Quality</h3>
            <p className="text-white/80">All parts tested for reliability</p>
          </div>
          <div className="text-center bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
            <DollarSign className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
            <p className="text-white/80">Competitive rates vs dealerships</p>
          </div>
          <div className="text-center bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Wrench className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
            <p className="text-white/80">Skilled automotive professionals</p>
          </div>
          <div className="text-center bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Recycle className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
            <p className="text-white/80">Supporting sustainable auto repair</p>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Services */}
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

      {/* Google Reviews Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Our Google Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-white/80">5.0</span>
              </div>
              <p className="text-white/80 italic mb-4">
                "Excellent service! They had the exact part I needed for my car at a great price. Very professional and knowledgeable staff."
              </p>
              <p className="text-white font-semibold">- Javier Perez</p>
              <p className="text-white/60 text-sm">2 months ago</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-white/80">5.0</span>
              </div>
              <p className="text-white/80 italic mb-4">
                "Great place to find quality used parts. The owner is very helpful and honest. Highly recommended!"
              </p>
              <p className="text-white font-semibold">- Marcos Silva</p>
              <p className="text-white/60 text-sm">1 month ago</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-white/80">5.0</span>
              </div>
              <p className="text-white/80 italic mb-4">
                "Fantastic experience! They helped me find a hard-to-get part for my car. Very reasonable prices and great customer service."
              </p>
              <p className="text-white font-semibold">- Luis Rodriguez</p>
              <p className="text-white/60 text-sm">3 months ago</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://g.co/kgs/GVdYjbk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View All Google Reviews
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
