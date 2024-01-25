// Accueil.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modale2 } from "@fodieniakate/modalep14";
import { Link } from "react-router-dom";
import { addEmployee } from "../redux";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
//import { format } from "date-fns"; // Importez la fonction format de date-fns

import Select from "react-select";

function Accueil() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const saveEmployee = () => {
    console.log("Date of Birth:", employeeData.dateOfBirth);
    console.log("Start Date:", employeeData.startDate);

    const formattedEmployeeData = {
      ...employeeData,
      dateOfBirth: employeeData.dateOfBirth
        ? employeeData.dateOfBirth.toISOString().split("T")[0]
        : "",
      startDate: employeeData.startDate
        ? employeeData.startDate.toISOString().split("T")[0]
        : "",
    };

    dispatch(addEmployee(formattedEmployeeData));
    setConfirmationVisible(true);
    setEmployeeData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
  };

  const departmentOptions = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "humanResources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];

  const handleDepartmentChange = (selectedOption) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      department: selectedOption.value,
    }));
  };

  useEffect(() => {
    console.log("Employee Data in EmployeeList:", employeeData);
  }, [employeeData]);

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={employeeData.firstName}
            onChange={handleInputChange}
            name="firstName"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={employeeData.lastName}
            onChange={handleInputChange}
            name="lastName"
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            value={employeeData.dateOfBirth}
            onChange={(date) => handleDateChange("dateOfBirth", date)}
            name="dateOfBirth"
            className="custom-datepicker" // Ajoutez une classe pour personnaliser le style
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            value={employeeData.startDate}
            onChange={(date) => handleDateChange("startDate", date)}
            name="startDate"
            className="custom-datepicker" // Ajoutez une classe pour personnaliser le style
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={employeeData.street}
              onChange={handleInputChange}
              name="street"
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={employeeData.city}
              onChange={handleInputChange}
              name="city"
            />

            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              value={employeeData.state}
              onChange={handleInputChange}
              name="state"
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={employeeData.zipCode}
              onChange={handleInputChange}
              name="zipCode"
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            options={departmentOptions}
            id="department"
            onChange={handleDepartmentChange}
          />

          {/* Bouton de sauvegarde déplacé à l'extérieur de la première balise <form> */}
          <button type="button" onClick={saveEmployee}>
            Save
          </button>
        </form>
      </div>

      {/* Afficher la modale uniquement si confirmationVisible est true */}
      <Modale2
        visible={confirmationVisible}
        onClose={() => setConfirmationVisible(false)}
      />
    </div>
  );
}

export default Accueil;
