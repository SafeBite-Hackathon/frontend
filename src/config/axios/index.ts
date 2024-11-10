import { toaster } from "@/components/ui/toaster";
import axios from "axios";

const api = axios.create({
  baseURL: "https://sb-api.dowhile.uz/api/",
  timeout: 20000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage or another storage
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // If the request is successful, simply return the response
    return response;
  },
  (error) => {
    // Handle errors here
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error Response:", error.response.data);
    } else if (error.request) {
      // No response received from server
      console.error("Error Request:", error.request);
    } else {
      // Something went wrong setting up the request
      console.error("Error Message:", error.message);
      alert("An error occurred. Please try again.");
    }
    console.log(error.response.data);
    toaster.create({
      type: "error",
      title: "An error occurred. Please try again.",
    });

    // Reject the error so it can be handled in the calling function
    return Promise.reject(error);
  }
);

export default api;
