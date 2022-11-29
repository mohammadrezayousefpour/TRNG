import React from "react";
import { useState } from "react";
import { Input, Table } from "antd";
import "antd/dist/antd.css";
import Footer from "../../components/Footer/Footer";
import TopMenu from "../../components/TopMenu/TopMenu";
import classes from "./AdminPage.module.css";
import { useEffect } from "react";

const AdminPage = () => {
  const [Show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const dataSource = [
    {
      key: "1",
      IP: "Mike",
      quota: 32,
      first_visit: "10 Downing Street",
      last_visit: "10 Downing Street",
    },
    {
      key: "1",
      IP: "Mike",
      quota: 32,
      first_visit: "10 Downing Street",
      last_visit: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "IP",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "quota",
      dataIndex: "quota",
      key: "quota",
    },
    {
      title: "first_visit",
      dataIndex: "first_visit",
      key: "first_visit",
    },
    {
      title: "last_visit",
      dataIndex: "last_visit",
      key: "last_visit",
    },
    {
      title: "visit_num",
      dataIndex: "visit_num",
      key: "visit_num",
    },
  ];

  const EnterFunction = () => {
    if (userName == "mohammadreza" && password == "123456789") {
      setShow(true);
      setText("");
    } else {
      setText("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  useEffect(() => {
    if (Show) {
      fetch(`http://127.0.0.1:8000/random_numbers/users`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          setAllUsers(data.data);
          // setAnswers(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [Show]);

  if (Show) {
    return (
      <div>
        <TopMenu />
        <div className={classes.container}>
          <div className={classes.body}>
            <Table dataSource={allUsers} columns={columns} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={classes.wrapper}>
        <div className={classes.Enter}>
          <div className={classes.lable}>نام‌کاربری</div>
          <Input
            className={classes.InputContainer}
            value={userName}
            onChange={(e) => {
              if (text != "") {
                setText("");
              }
              setUserName(e.target.value);
            }}
          />
          <div className={classes.lable}>رمز عبور</div>
          <Input
            className={classes.InputContainer}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (text != "") {
                setText("");
              }
            }}
          />
          <div className={classes.Button} onClick={EnterFunction}>
            ورود
          </div>
          <div className={classes.text}>{text}</div>
        </div>
      </div>
    );
  }
};

export default AdminPage;
