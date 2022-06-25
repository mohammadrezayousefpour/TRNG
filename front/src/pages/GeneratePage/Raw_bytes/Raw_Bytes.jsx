import React from "react";
import classes from "./Raw_Bytes.module.css";
import "antd/dist/antd.css";

import { InputNumber, Radio } from "antd";
import { useState } from "react";
const Raw_Bytes = () => {
  const [numOfBytes, setNumOfBytes] = useState(1);
  const [numOfCol, setNumOfCol] = useState(1);
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
        <Radio.Group>
          <Radio value={1} style={{ fontSize: "1.2vw" }}>
            Decimal
          </Radio>
          <Radio value={2} style={{ fontSize: "1.2vw" }}>
            Binary
          </Radio>
          <Radio value={3} style={{ fontSize: "1.2vw" }}>
            Hexadecimal
          </Radio>
        </Radio.Group>
      </div>
      <div className={classes.generate}>Generate</div>
    </div>
  );
};

export default Raw_Bytes;
