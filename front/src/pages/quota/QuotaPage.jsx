import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import classes from "./QuotaPage.module.css";

const QuotaPage = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/random_numbers/oneUser/`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <TopMenu />
      <div className={classes.body}>
        <div className={classes.title}>Remaining Quota</div>
        <span className={classes.text}>
          Your IP is {userInfo?.ip} and your remaining quota for today is{" "}
          {userInfo?.quota}
          byte(s).
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default QuotaPage;
