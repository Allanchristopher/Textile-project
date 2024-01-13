import React, { useEffect } from "react";
import "./Dashboardtdy.css";
import { Bar } from "react-chartjs-2";
import { Table, notification ,DatePicker} from "antd";
import { IoIosMan } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { RiBillFill } from "react-icons/ri";

function Dashboardtdy() {
  useEffect(() => {
    // Display a notification when the page loads
    notification.open({
      message: (
        <p className="notificaton-heading">
          Stock Alert
        </p>
      ),
      description: (
        <p className="notificaton-value">
          20
        </p>
      ),
    });
    notification.open({
      message: (
        <p className="notificaton-heading">
          Payment Alert
        </p>
      ),
      description: (
        <p className="notificaton-value">
          200 
        </p>
      ),
    });
  }, []);
  const { RangePicker } = DatePicker;
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
          <div className="first-divider">
            <p className="Dashboard-card-heading">Earnings</p>
            <p className="Dashboard-card-value">
              <span>&#8377;</span>10000
            </p>
          </div>
          <div className="second-divider">
            <div className="icon-container">
              <GiReceiveMoney />
            </div>
          </div>
        </div>
        <div className="Dashboard-card sales-count-card">
          <div className="first-divider">
            <p className="Dashboard-card-heading">Sales count</p>
            <p className="Dashboard-card-value">248</p>
          </div>
          <div className="second-divider">
            <div className="icon-container">
              <FaPeopleCarryBox />
            </div>
          </div>

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
          <div className="first-divider">
            <p className="Dashboard-card-heading">Available staff</p>
            <p className="Dashboard-card-value">24</p>
          </div>
          <div className="second-divider">
            <div className="icon-container">
              <IoIosMan />
            </div>
          </div>

          <div className="Dashboard-additional-box">
            <Table dataSource={staffdataSource} columns={staffcolumns} />
          </div>
        </div>
        <div className="Dashboard-card Overall-profit-card">
          <div className="first-divider">
            <p className="Dashboard-card-heading">Overall profit</p>
            <p className="Dashboard-card-value">2000</p>
          </div>
          <div className="second-divider">
            <div className="icon-container">
              <FaMoneyBill />
            </div>
          </div>
          <div className="Dashboard-additional-box">
            <Table dataSource={profitdataSource} columns={profitcolumns} />
          </div>
        </div>
        <div className="Dashboard-card Overall-Loss-card">
          <div className="first-divider">
            <p className="Dashboard-card-heading">Overall Loss</p>
            <p className="Dashboard-card-value">1000</p>
          </div>
          <div className="second-divider">
            <div className="icon-container">
              <GiPayMoney />
            </div>
          </div>

          <div className="Dashboard-additional-box">
            <Table dataSource={lossdataSource} columns={losscolumns} />
          </div>
        </div>
        <div className="Dashboard-card Bill-count-card">
          <div className="first-divider">
          <p className="Dashboard-card-heading">Overall Bill Count</p>
            <p className="Dashboard-card-value">200</p>
          </div>
          <div className="second-divider">
            <div className="icon-container">
              <RiBillFill />
            </div>
          </div>

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
<div className="Dashboardtdy-btn-container">
<RangePicker />
<button className="Dashboardtdy-graph-btn">Earnings</button>
<button className="Dashboardtdy-graph-btn">Sales count</button>
<button className="Dashboardtdy-graph-btn">Overall profit</button>
<button className="Dashboardtdy-graph-btn">Overall Loss</button>
<button className="Dashboardtdy-graph-btn">Overall Bill Count</button>
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
