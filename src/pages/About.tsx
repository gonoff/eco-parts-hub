import { Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 text-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Users className="mx-auto text-secondary mb-6" size={48} />
        <h1 className="text-4xl font-bold mb-6">About ECO Saving Auto Parts</h1>
        <p className="text-lg mb-8">
          We are Orlando's leading provider of quality used auto parts and professional repair services. Our commitment to sustainability and customer satisfaction sets us apart in the industry.
        </p>
      </div>
      
      <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          To provide affordable, high-quality auto parts while promoting environmental sustainability through responsible recycling practices.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quality Assurance</li>
          <li>Environmental Responsibility</li>
          <li>Customer Satisfaction</li>
          <li>Professional Excellence</li>
        </ul>
      </div>
    </div>
  );
};

export default About;