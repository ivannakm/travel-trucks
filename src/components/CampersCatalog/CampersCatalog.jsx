import css from "./CampersCatalog.module.css";

const CampersCatalog = ({ campers, filters, loading, error }) => {
  const filteredCampers = campers.filter((camper) => {
    console.log(
      "Filter check:",
      camper.name,
      camper.location,
      filters.location
    );
    const details = camper.details || {};
    const transmission = camper.transmission || "";

    const camperLocation = (camper.location || "").toLowerCase();
    const filterLocation = (filters.location || "").toLowerCase().trim();

    if (filterLocation && !camperLocation.includes(filterLocation))
      return false;

    if (filters.AC && !details.AC) return false;
    if (filters.TV && !details.TV) return false;
    if (filters.kitchen && !details.kitchen) return false;
    if (filters.bathroom && !details.bathroom) return false;
    if (filters.automatic && transmission !== "automatic") return false;
    if (filters.form && camper.form !== filters.form) return false;

    return true;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.grid}>
      {filteredCampers.length > 0 ? (
        filteredCampers.map((camper) => (
          <div key={camper.id} className={css.camperCard}>
            <h4>{camper.name}</h4>
            <img
              src={camper.gallery?.[0]?.thumb}
              alt={camper.name}
              className={css.camperImage}
            />
            <p>{camper.description}</p>
          </div>
        ))
      ) : (
        <p>No campers match your filters</p>
      )}
    </div>
  );
};

export default CampersCatalog;
