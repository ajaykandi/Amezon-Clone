import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider"
function CheckoutProduct({ id , image, title , price , rating}) {
   const [{basket}, dispatch] = useStateValue()  ;
    
   const RemoveFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
        
    }

    return (
        <div className="checkoutproduct">
            <img src={image} alt="" className="checkoutproduct__image"/>

            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutproduct__rating">
                    {Array(rating)
                    .fill()
                    .map(()=> (<p>⭐</p>))
                    }
                </p>

            <button onClick={RemoveFromBasket} className="checkoutproduct__button">Remove From  Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
