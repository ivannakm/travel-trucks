import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../redux/selectors";
import { fetchCampers } from "../../redux/operations";
import CampersCatalog from "../../components/CampersCatalog/CampersCatalog";
import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters";
import Container from "../../components/Container/Container";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [filters, setFilters] = useState({
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
    location: "",
  });

  // const location = filters.location;

  // useEffect(() => {
  //   if (location) {
  //     dispatch(fetchCampers(filters));
  //   }
  // }, [dispatch, location]);

  useEffect(() => {
    if (filters.location) {
      dispatch(fetchCampers({ location: filters.location }));
    }
  }, [dispatch, filters.location]);

  const handleFilter = () => {
    dispatch(fetchCampers(filters));
  };

  return (
    <Container>
      <div style={{ display: "flex", gap: "32px" }}>
        <aside>
          <Location filters={filters} setFilters={setFilters} />
          <Filters
            filters={filters}
            setFilters={setFilters}
            onFilter={handleFilter}
          />
        </aside>
        <main style={{ flex: 1 }}>
          <CampersCatalog
            campers={campers}
            loading={loading}
            error={error}
            filters={filters}
          />
        </main>
      </div>
    </Container>
  );
};

export default Catalog;
