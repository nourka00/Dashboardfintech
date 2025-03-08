import React, { useState } from 'react';

const ProfitGoalForm = ({ addProfitGoal }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      addProfitGoal({ amount: parseFloat(amount), category, date });
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  return (
    <div className="profitgoal-form">
      <h2>ProfitGoals Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter the ProfitGoal Value"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add ProfitGoal</button>
      </form>
    </div>
  );
};

export default ProfitGoalForm;
