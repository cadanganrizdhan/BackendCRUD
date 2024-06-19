// index.js

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { testConnection } from "./database/database.js";
import router from "./router/index.js";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 4000; // Default to 4000 if APP_PORT is not set

app.use(bodyParser.json());

// Use your router
app.use(router);

app.listen(PORT, () => {
    testConnection()
        .then(() => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
        .catch((error) => {
            console.error("Error connecting to database:", error);
        });
});
