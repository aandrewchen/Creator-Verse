import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const getUsersCreators = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.query.id;
    const results = await pool.query(
      "SELECT * FROM Creators WHERE user_id = $1",
      [id]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

export default getUsersCreators;
