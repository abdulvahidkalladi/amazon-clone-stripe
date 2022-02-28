import React, { useEffect, useState } from "react";
import "./Order.css";
import { useStateValue } from "./StateProvider";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
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

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();
  // useEffect(async () => {
  //   if (user) {
  //     const colRef = doc(db, "Users", user?.uid, "orders");
  //     const gameSnap = await getDoc(colRef);
  //     const game = gameSnap.data();
  //     console.log(game);

  //     const q = query(colRef, orderBy("createdAt", "desc"));

    //   onSnapshot(q, (snapshot) =>
    //     setOrders(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
    //       }))
    //     )
    //   );
  //     // onSnapshot(q, (snapshot) => {
  //     //   snapshot.docs.forEach((doc) => {
  //     //     setOrders({ ...doc.data(), id: doc.id });
  //     //   });
  //     // });
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders- Not showing</h1>

      <div className="orders__order">
        {/* {orders?.map((order) => ( */}
        <Order />
        {/* ))} */}
      </div>
    </div>
  );
}

export default Orders;
