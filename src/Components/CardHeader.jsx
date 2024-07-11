import React from "react";
import logo from "../assets/Black-Brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/cardHeader.css";
import { Link } from "react-router-dom";

const CardHeader = () => {
  return (
    <div className="cardheader-wrapper">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <Link to="/checkout">
        
        <FontAwesomeIcon icon={faTimes} className="icon" />
      </Link>
    </div>
  );
};

export default CardHeader;
