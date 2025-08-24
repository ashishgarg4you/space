import React, { useState } from 'react';
import Gallery from '../utils/Gallery.jsx';
import products from '../Data/products.js';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCategory(item.id);
  };

  const itemsToShow = selectedCategory
    ? products.filter((p) => p.id === selectedCategory)
    : products;

  return (
    <div className="container py-5">
      {!selectedCategory && (
        <h2 className="text-center mb-5">Explore Our Collections</h2>
      )}

      <Gallery 
        items={itemsToShow} 
        onCardClick={handleCardClick} 
      />

      {selectedCategory && (
        <div className="text-center mt-4">
          <button 
            className="btn btn-outline-dark" 
            onClick={() => setSelectedCategory(null)}
          >
            Back to All Collections
          </button>
        </div>
      )}
    </div>
  );
}
