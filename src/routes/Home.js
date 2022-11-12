import { useEffect, useState } from "react";
import "../css/main.css";
// import Header from "./Header";
// import Footer from "./Footer";

const Home = () => {
  console.log("App");

  return (
    <div className="main_con">
      <div className="map">
        <a>
          <img
            onClick={""}
            className="leftbt_map"
            src={require("../img/main/bt_left.png")}
            alt="왼쪽버튼"
          />
        </a>
        <a>
          <img
            onClick={""}
            className="rightbt_map"
            src={require("../img/main/bt_right.png")}
            alt="오른쪽버튼"
          />
        </a>
        <div className="weather_map_container">
          <div className="maptt">
            <span data-id="weather-map-title">현재날씨</span>
            {/* <img
              className="title-icon"
              data-id="weatehrpopimg"
              onClick={""}
              src=""
              style
            ></img> */}
          </div>
          <div data-id="weather-map" className="w_map">
            <div className="map_03" onClick={""}>
              <div>강원영서</div>
              <img
                className="m_icon"
                src={require("../img/weather/12icon/icon05.png")}
                alt="비"
                title="비"
              ></img>
              <div>14.4℃</div>
            </div>
          </div>
        </div>
        <div className="finedust_map_container"></div>
      </div>
      <div className="maptab"></div>
    </div>
  );
};

export default Home;
