import React from "react";
import img6 from "../../assets/img-6.png";
import img7 from "../../assets/img-7.png";
import img8 from "../../assets/img-8.png";
import Iconimg1 from "../../assets/Instagram.png";
import Iconimg2 from "../../assets/Facebook.png";
import Iconimg3 from "../../assets/Twitter.png";
import Icomimg4 from "../../assets/WhatsApp.png";
import "./Section3.css";
const Section3 = () => {
  return (
    <div className="mb-2 ">
      <h1 className="text-center mt-5 ">The vetcare team</h1>
      <p className=" text-center mt-2">
        Our team is made up of individuals who embody these values in the work
        they do every day.
      </p>
      <div className="d-flex  justify-content-center gap-5 text-center">
        <div>
          <img src={img6} alt="/" />
          <h2 className="text-center mt-2">Jennifer Mullen</h2>
          <p>
            <small>VETERINARY.</small>
          </p>
          <div>
            <img className="icon_style" src={Iconimg1} alt="/" />
            <img className="icon_style" src={Iconimg2} alt="/" />
            <img className="icon_style" src={Iconimg3} alt="/" />
            <img className="icon_style" src={Icomimg4} alt="/" />
          </div>
        </div>
        <div>
          <img src={img7} alt="/" />
          <h2 className="text-center mt-2">Sheeren Collins</h2>
          <p>
            <small>ADMINISTRATION</small>
          </p>
          <div>
            <img className="icon_style" src={Iconimg1} alt="/" />
            <img className="icon_style" src={Iconimg2} alt="/" />
            <img className="icon_style" src={Iconimg3} alt="/" />
            <img className="icon_style" src={Icomimg4} alt="/" />
          </div>
        </div>
        <div>
          <img src={img8} alt="/" />
          <h2 className="text-center mt-2">Jennifer Mullen</h2>
          <p>
            <small>VETERINARY</small>
          </p>
          <div>
            <img className="icon_style" src={Iconimg1} alt="/" />
            <img className="icon_style" src={Iconimg2} alt="/" />
            <img className="icon_style" src={Iconimg3} alt="/" />
            <img className="icon_style" src={Icomimg4} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
