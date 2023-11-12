import React from "react";

const ExpenseFilter = ({ onselectChange, selectedYear }) => {
    return (
        <div>
            <div>
                <label className="labe">Filter by year</label>
                <select className="select" value={selectedYear} onChange={onselectChange}>
                    <option value="ALL">Select ALL</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter