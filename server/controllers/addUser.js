import { pool } from "../config/database.js";
import expressAsyncHandler from "express-async-handler";

const addUser = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const updateQuery = `INSERT INTO Users (id, email, post_ids) VALUES ('${req.body.id}', '${req.body.email}', '{}'::text[])`;

    console.log(updateQuery);
    const results = await pool.query(updateQuery);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(409).json({ error: error.message });
  }
});

export default addUser;
