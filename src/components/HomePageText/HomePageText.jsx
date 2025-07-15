import { NavLink } from "react-router-dom";
import css from "./HomePageText.module.css";

const HomePageText = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <button className={css.button}>
        <NavLink className={css.button} to="/catalog">
          View Now
        </NavLink>
      </button>
    </div>
  );
};

export default HomePageText;
