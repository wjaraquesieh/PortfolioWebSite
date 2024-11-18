import React from "react";
import WorkCard from "../components/WorkCard";

import DockerFileImg from "../image/reactDocker.jpg";
import StorybookFileImg from "../image/reactStorybook.jpg";
import HuskyFileImg from "../image/reactHusky.jpg";

const projects = [
  {
    title: "DockerFile Project",
    description: "Base project configured with React and Docker for efficient development.",
    image: DockerFileImg,
    link: "https://github.com/wjaraquesieh/DockerFile",
    techList: ["React", "Docker"],
  },
  {
    title: "Web Component Library",
    description: "Web component library using React, Docker and configured with Storybook.",
    image: StorybookFileImg,
    link: "https://github.com/wjaraquesieh/WebComponentLibrary",
    techList: ["React", "Docker", "Storybook"],
  },
  {
    title: "UI Component Library",
    description: "UI component library with Docker and Husky configured.",
    image: HuskyFileImg,
    link: "https://github.com/wjaraquesieh/UIComponentLibrary",
    techList: ["React", "Docker", "Husky"],
  },
  {
    title: "Portfolio Website",
    description: "Course portfolio developed in React and Docker.",
    image: DockerFileImg,
    link: "https://github.com/wjaraquesieh/PortfolioWebsite",
    techList: ["React", "Docker"],
  },
];

const Work = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <WorkCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            techList={project.techList}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
