import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const addCreators = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const updateQuery = `INSERT INTO Creators (id, creator_name, description, imageurl, instagram, tiktok, twitter, user_id, youtube) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    console.log(updateQuery);
    const results = await pool.query(updateQuery, [req.body.id, req.body.creator_name, req.body.description, req.body.imageurl, req.body.instagram, req.body.tiktok, req.body.twitter, req.body.user_id, req.body.youtube]);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(409).json({ error: error.message });
  }
});

export default addCreators;
