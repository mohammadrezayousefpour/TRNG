import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./RandStr.module.css";
import { Checkbox, InputNumber } from "antd";

const RandStr = ({ ModalVisible, setModalVisible, setAnswers }) => {
  const [length, setLength] = useState(1);
  const [model, setModel] = useState([0, 0, 0, 0]);
  const properties = [
    "Numbers (e.g., 1234567)",
    "Lowercase Letters (e.g., abcdefg)",
    "Uppercase Letters (e.g., ABCDEFG)",
    "Special Characters (e.g., ()[]{}~!@#$%^&*)",
  ];

  const generateString = () => {
    setModalVisible(true);

    var m = "";
    for (let num of model) {
      m += num;
    }

    fetch(
      `http://127.0.0.1:8000/random_numbers/random_number/?type=rnd_str&number=${length}&model=${m}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setAnswers(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChane = (input) => {
    if (input.index == 0) {
      if (input.value == true) {
        var newModel = [1, model[1], model[2], model[3]];
        setModel(newModel);
      } else {
        var newModel = [0, model[1], model[2], model[3]];

        setModel(newModel);
      }
    }
    if (input.index == 1) {
      if (input.value == true) {
        var newModel = [model[0], 1, model[2], model[3]];

        setModel(newModel);
      } else {
        var newModel = [model[0], 0, model[2], model[3]];

        setModel(newModel);
      }
    }
    if (input.index == 2) {
      if (input.value == true) {
        var newModel = [model[0], model[1], 1, model[3]];

        setModel(newModel);
      } else {
        var newModel = [model[0], model[1], 0, model[3]];

        setModel(newModel);
      }
    }
    if (input.index == 3) {
      if (input.value == true) {
        var newModel = [model[0], model[1], model[2], 1];

        setModel(newModel);
      } else {
        var newModel = [model[0], model[1], model[2], 0];

        setModel(newModel);
      }
    }

    console.log(input);
  };

  useEffect(() => {
    console.log(model);
  }, [model]);

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
        <div>
          <Checkbox
            onChange={(e) => handleChane({ value: e.target.checked, index: 0 })}
          />
          <span className={classes.text}>{properties[0]}</span>{" "}
        </div>
        <div>
          <Checkbox
            onChange={(e) => handleChane({ value: e.target.checked, index: 1 })}
          />
          <span className={classes.text}>{properties[1]}</span>{" "}
        </div>
        <div>
          <Checkbox
            onChange={(e) => handleChane({ value: e.target.checked, index: 2 })}
          />
          <span className={classes.text}>{properties[2]}</span>{" "}
        </div>
        <div>
          <Checkbox
            onChange={(e) => handleChane({ value: e.target.checked, index: 3 })}
          />
          <span className={classes.text}>{properties[3]}</span>{" "}
        </div>
      </div>
      <div className={classes.generate} onClick={generateString}>
        Generate
      </div>
    </div>
  );
};

export default RandStr;
