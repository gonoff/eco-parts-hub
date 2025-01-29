import { Car, Wrench, WrenchScrewdriver, Cog, Thermometer, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Car className="text-secondary w-12 h-12" />,
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
      icon: <Wrench className="text-secondary w-12 h-12" />,
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
      icon: <WrenchScrewdriver className="text-secondary w-12 h-12" />,
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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-white/80">
          The One Stop Solution for All Cars Parts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-sm border-secondary/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/80 flex items-center">
                    <Cog className="w-4 h-4 mr-2 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-white/80 text-lg mb-4">
          Need expert auto repair services or quality used parts?
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center text-white/80">
            <Gauge className="w-6 h-6 text-secondary mr-2" />
            <span>Professional Service</span>
          </div>
          <div className="flex items-center text-white/80">
            <Thermometer className="w-6 h-6 text-secondary mr-2" />
            <span>Quality Parts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;