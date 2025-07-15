import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters";
import CampersCatalog from "../../components/CampersCatalog/CampersCatalog";
import Container from "../../components/Container/Container";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { clearCampers } from "../../redux/slice";

const Catalog = () => {
  const dispatch = useDispatch();

  const handleFilter = (filters) => {
    dispatch(fetchCampers(filters));
    dispatch(clearCampers());
  };

  return (
    <Container>
      <div style={{ display: "flex", gap: "32px" }}>
        <aside>
          <Location />
          <Filters onFilter={handleFilter} />
        </aside>
        <main style={{ flex: 1 }}>
          <CampersCatalog />
        </main>
      </div>
    </Container>
  );
};

export default Catalog;
