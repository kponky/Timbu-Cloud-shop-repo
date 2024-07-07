import {
  faAngleDown,
  faAngleRight,
  faBolt,
  faCarSide,
  faEnvelopeOpen,
  faEnvelopeSquare,
  faGlobe,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import supportImg from "../assets/fluent_person-support-32-filled.png";
import offerImg from "../assets/offer icon.png";

const Header1 = () => {
  return (
    <div className="header1-container">
      <div className="header-items supportCenter">
        <img src={supportImg} alt="support adent" />
        <p>Support Center</p>
        <FontAwesomeIcon icon={faAngleRight} className="icon1"/>
      </div>

      <div className="yellow-line"></div>

      <div className="header-items">
        <FontAwesomeIcon icon={faPersonWalking}  />
        <p>Find Store</p>
      </div>

      <div className="header-items">
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        {/*<FontAwesomeIcon icon="fa-light fa-envelope" />*/}
        <FontAwesomeIcon icon={faEnvelope} />
        <p>Sales@fashionnest.com</p>
      </div>

      <div className="header-items">
        <img src={offerImg} alt="" />
        <p>Offers & Values</p>
      </div>
      <div className="header-items">
        <FontAwesomeIcon icon={faBolt} />
        <p>Everyday sales</p>
      </div>

      <div className="header-item">
        <FontAwesomeIcon icon={faCarSide} />
        <p>.....Free International Delivery </p>
      </div>

      <div className="header-items">
        <FontAwesomeIcon icon={faGlobe} />
        <p>English </p>
        <FontAwesomeIcon icon={faAngleDown} />

        
      </div>
    </div>
  );
};

export default Header1;
