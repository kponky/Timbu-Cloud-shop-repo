import React from "react";
import logo from "../assets/Black-Brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import '../Styles/cardHeader.css'

const CardHeader = () => {
  return (
    <div className="cardheader-wrapper">
      <img src={logo} alt="" />
      <FontAwesomeIcon icon={faTimes} className="icon" />
    </div>
  );
};

export default CardHeader;
