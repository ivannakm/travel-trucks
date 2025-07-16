import { FaStar } from "react-icons/fa";
import css from "./CampersCatalog.module.css";
import { MdOutlineMap } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

const CampersCatalog = ({ campers, filters, loading, error }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to handle favorite toggle
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const filteredCampers = campers.filter((camper) => {
    const transmission = camper.transmission || "";

    const camperLocation = (camper.location || "").toLowerCase();
    const filterLocation = (filters.location || "").toLowerCase().trim();

    if (filterLocation && !camperLocation.includes(filterLocation))
      return false;
    if (filters.AC && !camper.AC) return false;
    if (filters.TV && !camper.TV) return false;
    if (filters.kitchen && !camper.kitchen) return false;
    if (filters.bathroom && !camper.bathroom) return false;
    if (filters.automatic && transmission !== "automatic") return false;
    if (filters.form && camper.form !== filters.form) return false;

    return true;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.grid}>
      {filteredCampers.length > 0 ? (
        filteredCampers.map((camper) => {
          // Calculate average rating
          const avgRating =
            camper.reviews?.reduce(
              (sum, review) => sum + review.reviewer_rating,
              0
            ) / camper.reviews?.length;
          const reviewCount = camper.reviews?.length;

          return (
            <div key={camper.id} className={css.camperCard}>
              <div className={css.camperImageWrapper}>
                <img
                  src={camper.gallery?.[0]?.thumb}
                  alt={camper.name}
                  className={css.camperImage}
                />
              </div>

              <div className={css.camperDetails}>
                <div className={css.camperHeader}>
                  <h4 className={css.camperTitle}>{camper.name}</h4>
                  {/* Price and Heart Icon */}
                  <div className={css.priceAndHeart}>
                    <span className={css.camperPrice}>${camper.price}</span>
                    <FiHeart
                      className={css.heartIcon}
                      onClick={() => toggleFavorite(camper.id)}
                      style={{
                        color: favorites.includes(camper.id) ? "red" : "gray", // Change color based on favorite state
                      }}
                    />
                  </div>
                </div>

                {/* Display Reviews */}
                <div className={css.reviews}>
                  <FaStar className={css.starIcon} />
                  <span className={css.reviewText}>
                    {avgRating.toFixed(1)} ({reviewCount} Reviews)
                  </span>
                </div>

                {/* Location */}
                <div className={css.location}>
                  <MdOutlineMap className={css.icon} />
                  <span>{camper.location}</span>
                </div>

                {/* Camper Description */}
                <p className={css.camperDescription}>
                  {camper.description.length > 100
                    ? `${camper.description.substring(0, 100)}...`
                    : camper.description}
                </p>

                {/* Categories */}
                <div className={css.categoryContainer}>
                  {camper.AC && (
                    <div className={css.typeBox}>
                      <FaStar className={css.icon} />
                      <p>AC</p>
                    </div>
                  )}
                  {camper.TV && (
                    <div className={css.typeBox}>
                      <FaStar className={css.icon} />
                      <p>TV</p>
                    </div>
                  )}
                  {camper.kitchen && (
                    <div className={css.typeBox}>
                      <FaStar className={css.icon} />
                      <p>Kitchen</p>
                    </div>
                  )}
                  {camper.bathroom && (
                    <div className={css.typeBox}>
                      <FaStar className={css.icon} />
                      <p>Bathroom</p>
                    </div>
                  )}
                </div>

                {/* Show More Button */}
                <button className={css.showMoreBtn}>Show More</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No campers match your filters</p>
      )}
    </div>
  );
};

export default CampersCatalog;
