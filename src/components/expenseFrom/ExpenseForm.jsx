import { useState } from "react"
import Button from "../UI/Button"
import Form from "../UI/Form"

const ExpenseForm = ({ addExpense, addData }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(null);
    function priceChangeHandler(event) {
        setPrice(event.target.value)
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value)
    }
    function cancelExpenses(e) {
        e.preventDefault()
        addExpense()
    }
    const addExpenseItem = (e) => {
        e.preventDefault()
        if (title.trim() != '' && price.trim() != '' && date.trim() != '') {
            let items = {
                title,
                price,
                date: new Date(date)
            }
            addData(items)
        }
        setTitle('')
        setPrice(0)
        setDate('DD/MM/YYYY')
    }
    return (
        <form className="adder">
            <Form labelTitle='Заголовок' id='title' onChange={titleChangeHandler} value={title} />
            <Form labelTitle='Количество' onChange={priceChangeHandler} type='number' id='price' value={price} />
            <Form labelTitle='Датировать' type='date' id='date' onChange={dateChangeHandler} value={date} />
            <Button onClick={cancelExpenses} >отмена </Button>
            <Button onClick={addExpenseItem} className='btn'>Добавить расходы</Button>
        </form>
    )
}
export default ExpenseForm