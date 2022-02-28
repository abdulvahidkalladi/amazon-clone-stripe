import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Checkoutproduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkoutads"
        />
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item) => (
            <Checkoutproduct
              id={item.id}
              price={item.price}
              image={item.image}
              rating={item.rating}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
