import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full animate-pulse"></div>
            <img
              src="assets/sally.jpeg"
              alt="Sally's portrait"
              className="rounded-full w-full h-full object-cover relative z-10 ring-4 ring-white shadow-lg"
            />
          </div>
          
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-medium mb-6">Meet Sally</h2>
            <p className="text-gray-600 text-lg mb-6">
              I am a retired Kindergarten teacher with over 20 years of experience in Classical Christian Education. 
              My passion is creating a nurturing environment where each child can discover their God-given potential.
            </p>
            <p className="text-gray-600 text-lg">
              I offer a 4-day-a-week school program for KDG-4th grade, focusing on individualized attention 
              and Christ-centered learning that helps students build strong academic foundations while developing 
              their character.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700">20+ Years Experience</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-gray-700">Classical Education</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Nurturing Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;