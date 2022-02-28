// import React, { useEffect } from "react";
// import CheckoutProduct from "./CheckoutProduct";
// import "./Payment.css";
// import { useStateValue } from "./StateProvider";
// import { Link } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useState } from "react";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "./reducer";
// import { async } from "@firebase/util";
// import axios from "./axios";
// import { useNavigate } from "react-router-dom";

// import {
//   getFirestore,
//   doc,
//   addDoc,
//   getDoc,
//   getDocs,
//   setDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { db, collection, auth, firebaseApp } from "./firebase";

// // function Payment() {
// //   const history = useNavigate();

// //   const [{ basket, user }, dispatch] = useStateValue();
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [error, setError] = useState(null);
// //   const [disabled, setDisabled] = useState(true);
// //   const [processing, setProcessing] = useState("");
// //   const [succeeded, setSucceeded] = useState(false);
// //   const [clientSecret, setClientSecret] = useState(true);
// //   //   useEffect(() => {
// //   //     const getClientSecret = async () => {
// //   //       const response = await axios({
// //   //         method: "post",
// //   //         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
// //   //       });
// //   //       setClientSecret(response.data.clientSecret);
// //   //     };
// //   //     getClientSecret();
// //   //   }, [basket]);
// //   useEffect(() => {
// //     // generate the special stripe secret which allows us to charge a customer
// //     const getClientSecret = async () => {
// //       const response = await axios({
// //         method: "post",
// //         // Stripe expects the total in a currencies subunits
// //         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
// //       });
// //       setClientSecret(response.data.clientSecret);
// //     };

// //     getClientSecret();
// //   }, [basket]);

// //   const handleChange = (e) => {
// //     setDisabled(e.empty);
// //     setError(e.error ? e.error.message : "");
// //   };
// //   const handleSubmit = async (event) => {
// //     event.prventDefault();
// //     setProcessing(true);
// //     const payload = await stripe
// //       .confirmCardPayment(clientSecret, {
// //         payment_method: { card: elements.getElement(CardElement) },
// //       })
// //       .then(({ paymentIntent }) => {
// //         setSucceeded(true);
// //         setError(false);
// //         setProcessing(false);
// //         history.replaceState("/orders");
// //       });
// //   };
// //   //   const CARD_ELEMENT_OPTIONS = {
// //   //     style: {
// //   //       base: {
// //   //         color: "#32325d",
// //   //         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
// //   //         fontSmoothing: "antialiased",
// //   //         fontSize: "20px",
// //   //         "::placeholder": {
// //   //           color: "#aab7c4",
// //   //         },
// //   //       },
// //   //       invalid: {
// //   //         color: "#fa755a",
// //   //         iconColor: "#fa755a",
// //   //       },
// //   //     },
// //   //   };

// //   return (
// //     <div className="payment">
// //       <div className="payment__container">
// //         <h1>
// //           Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
// //         </h1>
// //         ;
// //         <div className="payment__section">
// //           <div className="payment__title">
// //             <h3>Delivery Address</h3>
// //           </div>
// //           <div className="payment__address">
// //             <p>{user?.email}</p>
// //             <p>Palo Alto</p>
// //             <p>California</p>
// //           </div>
// //         </div>
// //         <div className="payment__section">
// //           <div className="payment__title">
// //             <h3>Review Items and delivery</h3>
// //           </div>
// //           <div ClassName="payment__items">
// //             {basket.map((item) => (
// //               <CheckoutProduct
// //                 id={item.id}
// //                 image={item.image}
// //                 price={item.price}
// //                 rating={item.rating}
// //                 title={item.title}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //         <div className="payment__section">
// //           <div className="payment__title">
// //             <h3>Payment Method</h3>
// //           </div>
// //           <div ClassName="payment__details">
// //             <form onSubmit={handleSubmit}>
// //               <CardElement
// //                 // options={CARD_ELEMENT_OPTIONS?}
// //                 onChange={handleChange}
// //               />
// //               <div className="payment__priceContainer">
// //                 <CurrencyFormat
// //                   renderText={(value) => <h3>Order Total: {value}</h3>}
// //                   decimalScale={2}
// //                   value={getBasketTotal(basket)}
// //                   displayType={"text"}
// //                   thousandSeparator={true}
// //                   prefix={"$"}
// //                 />
// //                 <button disabled={processing || disabled || succeeded}>
// //                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
// //                 </button>
// //               </div>
// //               {error && <div>{error}</div>}
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Payment;

