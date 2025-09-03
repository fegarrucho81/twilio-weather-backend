# Backend Internship Project - Weather + Twilio SMS

This is a proof-of-concept backend project built with **Node.js**.  
It demonstrates usage of a public API **(OpenWeather)** and the **Twilio API** for sending SMS.  
The project includes API endpoints ready for POST requests.

---

## Features

- Fetch current weather for a given city using OpenWeather API.
- Send an SMS with a custom message using Twilio API.
- REST API endpoints built in Node.js, ready to deploy or run locally.

---

## Project Structure

├── app.js # Main server file, sets up routes and middleware
├── routes.js # Defines API endpoints for weather and SMS
├── twilioService.js # Handles sending SMS via Twilio
├── weatherService.js # Handles fetching data from OpenWeather API
├── package.json # Project dependencies and scripts
├── .env # Environment variables (keys, tokens, phone numbers)
└── README.md # Project documentation

---

**Explanation of key files:**

- **app.js** → Starts the server, connects routes, listens on a port.  
- **routes.js** → Defines API endpoints (`POST /api/weather` and `POST /api/sms`).  
- **twilioService.js** → Sends SMS using Twilio credentials.  
- **weatherService.js** → Fetches weather data from OpenWeather API.  
- **.env** → Stores sensitive keys and phone numbers (do **not** commit).  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fegarrucho81/twilio-weather-backend
cd your-repo
```

---

### 2. Create .env file

```bash
OPENWEATHER_API_KEY=your_openweather_api_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
MY_PHONE_NUMBER=your_personal_phone_number
PORT=3000
```
--- 

**How to get the keys**
- **OpenWeather API**: [https://openweathermap.org/api](https://openweathermap.org/api)  
  → Sign up and get your API key.

- **Twilio API**: [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio)  
  → Sign up for a free trial, get **Account SID**, **Auth Token**, and a **Twilio phone number**.

---

## 3. Install the dependencies

```
npm install
```

---

## 4. Run the project locally
```
npm run dev
```

---

## API Endpoints

### POST /api/weather
**Description:** Get current weather for a city.

**Body example:**
```json
{
  "city": "London"
}
```
**Response example:**
```json
{
  "temperature": 20,
  "description": "clear sky"
}
```

### Notes
+ Make sure your Twilio number is verified if using a free trial.
+ "node_modules" is excluded from Git; rebuild with npm install.
