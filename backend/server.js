import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";


// dotenv setup
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Servidor corriento en el puerto ${PORT}`);
});