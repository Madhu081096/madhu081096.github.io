import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Figma", "Jest", "GraphQL", "Redis"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;