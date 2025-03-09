import React, { useState , useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';
import IncomeChart from '../components/IncomeChart';
import '../CSS/Income.css';

const IncomesPage = () => {
  const [incomes, setIncomes] = useState([]);

  // const addIncome = (income) => {
  //   setIncomes([...incomes, income]);
  // };


  const addIncome = (income) => {
    const updatedIncomes = [...incomes, income];
    setIncomes(updatedIncomes);
    localStorage.setItem('incomes', JSON.stringify(updatedIncomes));
  };

  const deleteIncome = (index) => {
    setIncomes(incomes.filter((_, i) => i !== index));
  };

  const clearIncomes = () => {
    setIncomes([]);
  };

  // Load saved expenses when component mounts
   useEffect(() => {
    const savedIncomes = JSON.parse(localStorage.getItem('incomes')) || [];
    setIncomes(savedIncomes);
   }, []);

  return (
    <div className="container">
      {/* <Sidebar /> */}
      <div className="content">
        <IncomeForm addIncome={addIncome} />
        <IncomeList incomes={incomes} deleteIncome={deleteIncome} clearIncomes={clearIncomes} />
        <IncomeChart incomes={incomes} />
      </div>
    </div>
  );
};

export default IncomesPage;
