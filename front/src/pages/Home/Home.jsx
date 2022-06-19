import React from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <TopMenu />
    </div>
  );
};

export default Home;
