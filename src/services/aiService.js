import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/api/ai`;

export const searchProducts =
  async (query) => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.post(
        `${API_URL}/search`,
        {
          query,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };
  export const compareProducts =
  async (product1, product2) => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.post(
        `${API_URL}/compare`,
        {
          product1,
          product2,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };