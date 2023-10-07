import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Modal from "../components/Modal";

import "./Form.css";

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [creatorinfo, setCreatorInfo] = useState([]);
  const [name, setName] = useState("");
  const [youtube_url, setYoutube_Url] = useState("");
  const [twitter_url, setTwitter_Url] = useState("");
  const [insta_url, setInsta_Url] = useState("");
  const [tiktok_url, setTikTok_Url] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [formError, setFormError] = useState(null);

  const handleDelete = (id) => {
    const creatorParams = {
      id,
    };

    console.log("creator params", creatorParams);
    axios
      .post("http://localhost:3001/deleteCreator", creatorParams)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFormError("error occured");
      });

    navigate("/user");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !description ||
      !imageURL ||
      (!youtube_url && !twitter_url && !insta_url && !tiktok_url)
    ) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    const body = {
      id,
      creator_name: name,
      description: description,
      imageurl: imageURL,
      instagram: insta_url,
      tiktok: tiktok_url,
      twitter: twitter_url,
      youtube: youtube_url,
    };

    axios
      .post("http://localhost:3001/editCreator", body)
      .then((response) => {
        console.log("edited creator");
      })
      .catch((error) => {
        console.error("error");
      });

    navigate("/user");
  };

  useEffect(() => {
    const params = {
      id,
    };

    axios
      .get("http://localhost:3001/creators/getCreatorById", { params })
      .then((response) => {
        console.log(response.data);
        setCreatorInfo(response.data);
        console.log("hi,", creatorinfo);
      })
      .catch((error) => {
        console.log(error);
        setFetchError("error occured");
      });
  }, []);

  useEffect(() => {
    setName(creatorinfo.creator_name);
    setYoutube_Url(creatorinfo.youtube);
    setTwitter_Url(creatorinfo.twitter);
    setInsta_Url(creatorinfo.insta);
    setTikTok_Url(creatorinfo.tiktok);
    setDescription(creatorinfo.description);
    setImageURL(creatorinfo.imageurl);
  }, [creatorinfo]);

  return (
    <div className="container">
      <form>
        <h1 className="blue-title">Edit a Creator!</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name of the Creator!"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="imageURL">Image:</label>
        <small>Provide a link to an image of your creator!</small>
        <input
          type="text"
          id="imageURL"
          value={imageURL}
          placeholder="Be sure to include the https://"
          onChange={(e) => setImageURL(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          placeholder="Tell us about the creator!"
          onChange={(e) => setDescription(e.target.value)}
        />

        <h2>Social Media Links</h2>
        <h3>Provide at least one of the creator's social media links!</h3>

        <label htmlFor="youtube_url">Youtube:</label>
        <input
          type="text"
          id="youtube_url"
          value={youtube_url}
          placeholder="The creator's YouTube handle (Be sure to include the https://)"
          onChange={(e) => setYoutube_Url(e.target.value)}
        />

        <label htmlFor="twitter_url">Twitter:</label>
        <input
          type="text"
          id="twitter_url"
          value={twitter_url}
          placeholder="The creator's Twitter handle (Be sure to include the https://)"
          onChange={(e) => setTwitter_Url(e.target.value)}
        />

        <label htmlFor="insta_url">Instagram:</label>
        <input
          type="text"
          id="insta_url"
          value={insta_url}
          placeholder="The creator's Instagram handle (Be sure to include the https://)"
          onChange={(e) => setInsta_Url(e.target.value)}
        />

        <label htmlFor="tiktok_url">TikTok:</label>
        <input
          type="text"
          id="tiktok_url"
          value={tiktok_url}
          placeholder="The creator's TikTok handle (Be sure to include the https://)"
          onChange={(e) => setTikTok_Url(e.target.value)}
        />
      </form>
      {formError && <p className="error">{formError}</p>}
      <div className="form-buttons-grid">
        <div className="three-buttons">
          <button onClick={() => setOpenModal(true)} className="delete-button">
            Delete
          </button>
          <button onClick={handleSubmit} className="button">
            Submit
          </button>
          <Link to={"/"} role="button" className="home-button">
            Back to Home
          </Link>
        </div>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onDelete={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default EditCreator;
