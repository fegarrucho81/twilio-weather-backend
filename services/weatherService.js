import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);
  const data = response.data;

  return {
    city: data.name,
    temp: data.main.temp,
    description: data.weather[0].description
  };
};
