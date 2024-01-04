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
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboad />} />
            <Route path="/Dashboad" element={<Dashboad />} />
            <Route path="/Usermanagement" element={<Usermanagement />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
