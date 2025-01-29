import React from "react";

const GoogleReviews = () => {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Google Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-white/80">5.0</span>
            </div>
            <p className="text-white/80 italic mb-4">
              "Excellent service! They had the exact part I needed for my car at a great price. Very professional and knowledgeable staff."
            </p>
            <p className="text-white font-semibold">- Javier Perez</p>
            <p className="text-white/60 text-sm">2 months ago</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-white/80">5.0</span>
            </div>
            <p className="text-white/80 italic mb-4">
              "Great place to find quality used parts. The owner is very helpful and honest. Highly recommended!"
            </p>
            <p className="text-white font-semibold">- Marcos Silva</p>
            <p className="text-white/60 text-sm">1 month ago</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-white/80">5.0</span>
            </div>
            <p className="text-white/80 italic mb-4">
              "Fantastic experience! They helped me find a hard-to-get part for my car. Very reasonable prices and great customer service."
            </p>
            <p className="text-white font-semibold">- Luis Rodriguez</p>
            <p className="text-white/60 text-sm">3 months ago</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a 
            href="https://g.co/kgs/GVdYjbk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View All Google Reviews
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;