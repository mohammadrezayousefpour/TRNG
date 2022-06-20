import React from "react";
import classes from "./Fotter.module.css";
const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.item}>
        <span className={classes.title}>ABOUT</span>
        <span className={classes.AboutText}>
          random-number.org is an online true random generation service. It
          offers the generation of various random objects, supported by random
          bits come from a TRNG.
        </span>
      </div>
      <div className={classes.item}>
        <span className={classes.title}>RELATED LINKS</span>
        <div></div>
      </div>
      <div className={classes.item}>
        <span className={classes.title}>RELATED LINKS</span>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
