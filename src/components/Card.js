import React from "react";
import "./MyCard.css";

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="grid-item">
      <div className="subContainer">
        <img alt={title} width="36" height="36" decoding="async" data-nimg="1" src={imgUrl} />
        <h6>{title}</h6>
      </div>
      <p className="content">{description}</p>
    </div>
  );
};

export default Card;
