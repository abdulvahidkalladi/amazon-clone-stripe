import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "./firebase.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();

    // const registerWithEmailAndPassword = async (name, email, password) => {
    //   try {
    //     const res = await createUserWithEmailAndPassword(auth, email, password);
    //     const user = res.user;
    //     await addDoc(collection(db, "users"), {
    //       uid: user.uid,
    //       name,
    //       authProvider: "local",
    //       email,
    //     });
    //   } catch (err) {
    //     console.error(err);
    //     alert(err.message);
    //   }
    // };
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            value={email}
            onClick={signIn}
          >
            Sign-In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <button
            className="login__registerButton"
            type="submit"
            onClick={register}
          >
            Create Your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
