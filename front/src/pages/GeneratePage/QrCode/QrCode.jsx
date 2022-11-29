import React, { useState } from "react";
import classes from "./QrCode.module.css";
import { InputNumber, Modal } from "antd";
import "antd/dist/antd.css";

import QRCode from "react-qr-code";
import { useRef } from "react";
import { useEffect } from "react";
const Qr_Code = () => {
  const [numOfBytes, setNumOfBytes] = useState(1);
  const [numOfCol, setNumOfCol] = useState(1);
  const [visible, setVisible] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [value, setValue] = useState("");
  const qrRef = useRef();

  const generateQrCode = async () => {
    await fetch(
      `http://127.0.0.1:8000/random_numbers/random_number/?type=raw_bytes&number=${numOfBytes}&model=Binary`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        var ans = "";
        for (var byte of data.data) {
          ans += byte;
        }
        console.log(ans);
        setValue(ans);
      })
      .catch((err) => console.log(err));

    setVisible(true);
  };

  const download = () => {};

  useEffect(() => {
    console.log(qrRef);
  }, [useRef]);
  return (
    <div className={classes.container}>
      <Modal
        visible={visible}
        className={classes.showModal}
        onCancel={() => setVisible(false)}
        footer={false}
        closeIcon={null}
        closable={false}
      >
        <QRCode
          size={200}
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
          }}
          value={value}
          viewBox={`0 0 256 256`}
          ref={qrRef}
        />
        <div className={classes.footer}>
          <div
            className={classes.close}
            onClick={() => {
              setValue("");
              setVisible(false);
            }}
          >
            close
          </div>
          <div className={classes.dowmload} onClick={download}>
            download
          </div>
        </div>
      </Modal>
      <div className={classes.child}>
        <span>Number of random bytes For generate Qr_code(1-10) :</span>
        <InputNumber
          min={1}
          max={10}
          required
          className={classes.InputNumber}
          value={numOfBytes}
          onChange={(e) => setNumOfBytes(e)}
        />
      </div>
      <div className={classes.generate} onClick={generateQrCode}>
        Generate
      </div>
    </div>
  );
};

export default Qr_Code;
