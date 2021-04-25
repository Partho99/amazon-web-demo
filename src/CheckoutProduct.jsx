import React from "react";
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

const CheckoutProduct = ({id, checkoutProductImage, title, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkout__product'>
            <img className='checkout__product__image' src={checkoutProductImage}/>

            <div className='checkout__product__info'>
                <p className='checkout__product__title'>{title}</p>
                <p className='checkout__product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout__product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#127775;</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;