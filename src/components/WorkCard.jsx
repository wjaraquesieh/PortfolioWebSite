import React from "react";

const WorkCard = ({ title, description, image, link, techList }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <ul className="flex flex-wrap mt-4">
          {techList.map((tech, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full mr-2 mb-2"
            >
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
