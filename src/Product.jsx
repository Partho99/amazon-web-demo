import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, productImage, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        productImage: productImage,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
