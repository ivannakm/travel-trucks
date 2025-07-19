import React from "react";
import { CircleLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  console.log("Loader rendered!");
  return (
    <div className={css.wrapper}>
      <CircleLoader color="var(--button)" size={50} />
    </div>
  );
};

export default Loader;
