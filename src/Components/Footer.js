import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-area">
        <h2>About</h2>
        <ul className="box">
          <li>History</li>
          <li>Our Team</li>
          <li>Brand Guidelines</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <ul className="right-area">
        <li className="link-area">
          <h2>Service</h2>
          <ul className="box h-box">
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Our Product</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Promo</a>
            </li>
            <li>
              <a href="#">Payment method</a>
            </li>
          </ul>
        </li>
      </ul>
      <li>
        <h2>Title Here</h2>
        <form action="" className="form-search">
          <div className="search-box">
            <input type="text" name="" id=""></input>
          </div>
        </form>
        <div className="socials">
          <a href="#">
            <i className="fa fa-facebook">
              <BsFacebook />
            </i>
          </a>
          <a href="#">
            <i className="fa fa-twitter">
              <AiOutlineTwitter />
            </i>
          </a>
          <a href="#">
            <i className="fa fa-instagram">
              <AiOutlineInstagram />
            </i>
          </a>
          <a href="#">
            <i className="fa fa-whatsapp">
              <BsWhatsapp />
            </i>
          </a>
        </div>
      </li>
    </footer>
  );
};

export default Footer;
