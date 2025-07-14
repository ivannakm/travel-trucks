import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getCampers = async (params = {}) => {
  const { data } = await axios.get(BASE_URL, { params });
  return data;
};

export const getCamperById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};
