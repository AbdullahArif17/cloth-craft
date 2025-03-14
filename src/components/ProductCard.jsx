// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"       // or animate="visible" if you want immediate load
      viewport={{ once: true }}   // triggers once when in view
    >
      <Link to={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-60"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.title}</h3>
          <p className="mt-2 text-primary font-bold">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
