import React from "react";

const ResourceCard = ({ title, image, summary, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300">
      <div className="flex items-center mb-4">
        {image && <img src={image} alt={title} className="h-12 w-12 mr-4 rounded" />}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{summary}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ResourceCard;
