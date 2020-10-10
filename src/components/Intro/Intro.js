import React, { useEffect } from "react";
import "./Intro.scss";
import logo from "../../image/logo.png";
// import image from "../../image/result1.png";

const Intro = () => {
  useEffect(() => {
    document.title = "ToTechs";
  });

  return (
    <div className="intro-page">
      <div className="header-detail">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="company-name">
            <span>totechs</span>
            <span>.</span>
          </div>
        </div>

        <div className="navigation">
          <span>Intro</span>
          <span>Blog</span>
          <span>About us</span>
          <span>More</span>
        </div>

        <button>Sign in</button>
      </div>

      <div className="main-content">
        <div className="content-left">
          <div className="title">Bring our knowledge to you</div>
          <div className="sub">For the better world</div>
          <button>Get Started</button>
        </div>

        {/* <div className="content-right">
          <img src={image} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
