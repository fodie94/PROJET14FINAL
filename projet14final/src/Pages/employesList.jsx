import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

function EmployeeList() {
  const employees = useSelector((state) => state.employees.list);

  const columns = [
    {
      name: "firstName",
      selector: (row) => row.firstName,
    },
    {
      name: "lastName",
      selector: (row) => row.lastName,
    },
    {
      name: "dateOfBirth",
      selector: (row) => row.dateOfBirth,
    },
    {
      name: "startDate",
      selector: (row) => row.startDate,
    },
    {
      name: "street",
      selector: (row) => row.street,
    },
    {
      name: "city",
      selector: (row) => row.city,
    },
    {
      name: "state",
      selector: (row) => row.state,
    },
    {
      name: "zipCode",
      selector: (row) => row.zipCode,
    },
    {
      name: "department",
      selector: (row) => row.department,
    },
  ];

  const data = employees.map((employee) => ({
    firstName: employee.firstName,
    lastName: employee.lastName,
    dateOfBirth: employee.dateOfBirth,
    startDate: employee.startDate,
    street: employee.street,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode,
    department: employee.department,
  }));

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const filterValue = event.target.value.toLowerCase();

    const newData = data.filter((row) => {
      // Utiliser une expression régulière pour le filtre
      const regex = new RegExp(filterValue, "i"); // 'i' pour ignorer la casse
      return Object.values(row).some((value) => regex.test(value));
    });

    setRecords(newData);
  }

  return (
    <div>
      <div className="search">
        <p>search: </p>
        <input type="text" onChange={handleFilter} />
      </div>
      <DataTable
        title="Liste des employés"
        columns={columns}
        data={records}
        pagination
      />
    </div>
  );
}

export default EmployeeList;
