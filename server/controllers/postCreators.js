import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const postCreators = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const updateQuery = `INSERT INTO Creators (id, creator_name, description, imageurl, instagram, tiktok, twitter, user_id, youtube) VALUES ('${req.body.id}', '${req.body.creator_name}', '${req.body.description}', '${req.body.imageurl}', '${req.body.instagram}', '${req.body.tiktok}', '${req.body.twitter}', '${req.body.user_id}', '${req.body.youtube}')`;
    console.log(updateQuery);
    const results = await pool.query(updateQuery);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(409).json({ error: error.message });
  }
});

export default postCreators;
