// EmployeeListPage.jsx
import React from "react";
import EmployeeList from "./employesList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function EmployeeListPage() {
  const employees = useSelector((state) => state.employees.list);

  return (
    <div>
      <EmployeeList employees={employees} />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeListPage;
