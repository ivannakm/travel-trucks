import { setCampers, setError, setLoading, setCamperInfo } from "./slice";
import { getCamperById, getCampers } from "../services/api";

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

      const campers = await getCampers(validFilters);
      dispatch(setCampers(campers));
    } catch (error) {
      console.error("❌ API fetch error:", error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

// New thunk to fetch camper by ID
export const getCamperInfo = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const camper = await getCamperById(id);
    dispatch(setCamperInfo(camper));
  } catch (error) {
    console.error("❌ API fetch camper error:", error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
