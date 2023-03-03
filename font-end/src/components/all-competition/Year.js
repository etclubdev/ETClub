import React from "react";
import "./Year.scss";
const Year = (props) => {
  return (
    <div class="competition_year">
      <div class="year_number">{props.year}</div>
      <div class="year_line"></div>
    </div>
  );
};

export default Year;
