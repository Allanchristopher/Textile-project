// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Sidebar from "./Components/Sidebar";
import Dashboad from "./Pages/Dashboad";
import Usermanagement from "./Pages/Usermanagement";

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
