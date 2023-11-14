import { useState } from 'react';
import Expenses from './components/expenses/Expenses';
import React from 'react';
import NewExpenses from './components/new-expenses/NewExpenses';
import './App.css';

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
