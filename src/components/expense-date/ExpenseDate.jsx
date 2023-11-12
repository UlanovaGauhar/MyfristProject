import React from "react";

const ExpenseDate = ({date}) => {
    let month = date.toLocaleString('ru-RU', {month: 'long'})
    let day = date.toLocaleString('re-RU', {day: '2-digit'})
    let year = date.getFullYear()
    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>

        </div>
    )
}
export default ExpenseDate