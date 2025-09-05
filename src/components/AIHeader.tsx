import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Brain, Award, Users } from 'lucide-react';

const AIHeader = () => {
  return (
    <header className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl">
              <Brain size={60} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
              <Award size={20} className="text-white" />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Madhu Mithra K K
            </h1>
            <p className="text-2xl lg:text-3xl text-purple-200 mb-4 font-light">ML Engineer & Researcher</p>
            <p className="text-lg text-purple-100 max-w-3xl leading-relaxed mb-6">
              Passionate ML engineer specializing in computer vision, medical image analysis, and deep learning. 
              Experienced in developing innovative solutions for medical imaging, object detection, and machine vision systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award size={16} />
                <span className="text-sm">Published Researcher</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users size={16} />
                <span className="text-sm">Computer Vision Expert</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors">
              <Mail size={20} />
              <span>kkm81096@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors">
              <MapPin size={20} />
              <span>Tamil Nadu, India</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AIHeader;