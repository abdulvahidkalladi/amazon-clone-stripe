import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import {
  getDoc,
  onSnapshot,
  collection,
  getDocs,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import { PaymentIntent } from "@stripe/stripe-js";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const colRef = doc(db, "Users", user.uid);
      // const gameSnap = await getDoc(colRef);
      // const game = gameSnap.data();

      getDocs(colRef)
        .then((snapshot) => {
          let books = [];
          snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id });
            console.log(books);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
      // const colRef = doc(db, "Users", user?.uid, "orders");
      // const gameSnap = await getDoc(colRef);
      // gameSnap((snapshot) => {
      //   setOrders(
      //     snapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       data: doc.data(),
      //     }))
      //   );
      // });
      //   // console.log(gameSnap);
      //   const q = query(
      //     collection(db, "Users", user?.uid, "orders"),
      //     orderBy("createdAt", "desc")
      //   );
      //   const querySnapshot = await getDocs(q);

      //   querySnapshot.forEach((doc) => {
      //     // doc.data() is never undefined for query doc snapshots
      //     setOrders({ ...doc.data(), id: doc.id });
      //   });
      // }

      // onSnapshot(colRef, (snapshot) => {
      //   setOrders(
      //     snapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       data: doc.data(),
      //     }))
      //   );
      // });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders is Here</h1>
      <div className="orders__order">
        <Order />
        <h1>Hi</h1>
      </div>
    </div>
  );
}

export default Orders;
