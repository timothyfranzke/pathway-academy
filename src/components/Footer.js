import React from "react";

const Footer = () => {
    return (
      <footer className="bg-slate-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Contact</h3>
              <div className="space-y-2">
                <p>913-645-0650</p>
                <p>10561 Barkley St, Suite 630</p>
                <p>Overland Park, 66212</p>
                <p>ssdodd.kc@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61562003723548" className="hover:text-blue-400">Facebook</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#mission" className="hover:text-blue-400">Mission</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#gallery" className="hover:text-blue-400">Gallery</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p>© 2024 Pathway Academy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;