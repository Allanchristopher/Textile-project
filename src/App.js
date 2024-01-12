// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Sidebar from "./Components/Sidebar";
import Dashboad from "./Pages/Dashboad";
import Usermanagement from "./Pages/Usermanagement";
import Addproducts from "./Pages/Addproducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <Sidebar>
                <Routes>
                  <Route path="/dashboard" element={<Dashboad />} />
                  <Route path="/usermanagement" element={<Usermanagement />} />
                  <Route path="/Addproducts" element={<Addproducts />} />
                </Routes>
              </Sidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
