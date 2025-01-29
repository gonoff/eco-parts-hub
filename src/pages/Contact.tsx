import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Get in touch with us for quality used auto parts and professional mechanical services in Orlando.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p>613 Barry Street</p>
                  <p>Orlando, FL 32808</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p>+1 (321) 314-6370</p>
                  <p className="text-sm text-gray-300">Mon - Fri: 9 AM - 6 PM</p>
                  <p className="text-sm text-gray-300">Sat - Sun: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>jonadisonribas@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Social Media</h2>
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => window.open('https://www.facebook.com/ecosaving.autoparts/', '_blank')}
              >
                Facebook: @ecosaving.autoparts
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => window.open('https://www.instagram.com/ecosaving.autoparts/', '_blank')}
              >
                Instagram: @ecosaving.autoparts
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-fit">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-[#009B72] text-white placeholder:text-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-[#009B72] text-white placeholder:text-gray-300"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-[#009B72] text-white placeholder:text-gray-300"
            ></textarea>
            <Button 
              type="submit"
              className="w-full bg-[#009B72] hover:bg-[#009B72]/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;