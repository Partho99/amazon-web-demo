import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
    const [{basket, user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/ART/Diwali-18/stripe_pc._CB483582784_.jpg"
                    alt="offer"
                />
                <div>
                    {user && (
                        <h3>Hello, {user?.email}</h3>
                    )}
                    {!user && (
                        <h3>Hello, Guest</h3>
                    )}
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            checkoutProductImage={item.productImage}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;
