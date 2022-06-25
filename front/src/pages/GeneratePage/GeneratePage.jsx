import React from "react";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import classes from "./GeneratePage.module.css";
import Raw_Bytes from "./Raw_bytes/Raw_Bytes";
const GeneratePage = ({ type, property }) => {
  return (
    <div>
      <TopMenu />
      <div className={classes.body}>
        <div className={classes.title}>{property.title}</div>
        <span className={classes.text}>{property.text}</span>
        {type == "raw_bytes" ? <Raw_Bytes /> : ""}
      </div>
      <Footer />
    </div>
  );
};

export default GeneratePage;
