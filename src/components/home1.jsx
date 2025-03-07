/*import React from "react";
import "../CSS/home.css";

*/
import wallet from "../assets/expenses.png"; 
import head from "../assets/head.png"
import React from "react";
import "../CSS/home.css"; // Create this CSS file

function FinanceDashboard() {
  return (
    <div className="dashboard-container">
      <div className="header-section">
        <div className="image-container">
          <img src={head} alt="Credit Cards" />
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-title">Cash-flow</div>
        <div className="time-buttons">
          <button className="active">Monthly</button>
          <button>Weekly</button>
          <button>Yearly</button>
        </div>
        <div className="chart-area">
          {/* Placeholder for your chart */}
          <div className="chart-placeholder">
            {/* You'll need to use a charting library here */}
            {/* Example: <LineChart data={yourData} /> */}
            <p>Chart Goes Here</p>
          </div>
          <div className="chart-y-axis">
            <span>100</span>
            <span>70</span>
            <span>20</span>
          </div>
        </div>
      </div>

      <div className="grid-section">
        <div className="grid-item">
          <div className="icon">
            {/* Replace with your icon */}
            <img src={wallet} alt="Icon" />
          </div>
          <div className="text">
            <h3>Total Incomes</h3>
            <p>XXXXX$</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <img src={wallet} alt="Icon" />
          </div>
          <div className="text">
            <h3>Total Expenses</h3>
            <p>XXXXX$</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <img src={wallet}alt="Icon" />
          </div>
          <div className="text">
            <h3>Profit Margin</h3>
            <p>XXXXX$</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <img src={wallet}alt="Icon" />
          </div>
          <div className="text">
            <h3>Budget Breakdown</h3>
            <p>XXXXX$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceDashboard;

/*function Home1() {
    return (
        <div>
            <div className="head">
                 <img src={head} alt="header" />
            </div>
    <div className="grid-container">
      <div className="grid-item">
        <div className="img-container">
          <img src={wallet} alt="wallet" />
        </div>
        <div className="text-container">
          <h5>Total Incomes</h5>
          <h6>XXXXX$</h6>
        </div>
      </div>
      <div className="grid-item">
        <div className="img-container">
          <img src={wallet} alt="wallet" />
        </div>
        <div className="text-container">
          <h5>Total Expenses</h5>
          <h6>XXXXX$</h6>
        </div>
      </div>
      <div className="grid-item">
        <div className="img-container">
          <img src={wallet} alt="wallet" />
        </div>
        <div className="text-container">
          <h5>Profit Margin</h5>
          <h6>XXXXX$</h6>
        </div>
      </div>
      <div className="grid-item">
        <div className="img-container">
          <img src={wallet} alt="wallet" />
        </div>
        <div className="text-container">
          <h5>Budget Breakdown</h5>
          <h6>XXXXX$</h6>
        </div>
      </div>
            </div>
        </div>
  );
}

export default Home1;*/
