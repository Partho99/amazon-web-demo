import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/ART/Diwali-18/stripe_pc._CB483582784_.jpg"
          alt="offer"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
