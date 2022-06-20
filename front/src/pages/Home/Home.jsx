import React from "react";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import HomePageBody from "./components/Body/HomePageBody";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <TopMenu />
      <HomePageBody />
      <Footer />
    </div>
  );
};

export default Home;
