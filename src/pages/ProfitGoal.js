import React, { useState , useEffect} from 'react';
// import Sidebar from '../components/Sidebar';
import ProfitGoalForm from '../components/ProfitGoalForm';
import ProfitGoalList from '../components/ProfitGoalList';
import ProfitGoalChart from '../components/ProfitGoalChart';
import '../CSS/ProfitGoal.css';

const ProfitGoalsPage = () => {
  const [profitgoals, setProfitGoals] = useState([]);

  // const addProfitGoal = (profitgoal) => {
  //   setProfitGoals([...profitgoals, profitgoal]);
  // };



  const addProfitGoal = (profitgoal) => {
    const updatedProfitGoals = [...profitgoals, profitgoal];
    setProfitGoals(updatedProfitGoals);
    localStorage.setItem('profitgoals', JSON.stringify(updatedProfitGoals));
  };

  const deleteProfitGoal = (index) => {
    setProfitGoals(profitgoals.filter((_, i) => i !== index));
  };

  const clearProfitGoals = () => {
    setProfitGoals([]);
  };



  // Load saved expenses when component mounts
   useEffect(() => {
    const savedProfitGoals = JSON.parse(localStorage.getItem('profitgoals')) || [];
    setProfitGoals(savedProfitGoals);
   }, []);
  

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
