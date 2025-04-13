"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";

DataTable.use(DT);

const Riwayat = () => {
  const [tableData] = useState([
    { Name: 'Tiger Nixon', Position: 'System Architect', Office: 'Edinburgh', Extn: '5421', StartDate: '2011-04-25', Salary: '$320,800' },
    { Name: 'Garrett Winters', Position: 'Accountant', Office: 'Tokyo', Extn: '8422', StartDate: '2011-07-25', Salary: '$170,750' },
    { Name: 'Ashton Cox', Position: 'Junior Technical Author', Office: 'San Francisco', Extn: '1562', StartDate: '2009-01-12', Salary: '$86,000' },
    { Name: 'Cedric Kelly', Position: 'Senior Javascript Developer', Office: 'Edinburgh', Extn: '6224', StartDate: '2012-03-29', Salary: '$433,060' }
  ]);

  const columns = [
    { title: "Name", data: "Name" },
    { title: "Position", data: "Position" },
    { title: "Office", data: "Office" },
    { title: "Extn.", data: "Extn" },
    { title: "Start date", data: "StartDate" },
    { title: "Salary", data: "Salary" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      <div className="card bg-white shadow-lg rounded-2xl m-4 w-full max-w-6xl mt-10">
        <div className="card-body p-6">
          <h1 className="text-2xl font-bold text-left text-gray-800 mb-6">Riwayat Pelaporan</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.title}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-left">
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="px-4 py-3 text-sm text-gray-700">
                        {row[column.data]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
