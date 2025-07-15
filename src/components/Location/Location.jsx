import css from "./Location.module.css";

const Location = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Location</h3>
      <input
        type="text"
        placeholder="City"
        className={css.input}
        aria-label="Enter location"
      />
    </div>
  );
};

export default Location;
