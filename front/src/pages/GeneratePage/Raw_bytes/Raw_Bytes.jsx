import React from "react";
import classes from "./Raw_Bytes.module.css";
import "antd/dist/antd.css";

import { InputNumber, Radio } from "antd";
import { useState } from "react";
const Raw_Bytes = ({ ModalVisible, setModalVisible, setAnswers }) => {
  const [numOfBytes, setNumOfBytes] = useState(1);
  const [numOfCol, setNumOfCol] = useState(1);
  const [type, setType] = useState();

  const callApiAndShowNumbers = () => {
    setModalVisible(true);
    fetch(
      `http://127.0.0.1:8000/random_numbers/random_number/?type=raw_bytes&number=${numOfBytes}&model=${type}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setAnswers(data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.child}>
          <span>Number of random bytes (1-10000):</span>
          <InputNumber
            min={1}
            max={10000}
            required
            className={classes.InputNumber}
            value={numOfBytes}
            onChange={(e) => setNumOfBytes(e)}
          />
        </div>
        <div className={classes.child}>
          <span>Number of column for representing (1-10):</span>
          <InputNumber
            min={1}
            max={10}
            required
            className={classes.InputNumber}
            value={numOfCol}
            onChange={(e) => setNumOfCol(e)}
          />
        </div>
      </div>
      <div className={classes.radio}>
        <Radio.Group
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            console.log(e.target.value);
          }}
        >
          <Radio value={"Decimal"} style={{ fontSize: "1.2vw" }}>
            Decimal
          </Radio>
          <Radio value={"Binary"} style={{ fontSize: "1.2vw" }}>
            Binary
          </Radio>
          <Radio value={"Hexa"} style={{ fontSize: "1.2vw" }}>
            Hexadecimal
          </Radio>
        </Radio.Group>
      </div>
      <div className={classes.generate} onClick={callApiAndShowNumbers}>
        Generate
      </div>
    </div>
  );
};

export default Raw_Bytes;
