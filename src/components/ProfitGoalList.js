import React from 'react';

const ProfitGoalList = ({ profitgoals, deleteProfitGoal, clearProfitGoals }) => {
  return (
    <div className="profitgoal-list">
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
          {profitgoals.map((profitgoal, index) => (
            <tr key={index}>
              <td>${profitgoal.amount}</td>
              <td>{profitgoal.category}</td>
              <td>{profitgoal.date}</td>
              <td>
                <button onClick={() => deleteProfitGoal(index)} className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: ${profitgoals.reduce((sum, e) => sum + e.amount, 0)}</p>
        <button onClick={clearProfitGoals} className="clear">Clear</button>
      </div>
    </div>
  );
};

export default ProfitGoalList;
