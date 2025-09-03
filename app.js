import dotenv from "dotenv";
dotenv.config();
import express from "express";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));