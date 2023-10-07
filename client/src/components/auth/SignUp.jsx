import React, { useState } from "react";
import { auth } from "../../../firebase/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

import "../../pages/Form.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const userData = {
          id: userCredential.user.uid,
          email: userCredential.user.email,
        };
        console.log(userData);
        axios
          .post("http://localhost:3001/createUser", userData)
          .then((response) => {
            console.log("user created");
          })
          .catch((error) => {
            console.error("error");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={signUp}>
        <h1 className="blue-title">Create An Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
