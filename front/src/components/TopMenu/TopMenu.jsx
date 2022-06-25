import React from "react";
import classes from "./TopMenu.module.css";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";

const TopMenu = () => {
  const menu = (
    <Menu className={classes.menu}>
      <Link to={{ pathname: "/raw_bytes" }}>
        <Menu.Item className={classes.Item}>Raw Bytes</Menu.Item>
      </Link>
      <Link to={{ pathname: "/integers" }}>
        <Menu.Item className={classes.Item}>Integers</Menu.Item>
      </Link>
      <Link to={{ pathname: "/rnd_str" }}>
        <Menu.Item className={classes.Item}>Random String/Password</Menu.Item>
      </Link>
      <Link to={{ pathname: "/uniform_dist" }}>
        <Menu.Item className={classes.Item}>Uniform Distribution</Menu.Item>
      </Link>
    </Menu>
  );
  return (
    <div className={classes.container}>
      <Link to={{ pathname: "/" }}>
        <span className={classes.logo}>RandN</span>
      </Link>
      <Link to={{ pathname: "/" }} className={classes.home}>
        Home
      </Link>
      <Dropdown overlay={menu} trigger={["hover"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <span className={classes.DropdownText}>Random Objects</span>
        </a>
      </Dropdown>
      <Link to={{ pathname: "/quota" }} className={classes.quota}>
        Quota
      </Link>
    </div>
  );
};

export default TopMenu;
