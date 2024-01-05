import React from "react";
import "./Dashboardtdy.css";
import { Bar } from "react-chartjs-2";
import { Table } from "antd";
function Dashboardtdy() {
  let labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Weakly Earning",
        data: [10, 20, 30, 40, 50, 60, 70],
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

  const SalescountdataSource = [
    {
      key: "1",
      sno: "1",
      type: "Shirt",
      count: "10",
    },
    {
      key: "2",
      sno: "2",
      type: "Phant",
      count: "50",
    },
    {
      key: "3",
      sno: "3",
      type: "inners",
      count: "100",
    },
  ];
  const Salescountcolumns = [
    {
      title: "S.no",
      dataIndex: "sno",
      key: "no",
    },
    {
      title: "Date Time",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Bill no",
      dataIndex: "count",
      key: "count",
    },
  ];
  const staffdataSource = [
    {
      key: "1",
      sno: "1",
      name: "Praison",
      time: "10.40 AM",
    },
    {
      key: "2",
      sno: "2",
      name: "Allan",
      time: "10.00 AM",
    },
    {
      key: "3",
      sno: "3",
      name: "blessan",
      time: "10.00 AM",
    },
  ];
  const staffcolumns = [
    {
      title: "S.no",
      dataIndex: "sno",
      key: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];
  const lossdataSource = [
    {
      key: "1",
      sno: "1",
      Amount: "1000",
      billno: "A22ASAS21",
    },
  ];
  const losscolumns = [
    {
      title: "S.no",
      dataIndex: "sno",
      key: "no",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
    {
      title: "Bill no",
      dataIndex: "billno",
      key: "billno",
    },
  ];
  const profitdataSource = [
    {
      key: "1",
      sno: "1",
      Amount: "1000",
      billno: "A22ASAS21",
    },
    {
      key: "1",
      sno: "2",
      Amount: "1000",
      billno: "A22ASAS21",
    },
  ];
  const profitcolumns = [
    {
      title: "S.no",
      dataIndex: "sno",
      key: "no",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
    {
      title: "Bill no",
      dataIndex: "billno",
      key: "billno",
    },
  ];
  const overallbilldataSource = [
    {
      key: "1",
      sno: "1",
      datetime: "01/01/24 10.00 AM",
      billno: "A22ASAS21",
    },
    {
      key: "2",
      sno: "2",
      datetime: "16/01/24 06.00 AM",
      billno: "A22ASAS21",
    },
    {
      key: "3",
      sno: "3",
      datetime: "25/01/24 10.45 AM",
      billno: "A22ASAS21",
    },
  ];
  const overallbillcolumns = [
    {
      title: "S.no",
      dataIndex: "sno",
      key: "no",
    },
    {
      title: "Date Time",
      dataIndex: "datetime",
      key: "datetime",
    },
    {
      title: "Bill no",
      dataIndex: "billno",
      key: "billno",
    },
  ];

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
            {/* <p className="Dashboard-additional-box-heading">
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
            </p> */}
            <Table
              dataSource={SalescountdataSource}
              columns={Salescountcolumns}
            />
          </div>
        </div>
        <div className="Dashboard-card Available-staff-card">
          <p className="Dashboard-card-value">24</p>
          <p className="Dashboard-card-heading">Available staff</p>
          <div className="Dashboard-additional-box">
            <Table dataSource={staffdataSource} columns={staffcolumns} />
          </div>
        </div>
        <div className="Dashboard-card Overall-profit-card">
          <p className="Dashboard-card-value">2000</p>
          <p className="Dashboard-card-heading">Overall profit</p>
          <div className="Dashboard-additional-box">
            <Table dataSource={profitdataSource} columns={profitcolumns} />
          </div>
        </div>
        <div className="Dashboard-card Overall-Loss-card">
          <p className="Dashboard-card-value">1000</p>
          <p className="Dashboard-card-heading">Overall Loss</p>
          <div className="Dashboard-additional-box">
            <Table dataSource={lossdataSource} columns={losscolumns} />
          </div>
        </div>
        <div className="Dashboard-card Bill-count-card">
          <p className="Dashboard-card-value">200</p>
          <p className="Dashboard-card-heading">Overall Bill Count</p>
          <div className="Dashboard-additional-box">
            {/* <p className="Dashboard-additional-box-heading">
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
            </p> */}
            <Table
              dataSource={overallbilldataSource}
              columns={overallbillcolumns}
            />
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-container-1 chart-container-same">
          <Bar data={data} options={options} />
        </div>
        {/* <div className="chart-container-2 chart-container-same"></div> */}
      </div>
    </div>
  );
}

export default Dashboardtdy;
