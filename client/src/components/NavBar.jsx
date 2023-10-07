import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { signOut } from "firebase/auth";

import { useAuth } from "../../firebase/auth";

import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout successful");
      })
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <nav className="container">
      <ul>
        <li>
          <strong>CreatorVerse</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/" className="navbar">
          {authUser ? "Home" : "Sign In To Start Sharing!"}
          </Link>
        </li>
        <li>
          <Link to="/addcreator" className="navbar">
          {authUser ? "Add" : ""}
          </Link>
        </li>
        <li>
          <Link to="/" onClick={userSignOut} className="navbar">
            {authUser ? "Sign Out" : ""}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;