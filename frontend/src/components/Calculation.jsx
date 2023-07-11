import React, { useState } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import instance from "../axios";

function Calculation() {
  const [hsnCode, setHsnCode] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [uqc, setUQC] = useState("");
  const [cap, setCap] = useState("");
  const [tariffItemDetails, setTariffItemDetails] = useState([]);
  const [roDTEP, setRoDTEP] = useState(null);

  const handleCalculateRoDTEP = async () => {
    try {
      const response = await instance.post("/api/tariff-items", {
        hsnCode,
        productDescription,
        uqc,
        cap,
      });

      const data = response.data;
      setTariffItemDetails([data]);
      const calculatedRoDTEP = calculateRoDTEP(data.cap, data.uqc);
      setRoDTEP(calculatedRoDTEP);
    } catch (error) {
      console.error(error);
    }
  };
  const calculateRoDTEP = (cap, uqc) => {
    const capValue = parseFloat(cap);

    if (isNaN(capValue) || capValue <= 0) {
      return "Invalid Cap";
    }

    const totalIncentiveAmount = 0.025 * capValue;
    let roDTEPValue;

    const lowercaseUqc = (uqc ?? "").toLowerCase();

    if (lowercaseUqc === "kg") {
      const incentivePerUnitWeight = totalIncentiveAmount / capValue;
      roDTEPValue = Math.min(incentivePerUnitWeight, 16);
    } else if (lowercaseUqc === "u") {
      roDTEPValue = Math.min(totalIncentiveAmount, 16);
    } else {
      return (roDTEPValue * 100).toFixed(1) + "%";
    }

    return (roDTEPValue * 100).toFixed(1) + "%";
  };

  const columns = [
    {
      Header: "Sr No.",
      accessor: "srNo",
      Cell: ({ index }) => index + 1,
    },

    {
      Header: "HSN Code",
      accessor: "hsnCode",
      id: "hsnCode",
    },
    {
      Header: "Product Description",
      accessor: "productDescription",
      id: "productDescription",
    },
    {
      Header: "UQC",
      accessor: "uqc",
      id: "uqc",
    },
    {
      Header: "Cap",
      accessor: "cap",
      id: "cap",
    },
    {
      Header: "RoDTEP",
      accessor: "roDTEP",
      id: "roDTEP",
      Cell: ({ original }) => {
        return <span>{calculateRoDTEP(original.cap)}</span>;
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center underline">
          RoDTEP Calculator
        </h1>
        <div className="grid grid-cols-2 gap-4">
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
          <div>
            <label htmlFor="productDescription" className="block font-semibold">
              Product Description:
            </label>
            <input
              type="text"
              id="productDescription"
              className="border rounded p-2 w-full"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="uqc" className="block font-semibold">
              UQC:
            </label>
            <input
              type="text"
              id="uqc"
              className="border rounded p-2 w-full"
              value={uqc}
              onChange={(e) => setUQC(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cap" className="block font-semibold">
              Cap (Rs per UQC):
            </label>
            <input
              type="text"
              id="cap"
              className="border rounded p-2 w-full"
              value={cap}
              onChange={(e) => setCap(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleCalculateRoDTEP}
          >
            Calculate RoDTEP
          </button>
        </div>

        {tariffItemDetails.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Tariff Item Details:</h2>
            <ReactTable
              data={tariffItemDetails}
              columns={columns}
              defaultPageSize={1}
              className="-striped -highlight"
            />
          </div>
        )}
        {roDTEP && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Calculated RoDTEP:</h2>
            <p>RoDTEP Value: {roDTEP}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculation;
