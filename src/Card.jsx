import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Card({ product, handleAddToCart, cartItems }) {
  return (
    <div className="col-12 col-lg-4 my-3">
      <div className="card h-100">
        <img className="card-img-top" src={product.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.title}</h5>
            <div className="rating">
              <Rating
                emptyColor={"#f1a545"}
                size={20}
                iconsCount={product.rating}
                allowHover={false}
              ></Rating>
            </div>
            {`${product.currency}${product.price}`}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              disabled={cartItems.some((obj) => obj.id === product.id)}
              onClick={() => {
                handleAddToCart(product);
              }}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
