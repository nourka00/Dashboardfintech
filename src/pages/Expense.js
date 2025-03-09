import React, { useState , useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';
import '../CSS/Expense.css';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  // const addExpense = (expense) => {
  //   const updatedExpenses = [...expenses, expense];
  //   setExpenses(updatedExpenses);
  //   localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  // };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  // Load saved expenses when component mounts
 useEffect(() => {
  const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  setExpenses(savedExpenses);
 }, []);

  return (
    <div className="container">
      {/* <Sidebar /> */}
      <div className="content">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} clearExpenses={clearExpenses} />
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpensesPage;


