import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters";
import CampersCatalog from "../../components/CampersCatalog/CampersCatalog";
import Container from "../../components/Container/Container";

const Catalog = () => {
  return (
    <Container>
      <div style={{ display: "flex", gap: "32px" }}>
        <aside>
          <Location />
          <Filters />
        </aside>
        <main style={{ flex: 1 }}>
          <CampersCatalog />
        </main>
      </div>
    </Container>
  );
};

export default Catalog;
