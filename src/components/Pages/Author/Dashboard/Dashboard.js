import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import "./Dashboard.scss";
import avatar from "../../../../image/saiya.png";

const Dashboard = (props) => {
  
  useEffect(() => {
    document.title = `${props.title}`;
  });

  return (
    <div className="dashboard-page">
      <div className="main-content">
        <div className="content-left">
          <div className="content-left-main">
          Bring out knowledge to the world 
          </div>
        </div>

        <div className="content-right">
          <div className="option-bar">
            <div className="search-bar">
              <IoIosSearch className="icon"/>
              <input type="text" placeholder="Search"/>
            </div>

            <div className="user">
              <img src={avatar} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
