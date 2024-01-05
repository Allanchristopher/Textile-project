import React, { useState } from "react";
import { Button, DatePicker } from "antd";
import "./Dashboad.css";
import Dashboardtdy from "./Dashboardtdy";
const { RangePicker } = DatePicker;
function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("Today");
  const [isHovered, setIsHovered] = useState(false);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="Dashboard">
      <div className="Button-container">
        <div className="Dashboard-date-filters">
          <Button
            type={selectedTab === "Today" ? "primary" : "default"}
            onClick={() => handleTabClick("Today")}
            className={`Dashboard-Today-btn ${
              selectedTab === "Today"
                ? "Dashboard-Today-btn-active"
                : "Dashboard-Today-btn-inactive"
            }`}
          >
            Today
          </Button>

          <RangePicker />
        </div>

        <div className="Dashboard-bilinking-btn">


        <Button
      className={`blinking-button ${!isHovered ? 'blinking' : ''}`}
    >
      Stock alert
    </Button>
        <Button
      className={`blinking-button ${!isHovered ? 'blinking' : ''}`}
    >
      Payment alert
    </Button>





        </div>
        {/* <Button
          type={selectedTab === "Overall" ? "primary" : "default"}
          onClick={() => handleTabClick("Overall")}
          className={`Dashboard-Today-btn ${
            selectedTab === "Overall"
              ? "Dashboard-Today-btn-active"
              : "Dashboard-Today-btn-inactive"
          }`}
        >
          Overall
        </Button> */}
      </div>
      {selectedTab === "Today" && (
        <div className="Today-content">
          <Dashboardtdy />
        </div>
      )}
      {/* {selectedTab === "Overall" && (
        <div className="Overall-content">Overall Content</div>
      )} */}
    </div>
  );
}

export default Dashboard;
