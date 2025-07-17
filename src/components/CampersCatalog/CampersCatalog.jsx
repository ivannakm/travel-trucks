import { FaGasPump, FaStar, FaUtensils, FaWind } from "react-icons/fa";
import css from "./CampersCatalog.module.css";
import { MdOutlineMap } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { TbAutomaticGearbox } from "react-icons/tb";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Link } from "react-router-dom";

const CampersCatalog = ({ campers, filters, loading, error }) => {
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // Start with 10 campers

  useEffect(() => {
    setVisibleCount(10);
  }, [filters]);

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

  const visibleCampers = filteredCampers.slice(0, visibleCount);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.grid}>
      {filteredCampers.length > 0 ? (
        visibleCampers.map((camper) => {
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
                    <span className={css.camperPrice}>
                      ${camper.price.toFixed(2)}
                    </span>

                    <FiHeart
                      className={css.heartIcon}
                      onClick={() => toggleFavorite(camper.id)}
                      style={{
                        color: favorites.includes(camper.id) ? "red" : "gray",
                      }}
                    />
                  </div>
                </div>

                {/* Display Reviews */}
                <div className={css.camperMeta}>
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
                </div>

                {/* Camper Description */}
                <p className={css.camperDescription}>
                  {camper.description.length > 100
                    ? `${camper.description.substring(0, 100)}...`
                    : camper.description}
                </p>

                {/* Categories */}
                <div className={css.categoryContainer}>
                  {camper.transmission && (
                    <div className={css.typeBox}>
                      <TbAutomaticGearbox className={css.icon} />
                      <p>Automatic</p>
                    </div>
                  )}
                  {camper.tank && (
                    <div className={css.typeBox}>
                      <FaGasPump className={css.icon} />
                      <p>Petrol</p>
                    </div>
                  )}
                  {camper.kitchen && (
                    <div className={css.typeBox}>
                      <FaUtensils className={css.icon} />
                      <p>Kitchen</p>
                    </div>
                  )}
                  {camper.AC && (
                    <div className={css.typeBox}>
                      <FaWind className={css.icon} />
                      <p>AC</p>
                    </div>
                  )}
                </div>

                {/* Show More Button */}
                {/* <button className={css.showMoreBtn}>Show More</button> */}
                <Link className={css.showMoreBtn} to={`/catalog/${camper.id}`}>
                  Show more
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>No campers match your filters</p>
      )}
      {visibleCount < filteredCampers.length && (
        <LoadMoreBtn onClick={() => setVisibleCount((prev) => prev + 10)} />
      )}
    </div>
  );
};

export default CampersCatalog;
