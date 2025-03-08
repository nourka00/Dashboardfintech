import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const chartRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until mounted
  }

  const categories = [...new Set(expenses.map(exp => exp.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map(cat =>
          expenses.filter(exp => exp.category === cat).reduce((sum, exp) => sum + exp.amount, 0)
        ),
        backgroundColor: ['#3A73CC', '#1C1C1C', '#6A1B9A'],
      },
    ],
  };

  return (
    <div className="expense-chart">
    <div className="chart-info">
      <h3>Total Expenses</h3>
      {categories.map((cat, index) => (
        <div key={cat} className="color-box">
          <span style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></span>
          {cat}
        </div>
      ))}
    </div>
    <div className="chart-container">
      <Doughnut ref={chartRef} data={data} />
    </div>
  </div>
  
  );
};

export default ExpenseChart;
