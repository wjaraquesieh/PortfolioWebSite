import React from "react";
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/work" className="hover:underline">Work</Link>
        </li>
        <li>
          <Link to="/skills" className="hover:underline">Skills</Link>
        </li>
        <li>
          <Link to="/resources" className="hover:underline">Resources</Link>
        </li>
        <li>
          <Link to="/setup" className="hover:underline">Developer Setup</Link>
        </li>
      </ul>
      </nav>
    </div>
  </header>
);

export default Header;
