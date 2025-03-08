import React from 'react';

const IncomeList = ({ incomes, deleteIncome, clearIncomes }) => {
  return (
    <div className="income-list">
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income, index) => (
            <tr key={index}>
              <td>${income.amount}</td>
              <td>{income.category}</td>
              <td>{income.date}</td>
              <td>
                <button onClick={() => deleteIncome(index)} className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: ${incomes.reduce((sum, e) => sum + e.amount, 0)}</p>
        <button onClick={clearIncomes} className="clear">Clear</button>
      </div>
    </div>
  );
};

export default IncomeList;
