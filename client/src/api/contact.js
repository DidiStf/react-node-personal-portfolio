import axios from "axios";

const API_KEY = "api/contact";

const config = {
  header: {
    "Content-Type": "application/json",
  },
};

export const sendContactEmail = (contactData) =>
  axios.post(API_KEY, contactData, config);
