import { useSelector } from "react-redux";
import {
  FaCarSide,
  FaGasPump,
  FaWind,
  FaShower,
  FaTv,
  FaFire,
  FaBroadcastTower,
  FaSnowflake,
  FaTint,
  FaUtensils,
} from "react-icons/fa";
import css from "./Features.module.css";
import { selectCamperInfo } from "../../redux/selectors";
import { TbMicrowave } from "react-icons/tb";

const Features = () => {
  const camper = useSelector(selectCamperInfo);

  const features = [
    camper.transmission && { label: camper.transmission, icon: <FaCarSide /> },
    camper.engine && { label: camper.engine, icon: <FaGasPump /> },
    camper.kitchen && { label: "Kitchen", icon: <FaUtensils /> },
    camper.AC && { label: "AC", icon: <FaWind /> },
    camper.bathroom && { label: "Bathroom", icon: <FaShower /> },
    camper.TV && { label: "TV", icon: <FaTv /> },
    camper.gas && { label: "Gas", icon: <FaFire /> },
    camper.radio && { label: "Radio", icon: <FaBroadcastTower /> },
    camper.microwave && { label: "Microwave", icon: <TbMicrowave /> },
    camper.refrigerator && { label: "Refrigerator", icon: <FaSnowflake /> },
    camper.water && { label: "Water", icon: <FaTint /> },
  ].filter(Boolean);

  return (
    <div className={css.wrapper}>
      <div className={css.features}>
        <div className={css.parameters}>
          {features.map((item, index) => (
            <div className={css.parametr} key={index}>
              <div className={css.icon}>{item.icon}</div>
              <p className={css.parametrName}>
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </p>
            </div>
          ))}
        </div>

        <div className={css.details}>
          <div className={css.title}>Vehicle details</div>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <p>Form</p>
              <p>{camper.form}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
