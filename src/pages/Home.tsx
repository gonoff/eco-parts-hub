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
        <Link
          to="/contact"
          className="inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Contact Us Today
        </Link>
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

      {/* Services Overview */}
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

      {/* Quick Contact */}
      <section className="py-16">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Visit Our Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="text-secondary mb-4" size={36} />
              <p className="text-white/80">613 Barry Street, Orlando, FL 32808</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-secondary mb-4" size={36} />
              <p className="text-white/80">Mon - Fri: 9 AM - 6 PM</p>
              <p className="text-white/80">Sat - Sun: Closed</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="text-secondary mb-4" size={36} />
              <p className="text-white/80">+1 (321) 314-6370</p>
              <p className="text-white/80">jonadisonribas@gmail.com</p>
            </div>
          </div>
          <Button className="mt-8 bg-secondary hover:bg-secondary/80">
            <Link to="/contact" className="text-white">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;