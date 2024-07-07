import React from "react";

import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/allCategories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <FontAwesomeIcon icon={faWindows} />
      <h6>All Categories</h6>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default Categories;
