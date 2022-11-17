import React from "react";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import "./AboutSection2.css";
const AboutSection2 = () => {
  return (
    <div className="bg-img">
      <div className="d-flex  justify-content-center gap-5 text-center m-3 p-5 text-white ">
        <div>
          <img src={icon1} alt="/" />
          <h2 className="text-center mt-2 p-2  "> +34793</h2>
          <h3> Happy Clients</h3>
        </div>
        <div>
          <img src={icon2} alt="/" />
          <h2 className="text-center mt-2 p-2 ">+45382</h2>
          <h3>Department</h3>
        </div>
        <div>
          <img src={icon3} alt="/" />
          <h2 className="text-center mt-2 p-2">+54762</h2>
          <h3>Vaccinations</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
