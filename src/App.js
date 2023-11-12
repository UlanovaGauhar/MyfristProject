import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/new-expenses/NewExpenses';

const items = [
  {
    id: 1,
    title: 'Новый телевизор',
    price: 400,
    date: new Date(),
  },
  {
    id: 2,
    title: 'Новый письменный стол(дерявянный)',
    price: 300,
    date: new Date(),
  },
  {
    id: 3,
    title: 'Страхование автомобиля',
    price: 600,
    date: new Date(),
  }
]
function App() {
  const [expenses, setExpenses] = useState(items)
  const addData = (data) => {
    setExpenses([...expenses, data])
  }
  return (
    <div>
      <NewExpenses addData={addData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
