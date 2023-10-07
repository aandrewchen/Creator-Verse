import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Card.css";
import Modal from "./Modal";

const Card = ({ creator, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="card">
      <img src={creator.imageurl} alt="" />
      <div className="details">
        <h1>{creator.creator_name}</h1>
        <p>{creator.description}</p>
        <nav className="more">
          <ul>
            <li>
              <Link to={"/viewcreator/" + creator.id} className="white-color">
                View
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/editcreator/" + creator.id} className="white-color">
                Edit
              </Link>
            </li>
            <li>
              <a onClick={() => setOpenModal(true)} className="white-color">
                Delete
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Card;
