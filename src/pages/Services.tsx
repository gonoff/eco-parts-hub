import { Car, Wrench } from "lucide-react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <Car className="text-secondary mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">Used Auto Parts</h2>
          <ul className="space-y-2">
            <li>Engine Components</li>
            <li>Transmission Parts</li>
            <li>Body Panels</li>
            <li>Electrical Systems</li>
            <li>Interior Components</li>
          </ul>
        </div>
        
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <Wrench className="text-secondary mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">Repair Services</h2>
          <ul className="space-y-2">
            <li>Engine Repairs</li>
            <li>Transmission Service</li>
            <li>Brake System Repairs</li>
            <li>Electrical Diagnostics</li>
            <li>General Maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;