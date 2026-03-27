// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import DataTable from "../Operation_performance/DataTable";
// import { ArrowRight, Calendar } from "lucide-react";

// const MonitorManagement = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [manualData, setManualData] = useState([]);
//   const [monitorData, setMonitorData] = useState([]);
//   const [productionScrapData, setProductionScrapData] = useState([]);

//   const BASE_URL = import.meta.env.VITE_SERVER_URL;

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/admin/monitor-chart-data`, {
//         params: {
//           startDate: startDate.toISOString(),
//           endDate: endDate.toISOString(),
//         },
//       });
//       setManualData(res.data.manualTable);
//       setMonitorData(res.data.monitorTable);
//       setProductionScrapData(res.data.productionScrap);
//     } catch (err) {
//       console.error("Error fetching data", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [startDate, endDate]);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen mt-5">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 mt-5">
//         <div>
//           <h1 className="font-bold text-2xl text-gray-800 tracking-tight">
//             Monitor Dashboard
//           </h1>
//           <p className="text-gray-500 text-sm mt-1">
//             Real-time production & manual tracking
//           </p>
//         </div>

//         <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-2xl p-2 gap-2 ml-auto">
//           <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
//             <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
//               <Calendar size={18} />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
//                 From
//               </span>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 className="bg-transparent text-sm font-semibold text-gray-700 outline-none w-24 cursor-pointer"
//               />
//             </div>
//           </div>

//           <ArrowRight size={16} className="text-gray-300" />

//           <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
//             <div className="flex flex-col text-left">
//               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
//                 To
//               </span>
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date) => setEndDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 minDate={startDate}
//                 className="bg-transparent text-sm font-semibold text-gray-700 outline-none w-24 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
//         <DataTable
//           manualData={manualData}
//           monitorData={monitorData}
//           productionScrapData={productionScrapData}
//         />
//       </div>
//       <style>{`
//         .react-datepicker {
//           border: none !important;
//           border-radius: 12px !important;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
//           font-family: inherit !important;
//         }
//         .react-datepicker__header {
//           background-color: #fff !important;
//           border-bottom: 1px solid #f3f4f6 !important;
//           border-top-left-radius: 12px !important;
//           border-top-right-radius: 12px !important;
//         }
//         .react-datepicker__day--selected {
//           background-color: #3b82f6 !important;
//           border-radius: 6px !important;
//         }
//       `}</style>
//     </div>
//   );
// };
// export default MonitorManagement;
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import DataTable from "../Operation_performance/DataTable";
// import "react-datepicker/dist/react-datepicker.css";

// import { Calendar, ArrowRight } from "lucide-react";

// const MonitorManagement = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [manualData, setManualData] = useState([]);
//   const [monitorData, setMonitorData] = useState([]);
//   const [productionScrapData, setProductionScrapData] = useState([]);

//   const BASE_URL = import.meta.env.VITE_SERVER_URL;

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/admin/monitor-chart-data`, {
//         params: {
//           startDate: startDate.toISOString(),
//           endDate: endDate.toISOString(),
//         },
//       });
//       setManualData(res.data.manualTable);
//       setMonitorData(res.data.monitorTable);
//       setProductionScrapData(res.data.productionScrap);
//     } catch (err) {
//       console.error("Error fetching data", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [startDate, endDate]);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen mt-5">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 mt-5">
//         <div>
//           <h1 className="font-bold text-2xl text-gray-800 tracking-tight">
//             Monitor Dashboard
//           </h1>
//           <p className="text-gray-500 text-sm mt-1">
//             Real-time production & manual tracking
//           </p>
//         </div>

//         <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-2xl p-2 gap-2 ml-auto">
//           <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
//             <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
//               <Calendar size={18} />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
//                 From
//               </span>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 className="bg-transparent text-sm font-semibold text-gray-700 outline-none w-24 cursor-pointer"
//               />
//             </div>
//           </div>

//           <ArrowRight size={16} className="text-gray-300" />

//           <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
//             <div className="flex flex-col text-left">
//               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
//                 To
//               </span>
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date) => setEndDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 minDate={startDate}
//                 className="bg-transparent text-sm font-semibold text-gray-700 outline-none w-24 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
//         <DataTable
//           manualData={manualData}
//           monitorData={monitorData}
//           productionScrapData={productionScrapData}
//         />
//       </div>
//       <style>{`
//         .react-datepicker {
//           border: none !important;
//           border-radius: 12px !important;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
//           font-family: inherit !important;
//         }
//         .react-datepicker__header {
//           background-color: #fff !important;
//           border-bottom: 1px solid #f3f4f6 !important;
//           border-top-left-radius: 12px !important;
//           border-top-right-radius: 12px !important;
//         }
//         .react-datepicker__day--selected {
//           background-color: #3b82f6 !important;
//           border-radius: 6px !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MonitorManagement;
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import DataTable, {
  ManualItem,
  MonitorItem,
  ProductionItem,
} from "../Operation_performance/DataTable";
import { Calendar, ArrowRight } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

// // 1. Define Data Interfaces
// interface ManualItem {
//   processId: string;
//   processName: string;
//   processDesc: string;
//   part: string;
//   totalQuantity: number;
//   totalCompleted: number;
//   totalScrap: number;
// }

