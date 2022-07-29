import React from "react";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import classes from "./GeneratePage.module.css";
import Integer from "./Integer/Integer";
import RandStr from "./RandStr/RandStr";
import Raw_Bytes from "./Raw_bytes/Raw_Bytes";
import UniformDist from "./UniformDist/UniformDist";
const GeneratePage = ({ type, property }) => {
  return (
    <div>
      <TopMenu />
      <div className={classes.body}>
        <div className={classes.title}>{property.title}</div>
        <span className={classes.text}>{property.text}</span>
        {type == "raw_bytes" ? (
          <Raw_Bytes />
        ) : type == "integers" ? (
          <Integer />
        ) : type == "uniform" ? (
          <UniformDist />
        ) : (
          <RandStr />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GeneratePage;
