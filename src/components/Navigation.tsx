import React from 'react';
import { Brain, User, FolderOpen } from 'lucide-react';

interface NavigationProps {
  activeTab: 'overview' | 'projects';
  onTabChange: (tab: 'overview' | 'projects') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-gray-900">AI Engineer Portfolio</span>
          </div>
          
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onTabChange('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <User size={18} />
              Overview
            </button>
            <button
              onClick={() => onTabChange('projects')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'projects'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} />
              All Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;