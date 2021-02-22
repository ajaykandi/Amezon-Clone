import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {getbasketTotal} from './reducer'
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const [{basket} , dispatch ] = useStateValue();
    const history = useHistory();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal( {basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This Order Contain a Gift
                        </small>
                        

                    </div>

                )}
                decimalScale={2}
                value={getbasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}


            />
            <button onClick={e => history.push('/payment')}>Proced to Checkout</button>

        </div>
    )
}

export default Subtotal
