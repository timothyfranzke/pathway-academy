import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const ScrollingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);

  // Load images from gallery.json
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/assets/gallery.json');
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error loading gallery.json:', error);
        // Fallback to placeholder images
        const placeholderImages = Array(20).fill(null).map((_, i) => ({
          id: i + 1,
          src: `/api/placeholder/400/400`,
          alt: `Gallery image ${i + 1}`,
          title: `Gallery image ${i + 1}`
        }));
        setImages(placeholderImages);
      }
    };

    loadImages();
  }, []);

  // Handle lazy loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            if (img && img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1
      }
    );

    const elements = container.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [images]);

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="w-full bg-white py-16 overflow-hidden" id ="gallery">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-medium text-center mb-12">Gallery</h2>
      </div>
      
      <div 
        ref={containerRef}
        className="mt-16 sm:mt-20"
      >
        <div className="-my-4 flex justify-center gap-5 overflow-x-auto py-4 sm:gap-8 hide-scrollbar pl-[10vw]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item relative aspect-[9/10] w-44 flex-none 
                overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl 
                cursor-pointer transform transition-all duration-300 
                hover:scale-105 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
              onClick={() => openImage(image)}
            >
              <img
                data-src={image.src}
                src="/api/placeholder/400/400"
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={closeImage}
        >
          <div 
            className="relative max-w-6xl w-full p-4 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImage}
              className="absolute -top-12 right-4 text-white p-2 hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            {selectedImage.title && (
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-white text-lg bg-black/50 rounded-lg px-4 py-2 inline-block">
                  {selectedImage.title}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ScrollingGallery;