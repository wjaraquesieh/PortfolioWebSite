import React from "react";
import ResourceCard from "../components/ResourceCard";

// Imágenes o íconos locales
import ReactIcon from "../image/react-icon.png";
import TailwindIcon from "../image/tailwind-icon.png";
import DockerIcon from "../image/docker-icon.png";
import DevToIcon from "../image/devto-icon.png";
import LearnIcon from "../image/learn-icon.png";
import LinkedInIcon from "../image/linkedin-icon.png";

// Array de recursos
const resources = [
  {
    title: "React Documentation",
    image: ReactIcon,
    summary: "Official React documentation, essential for learning and developing components.",
    link: "https://react.dev/",
  },
  {
    title: "TailwindCSS Documentation",
    image: TailwindIcon,
    summary: "Complete guide to using the TailwindCSS classes utility.",
    link: "https://tailwindcss.com/docs",
  },
  {
    title: "Docker Documentation",
    image: DockerIcon,
    summary: "Resources and examples for working with Docker and containers.",
    link: "https://docs.docker.com/",
  },
  {
    title: "Dev.to Articles",
    image: DevToIcon,
    summary: "Articles from the developer community with practical tips and solutions.",
    link: "https://dev.to/",
  },
  {
    title: "Learn RRC Platform",
    image: LearnIcon,
    summary: "Educational platform used to access course materials and resources.",
    link: "https://learn.rrc.ca/",
  },
  {
    title: "LinkedIn Learning Videos",
    image: LinkedInIcon,
    summary: "Educational videos to deepen web development skills.",
    link: "https://www.linkedin.com/learning/",
  },
];

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            image={resource.image}
            summary={resource.summary}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
