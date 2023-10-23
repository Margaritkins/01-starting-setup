import React from "react";
import '../Cards/style.css'

const Cards = (props) => {
  const cardClass = "card "+ props.className;
  return <div className={cardClass}>{props.children}</div>;
};

export default Cards;
