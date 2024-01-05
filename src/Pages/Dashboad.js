import React, { useState } from "react";
import { Button, DatePicker, Table } from "antd";
import "./Dashboad.css";
import Dashboardtdy from "./Dashboardtdy";
const { RangePicker } = DatePicker;

const dataSource1 = [
  {
    key: "1",
    name: "praison",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "blessan",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "3",
    name: "Allan",
    age: 23,
    address: "10 Downing Street",
  },
];

const columns1 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "3",
    name: "Allan",
    age: 23,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("Today");
  const [selectedTable, setselectedTable] = useState("Stockalert");
  const [isHovered, setIsHovered] = useState(false);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handletableclick = (table) => {
    setselectedTable(table);
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

          <DatePicker />
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

<div className="Dashboard-bilinking-btn">
          <Button
            className={`blinking-button blinking`}
            onClick={() => handletableclick("Stockalert")}
          >
            Stock alert
          </Button>
          <Button
            className={`blinking-button blinking`}
            onClick={() => handletableclick("Paymentalert")}
          >
            Payment alert
          </Button>
        </div>
      {selectedTable === "Stockalert" && (
        <Table dataSource={dataSource} columns={columns} />
      )}
      {selectedTable === "Paymentalert" && (
        <Table dataSource={dataSource1} columns={columns1} />
      )}
      {/* {selectedTab === "Overall" && (
        <div className="Overall-content">Overall Content</div>
      )} */}
    </div>
  );
}

export default Dashboard;
