import dotenv from "dotenv";
dotenv.config();
import twilio from "twilio";

// console.log("SID:", process.env.TWILIO_ACCOUNT_SID);
// console.log("TOKEN:", process.env.TWILIO_AUTH_TOKEN); added for debug porpuses
// console.log("FROM:", process.env.TWILIO_PHONE_NUMBER);

const client = twilio( process.env.TWILIO_ACCOUNT_SID, 
    process.env.TWILIO_AUTH_TOKEN );

export const sendSms = async (message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, 
      to: process.env.MY_PHONE_NUMBER
    });
    console.log("SMS sent successfully");
  } catch (error) {
    console.error("Error sending SMS:", error.message);
  }
};
