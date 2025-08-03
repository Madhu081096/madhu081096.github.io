import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          
          <p className="text-gray-400 mb-2">
            Made with <Heart size={16} className="inline text-red-500 mx-1" /> by John Smith
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 John Smith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;