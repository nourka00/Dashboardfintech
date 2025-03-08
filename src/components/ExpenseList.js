import React from 'react';

const ExpenseList = ({ expenses, deleteExpense, clearExpenses }) => {
  return (
    <div className="expense-list">
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
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => deleteExpense(index)} className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: ${expenses.reduce((sum, e) => sum + e.amount, 0)}</p>
        <button onClick={clearExpenses} className="clear">Clear</button>
      </div>
    </div>
  );
};

export default ExpenseList;
