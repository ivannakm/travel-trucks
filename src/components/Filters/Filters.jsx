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
import { useState } from "react";

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "", // vehicle type (alcove, fullyIntegrated, van)
  });

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
    const url = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);

        let campersArray;

        if (Array.isArray(data)) {
          campersArray = data;
        } else if (data && Array.isArray(data.items)) {
          campersArray = data.items;
        } else if (data && Array.isArray(data.campers)) {
          campersArray = data.campers;
        } else {
          throw new Error("Expected data to be an array or contain an array");
        }

        const filtered = campersArray.filter((item) => {
          if (filters.AC && !item.AC) return false;
          if (filters.kitchen && !item.kitchen) return false;
          if (filters.TV && !item.TV) return false;
          if (filters.bathroom && !item.bathroom) return false;
          if (filters.automatic && item.transmission !== "automatic")
            return false;
          if (filters.form && item.form !== filters.form) return false;
          return true;
        });

        onFilter(filtered);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  // const handleSearch = () => {
  //   const params = new URLSearchParams();

  //   if (filters.AC) params.append("AC", "true");
  //   if (filters.kitchen) params.append("kitchen", "true");
  //   if (filters.TV) params.append("TV", "true");
  //   if (filters.bathroom) params.append("bathroom", "true");
  //   if (filters.automatic) params.append("transmission", "automatic");
  //   if (filters.form) params.append("form", filters.form);

  //   const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`;
  //   console.log("Fetching URL:", url); // Debug log

  //   fetch(url)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => onFilter(data)) // MockAPI returns an array directly
  //     .catch((err) => console.error("Fetch error:", err));
  // };

  const clearFilters = () => {
    setFilters({
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
      form: "",
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

// import {
//   FaBus,
//   FaShuttleVan,
//   FaToiletPaper,
//   FaTruckPickup,
//   FaTv,
//   FaUtensils,
//   FaWind,
// } from "react-icons/fa";
// import { TbAutomaticGearbox } from "react-icons/tb";
// import css from "./Filters.module.css";
// import { useState } from "react";

// const Filters = ({ onFilter }) => {
//   const [filters, setFilters] = useState({
//     AC: false,
//     automatic: false,
//     kitchen: false,
//     TV: false,
//     bathroom: false,
//     form: "",
//   });

//   const toggleFilter = (key) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const selectType = (form) => {
//     setFilters((prev) => ({
//       ...prev,
//       form: prev.form === form ? "" : form,
//     }));
//   };

//   const handleSearch = () => {
//     const params = new URLSearchParams();

//     if (filters.AC) params.append("AC", true);
//     if (filters.kitchen) params.append("kitchen", true);
//     if (filters.TV) params.append("TV", true);
//     if (filters.bathroom) params.append("bathroom", true);
//     if (filters.automatic) params.append("transmission", "automatic");
//     if (filters.form) params.append("form", filters.form);

//     fetch(
//       `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`
//     )
//       .then((res) => res.json())
//       .then((data) => onFilter(data.items))
//       .catch((err) => console.error("Fetch error:", err));
//   };

//   const clearFilters = () => {
//     setFilters({
//       AC: false,
//       automatic: false,
//       kitchen: false,
//       TV: false,
//       bathroom: false,
//       form: "",
//     });
//   };

//   return (
//     <div className={css.wrapper}>
//       <p className={css.filters}>Filters</p>

//       <section className={css.block}>
//         <h3 className={css.title}>Vehicle equipment</h3>
//         <div className={css.options}>
//           <div
//             className={`${css.typeBox} ${filters.AC ? css.active : ""}`}
//             onClick={() => toggleFilter("AC")}
//           >
//             <FaWind className={css.icon} />
//             <p>AC</p>
//           </div>
//           <div
//             className={`${css.typeBox} ${filters.automatic ? css.active : ""}`}
//             onClick={() => toggleFilter("automatic")}
//           >
//             <TbAutomaticGearbox className={css.icon} />
//             <p>Automatic</p>
//           </div>
//           <div
//             className={`${css.typeBox} ${filters.kitchen ? css.active : ""}`}
//             onClick={() => toggleFilter("kitchen")}
//           >
//             <FaUtensils className={css.icon} />
//             <p>Kitchen</p>
//           </div>
//           <div
//             className={`${css.typeBox} ${filters.TV ? css.active : ""}`}
//             onClick={() => toggleFilter("TV")}
//           >
//             <FaTv className={css.icon} />
//             <p>TV</p>
//           </div>
//           <div
//             className={`${css.typeBox} ${filters.bathroom ? css.active : ""}`}
//             onClick={() => toggleFilter("bathroom")}
//           >
//             <FaToiletPaper className={css.icon} />
//             <p>Bathroom</p>
//           </div>
//         </div>
//       </section>

//       <section className={css.block}>
//         <h3 className={css.title}>Vehicle type</h3>
//         <div className={css.options}>
//           <div
//             className={`${css.typeBox} ${
//               filters.form === "van" ? css.active : ""
//             }`}
//             onClick={() => selectType("van")}
//           >
//             <FaShuttleVan className={css.icon} />
//             <p>Van</p>
//           </div>
//           <div
//             className={`${css.typeBox} ${
//               filters.form === "fullyIntegrated" ? css.active : ""
//             }`}
//             onClick={() => selectType("fullyIntegrated")}
//           >
//             <FaBus className={css.icon} />
//             <p>Fully Integrated</p>
//           </div>
//           <div
//             className={`${css.typeBox} ${
//               filters.form === "alcove" ? css.active : ""
//             }`}
//             onClick={() => selectType("alcove")}
//           >
//             <FaTruckPickup className={css.icon} />
//             <p>Alcove</p>
//           </div>
//         </div>
//       </section>

//       <div className={css.buttons}>
//         <button className={css.searchButton} onClick={handleSearch}>
//           Search
//         </button>
//         <button className={css.clearButton} onClick={clearFilters}>
//           Clear Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Filters;
