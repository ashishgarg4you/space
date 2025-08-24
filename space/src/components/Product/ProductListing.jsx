// src/pages/ProductListing.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductListing() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated API fetch (replace with backend call)
    fetch(`/api/products?category=${categoryId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Products in {categoryId}</h2>
      <div className="row g-4">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} className="col-12 col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: 250 }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-muted">{p.description}</p>
                  <p className="fw-bold">${p.price}</p>
                  <button className="btn btn-dark btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </section>
  );
}
