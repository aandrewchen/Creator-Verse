import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "./ViewCreator.css";

import CreatorLinks from "../components/CreatorLinks";
import Modal from "../components/Modal";

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [creatorinfo, setCreatorInfo] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const params = {
      id,
    };

    axios
      .get("http://localhost:3001/creators/getCreatorById", { params })
      .then((response) => {
        console.log(response.data);
        setCreatorInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFetchError("error occured");
      });
  }, []);

  console.log(creatorinfo);

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
    navigate("/user");
  };

  return (
    <div className="container">
      {fetchError && <p className="error">{fetchError}</p>}
      {creatorinfo && (
        <div>
          <div key={creatorinfo.id} className="viewcreator-grid">
            <div className="image-card">
              <img src={creatorinfo.imageurl} alt="No image found :(" />
            </div>
            <div className="creatordetails">
              <h1>{creatorinfo.creator_name}</h1>
              <p>{creatorinfo.description}</p>
            </div>
            <h3 className="small-text">Social Media Links:</h3>
            <CreatorLinks creatorinfo={creatorinfo} />
            <div className="three-buttons">
              <button
                onClick={() => setOpenModal(true)}
                className="delete-button"
              >
                Delete
              </button>
              <Link
                to={"/editcreator/" + creatorinfo.id}
                role="button"
                className="button"
              >
                Edit
              </Link>
              <Link to={"/user"} role="button" className="home-button">
                Back to Home
              </Link>
            </div>
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              onDelete={() => handleDelete(creatorinfo.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCreator;
