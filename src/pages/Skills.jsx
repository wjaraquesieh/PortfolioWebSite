import React from 'react';

const skills = [
  { name: 'ReactJS', icon: '📝' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'Javascript', icon: '🟨' },
  { name: 'CSS', icon: '🎨' },
];

const tools = [
  { name: 'Visual Studio Code', icon: '📝' },
  { name: 'Docker', icon: '🚢' },
  { name: 'GitHub', icon: '🐙' },
];


const SkillsAndTools = () => {
  return (
    <div className="bg-green-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Languages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md"
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md"
          >
            <span className="text-3xl mb-2">{tool.icon}</span>
            <span className="font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndTools;
