import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Brand */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-center text-white">
            Movies Hub
          </h2>
          <p className="text-sm mt-2 text-gray-500">
            Made with <span className="text-red-500">❤️</span> and lots of{" "}
            <span className="text-yellow-400">☕</span> by{" "}
            <span className="text-white font-medium">Surajit</span>
          </p>
        </div>

        {/* Navigation Links */}

        <div className="flex w-full justify-evenly">
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact us
          </Link>
          <a
            href="https://github.com/surajit20107/Movies-Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Source Code
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-evenly text-xl w-full">
          <a
            href="https://github.com/surajit20107"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/surajit20107"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-600">
        © {currentYear} Movies Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
