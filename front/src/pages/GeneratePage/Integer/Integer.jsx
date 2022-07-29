import { InputNumber, Radio } from "antd";
import React from "react";
import { useState } from "react";
import classes from "./Integer.module.css";

const Integer = () => {
  const [numOfBytes, setNumOfBytes] = useState(1);
  const [numOfCol, setNumOfCol] = useState(1);
  const types = [
    "INT16 (unsigned)",
    "INT16 (signed)",
    "INT32 (unsigned)",
    "INT32 (signed)",
    "INT64 (unsigned)",
    "INT64 (signed)",
  ];
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
            <Radio value={index} style={{ fontSize: "1.2vw" }}>
              {type}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className={classes.generate}>Generate</div>
    </div>
  );
};

export default Integer;
