import { useState } from "react";
import Button from "../UI/Button";
import ExpenseForm from "../expenseFrom/ExpenseForm";

const NewExpenses = ({ addData }) => {

    const [isToggle, setIsToggle] = useState(false);
    function addExpense() {
        setIsToggle((prevState) => !prevState);
    }
    console.log('render');
    return (
        <div>
            {!isToggle && (
                <Button onClick={addExpense} title='Добавить новый расход' className='udo3' />
            )}

            {isToggle && <ExpenseForm addExpense={addExpense} addData={addData} />}
        </div>
    )
};
export default NewExpenses
