import axios from "axios";
import { setCampers, setLoading, setError, clearCampers } from "./slice";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// Fetch campers data with optional filters
export const fetchCampers =
  (filters = {}) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearCampers()); // before fetching new results
    dispatch(setLoading(true));

    try {
      // Fetch data from API with filters as query parameters
      const response = await axios.get(API_URL, { params: filters });
      dispatch(setCampers(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
