import { setCampers, setError, setLoading } from "./slice";
import { getCampers } from "../services/api";

export const fetchCampers =
  (filters = {}) =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const allowedFilters = ["location"];
      const validFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([key, value]) => allowedFilters.includes(key) && value
        )
      );

      const data = await getCampers(validFilters);

      const campersArray = Array.isArray(data)
        ? data
        : Array.isArray(data.items)
        ? data.items
        : [];

      dispatch(setCampers(campersArray));
    } catch (error) {
      console.error("❌ API fetch error:", error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
