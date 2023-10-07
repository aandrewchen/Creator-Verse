import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../pages/Form.css'

import { auth } from "../../../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/user");
  };

  return (
    <div className="container">
      <form onSubmit={signIn}>
        <h1 className="blue-title">Log In</h1>
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
        <button className="button" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
