import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./CampersCatalog.module.css";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../redux/selectors";
import { fetchCampers } from "../../redux/operations";

const CampersCatalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers()); // Fetch campers when the component mounts
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.grid}>
      {campers.length > 0 ? (
        campers.map((camper) => (
          <div key={camper.id} className={css.camperCard}>
            <h4>{camper.name}</h4>
            <img
              src={camper.gallery?.[0]?.thumb}
              alt={camper.name}
              className={css.camperImage}
            />
            <p>{camper.description}</p>
          </div>
        ))
      ) : (
        <p>No campers available</p>
      )}
    </div>
  );
};

export default CampersCatalog;
