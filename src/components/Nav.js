import { useEffect, useState } from "react";
import "../css/nav.css";

const Nav = () => {
  console.log("Nav");

  return (
    <div className={"nav_bg"}>
      <nav>
        <div className="nav_hide">
          <ul>
            <li>
              <a href="/">날씨</a>
            </li>
            <li>
              <a href="/">날씨1</a>
            </li>
            <li>
              <a href="/">날씨2</a>
            </li>
            <li>
              <a href="/">날씨3</a>
            </li>
            <li>
              <a href="/">날씨4</a>
            </li>
            <li>
              <a href="/">날씨5</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
