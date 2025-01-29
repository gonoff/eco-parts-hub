import { Car, Wrench, Settings, Clock, MapPin, Phone, Mail, Shield, Recycle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-white text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Quality Used Auto Parts & Repairs
        </h1>
        <p className="text-xl mb-8">
          Your trusted source for affordable and reliable auto parts in Orlando, FL
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <Car className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Quality Parts</h3>
            <p className="text-white/80">
              Extensive inventory of certified used auto parts
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <Wrench className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Expert Repairs</h3>
            <p className="text-white/80">
              Professional repair services by certified technicians
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <Settings className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
            <p className="text-white/80">
              Committed to sustainable auto parts recycling
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose ECO Saving Auto Parts?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Shield className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">High Quality</h3>
            <p className="text-white/80">All parts tested for reliability</p>
          </div>
          <div className="text-center">
            <DollarSign className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
            <p className="text-white/80">Competitive rates vs dealerships</p>
          </div>
          <div className="text-center">
            <Wrench className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
            <p className="text-white/80">Skilled automotive professionals</p>
          </div>
          <div className="text-center">
            <Recycle className="mx-auto text-secondary mb-4" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
            <p className="text-white/80">Sustainable parts recycling</p>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Services */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Comprehensive Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
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
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
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
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Our Google Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
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
            <div className="bg-white/5 p-6 rounded-lg">
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
            <div className="bg-white/5 p-6 rounded-lg">
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
