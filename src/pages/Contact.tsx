import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="text-secondary mr-4" />
              <p>123 Auto Parts Lane, Orlando, FL 32801</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-secondary mr-4" />
              <p>(407) 555-0123</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-secondary mr-4" />
              <p>info@ecosaving-autoparts.com</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-secondary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-secondary"
            ></textarea>
            <button
              type="submit"
              className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;