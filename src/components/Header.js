import { useEffect, useState } from "react";
import "../css/header.css";

const Header = () => {
  console.log("App");

  return (
    <header>
      <div className={"bg"}>
        <div className="logo">
          <div className="logo1">
            <a href="/">
              <img src="https://weather.kweather.co.kr/assets/img/components/header/logo.png"></img>
            </a>
          </div>
          <div className="logo2">
            <a href="/">
              <img src={require("../img/logo_weather.png")}></img>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
