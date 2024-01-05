import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      path: "/usermanagement",
      name: "User Management",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          width: isOpen ? "250px" : "50px",
          paddingRight: isOpen ? "10px" : "5px",
        }}
        className="sidebar"
      >
        <div>
          {" "}
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "100px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="Center_section">
            {" "}
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="Bottom_section">
        <NavLink
                to={"/"}
                className="Sidebar-logout"
              >
                <div className="icon"><TbLogout2/></div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Logout
                </div>
              </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
