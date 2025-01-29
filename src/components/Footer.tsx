import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday - Sunday", time: "Closed" }
  ];

  return (
    <footer className="bg-white/10 mt-auto py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-white/90">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white/90">Location</h3>
            <p className="text-white/90">613 Barry Street</p>
            <p className="text-white/90">Orlando, FL 32808</p>
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
            <h3 className="text-xl font-semibold mb-4 text-white/90">Business Hours</h3>
            {hours.map((schedule, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span className="text-white/90">{schedule.day}</span>
                <span className="text-white/90">{schedule.time}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white/90">Connect With Us</h3>
            <div className="flex flex-col gap-3">
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
    </footer>
  );
};

export default Footer;