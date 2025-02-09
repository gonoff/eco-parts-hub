
import { Car, Wrench, Gauge, CircleCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Car className="text-secondary w-16 h-16" />,
      title: "Used Auto Parts",
      items: [
        "Quality-tested used car parts",
        "Affordable replacement parts",
        "Hard-to-find car parts sourcing",
        "Engine components",
        "Transmission parts",
        "Body panels",
      ]
    },
    {
      icon: <Wrench className="text-secondary w-16 h-16" />,
      title: "General Mechanical Services",
      items: [
        "Engine & Transmission Repair",
        "Timing Belt Replacement",
        "Brake System Maintenance",
        "Suspension & Shock Absorbers",
        "Air Conditioning Repair",
        "Exhaust System Repairs"
      ]
    },
    {
      icon: <Wrench className="text-secondary w-16 h-16" />,
      title: "Specialized Services",
      items: [
        "Transmission Overhauls",
        "Suspension & Steering Checks",
        "Brake System Upgrades",
        "Engine Performance Tuning",
        "Computerized Diagnostics",
        "System Error Code Checks"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen bg-primary">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-2xl text-white/90">
          The One Stop Solution for All Cars Parts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="bg-[#004B51]/40 backdrop-blur-sm border-secondary/20 transition-transform hover:scale-105"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-4">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/90 flex items-center">
                    <CircleCheck className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/90 text-xl mb-6">
          Need expert auto repair services or quality used parts?
        </p>
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center text-white/90">
            <Gauge className="w-8 h-8 text-secondary mr-3" />
            <span className="text-lg">Professional Service</span>
          </div>
          <div className="flex items-center text-white/90">
            <Wrench className="w-8 h-8 text-secondary mr-3" />
            <span className="text-lg">Quality Parts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
