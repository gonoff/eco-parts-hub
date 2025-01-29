import { Car, Wrench, Settings } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-white text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Quality Used Auto Parts & Repairs
        </h1>
        <p className="text-xl mb-8">
          Your trusted source for affordable and reliable auto parts in Orlando, FL
        </p>
        <a
          href="/contact"
          className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Contact Us Today
        </a>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center">
            <Car className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="text-xl font-bold text-primary mb-2">Quality Parts</h3>
            <p className="text-gray-600">
              Extensive inventory of certified used auto parts
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <Wrench className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="text-xl font-bold text-primary mb-2">Expert Repairs</h3>
            <p className="text-gray-600">
              Professional repair services by certified technicians
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <Settings className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="text-xl font-bold text-primary mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">
              Committed to sustainable auto parts recycling
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;