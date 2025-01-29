import { Users, Building, Handshake, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Building className="w-12 h-12 text-secondary mb-4" />,
      title: "Our Business",
      description: "Located in Orlando, Florida, ECO Saving Auto Parts is your trusted provider of quality used auto parts and professional repair services. We serve the Greater Orlando area from our location at 613 Barry Street."
    },
    {
      icon: <Handshake className="w-12 h-12 text-secondary mb-4" />,
      title: "Our Mission",
      description: "We are committed to providing affordable, high-quality auto parts while promoting environmental sustainability through responsible recycling practices."
    },
    {
      icon: <Award className="w-12 h-12 text-secondary mb-4" />,
      title: "Our Expertise",
      description: "With our team of skilled professionals, we specialize in quality-tested used car parts, comprehensive mechanical services, and specialized automotive repairs."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Users className="mx-auto text-secondary mb-6" size={48} />
          <h1 className="text-4xl font-bold mb-6 text-white/90">About ECO Saving Auto Parts</h1>
          <p className="text-lg mb-4 text-white/90">
            Your One Stop Solution for All Cars Parts
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader className="text-center">
                <div className="flex justify-center">{value.icon}</div>
                <CardTitle className="text-xl mb-2 text-white/90">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-white/90">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;