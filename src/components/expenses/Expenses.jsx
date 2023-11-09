import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";

const Expenses = ({ items }) => {
    return (
        <div>
            {items.map((el) => (
                <ExpenseItem key={el.title} title={el.title} price={el.price} date={el.date} />
            ))}

        </div>
    )
};
export default Expenses