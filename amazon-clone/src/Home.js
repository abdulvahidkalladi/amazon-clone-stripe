import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          // src="https://m.media-amazon.com/images/I/710Jj2CnIeL._SX3740_.jpg"
          // src="https://m.media-amazon.com/images/I/61imVG5k89L._SX3740_.jpg"
          // src="https://m.media-amazon.com/images/I/71peqEnEmXL._SX3000_.jpg"
          //g src="https://m.media-amazon.com/images/I/61k1SEhfcpL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/61pMwykTQYL._SX3000_.jpg"
          // No src="https://m.media-amazon.com/images/I/61-mzVWl54L._SX3000_.jpg"
          src="https://m.media-amazon.com/images/I/61c5x9JnohL._SX3000_.jpg"
          alt="amazon-home"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover"
            price={20.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="4903850"
            title="Samsung Electronics Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61f2cmAiQoS._AC_SL1500_.jpg"
          />
          {/* product */}
        </div>
        <div className="home__row">
          <Product
            id="3254354346"
            title="Samsung 85 Inch QN85A Neo QLED 4K Smart TV"
            price={5099.99}
            image="https://images.samsung.com/is/image/samsung/p6pim/ae/qa85qn85aauxzn/gallery/ae-neo-qled-qn85a-qa85qn85aauxzn-412695303"
            rating={5}
          />
          <Product
            id="23445930"
            title="Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61R+1DLe-uL._AC_SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple iPhone 11 Pro, US Version, 256GB, Silver - Unlocked (Renewed)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Jf4uu-xzL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
