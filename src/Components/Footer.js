import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-column">
      <h3>Pizza Boy</h3>
      <ul>
        <li>App</li>
        <li>Story</li>
        <li>Branches</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Quality</h3>
      <ul>
        <li>Bonus Points</li>
        <li>Product Info</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Branches</h3>
      <ul>
        <li>Feedback</li>
        <li>Newsletter</li>
        <li>Registration</li>
        <li>Career</li>
        <li>Jobs</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Partner</h3>
      <ul>
        <li>Franchise Info</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Social Media</h3>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Legal</h3>
      <ul>
        <li>Conditions</li>
        <li>Data Protection</li>
        <li>Imprint</li>
      </ul>
    </div>
  </footer>
  
  );
};

export default Footer;