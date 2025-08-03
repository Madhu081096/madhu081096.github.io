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
            <h3 className="text-2xl font-bold">Dr. Sarah Chen</h3>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
              <Award size={16} />
              <span className="text-sm">AI/ML Engineer</span>
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
              href="#" 
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
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Python, TensorFlow, PyTorch</li>
                <li>AWS, Google Cloud, Azure</li>
                <li>Docker, Kubernetes</li>
                <li>MLOps & Production Systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Impact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>50+ AI Models Deployed</li>
                <li>15+ Hospitals Using Our AI</li>
                <li>1M+ Daily Transactions Processed</li>
                <li>PhD in Computer Science</li>
              </ul>
            </div>
          </div>
          
          <p className="text-purple-200 mb-2">
            Made with <Heart size={16} className="inline text-red-400 mx-1" /> and cutting-edge AI
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Dr. Sarah Chen. All rights reserved. | Advancing AI for a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AIFooter;