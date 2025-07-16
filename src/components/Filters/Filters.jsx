import {
  FaBus,
  FaShuttleVan,
  FaToiletPaper,
  FaTruckPickup,
  FaTv,
  FaUtensils,
  FaWind,
} from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import css from "./Filters.module.css";

const Filters = ({ setFilters, filters, onFilter }) => {
  const toggleFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const selectType = (form) => {
    setFilters((prev) => ({
      ...prev,
      form: prev.form === form ? "" : form,
    }));
  };

  const handleSearch = () => {
    const allowedApiFilters = ["location"];
    const apiFilters = Object.fromEntries(
      Object.entries(filters).filter(
        ([key, value]) => allowedApiFilters.includes(key) && value
      )
    );

    onFilter(apiFilters);
  };

  const clearFilters = () => {
    setFilters({
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
      form: "",
      location: "",
    });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.filters}>Filters</p>

      <section className={css.block}>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.options}>
          <div
            className={`${css.typeBox} ${filters.AC ? css.active : ""}`}
            onClick={() => toggleFilter("AC")}
          >
            <FaWind className={css.icon} />
            <p>AC</p>
          </div>
          <div
            className={`${css.typeBox} ${filters.automatic ? css.active : ""}`}
            onClick={() => toggleFilter("automatic")}
          >
            <TbAutomaticGearbox className={css.icon} />
            <p>Automatic</p>
          </div>
          <div
            className={`${css.typeBox} ${filters.kitchen ? css.active : ""}`}
            onClick={() => toggleFilter("kitchen")}
          >
            <FaUtensils className={css.icon} />
            <p>Kitchen</p>
          </div>
          <div
            className={`${css.typeBox} ${filters.TV ? css.active : ""}`}
            onClick={() => toggleFilter("TV")}
          >
            <FaTv className={css.icon} />
            <p>TV</p>
          </div>
          <div
            className={`${css.typeBox} ${filters.bathroom ? css.active : ""}`}
            onClick={() => toggleFilter("bathroom")}
          >
            <FaToiletPaper className={css.icon} />
            <p>Bathroom</p>
          </div>
        </div>
      </section>

      <section className={css.block}>
        <h3 className={css.title}>Vehicle type</h3>
        <div className={css.options}>
          <div
            className={`${css.typeBox} ${
              filters.form === "van" ? css.active : ""
            }`}
            onClick={() => selectType("van")}
          >
            <FaShuttleVan className={css.icon} />
            <p>Van</p>
          </div>
          <div
            className={`${css.typeBox} ${
              filters.form === "fullyIntegrated" ? css.active : ""
            }`}
            onClick={() => selectType("fullyIntegrated")}
          >
            <FaBus className={css.icon} />
            <p>Fully Integrated</p>
          </div>
          <div
            className={`${css.typeBox} ${
              filters.form === "alcove" ? css.active : ""
            }`}
            onClick={() => selectType("alcove")}
          >
            <FaTruckPickup className={css.icon} />
            <p>Alcove</p>
          </div>
        </div>
      </section>

      <div className={css.buttons}>
        <button className={css.searchButton} onClick={handleSearch}>
          Search
        </button>
        <button className={css.clearButton} onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
