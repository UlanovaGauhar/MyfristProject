import React from "react";
import ExpenseDate from "../expense-date/ExpenseDate";

const ExpenseItem = ({ title, price, date }) => {
    return (
        <div className="divver">
            <ExpenseDate date={date}/>
            <h4 className="name">{title}</h4>
            <p className="prices">{price}</p>
        </div>
    )
};
export default ExpenseItem