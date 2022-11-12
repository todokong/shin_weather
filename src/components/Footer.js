import { useEffect, useState } from "react";
import "../css/footer.css";

const Footer = () => {
  console.log("Footer");

  return (
    <footer>
      <div className="f_width">
        <div className="f_logo">
          <div className="logo1">
            <a href="/">
              <img
                src={require("../img/components/footer/f_logo.png")}
                alt="케이웨더"
              ></img>
            </a>
          </div>
          <div className="logo2">
            <a href="/">
              <img
                src={require("../img/components/footer/f_logo_weather.png")}
                alt="케이웨더 날씨와 미세먼지"
              ></img>
            </a>
          </div>
        </div>
        <div className="f_add">
          <div className="add">제작 이규홍 도움 신혜림</div>
          <div className="f_link"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
