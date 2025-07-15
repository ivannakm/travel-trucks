import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const addActive = ({ isActive }) => clsx(css.link, isActive && css.active);

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoWrapper}>
        <Logo />
      </div>

      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={addActive} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="/catalog">
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
