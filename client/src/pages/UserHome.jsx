import React, { useEffect, useState } from "react";
import axios from "axios";

import { useAuth } from "../../firebase/auth";

import "./UserHome.css";

import Card from "../components/Card";

const UserHome = () => {
  const { authUser } = useAuth();
  const [creators, setCreators] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    console.log(authUser);
    const authParams = {
      id: authUser.uid,
    };

    axios
      .get("http://localhost:3001/creators/", { params: authParams })
      .then((response) => {
        console.log(response.data);
        setCreators(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFetchError("error occured");
      });
  }, []);

  const handleDelete = (id) => {
    const creatorParams = {
      id,
    };

    axios
      .post("http://localhost:3001/deleteCreator", creatorParams)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFetchError("error occured");
      });

    setCreators((prevCreators) => {
      return prevCreators.filter((creator) => creator.id !== id);
    });
  };

  return (
    <div className="container">
      {fetchError && <p className="error">{fetchError}</p>}
      <h1 className="blue-title">Your Favorite Creators!</h1>
      {creators && (
        <div className="creator-grid">
          {creators.map((creator) => (
            <Card
              key={creator.id}
              creator={creator}
              onDelete={() => handleDelete(creator.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserHome;
