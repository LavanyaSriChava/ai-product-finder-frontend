import axios from "axios";

const API =
  "http://localhost:8080/api/search-history";

const getAuthHeader = () => ({
  headers: {
    Authorization:
      `Bearer ${localStorage.getItem("token")}`
  }
});

export const getSearchHistory =
  async () => {

    const response =
      await axios.get(
        API,
        getAuthHeader()
      );

    return response.data;
};

export const deleteHistory =
  async (id) => {

    await axios.delete(
      `${API}/${id}`,
      getAuthHeader()
    );
};

export const clearHistory =
  async () => {

    await axios.delete(
      `${API}/clear`,
      getAuthHeader()
    );
};