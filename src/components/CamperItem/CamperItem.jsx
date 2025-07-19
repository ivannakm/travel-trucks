import { FaStar } from "react-icons/fa";
import { MdOutlineMap } from "react-icons/md";
import css from "./CamperItem.module.css";

const CamperItem = ({ camper }) => {
  const {
    name,
    location,
    price,
    gallery = [],
    description,
    reviews = [],
  } = camper;

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className={css.contentWrapper}>
      <h2 className={css.camperName}>{name}</h2>

      <div className={css.ratingLocation}>
        <div className={css.rating}>
          <FaStar size={16} color="#FFC531" />
          <div className={css.ratingText}>
            {averageRating} ({reviews.length} Reviews)
          </div>
        </div>

        <div className={css.location}>
          <MdOutlineMap size={16} />
          <div className={css.locationText}>{location}</div>
        </div>
      </div>

      <p className={css.priceSum}>€{price.toFixed(2)}</p>
      <ul className={css.photosList}>
        {gallery.length > 0 ? (
          gallery.map((photo, index) => (
            <li key={index}>
              <div className={css.imageThumb}>
                <img
                  className={css.image}
                  src={photo.thumb}
                  alt={`${name} ${index + 1}`}
                />
              </div>
            </li>
          ))
        ) : (
          <li>No images available</li>
        )}
      </ul>

      <div className={css.description}>{description}</div>
    </div>
  );
};

export default CamperItem;
