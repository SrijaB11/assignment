import React from "react";
import studentImg from "../../assets/images/studentImg.png";
import "./RightSideImg.css";

function RightSideImg() {
  return (
    <div>
      <div className="hero-bg-img">
        <img src={studentImg} alt="student-img" />
      </div>
    </div>
  );
}

export default RightSideImg;
