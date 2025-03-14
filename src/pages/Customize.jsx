// src/pages/Customize.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import CustomizationTool from '../components/CustomizationTool';

export default function Customize() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Customize Your Suit</h1>
      <CustomizationTool />
    </motion.div>
  );
}
