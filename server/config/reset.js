import { pool } from "./database.js";
import "./dotenv.js";

const createTables = async () => {
  const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS Users (
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255),
            post_ids TEXT[]
        );
    `;

  const createCreatorsTableQuery = `
        CREATE TABLE IF NOT EXISTS Creators (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) REFERENCES Users(id),
            creator_name TEXT,
            imageURL TEXT,
            description TEXT,
            youtube TEXT,
            twitter TEXT,
            instagram TEXT,
            tiktok TEXT
        );
    `;

  try {
    const res = await pool.query(createUsersTableQuery);
    console.log("🎉 users table created successfully");
  } catch (err) {
    console.error("⚠️ error creating users table", err);
  }

  try {
    const res = await pool.query(createCreatorsTableQuery);
    console.log("🎉 creators table created successfully");
  } catch (err) {
    console.error("⚠️ error creating creators table", err);
  }
};

createTables();
