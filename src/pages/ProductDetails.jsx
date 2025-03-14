// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Dummy product data. In real app, fetch by slug from your backend or CMS.
  const product = {
    _id: '1',
    title: 'Elegant Suit',
    slug: 'elegant-suit',
    price: 150,
    image: '/images/suit1.jpg',
    description: 'This elegant suit is perfect for formal occasions and daily wear.',
  };

  // If slug doesn't match, you might redirect or show "Not Found"
  if (slug !== product.slug) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Product not found. 
          <button onClick={() => navigate('/products')} className="text-blue-500 ml-2">
            Go back
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="rounded w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4 text-lg">{product.description}</p>
          <p className="mt-4 font-semibold text-xl">Price: ${product.price}</p>
          <button className="mt-6 bg-primary text-white py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
