import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="1"
                        title={"Zandu Pure Honey, 500g"}
                        price={11}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/615QxY6rooL._SL1200_.jpg"} />

                    <Product
                        id="2"
                        title={"Cadbury Dairy Milk Silk Valentine’S Home Treats, 2 x 162 gCadbury Dairy Milk Silk Valentine’S Home Treats."}
                        price={19.99}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71ZFVv6NrhL._SX679_.jpg"} />

                    <Product
                        id="3"
                        title={"Ferrero Rocher Moments,(Box of 24 Units), 139.2 g"}
                        price={6.99}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/61mKoHH2rsL._SL1000_.jpg"} />




                </div>
                <div className="home__row">
                    <Product
                        id="4"
                        title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)"
                        price={1200}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SX679_.jpg"} />
                    <Product
                        id={5}
                        title={"Samsung Galaxy M02 (Blue,3GB RAM, 32GB Storage) | Dual Rear Camera |"}
                        price={899.0}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71DjGYZMZzL._SY879_.jpg"} />
                    <Product
                        id={6}
                        title={"New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)"}
                        price={749.99}
                        rating={4}
                        image={"https://m.media-amazon.com/images/I/71ZXj1QEE0L._AC_UY218_.jpg"} />

                    <Product
                        id={7}
                        title={"Apple iPhone 7 (32GB) - Black"}
                        price={1499.99}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41D9NDiSzjL._SY879_.jpg"} />




                </div><div className="home__row">
                    <Product
                        id={8}
                        title={"Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"}
                        price={1500}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SX679_.jpg"} />

                </div>




            </div>
        </div>
    )
}

export default Home
