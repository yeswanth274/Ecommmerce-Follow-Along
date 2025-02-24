import React from 'react';
import ProductCard from '../components/auth/Productcard';

const productDetails = [
  {
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Product 1',
    price: 100,
    description: 'This is a product'
  },
  {
    image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Product 2',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Product 3',
    price: 300,
    description: 'This is a product'
  },
  {
    image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Product 4',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Product 5',
    price: 300,
    description: 'This is a product'
  }
];

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Products</h1>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productDetails.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;