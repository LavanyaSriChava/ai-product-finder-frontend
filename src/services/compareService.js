import axios from "axios";
const API =
  `${import.meta.env.VITE_API_URL}/api/ai`;
export const compareProducts =
  async (product1, product2) => {

    const response =
      await axios.post(
        `${API}/compare`,
        {
          product1,
          product2
        }
      );

    return response.data;
  };