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

  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday - Sunday", time: "Closed" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Users className="mx-auto text-secondary mb-6" size={48} />
          <h1 className="text-4xl font-bold mb-6">About ECO Saving Auto Parts</h1>
          <p className="text-lg mb-4">
            Your One Stop Solution for All Cars Parts
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader className="text-center">
                <div className="flex justify-center">{value.icon}</div>
                <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p>613 Barry Street</p>
              <p>Orlando, FL 32808</p>
              <p className="mt-4">
                <a href="tel:+13213146370" className="text-secondary hover:text-secondary/80">
                  +1 (321) 314-6370
                </a>
              </p>
              <p>
                <a href="mailto:jonadisonribas@gmail.com" className="text-secondary hover:text-secondary/80">
                  jonadisonribas@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span>{schedule.day}</span>
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/ecosaving.autoparts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ecosaving.autoparts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;