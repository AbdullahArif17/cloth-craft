import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar animation (fade/slide in from top)
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Mobile menu expand/collapse animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 shadow"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Cloth Craft
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
          <Link to="/customize" className="hover:text-primary">
            Customize
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* If menu is open, show "X" icon, else hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              to="/products"
              className="block py-2 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/customize"
              className="block py-2 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Customize
            </Link>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
