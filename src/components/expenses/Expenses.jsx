import React, { useState } from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"
 
const Expenses = ({ items }) => {
    const [selectedYear, setSelectedYear]=useState('ALL')
    const selectedonChangeHandler = (item)=>{
    setSelectedYear(item.target.value)
    console.log(selectedYear);
    }
    const getCurrentExpense=()=>{
        if(selectedYear==='ALL'){
            return items
        }
        return items.filter((expense)=>{
            return  expense.date.getFullYear().toString()===selectedYear
        })
    }
    const  renderedExpenses=getCurrentExpense()
    return (
        <div className="me2">
            <ExpenseFilter onselectChange={selectedonChangeHandler} selectedYear={selectedYear}/>
            {renderedExpenses.map((el) => (
                <ExpenseItem key={el.title} title={el.title} price={el.price} date={el.date} />
            ))}

        </div>
    )
};
export default Expenses