// interface MonitorItem {
//   process: string;
//   processDesc: string;
//   part: string;
//   cycleTime: string;
//   qty: string;
//   scrap: number;
// }

// interface ProductionItem {
//   processName: string;
//   processDesc: string;
//   part: string;
//   scrap: number;
// }

// interface MonitorApiResponse {
//   manualTable: ManualItem[];
//   monitorTable: MonitorItem[];
//   productionScrap: ProductionItem[];
// }

// const MonitorManagement: React.FC = () => {
//   // 2. Type state variables (Date can be null from DatePicker)
//   const [startDate, setStartDate] = useState<Date | null>(new Date());
//   const [endDate, setEndDate] = useState<Date | null>(new Date());

//   const [manualData, setManualData] = useState<ManualItem[]>([]);
//   const [monitorData, setMonitorData] = useState<MonitorItem[]>([]);
//   const [productionScrapData, setProductionScrapData] = useState<
//     ProductionItem[]
//   >([]);

//   // Use (import.meta as any) to bypass Vite env typing errors if needed
//   const BASE_URL =
//     (import.meta as any).env.VITE_SERVER_URL || "http://localhost:5000";

//   const fetchData = async () => {
//     // 3. Guard clause to prevent calling toISOString on null
//     if (!startDate || !endDate) return;

//     try {
//       const res = await axios.get<MonitorApiResponse>(
//         `${BASE_URL}/api/admin/monitor-chart-data`,
//         {
//           params: {
//             startDate: startDate.toISOString(),
//             endDate: endDate.toISOString(),
//           },
//         },
//       );

//       setManualData(res.data.manualTable || []);
//       setMonitorData(res.data.monitorTable || []);
//       setProductionScrapData(res.data.productionScrap || []);
//     } catch (err) {
//       console.error("Error fetching data", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [startDate, endDate]);

import "react-datepicker/dist/react-datepicker.css";

// 1. Import the interfaces from the DataTable file

// 2. Define the RAW shape of your API Response
interface ApiManualItem {
  process: string;
  part: string;
  totalQuantity: number;
  totalScrap: number;
}

interface ApiMonitorItem {
  process: string;
  part: string;
  cycleTime: string;
}

interface ApiProductionItem {
  process: string;
  part: string;
  scrap: number;
}

interface MonitorApiResponse {
  manualTable: ApiManualItem[];
  monitorTable: ApiMonitorItem[];
  productionScrap: ApiProductionItem[];
}

const MonitorManagement: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  // 3. Use the Table's imported interfaces for state
  const [manualData, setManualData] = useState<ManualItem[]>([]);
  const [monitorData, setMonitorData] = useState<MonitorItem[]>([]);
  const [productionScrapData, setProductionScrapData] = useState<
    ProductionItem[]
  >([]);

  const BASE_URL =
    (import.meta as any).env.VITE_SERVER_URL || "http://localhost:5000";

  const fetchData = async () => {
    if (!startDate || !endDate) return;

    try {
      const res = await axios.get<MonitorApiResponse>(
        `${BASE_URL}/api/admin/monitor-chart-data`,
        {
          params: {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
          },
        },
      );

      // 4. MAP the API data to the Table's expected format
      const mappedManual: ManualItem[] = (res.data.manualTable || []).map(
        (item) => ({
          process: item.process, // Mapping processName -> process
          part: item.part,
          qty: item.totalQuantity, // Mapping totalQuantity -> qty
          scrap: item.totalScrap, // Mapping totalScrap -> scrap
        }),
      );

      const mappedScrap: ProductionItem[] = (
        res.data.productionScrap || []
      ).map((item) => ({
        process: item.process, // Mapping processName -> process
        part: item.part,
        scrap: item.scrap,
      }));

      setManualData(mappedManual);
      setMonitorData(res.data.monitorTable || []);
      setProductionScrapData(mappedScrap);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 mt-5">
        <div>
          <h1 className="font-bold text-2xl text-gray-800 tracking-tight">
            Monitor Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Real-time production & manual tracking
          </p>
        </div>

        <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-2xl p-2 gap-2 ml-auto">
          {/* From Date */}
          <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
              <Calendar size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
                From
              </span>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                className="bg-transparent text-sm font-semibold text-gray-700 outline-none w-24 cursor-pointer"
              />
            </div>
          </div>

          <ArrowRight size={16} className="text-gray-300" />

          {/* To Date */}
          <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
                To
              </span>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
                minDate={startDate || undefined}
                className="bg-transparent text-sm font-semibold text-gray-700 outline-none w-24 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
        <DataTable
          manualData={manualData}
          monitorData={monitorData}
          productionScrapData={productionScrapData}
        />
      </div>

      <style>{`
        .react-datepicker {
          border: none !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          font-family: inherit !important;
          z-index: 99;
        }
        .react-datepicker__header {
          background-color: #fff !important;
          border-bottom: 1px solid #f3f4f6 !important;
          border-top-left-radius: 12px !important;
          border-top-right-radius: 12px !important;
        }
        .react-datepicker__day--selected {
          background-color: #3b82f6 !important;
          border-radius: 6px !important;
        }
      `}</style>
    </div>
  );
};

export default MonitorManagement;
