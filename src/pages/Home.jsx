// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = [
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Animated Banner Section */}
      <motion.div
        className="bg-primary text-white rounded-lg p-8 text-center mb-8"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold">Welcome to Cloth Craft</h1>
        <p className="mt-4 text-lg">Premium ladies&apos; suits with a touch of elegance.</p>
        <button
          onClick={() => (window.location.href = '/products')}
          className="mt-6 bg-secondary text-black py-2 px-4 rounded"
        >
          Shop Now
        </button>
      </motion.div>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
