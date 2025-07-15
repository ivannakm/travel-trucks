import { Link } from "react-router-dom";
import logoIcon from "./logo.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logoLink} aria-label="link to main">
      <img src={logoIcon} alt="Travel truck Icon" className={css.logoIcon} />
    </Link>
  );
};

export default Logo;
