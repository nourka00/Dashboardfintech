import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';
import IncomeChart from '../components/IncomeChart';
import '../CSS/Income.css';

const IncomesPage = () => {
  const [incomes, setIncomes] = useState([]);

  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const deleteIncome = (index) => {
    setIncomes(incomes.filter((_, i) => i !== index));
  };

  const clearIncomes = () => {
    setIncomes([]);
  };

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
