import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import CamperItem from "../../components/CamperItem/CamperItem";
import ContactForm from "../../components/ContactForm/ContactForm";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import { getCamperInfo } from "../../redux/operations";
import { selectCamperInfo } from "../../redux/selectors";
import clsx from "clsx";
import css from "./CamperPage.module.css";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperInfo);

  const addActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  useEffect(() => {
    if (id) {
      console.log("Fetching camper info for id:", id);
      dispatch(getCamperInfo(id));
    }
  }, [dispatch, id]);

  if (!camper) return null;

  return (
    <Container>
      <div>
        {/* Camper main info */}
        <CamperItem camper={camper} />

        <div className={css.contentLayout}>
          {/* Camper features and reviews */}
          <div>
            <NavLink className={addActive} to={"features"}>
              <Features features={camper.features} />
            </NavLink>
            <NavLink className={addActive} to={"reviews"}>
              <Reviews reviews={camper.reviews} />
            </NavLink>
          </div>
          {/* Contact form on the side */}
          <div>
            <ContactForm camper={camper} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CamperPage;
