import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
import ProfitGoalForm from '../components/ProfitGoalForm';
import ProfitGoalList from '../components/ProfitGoalList';
import ProfitGoalChart from '../components/ProfitGoalChart';
import '../CSS/ProfitGoal.css';

const ProfitGoalsPage = () => {
  const [profitgoals, setProfitGoals] = useState([]);

  const addProfitGoal = (profitgoal) => {
    setProfitGoals([...profitgoals, profitgoal]);
  };

  const deleteProfitGoal = (index) => {
    setProfitGoals(profitgoals.filter((_, i) => i !== index));
  };

  const clearProfitGoals = () => {
    setProfitGoals([]);
  };

  return (
    <div className="container">
      {/* <Sidebar /> */}
      <div className="content">
        <ProfitGoalForm addProfitGoal={addProfitGoal} />
        <ProfitGoalList profitgoals={profitgoals} deleteProfitGoal={deleteProfitGoal} clearProfitGoals={clearProfitGoals} />
        <ProfitGoalChart profitgoals={profitgoals} />
      </div>
    </div>
  );
};

export default ProfitGoalsPage;
