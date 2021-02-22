import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';




function Product({id , title, price, image, rating }) {
    
    const [ {basket}, dispatch] = useStateValue();

    const addToBaket =()=>{
        dispatch({
                type : "ADD_TO_BASKET",
                item:{
                    id: id,
                    title:title,
                    price:price,
                    image:image,
                    rating:rating

  
                    
                }


        })
        
         
    }
   
   
   



    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map( (_, i)=>
                    <p>⭐</p>
                    )}
    
                </div>

            </div>
            <img src={image} alt="" srcset="" />
            <button onClick={addToBaket} >Add to Cart</button>
        </div>
    )
}

export default Product
