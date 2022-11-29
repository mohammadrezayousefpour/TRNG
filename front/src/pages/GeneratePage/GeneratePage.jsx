import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import classes from "./GeneratePage.module.css";
import Integer from "./Integer/Integer";
import Qr_Code from "./QrCode/QrCode";
import ShowRandomBytes from "./RandomByteModal/RandomByteModel";
import RandStr from "./RandStr/RandStr";
import Raw_Bytes from "./Raw_bytes/Raw_Bytes";
import UniformDist from "./UniformDist/UniformDist";
const GeneratePage = ({ type, property }) => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <TopMenu />
      <ShowRandomBytes
        visible={ModalVisible}
        setVisible={setModalVisible}
        answers={answers}
        setAnswers={setAnswers}
      />
      <div className={classes.body}>
        <div className={classes.title}>{property.title}</div>
        <span className={classes.text}>{property.text}</span>
        {type == "raw_bytes" ? (
          <Raw_Bytes
            ModalVisible={ModalVisible}
            setModalVisible={setModalVisible}
            setAnswers={setAnswers}
          />
        ) : type == "integers" ? (
          <Integer
            ModalVisible={ModalVisible}
            setModalVisible={setModalVisible}
            setAnswers={setAnswers}
          />
        ) : type == "uniform" ? (
          <UniformDist
            ModalVisible={ModalVisible}
            setModalVisible={setModalVisible}
          />
        ) : type == "qrcode" ? (
          <Qr_Code />
        ) : (
          <RandStr
            ModalVisible={ModalVisible}
            setModalVisible={setModalVisible}
            setAnswers={setAnswers}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GeneratePage;
