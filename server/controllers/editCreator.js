import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const editCreator = expressAsyncHandler(async (req, res) => {
  try {
    const editQuery =
      "UPDATE Creators SET creator_name = $2, description = $3, imageurl = $4, instagram = $5, tiktok = $6, twitter = $7,  youtube = $8 WHERE id=$1";
    const results = await pool.query(editQuery, [
      req.body.id,
      req.body.creator_name,
      req.body.description,
      req.body.imageurl,
      req.body.instagram,
      req.body.tiktok,
      req.body.twitter,
      req.body.youtube,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

export default editCreator;
