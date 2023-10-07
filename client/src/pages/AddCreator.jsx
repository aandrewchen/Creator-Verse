import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { useAuth } from "../../firebase/auth";

import "./Form.css";

const AddCreator = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [youtube_url, setYoutube_Url] = useState("");
  const [twitter_url, setTwitter_Url] = useState("");
  const [insta_url, setInsta_Url] = useState("");
  const [tiktok_url, setTikTok_Url] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [formError, setFormError] = useState(null);

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

    const userData = {
      id: uuidv4(),
      user_id: authUser.uid,
      creator_name: name,
      description: description,
      imageurl: imageURL,
      youtube: youtube_url,
      twitter: twitter_url,
      instagram: insta_url,
      tiktok: tiktok_url,
    };

    console.log(userData);

    axios
      .post("http://localhost:3001/addCreator", userData)
      .then((response) => {
        console.log("creator created");
      })
      .catch((error) => {
        console.error("error");
      });
    navigate("/user");
  };

  return (
    <div className="container">
      <form>
        <h1 className="blue-title">Add a Creator!</h1>

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
        <div className="two-buttons">
          <button onClick={handleSubmit} className="button">
            Add
          </button>
          <Link to={"/"} role="button" className="home-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddCreator;
