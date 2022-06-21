import React from "react";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import FAQsBody from "./components/FAQsBody/FAQsBody";
import classes from "./FAQs.module.css";
const FAQs = () => {
  return (
    <div>
      <TopMenu />
      <FAQsBody />
      <Footer />
    </div>
  );
};

export default FAQs;
