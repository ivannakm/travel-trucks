import css from "./Location.module.css";

const Location = ({ filters, setFilters }) => {
  const handleLocationChange = (e) => {
    const location = e.target.value.trim();

    if (typeof setFilters === "function") {
      setFilters((prev) => ({
        ...prev,
        location,
      }));
    } else {
      console.error("setFilters is not a function in Location");
    }
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Location</h3>
      <input
        type="text"
        placeholder="City"
        value={filters.location || ""}
        className={css.input}
        aria-label="Enter location"
        onChange={handleLocationChange}
      />
    </div>
  );
};

export default Location;

// import css from "./Location.module.css";

// const Location = ({ filters, setFilters }) => {
//   const handleLocationChange = (e) => {
//     const location = e.target.value.trim();
//     setFilters((prev) => ({
//       ...prev,
//       location,
//     }));
//   };

//   return (
//     <div className={css.wrapper}>
//       <h3 className={css.title}>Location</h3>
//       <input
//         type="text"
//         placeholder="City"
//         value={filters.location || ""}
//         className={css.input}
//         aria-label="Enter location"
//         onChange={handleLocationChange}
//       />
//     </div>
//   );
// };

// export default Location;
