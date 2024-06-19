import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

const testConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log("Database connected");
        connection.release();
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        console.error("Details:", error);
    }
}

const query = async (query, values) => {
    try {
        const [rows] = await db.query(query, values);
        return rows;
    } catch (error) {
        console.error("Query error:", error.message);
        console.error("Details:", error);
    }
}

export { testConnection, query };
