import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-xl">
            JS
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">John Smith</h1>
            <p className="text-xl lg:text-2xl text-blue-200 mb-4">Full Stack Developer</p>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Passionate developer with 5+ years of experience creating modern web applications. 
              Specialized in React, Node.js, and cloud technologies with a focus on user experience and performance.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
              <Mail size={20} />
              <span>john.smith@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
              <MapPin size={20} />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;