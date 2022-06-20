import React from "react";
import classes from "./Fotter.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.item} id={classes.first}>
        <span className={classes.title}>ABOUT</span>
        <span className={classes.AboutText}>
          random-number.org is an online true random generation service. It
          offers the generation of various random objects, supported by random
          bits come from a TRNG.
        </span>
      </div>
      <div className={classes.item} id={classes.second}>
        <span className={classes.title}>RELATED LINKS</span>
        <div className={classes.relatedLinks}>
          <Link
            to={{ pathname: "https://inl-lab.net/" }}
            style={{ color: "black", marginBottom: "0.75vw" }}
          >
            <span>INL Lab</span>
          </Link>
          <Link to={{ pathname: "/FAQs" }} style={{ color: "black" }}>
            <span>FAQs</span>
          </Link>
        </div>
      </div>
      <div className={classes.item} id={classes.third}>
        <span className={classes.title}>RELATED LINKS</span>
        <div className={classes.relatedLinks}>
          <Link
            to={"https://mahdi.jafari.siavoshani.ir/"}
            target="_blank"
            style={{ color: "black", marginBottom: "0.75vw" }}
          >
            <span>Mahdi Jafari Siavoshani</span>
          </Link>
          <Link
            to={"https://morteza.jafari.siavoshani.ir/"}
            target="_blank"
            style={{ color: "black" }}
          >
            <span>Morteza Jafari Siavoshani</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
