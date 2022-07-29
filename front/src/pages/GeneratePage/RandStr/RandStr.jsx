import React from "react";
import { useState } from "react";
import classes from "./RandStr.module.css";
import { Checkbox, InputNumber } from "antd";

const RandStr = () => {
  const [length, setLength] = useState(1);
  const properties = [
    "Numbers (e.g., 1234567)",
    "Lowercase Letters (e.g., abcdefg)",
    "Uppercase Letters (e.g., ABCDEFG)",
    "Special Characters (e.g., ()[]{}~!@#$%^&*)",
  ];
  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <span>Length of random string (1-10000):</span>
        <InputNumber
          min={1}
          max={10000}
          required
          className={classes.InputNumber}
          value={length}
          onChange={(e) => setLength(e)}
        />
      </div>

      <div className={classes.properties}>
        {properties.map((property) => (
          <div>
            <Checkbox />
            <span className={classes.text}>{property}</span>
          </div>
        ))}
      </div>
      <div className={classes.generate}>Generate</div>
    </div>
  );
};

export default RandStr;
