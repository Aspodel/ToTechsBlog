import React from "react";
import "./Blog.scss";
import logo from "../../../image/logo.png";
import image_blog from "../../../image/healthy.png";

const Blog = () => {
  return (
    <div className="blog-page">
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

        <div className="toolbar"></div>
      </div>

      <div className="main-content">
        <div className="content-top">
          <div className="left">
            <div className="big-blog">
              <img src={image_blog} alt="" />
              <div className="title">
                Coronavirus cases pass 300.000 around the wolrd
              </div>
              <div className="sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, repellendus? Iusto quibusdam beatae deleniti tenetur!
              </div>
              <div className="author">By Davide Asvisto</div>
              <div className="time">March 20, 9:30 P.m</div>
            </div>
          </div>

          <div className="right">
            <div className="blog">
              <div className="details">
                <div className="title">
                  Coronavirus cases pass 300.000 around the wolrd
                </div>
                <div className="author">By Davide Asvisto</div>
                <div className="time">March 20, 9:30 P.m</div>
              </div>
              <img src={image_blog} alt="" />
            </div>
            <div className="blog">
              <div className="details">
                <div className="title">
                  Coronavirus cases pass 300.000 around the wolrd
                </div>
                <div className="author">By Davide Asvisto</div>
                <div className="time">March 20, 9:30 P.m</div>
              </div>
              <img src={image_blog} alt="" />
            </div>
            <div className="blog">
              <div className="details">
                <div className="title">
                  Coronavirus cases pass 300.000 around the wolrd
                </div>
                <div className="author">By Davide Asvisto</div>
                <div className="time">March 20, 9:30 P.m</div>
              </div>
              <img src={image_blog} alt="" />
            </div>
            <div className="blog">
              <div className="details">
                <div className="title">
                  Coronavirus cases pass 300.000 around the wolrd
                </div>
                <div className="author">By Davide Asvisto</div>
                <div className="time">March 20, 9:30 P.m</div>
              </div>
              <img src={image_blog} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
