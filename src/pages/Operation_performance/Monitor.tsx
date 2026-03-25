import DatePicker from "react-datepicker";
import DataTable from "./DataTable";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Monitor = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [manualData, setManualData] = useState([]);
  const [monitorData, setMonitorData] = useState([]);
  const [productionScrapData, setProductionScrapData] = useState([]);
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/admin/monitor-chart-data`, {
        params: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
      });
      console.log(
        "res.data.productionScrap)res.data.productionScrap)",
        res.data,
      );
      setManualData(res.data.manualTable);
      setMonitorData(res.data.monitorTable);
      setProductionScrapData(res.data.productionScrap);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);
  return (
    <>
      <div className="flex items-center gap-2 justify-end">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="border rounded-md p-1 text-xs"
        />
        <span>-</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy"
          className="border rounded-md p-1 text-xs"
        />
      </div>
      <div className="flex  justify-between items-center gap-8 p-6">
        {/* <DataTable columns={table.columns} data={table.data} /> */}
        <DataTable
          manualData={manualData}
          monitorData={monitorData}
          productionScrapData={productionScrapData}
        />
      </div>
    </>
  );
};

export default Monitor;
