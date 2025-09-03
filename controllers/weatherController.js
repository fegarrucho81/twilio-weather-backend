import { fetchWeather } from "../services/weatherService.js";
import { sendSms } from "../services/twilioService.js";

let lastWeather = null; // storages the last prevision

export const sendWeather = async (req, res) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const weatherData = await fetchWeather(city);
    lastWeather = weatherData;

    // sends the sms with twilio
    await sendSms(`Weather in ${city}: ${weatherData.description}, ${weatherData.temp}°C`);

    return res.json({
      message: "Weather fetched and SMS sent",
      data: weatherData
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getWeather = (req, res) => {
  if (!lastWeather) {
    return res.status(404).json({ error: "No weather data available" });
  }
  return res.json(lastWeather);
};
