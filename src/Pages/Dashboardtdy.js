import React from "react";
import "./Dashboardtdy.css";
import { Bar } from "react-chartjs-2";
function Dashboardtdy() {
  let labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Weakly Earning",
        data: [10, 20, 30, 40, 50, 60,70],
        borderColor: [
          "#f05658",
          "#d84d4f",
          "#c04446",
          "#a83c3d",
          "#903334",
          "#782b2c",
          "#48191a",
        ],
        backgroundColor: [
          "#f05658",
          "#d84d4f",
          "#c04446",
          "#a83c3d",
          "#903334",
          "#782b2c",
          "#48191a",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    stacked: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 10, // Set the bar radius here
      },
    },
  };


  return (
    <div className="Dashboardtdy">
      <div className="Dashboard-card-container">
        <div className="Dashboard-card">
          <p className="Dashboard-card-value">
            <span>&#8377;</span>10000
          </p>
          <p className="Dashboard-card-heading">Earnings</p>
        </div>
        <div className="Dashboard-card sales-count-card">
          <p className="Dashboard-card-value">248</p>
          <p className="Dashboard-card-heading">Sales count</p>
          <div className="Dashboard-additional-box">
            <p className="Dashboard-additional-box-heading">
              Shirt : <span className="Dashboard-additional-box-count">20</span>
            </p>
            <p className="Dashboard-additional-box-heading">
              Phant : <span className="Dashboard-additional-box-count">20</span>
            </p>
            <p className="Dashboard-additional-box-heading">
              Inners :{" "}
              <span className="Dashboard-additional-box-count">20</span>
            </p>
            <p className="Dashboard-additional-box-heading">
              Towel : <span className="Dashboard-additional-box-count">20</span>
            </p>
          </div>
        </div>
        <div className="Dashboard-card">
          <p className="Dashboard-card-value">24</p>
          <p className="Dashboard-card-heading">Available staff</p>
        </div>
        <div className="Dashboard-card">
          <p className="Dashboard-card-value">2000</p>
          <p className="Dashboard-card-heading">Overall profit</p>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-container-1 chart-container-same">
          <Bar data={data} options={options} />
        </div>
        <div className="chart-container-2 chart-container-same"></div>
      </div>
    </div>
  );
}

export default Dashboardtdy;
