import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    if (id) {
      dispatch(getCamperInfo(id));
    }
  }, [dispatch, id]);

  if (!camper) return null;

  return (
    <Container>
      <div className={css.wrapper}>
        {/* Camper main info */}
        <CamperItem camper={camper} />

        {/* Tabs */}
        <div className={css.tabs}>
          <button
            className={clsx(
              css.tabButton,
              activeTab === "features" && css.active
            )}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={clsx(
              css.tabButton,
              activeTab === "reviews" && css.active
            )}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className={css.contentLayout}>
          {/* Left column: dynamic content */}
          <div className={css.tabContent}>
            {activeTab === "features" && <Features />}
            {activeTab === "reviews" && <Reviews />}
          </div>

          {/* Right column: static contact form */}
          <div>
            <ContactForm camper={camper} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CamperPage;
