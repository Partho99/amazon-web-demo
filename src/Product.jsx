import React from "react";
import "./Product.css";

const Product = ({ title, productImage, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#127775;</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={productImage} alt="product image" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
