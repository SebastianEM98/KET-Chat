import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

// Import route files
import authRoutes from "./routes/auth.routes.js";
import classroomRoutes from "./routes/classroom.routes.js";
import messageRoutes from "./routes/message.routes.js";


// dotenv setup
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Servidor corriento en el puerto ${PORT}`);
});