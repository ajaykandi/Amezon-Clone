import './App.css';
import Header from "./Header";
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51IM4GfIdOsF5leyT8VEaGRy3JKtLpqTOtuw2fsNm7ivC4HN8NkQc1EOJ4MucQaO7NHJtIDBurjdvVpoUkXALsOOM00lRUkVjJg')

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null

        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>


          <Route path="/orders" exact>
            <Header />
            <Orders/>
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
