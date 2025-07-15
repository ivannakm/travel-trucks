import css from "./BgImage.module.css";

const BgImage = ({ children }) => {
  return <div className={css.bg}>{children}</div>;
};

export default BgImage;
