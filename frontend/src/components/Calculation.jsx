import React, { useEffect, useState } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import instance from "../axios";

function Calculation() {
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("");
  const [roDTEP, setRoDTEP] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [hsnCode, setHsnCode] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setTableData([]);
  }, []);

  const fetchData = async () => {
    try {
      const response = await instance.get("/api/getTariff-items", {
        params: { hsnCode: hsnCode },
      });
      const tariffItems = response.data;

      setTableData(tariffItems);

      const selectedItem = tariffItems.find((item) => item.hsnCode === hsnCode);
      setSelectedItem(selectedItem);
    } catch (error) {
      console.error("Error fetching tariff items:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [hsnCode]);

  const handleCalculateRoDTEP = async () => {
    try {
      const calculatedRoDTEP = calculateRoDTEP(weight, amount);
      setRoDTEP(calculatedRoDTEP);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateRoDTEP = (weight, amount) => {
    const rate = selectedItem?.rodtepRate || 0;
    const conversionRate = 85;

    const rateWithoutPercentage = parseFloat(rate.replace("%", ""));

    const incentive = (amount * rateWithoutPercentage) / 100;
    const incentiveInRupees = incentive * conversionRate;
    const incentivePerKg = incentiveInRupees / weight;

    let finalIncentive;
    if (selectedItem?.cap && incentivePerKg > selectedItem.cap) {
      finalIncentive = selectedItem.cap * weight;
    } else {
      finalIncentive = incentiveInRupees;
    }

    return finalIncentive;
  };

  const showTable = () => {
    return tableData.length > 0;
  };

  const renderTable = () => {
    if (showTable()) {
      const filteredData = tableData.filter((item) => item.hsnCode === hsnCode);

      if (filteredData.length > 0) {
        const tableRows = filteredData.map((item, index) => ({
          srNo: index + 1,
          hsnCode: item.hsnCode,
          description: item.description,
          rodtepRate: item.rodtepRate,
          uqc: item.uqc,
          cap: item.cap,
        }));

        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Table Data:</h2>
            <ReactTable
              data={tableRows}
              columns={[
                {
                  Header: "Sr No.",
                  accessor: "srNo",
                  width: 70,
                  className: "text-center",
                },
                {
                  Header: "Tariff item/HSN Code",
                  accessor: "hsnCode",
                  className: "text-center",
                },
                {
                  Header: "Description of goods",
                  accessor: "description",
                  Cell: ({ value }) => (
                    <div className="description-cell">
                      <p className="truncate whitespace-normal">{value}</p>
                    </div>
                  ),
                },
                {
                  Header: "RoDTEP rate",
                  accessor: "rodtepRate",
                  className: "text-center",
                },
                {
                  Header: "UQC/UOM",
                  accessor: "uqc",
                  className: "text-center",
                },
                {
                  Header: "Cap (Rs per UQC)",
                  accessor: "cap",
                  className: "text-center",
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              style={{
                display: "block",
                maxWidth: "100%",
                overflowX: "auto",
              }}
            />
          </div>
        );
      } else {
        return (
          <div>
            <p>No data found for the provided HSN code.</p>
          </div>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center underline">
          RoDTEP Calculator
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight" className="block font-semibold">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              className="border rounded p-2 w-full"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="amount" className="block font-semibold">
              Amount ($):
            </label>
            <input
              type="number"
              id="amount"
              className="border rounded p-2 w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="hsnCode" className="block font-semibold">
            HSN Code:
          </label>
          <input
            type="text"
            id="hsnCode"
            className="border rounded p-2 w-full"
            value={hsnCode}
            onChange={(e) => setHsnCode(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleCalculateRoDTEP}
          >
            Calculate RoDTEP
          </button>
        </div>

        {roDTEP && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Calculated RoDTEP:</h2>
            <p>RoDTEP Value: {roDTEP}</p>
          </div>
        )}

        <div className="mt-4">{renderTable()}</div>
      </div>
    </div>
  );
}

export default Calculation;
