import React from "react";
import Zuri from "../assets/Zuri.Internship_Logo.png";
import IG4 from "../assets/I4G.png";

const FooterSection = () => {
  return (
    <footer>
      <div className="line">
        <hr />
      </div>
      <div className="about">
        <div>
          <img src={Zuri} alt="zuri logo" />
        </div>
        <div>HNG Internship 9 Frontend Task</div>
        <div>
          <img src={IG4} alt="IG4 logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
