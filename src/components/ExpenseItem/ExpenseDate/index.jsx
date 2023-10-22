import React from "react";
import '../ExpenseDate/style.css'


const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__da">{year}</div>
    </div>
  );
};

export default ExpenseDate;
