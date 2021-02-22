import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getbasketTotal } from './reducer';
import { useStateValue } from './StateProvider'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded , setSucceeded] = useState(false);
    const [processing, setProcessing]= useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientsecret] = useState(true);

    useEffect(() =>{

        const getClientsecret = async ()=>{

            const response = await axios({
                method : 'post',
                url: `/payments/create?total=${getbasketTotal(basket) * 100 }`


            });
             console.log("the responce from axios :" , response.data)

            setClientsecret(response.data.clientSecret )
            console.log(clientSecret);

        }
            getClientsecret();
    },[basket] )

    console.log("the secrete is" ,clientSecret)



    const handlesubmit = async (e) => {

        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)

            }
        }).then(({ paymentIntent }) =>{
            // paymentIntent = payment Confirimation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')

        })




    }
    const handlechange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")


    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>React lane</p>
                        <p>Telangane,india</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery </h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method </h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handlesubmit} >
                            <CardElement className="payment__card" onChange={handlechange} />
                            <div className="payment__pricecontainer">


                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3 className="payment__ordertotal">Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getbasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                                <button  desabled={processing ||disabled ||succeeded }>
                                    <span>{processing ? <p>Processing</p> :"Buy Now"  }</span>
                                </button>
                                <div>
                                    {error && <div className="payment__error">{error}</div>}
                                </div>


                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
