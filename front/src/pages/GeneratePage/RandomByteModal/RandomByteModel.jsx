import { Button, Modal } from "antd";
import React from "react";
import classes from "./RandomByteModal.module.css";
const ShowRandomBytes = ({ visible, setVisible, answers, setAnswers }) => {
  return (
    <Modal
      visible={visible}
      className={classes.container}
      footer={null}
      closeIcon={null}
      closable={false}
    >
      <div className={classes.ShowingBody}>
        {answers.map((answer, index) => (
          <span>{answer}</span>
        ))}
      </div>
      <div className={classes.footer}>
        <Button
          onClick={() => {
            setVisible(false);
            setAnswers([]);
          }}
          className={classes.Button}
        >
          Close
        </Button>
        <Button className={classes.Button}>Copy</Button>
        <Button></Button>
      </div>
    </Modal>
  );
};

export default ShowRandomBytes;
