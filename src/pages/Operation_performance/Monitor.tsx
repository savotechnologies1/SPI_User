// import DatePicker from "react-datepicker";
// import DataTable from "./DataTable";
// import { useEffect, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";

// const Monitor = () => {
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
//       console.log(
//         "res.data.productionScrap)res.data.productionScrap)",
//         res.data,
//       );
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
//     <>
//       <div className="flex items-center gap-2 justify-end">
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           dateFormat="dd/MM/yyyy"
//           className="border rounded-md p-1 text-xs"
//         />
//         <span>-</span>
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           dateFormat="dd/MM/yyyy"
//           className="border rounded-md p-1 text-xs"
//         />
//       </div>
//       <div className="flex  justify-between items-center gap-8 p-6">
//         <DataTable
//           manualData={manualData}
//           monitorData={monitorData}
//           productionScrapData={productionScrapData}
//         />
//       </div>
//     </>
//   );
// };

// export default Monitor;
// // import DatePicker from "react-datepicker";
// // import DataTable from "./DataTable";
// // import TableCard from "./TableCard";
// // import { useEffect, useState } from "react";
// // import "react-datepicker/dist/react-datepicker.css";
// // import axios from "axios";
// // import { Calendar } from "lucide-react";

// // const Monitor = () => {
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [endDate, setEndDate] = useState(new Date());
// //   const [manualData, setManualData] = useState([]);
// //   const [monitorData, setMonitorData] = useState([]);
// //   const [productionScrapData, setProductionScrapData] = useState([]);
// //   const BASE_URL = import.meta.env.VITE_SERVER_URL;

// //   const fetchData = async () => {
// //     try {
// //       const res = await axios.get(`${BASE_URL}/api/admin/monitor-chart-data`, {
// //         params: {
// //           startDate: startDate.toISOString(),
// //           endDate: endDate.toISOString(),
// //         },
// //       });
// //       setManualData(res.data.manualTable);
// //       setMonitorData(res.data.monitorTable);
// //       setProductionScrapData(res.data.productionScrap);
// //     } catch (err) {
// //       console.error("Error fetching data", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, [startDate, endDate]);

// //   return (
// //     <div className="p-6 bg-gray-50 min-h-screen">
// //       <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
// //         <h1 className="text-2xl font-bold text-gray-800">
// //           Monitoring Dashboard
// //         </h1>

// //         <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200 shadow-sm ml-auto">
// //           {/* Start Date */}
// //           <div className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
// //             <Calendar size={16} className="text-blue-500" />
// //             <div className="flex flex-col">
// //               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
// //                 From
// //               </span>
// //               <DatePicker
// //                 selected={startDate}
// //                 onChange={(date) => setStartDate(date)}
// //                 dateFormat="MM/dd/yyyy" // <-- Format Changed Here
// //                 className="bg-transparent text-sm font-medium outline-none text-gray-700 w-24 cursor-pointer"
// //               />
// //             </div>
// //           </div>

// //           <div className="h-8 w-[1px] bg-gray-200"></div>

// //           {/* End Date */}
// //           <div className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
// //             <div className="flex flex-col text-right">
// //               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
// //                 To
// //               </span>
// //               <DatePicker
// //                 selected={endDate}
// //                 onChange={(date) => setEndDate(date)}
// //                 dateFormat="MM/dd/yyyy"
// //                 minDate={startDate}
// //                 className="bg-transparent text-sm font-medium outline-none text-gray-700 w-24 cursor-pointer"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
// //         <DataTable
// //           manualData={manualData}
// //           monitorData={monitorData}
// //           productionScrapData={productionScrapData}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Monitor;
// import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import DataTable from "./DataTable";
// // import TableCard from "./TableCard"; // Import if used, otherwise remove
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
// import { Calendar } from "lucide-react";

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

// const Monitor: React.FC = () => {
//   // 2. Type the state variables (Date can be null from DatePicker)
//   const [startDate, setStartDate] = useState<Date | null>(new Date());
//   const [endDate, setEndDate] = useState<Date | null>(new Date());

//   const [manualData, setManualData] = useState<ManualItem[]>([]);
//   const [monitorData, setMonitorData] = useState<MonitorItem[]>([]);
//   const [productionScrapData, setProductionScrapData] = useState<
//     ProductionItem[]
//   >([]);

//   // Use (import.meta as any) to bypass Vite env typing errors
//   const BASE_URL =
//     (import.meta as any).env.VITE_SERVER_URL || "http://localhost:5000";

//   const fetchData = async () => {
//     // 3. Guard clause to ensure dates are not null before calling toISOString()
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

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Monitoring Dashboard
//         </h1>

//         <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200 shadow-sm ml-auto">
//           {/* Start Date */}
//           <div className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
//             <Calendar size={16} className="text-blue-500" />
//             <div className="flex flex-col">
//               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
//                 From
//               </span>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date: Date | null) => setStartDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 className="bg-transparent text-sm font-medium outline-none text-gray-700 w-24 cursor-pointer"
//               />
//             </div>
//           </div>

//           <div className="h-8 w-[1px] bg-gray-200"></div>

//           {/* End Date */}
//           <div className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
//             <div className="flex flex-col text-right">
//               <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
//                 To
//               </span>
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date: Date | null) => setEndDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 minDate={startDate || undefined}
//                 className="bg-transparent text-sm font-medium outline-none text-gray-700 w-24 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
//         <DataTable
//           manualData={manualData}
//           monitorData={monitorData}
//           productionScrapData={productionScrapData}
//         />
//       </div>
//     </div>
//   );
// };

// export default Monitor;
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import DataTable, {
  ManualItem,
  MonitorItem,
  ProductionItem,
} from "./DataTable";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Calendar } from "lucide-react";

// Define what the API specifically returns
interface MonitorApiResponse {
  manualTable: ManualItem[];
  monitorTable: MonitorItem[];
  productionScrap: ProductionItem[];
}

const Monitor: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [manualData, setManualData] = useState<ManualItem[]>([]);
  const [monitorData, setMonitorData] = useState<MonitorItem[]>([]);
  const [productionScrapData, setProductionScrapData] = useState<
    ProductionItem[]
  >([]);

  // Note: For Vite env variables, use import.meta.env.VITE_...
  const BASE_URL =
    (import.meta as any).env.VITE_SERVER_URL || "http://localhost:5000";

  const fetchData = async () => {
    if (!startDate || !endDate) return;

    try {
      // Pass the interface to axios.get
      const res = await axios.get<MonitorApiResponse>(
        `${BASE_URL}/api/admin/monitor-chart-data`,
        {
          params: {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
          },
        },
      );

      // Map the response to state
      setManualData(res.data.manualTable || []);
      setMonitorData(res.data.monitorTable || []);
      setProductionScrapData(res.data.productionScrap || []);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Monitoring Dashboard
        </h1>

        <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200 shadow-sm ml-auto">
          <div className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
            <Calendar size={16} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
                From
              </span>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                className="bg-transparent text-sm font-medium outline-none text-gray-700 w-24 cursor-pointer"
              />
            </div>
          </div>

          <div className="h-8 w-[1px] bg-gray-200"></div>

          <div className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
                To
              </span>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
                minDate={startDate || undefined}
                className="bg-transparent text-sm font-medium outline-none text-gray-700 w-24 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <DataTable
          manualData={manualData}
          monitorData={monitorData}
          productionScrapData={productionScrapData}
        />
      </div>
    </div>
  );
};

export default Monitor;
