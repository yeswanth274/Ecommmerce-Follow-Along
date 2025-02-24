import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 bg-amber-100">{product.name}</h3>
        <p className="text-gray-500 mt-1">{product.description}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>

        {/* Add to Cart Button */}
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;