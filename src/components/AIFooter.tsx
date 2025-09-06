import React from 'react';
import { Heart, Github, Linkedin, Mail, Brain, Award } from 'lucide-react';

const AIFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Madhu Mithra K K</h3>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
              <Award size={16} />
              <span className="text-sm">ML Engineer</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/madhumithra-krishnamoorthy-49981a153/" 
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Expertise</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Computer Vision</li>
                <li>Medical Image Analysis</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Python, PyTorch, OpenCV</li>
                <li>Medical Imaging, MRI, CT</li>
                <li>Signal Processing, GANs</li>
                <li>Raspberry Pi, Edge Computing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Impact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Published IEEE Research</li>
                <li>Medical Industry Collaborations</li>
                <li>International Research Projects</li>
                <li>Computer Vision Specialist</li>
              </ul>
            </div>
          </div>
          
          <p className="text-purple-200 mb-2">
            Made with <Heart size={16} className="inline text-red-400 mx-1" /> and passion for ML research
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Madhu Mithra K K. All rights reserved. | Advancing ML for medical and industrial applications.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AIFooter;