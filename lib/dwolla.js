// lib/dwolla.js

import axios from "axios";

// Make sure to use environment variables for sensitive information (e.g., API key)
const DWOLLA_API_URL = "https://api.dwolla.com/customers";
const DWOLLA_API_KEY = sVLXqYdbK1AVHMYU0Qpxpw8O1JS51UpP8FmVxfjogLHjX84wFb; // Your Dwolla API Key

export const createDwollaCustomer = async (customerData) => {
  try {
    const response = await axios.post(DWOLLA_API_URL, customerData, {
      headers: {
        Authorization: `Bearer ${DWOLLA_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return the customer data if the request is successful
  } catch (error) {
    console.error(
      "Error creating Dwolla customer:",
      error.response?.data || error.message
    );
    throw new Error("Failed to create Dwolla customer"); // Throwing a custom error
  }
};
