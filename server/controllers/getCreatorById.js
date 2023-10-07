import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const getCreatorById = expressAsyncHandler(async (req, res) => {
  console.log(req.query);
  try {
    const selectQuery = "SELECT * FROM Creators WHERE id=$1";
    const results = await pool.query(selectQuery, [req.query.id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

export default getCreatorById;
