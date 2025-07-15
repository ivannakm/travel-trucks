import {
  FaBus,
  FaShuttleVan,
  FaToiletPaper,
  FaTruckPickup,
  FaTv,
  FaUtensils,
  FaWind,
} from "react-icons/fa";
import css from "./Filters.module.css";
import { TbAutomaticGearbox } from "react-icons/tb";

const Filters = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.filters}>Filters</p>
      <section className={css.block}>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.options}>
          <div className={css.typeBox}>
            <FaWind className={css.icon} />
            <p>AC</p>
          </div>
          <div className={css.typeBox}>
            <TbAutomaticGearbox className={css.icon} />
            <p>Automatic</p>
          </div>
          <div className={css.typeBox}>
            <FaUtensils className={css.icon} />
            <p>Kitchen</p>
          </div>
          <div className={css.typeBox}>
            <FaTv className={css.icon} />
            <p>TV</p>
          </div>
          <div className={css.typeBox}>
            <FaToiletPaper className={css.icon} />
            <p>Bathroom</p>
          </div>
        </div>
      </section>

      <section className={css.block}>
        <h3 className={css.title}>Vehicle type</h3>
        <div className={css.options}>
          <div className={css.typeBox}>
            <FaShuttleVan className={css.icon} />
            <p>Van</p>
          </div>
          <div className={css.typeBox}>
            <FaBus className={css.icon} />
            <p>Fully Integrated</p>
          </div>
          <div className={css.typeBox}>
            <FaTruckPickup className={css.icon} />
            <p>Alcove</p>
          </div>
        </div>
      </section>

      <button className={css.searchButton}>Search</button>
    </div>
  );
};

export default Filters;
