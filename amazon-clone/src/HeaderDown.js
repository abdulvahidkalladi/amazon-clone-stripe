import React from "react";
import "./HeaderDown.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

function HeaderDown() {
  return (
    <div className="header__two">
      <FmdGoodOutlinedIcon className="header2__locationIcon" />

      <div className="header2__nav">
        <div className="header2__option">
          <span className="header2__optionOne">Deliver to</span>
          <span className="header2__optionTwo">United Arab Emirates</span>
        </div>

        <div className="header2__option__one">
          <span className="header2__option__one__two">Today's Deals</span>
          <span className="header2__option__one__two">Customer Service</span>
          <span className="header2__option__one__two">Gift Cards</span>
          <span className="header2__option__one__two">Registry</span>
          <span className="header2__option__one__two">Sell</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderDown;
