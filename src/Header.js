import React from 'react';
import './Header.css';
import './index.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () =>{
        if (user){
            auth.signOut();

        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            </Link>
            <div className="header__search">
                <input className="header__searchinput" type="text" />
                <SearchIcon className="header__searchicon" />

            </div>
            <div className="header__nav" >
                <Link to={!user && "/login"} onClick={handleAuthentication}>
                    <div className="header__option">
                        <span className="header__optionone">Hello, {!user ? 'Guest' :  user?.email.substring(0, user?.email.indexOf("@"))}</span>
                        <span className="header__optiontwo">{ user ? 'SignOut' : 'SignIn' }</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionone">Returns</span>
                    <span className="header__optiontwo">&Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionone">Your</span>
                    <span className="header__optiontwo">Prime </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionbasket">
                        <ShoppingBasketIcon />
                        <span className="header__optiontwo header__basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default Header
