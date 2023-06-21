import React from "react";
import "./HeaderBlock.css";

function HeaderBlock() {
  return (
    <div className="headerBlock">
      <div className="headerBlock__info">
        <div className="headerBlock__infoText">
          <h1>Model 3</h1>
          <h4>Schedule a Demo Drive</h4>
        </div>
        <div className="headerBlock__actions">
          <button className="headerBlock__buttonPrimary">
            Explore Invetory
          </button>
          <button className="headerBlock__buttonSecondary">Custom Order</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlock;
