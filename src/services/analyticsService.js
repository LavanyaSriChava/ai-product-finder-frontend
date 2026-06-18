// analyticsService.js

import axios from "axios";

const API =
  "http://localhost:8080/api/analytics";

export const getAnalytics =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.get(
        API,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
};