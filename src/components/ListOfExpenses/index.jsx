import React, { useState } from "react";
import "./style.css";
import ExpenseItem from "../ExpenseItem";
import Cards from "../Cards";
import ExpensesFilter from "./ExpensesFilter";

const ListOfExpenses = (props) => {
  const [year,setYear]=useState('')

const yearSelectHandler=(selectedDate)=>{
  const filteredDate=selectedDate
  setYear(filteredDate);
}


  return (
    <div>
      <ExpensesFilter selectHandler={yearSelectHandler}/>
      <Cards className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </Cards>
    </div>
    
  );
};

export default ListOfExpenses;