// // import React, { useState, useEffect } from "react";
// // import "./Payment.css";
// // import { useStateValue } from "./StateProvider";
// // import CheckoutProduct from "./CheckoutProduct";
// // import { Link, useNavigate } from "react-router-dom";
// // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// // import CurrencyFormat from "react-currency-format";
// // import { getBasketTotal } from "./reducer";
// // import axios from "./axios";
// // import { auth, db } from "./firebase";

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const history = useNavigate();

//   const stripe = useStripe();
//   const elements = useElements();

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     // generate the special stripe secret which allows us to charge a customer
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         // Stripe expects the total in a currencies subunits
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };

//     getClientSecret();
//   }, [basket]);

//   console.log("THE SECRET IS >>>", clientSecret);
//   console.log("👱", user);

//   const handleSubmit = async (event) => {
//     // do all the fancy stripe stuff...
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(async ({ paymentIntent }) => {
//         // const colRef = collection(db, "Users", user?.uid, "orders");
//         // getDocs(colRef).then((snapshot) => {
//         //   console.log(snapshot.docs);
//         //   //   setDoc(colRef, {
//         //   //     basket: basket,
//         //   //     amount: paymentIntent.amount,
//         //   //     created: paymentIntent.created,
//         //   //   });
//         // });
// const colRef = doc(db, "Users", user?.uid, "orders", paymentIntent.id);
// const gameSnap = await getDoc(colRef);
// const game = gameSnap.data();
// setDoc(
//   colRef,
//   {
//     basket: basket,
//     amount: paymentIntent.amount,
//     created: paymentIntent.created,
//   },
//   { merge: true }
// );

//         // paymentIntent = payment confirmation
//         // const docRef = doc(db, "Users", user?.uid, "orders");
//         // console.log(docRef);
//         // const docSnap = await getDoc(docRef);
//         // console.log(docSnap);
//         // const doc = await docSnap.data(paymentIntent.id);
//         // console.log(doc);
//         // setDoc(docRef, {
//         //   basket: basket,
//         //   amount: paymentIntent.amount,
//         //   created: paymentIntent.created,
//         // });

//         //no line

//         // db
//         //   .collection("Users")
//         //   .doc(user?.uid)
//         //   .collection("orders")
//         //   .doc(paymentIntent.id);
//         // await docRef.set({
//         //   basket: basket,
//         //   amount: paymentIntent.amount,
//         //   created: paymentIntent.created,
//         // });

//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         dispatch({
//           type: "EMPTY_BASKET",
//         });

//         // history.replace("/orders");
// history("/", { replace: true });
//       });
//   };

//   const handleChange = (event) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };

//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//         </h1>

//         {/* Payment section - delivery address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p>Palo Alto</p>
//             <p>San Fransisco Bay</p>
//           </div>
//         </div>

//         {/* Payment section - Review Items */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Payment section - Payment method */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />

//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => <h3>Order Total: {value}</h3>}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>

//               {/* Errors */}
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;

import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
// import { db } from "./firebase";
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, collection, auth, firebaseApp } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        const colRef = doc(db, "Users", user?.uid, "orders", paymentIntent.id);
        const gameSnap = await getDoc(colRef);
        const game = gameSnap.data();
        setDoc(
          colRef,
          {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          },
          { merge: true }
        );
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
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

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
