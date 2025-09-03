import express from "express";
import { getWeather, sendWeather } from "../controllers/weatherController.js";

const router = express.Router();

// GET - return last prevision
router.get("/", getWeather);

// POST - receives the city and sends the SMS
router.post("/", sendWeather);

export default router;
