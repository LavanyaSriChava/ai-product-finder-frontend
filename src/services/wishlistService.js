import axios from "axios";

const API_URL =
  "http://localhost:8080/api/wishlist";

export const saveWishlist = async (
  query,
  recommendation
) => {

  const token =
    localStorage.getItem("token");

  const response =
    await axios.post(
      API_URL,
      {
        query,
        recommendation,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

export const getWishlist = async () => {

  const token =
    localStorage.getItem("token");

  const response =
    await axios.get(
      API_URL,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

export const deleteWishlist = async (
  wishlistId
) => {

  const token =
    localStorage.getItem("token");

  const response =
    await axios.delete(
      `${API_URL}/${wishlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};