import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { selectCamperInfo } from "../../redux/selectors";
import css from "./Reviews.module.css";
import clsx from "clsx";
import ContactForm from "../ContactForm/ContactForm";

const Reviews = () => {
  const camper = useSelector(selectCamperInfo);

  return (
    <div className={css.wrapper}>
      <div className={css.reviewsSection}>
        <ul className={css.reviewList}>
          {camper.reviews.map((review, index) => (
            <li className={css.reviewItem} key={index}>
              <div className={css.user}>
                <div className={css.userAvatar}>
                  {review.reviewer_name.charAt(0)}
                </div>
                <div className={css.userDetails}>
                  <p className={css.userName}>{review.reviewer_name}</p>
                  <ul className={css.starList}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <li key={i}>
                        <FaStar
                          className={clsx(
                            css.star,
                            i < review.reviewer_rating ? css.filled : css.empty
                          )}
                          size={16}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className={css.formSection}>
        <ContactForm />
      </div> */}
    </div>
  );
};

export default Reviews;
