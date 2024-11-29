import React from "react";

const Gallery = () => {
    const images = Array(12).fill(null).map((_, i) => `/path/to/gallery-${i + 1}.jpg`);
    
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

  export default Gallery;