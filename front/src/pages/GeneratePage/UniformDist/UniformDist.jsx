import { InputNumber } from "antd";
import React from "react";
import { useState } from "react";
import classes from "./UniformDist.module.css";

const UniformDist = () => {
  const [numberOfSample, setNumberOfSamples] = useState(1);
  const [numOfCol, setNumOfCol] = useState(1);
  const [percision, setPercision] = useState(10);
  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <span>Number of samples (1-1000):</span>
        <InputNumber
          min={1}
          max={10000}
          required
          className={classes.InputNumber}
          value={numberOfSample}
          onChange={(e) => setNumberOfSamples(e)}
        />
      </div>
      <div className={classes.child}>
        <span>Number of column (1-5):</span>
        <InputNumber
          min={1}
          max={5}
          required
          className={classes.InputNumber}
          value={numOfCol}
          onChange={(e) => setNumOfCol(e)}
        />
      </div>
      <div className={classes.child}>
        <span>Precision (1-18):</span>
        <InputNumber
          min={1}
          max={18}
          required
          className={classes.InputNumber}
          value={percision}
          onChange={(e) => setPercision(e)}
        />
      </div>
      <div className={classes.generate}>Generate</div>
    </div>
  );
};

export default UniformDist;
