import React from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import "./Author.scss";
import logo from "../../../image/logo.png";
import Dashboard from "./Dashboard/Dashboard";
import BlogList from "./BlogList/BlogList";
import { removeToken } from "../../../utils/manageToken";
// import { FaCube } from "react-icons/fa";
import { BiCube } from "react-icons/bi";

import { BsFilePlus, BsClipboard } from "react-icons/bs";
// import { VscDiffAdded } from "react-icons/vsc";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdClipboard } from "react-icons/io";

const Author = ({ match }) => {
  console.log(window.localStorage.getItem("Token"));
  return (
    <div className="author-page">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="company-name">
            <span>totechs</span>
          </div>
        </div>

        <div className="navigation-bar">
          <NavLink
            activeClassName="active"
            className="item"
            to={`${match.url}/dashboard`}
          >
            <div className="left">
              <BiCube className="icon" />
              <span>Dashboard</span>
            </div>
            <HiArrowNarrowRight className="icon" />
          </NavLink>

          <NavLink
            activeClassName="active"
            className="item"
            to={`${match.url}/blogs`}
          >
            <div className="left">
              <IoMdClipboard className="icon" />
              <span className="item-name">Blogs</span>
            </div>
            <HiArrowNarrowRight className="icon" />
          </NavLink>

          <NavLink
            activeClassName="active"
            className="item"
            to={`${match.url}/newblog`}
          >
            <div className="left">
              <BsFilePlus className="icon" />
              <span>Add Blog</span>
            </div>
            <HiArrowNarrowRight className="icon" />
          </NavLink>
        </div>
      </div>

      <Route path={`${match.path}/dashboard`}>
        <Dashboard title="Dashboard" />
      </Route>

      <Route path={`${match.path}/blogs`}>
        <BlogList title="Blogs" />
      </Route>

      <Redirect from={`${match.path}`} to={`${match.path}/dashboard`} />
    </div>
  );
};

export default Author;
