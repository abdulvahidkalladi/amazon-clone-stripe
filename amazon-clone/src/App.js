import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import HeaderDown from "./HeaderDown";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Orders from "./Orders.js";
import Order from "./Order.js";
function App() {
  const [{}, dispatch] = useStateValue();
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(
      "pk_test_51KVvX3FEQoWYGMjx7M2TWF3Vk0EwZ4yfZVRha5LzQoEqmtaAjQyjl0RcTpoadVhU2RIJCi4bvn0HvA5f5o1blznr00DtZydwgE"
    )
  );
  // const promise = loadStripe(
  //   "pk_test_51KVvX3FEQoWYGMjx7M2TWF3Vk0EwZ4yfZVRha5LzQoEqmtaAjQyjl0RcTpoadVhU2RIJCi4bvn0HvA5f5o1blznr00DtZydwgE"
  // );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register"></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeaderDown />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
