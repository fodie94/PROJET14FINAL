import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
//import EmployesList from "./Pages/employesList.jsx";
import EmployeeListPage from "./Pages/EmployeeListPage.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
