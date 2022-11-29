import { InputNumber, Radio } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./Integer.module.css";

const Integer = ({ ModalVisible, setModalVisible, setAnswers }) => {
  const [numOfBytes, setNumOfBytes] = useState(1);
  const [numOfCol, setNumOfCol] = useState(1);
  const [selectedType, setSelectedType] = useState();
  const types = [
    { text: "INT16 (unsigned)", value: "160" },
    { text: "INT16 (signed)", value: "161" },
    { text: "INT32 (unsigned)", value: "320" },
    { text: "INT32 (signed)", value: "321" },
    { text: "INT64 (unsigned)", value: "640" },
    { text: "INT64 (signed)", value: "641" },
  ];
  const callApiAndShowNumbers = () => {
    setModalVisible(true);
    fetch(
      `http://127.0.0.1:8000/random_numbers/random_number/?type=integers&number=${numOfBytes}&model=${selectedType}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setAnswers(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);
  return (
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
      <div className={classes.radio}>
        <Radio.Group className={classes.radio}>
          {types.map((type, index) => (
            <Radio
              value={index}
              style={{ fontSize: "1.2vw" }}
              onChange={(e) => setSelectedType(types[e.target.value].value)}
            >
              {type.text}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className={classes.generate} onClick={callApiAndShowNumbers}>
        Generate
      </div>
    </div>
  );
};

export default Integer;
