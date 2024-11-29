import React, { useEffect, useState } from "react";

const Mission = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative py-16 overflow-hidden" id="mission">
      {/* Background wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full t-0"
          style={{
            backgroundImage: `url('assets/bg_2.png')`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top',
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-white/50" />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Container */}
          <div className="w-full md:w-96 flex-shrink-0">
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl bg-white">
              <img 
                src="assets/mission.jpg"
                alt="Mission" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/90 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-3xl font-medium mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To teach students from a Christian worldview in a safe and stress-free 
                learning environment, focusing on each student's learning style and needs, 
                as they develop a love for learning and by God's Grace a love for their creator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;