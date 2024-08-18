import React from "react";
import logo from "../../assets/logo.png";
import '../../styles/footer.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="firstRow">
            <div className="footer__logo">
              <img src={logo} />
              <h1>Foot Bot</h1>
            </div>
            <p>
              There is no love sincerer than the love of food & People who love
              to eat are always the best people.
            </p>
          </div>
          <div className="secondRow">
              <h1>Contact Us</h1>
            <div className="contactUs">
              <span><FaPhoneVolume /> <span>+880-1862609526</span></span>
              <span><AiOutlineMail /> <span>abdulla@gmail.com</span></span>
            </div>
          </div>
          <div className="secondRow">
              <h1>Follow us On</h1>
            <div className="followUs">
             <IoLogoFacebook size={30}/>
             <AiFillTwitterCircle size={30}/>
             <BiLogoInstagramAlt size={30}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
