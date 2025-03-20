import { useState } from "react";
import * as XLSX from "xlsx";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "ag-grid-community";
import { TrashIcon } from "@heroicons/react/24/outline";

const Stores = () => {
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    {
      headerName: "",
      field: "delete",
      width: 50,
      cellRenderer: (params) => (
        <button
          className="text-red-500"
          onClick={() => deleteStore(params.node.rowIndex)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      ),
    },
    {
      headerName: "S.No",
      valueGetter: (params) => params.node.rowIndex + 1,
      width: 80,
      cellClass: "text-center",
    },
    { field: "ID", width: 250, editable: true },
    { field: "Label", width: 250, editable: true },
    { field: "City", width: 150, editable: true },
    { field: "State", width: 100, editable: true },
  ]);

  // Handle file upload and parse Excel data
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setRowData(parsedData);
    };
  };

  // Add new store to the list
  const addNewStore = () => {
    const newStore = {
      ID: `Store-${rowData.length + 1}`,
      Label: "New Store",
      City: "New City",
      State: "XX",
    };
    setRowData([...rowData, newStore]);
  };
  const deleteStore = (index) => {
    setRowData(rowData.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />
      <button onClick={addNewStore} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        NEW STORE
      </button>

      <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          modules={[ClientSideRowModelModule]} // ✅ Fix: Explicitly include required module
          rowModelType="clientSide" // ✅ Ensures AG Grid works properly
          domLayout="autoHeight"
        />
      </div>


    </div>
  );
};

export default Stores;
