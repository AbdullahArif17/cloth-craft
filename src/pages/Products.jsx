// src/pages/Products.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { staggerContainer } from '../animations/variants';

export default function Products() {
  // Dummy products
  const products = [
    {
      _id: '1',
      title: 'Elegant Suit',
      slug: 'elegant-suit',
      price: 150,
      image: '/images/suit1.jpg',
    },
    {
      _id: '2',
      title: 'Modern Classic',
      slug: 'modern-classic',
      price: 200,
      image: '/images/suit2.jpg',
    },
    {
      _id: '3',
      title: 'Vintage Charm',
      slug: 'vintage-charm',
      price: 180,
      image: '/images/suit3.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Animated wrapper for the grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </motion.div>
    </div>
  );
}
