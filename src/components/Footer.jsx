// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="
        py-8 mt-8
        bg-gradient-to-r from-gray-100 to-gray-200
        dark:from-gray-800 dark:to-gray-900
        shadow-inner border-t border-gray-200 dark:border-gray-700
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link
              to="/"
              className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
            >
              Cloth Craft
            </Link>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
              Crafting quality clothing since 2025
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 dark:text-gray-300
                hover:text-accent
                transition-colors duration-300
                hover:-translate-y-1 transform
              "
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 dark:text-gray-300
                hover:text-accent
                transition-colors duration-300
                hover:-translate-y-1 transform
              "
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 dark:text-gray-300
                hover:text-accent
                transition-colors duration-300
                hover:-translate-y-1 transform
              "
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-600 mt-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-700 dark:text-gray-400 mt-4">
          © {new Date().getFullYear()} Cloth Craft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
