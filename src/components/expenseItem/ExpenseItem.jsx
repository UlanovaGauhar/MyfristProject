import React from "react";

const ExpenseItem = ({ title, price, date }) => {
    return (
        <div className="divver">
            <p className="date">{date.toString()}</p>
            <h4 className="name">{title}</h4>
            <p className="prices">{price}</p>
        </div>
    )
};
export default ExpenseItem