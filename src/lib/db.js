import mysql from "mysql2/promise";

// Connect to db
export const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Connected to the database successfully!");
    return connection;
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    return null;
  }
};
