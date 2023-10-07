import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const deleteCreator = expressAsyncHandler(async (req, res) => {
  console.log("body", req.body);
  try {
    const deleteQuery = "DELETE FROM Creators WHERE id=$1";
    const results = await pool.query(deleteQuery, [req.body.id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

export default deleteCreator;
