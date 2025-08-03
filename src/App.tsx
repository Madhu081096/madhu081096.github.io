import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AIHeader from './components/AIHeader';
import AISkills from './components/AISkills';
import Courses from './components/Courses';
import FeaturedProjects from './components/FeaturedProjects';
import AllProjects from './components/AllProjects';
import AIFooter from './components/AIFooter';

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects'>('overview');

  return (
    <div className="min-h-screen">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'overview' ? (
        <>
          <AIHeader />
          <AISkills />
          <Courses />
          <FeaturedProjects />
          <AIFooter />
        </>
      ) : (
        <>
          <AllProjects />
          <AIFooter />
        </>
      )}
    </div>
  );
}

export default App;