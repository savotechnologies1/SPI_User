import { useState } from "react";

import img1 from "../../assets/green.png";
import img2 from "../../assets/yellow.png";
import shape_1 from "../../assets/shape_1.png";
import shape_2 from "../../assets/shape_2.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import OrderStatus from "../productionLive/OrderStatus";
const data_1 = [
  {
    num: "1",
    text: "shift",
    img: img1,
    shape: shape_1,
  },
  {
    num: "129",
    text: "Actual",
    img: img2,
    shape: shape_2,
  },
];

const data_2 = [
  {
    text: "Thermoforming",
    efficiency: "NAN",
    productivity: "0.0%",
  },
  {
    text: "Cut & Trim",
    efficiency: "NAN",
    productivity: "0.0%",
  },
  {
    text: "Sanding",
    efficiency: "NAN",
    productivity: "0.0%",
  },
  {
    text: "Inspection",
    efficiency: "NAN",
    productivity: "0.0%",
  },
];
const stations = [
  "Cut Trim",
  "Inspection",
  "Kitting",
  "Packaging And Shipping",
  "Sanding",
  "Thermoforming 1",
  "Thermoforming 2",
  "Thermoforming 3",
];
const names = [
  "Jane Cooper",
  "John Smith",
  "Emily Davis",
  "Michael Johnson",
  "Sarah Lee",
  "Daniel Thompson",
  "Olivia Martinez",
  "James Wilson",
];

const partsData = [
  { process: "Cut Trim", desc: "(t) Pass GMT800 Single" },
  { process: "Cut Trim", desc: "(t) Pass GMT800 Ext" },
  { process: "Cut Trim", desc: "(t) Pass GMT800 Crew" },
  { process: "Cut Trim", desc: "(t) Pass 09-14 F-150 er" },
  { process: "Cut Trim", desc: "(t) Pass 09-14 F-150 Crew" },
  { process: "Cut Trim", desc: "(t) Pass 09-14 Ram Quad" },
  { process: "Cut Trim", desc: "(t) Driven GMT800 Single" },
];

const cycleData = [{ name: "Cut Trim", avgCycle: 20 }];
``;

// const Dive = () => {
//   const [selected, setSelected] = useState("Cut Trim");
//   const handleSelect = (station: string) => {
//     setSelected(station);
//   };
//   const [selected1, setSelected1] = useState("Jane Cooper");
//   const handleSelect1 = (name: string) => {
//     setSelected1(name);
//   };
//   return (
//     <div>
//       <div className="flex flex-col md:flex-row  mt-2 gap-4  ">
//         {data_1.map((item) => (
//           <div className="flex justify-between items-center bg-white  rounded-md  w-60">
//             {" "}
//             <div className="p-2">
//               {" "}
//               <p className="font-bold text-2xl">{item.num}</p>
//               <p>{item.text}</p>
//             </div>
//             <div className="relative right-0">
//               <img src={item.shape} alt="" />
//               <div className="absolute right-4 top-6">
//                 {" "}
//                 <img src={item.img} alt="" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex  justify-between gap-4 flex-col md:flex-row mt-4">
//         <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 ">
//           {data_2.map((item) => (
//             <div>
//               <div className="bg-white p-4 rounded-md  flex flex-col justify-center gap-4 px-8">
//                 <h1 className="text-center font-semibold">{item.text}</h1>
//                 <div className="flex justify-between">
//                   <div className="flex flex-col">
//                     <p className="font-bold">{item.efficiency}</p>
//                     <p className="text-[#525252] text-sm">Efficiency</p>
//                   </div>
//                   <div className="flex flex-col">
//                     <p className="font-bold">{item.productivity}</p>
//                     <p className="text-[#525252] text-sm">Productivity</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="md:w-[30%] bg-white p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Station</h2>
//           <div className="flex flex-col gap-3">
//             {stations.map((station, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => handleSelect(station)}
//               >
//                 <div
//                   className={`w-5 h-5 flex items-center justify-center border ${
//                     selected === station ? "bg-[#0F2B36] text-black" : ""
//                   }`}
//                 >
//                   {selected === station && (
//                     <span className="w-3  bg-white rounded-sm"></span>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     selected === station ? " text-black" : "text-gray-700"
//                   }`}
//                 >
//                   {station}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="md:w-[30%] bg-white p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Full Name</h2>
//           <div className="flex flex-col gap-3">
//             {names.map((name, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => handleSelect1(name)}
//               >
//                 <div
//                   className={`w-5 h-5 flex items-center justify-center border ${
//                     selected1 === name ? "bg-[#0F2B36] text-black" : ""
//                   }`}
//                 >
//                   {selected1 === name && (
//                     <span className="w-3  bg-white rounded-sm"></span>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     selected1 === name ? " text-black" : "text-gray-700"
//                   }`}
//                 >
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 mt-6">
//         <div className="bg-white rounded-lg shadow-md p-4 md:w-[65%] overflow-x-auto">
//           <h2 className="text-lg font-semibold mb-4">Parts Completed</h2>
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600 text-sm whitespace-nowrap">
//                 <th className="py-2 px-4 text-left">Process Name</th>
//                 <th className="py-2 px-4 text-left">Part Desc</th>
//               </tr>
//             </thead>
//             <tbody>
//               {partsData.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-2 px-4 whitespace-nowrap">
//                     {item.process}
//                   </td>
//                   <td className="py-2 px-4 whitespace-nowrap">{item.desc}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-white rounded-lg shadow-md p-4 md:w-[35%]">
//           <h2 className="text-lg font-semibold mb-4">Avg Cycle Time</h2>
//           <ResponsiveContainer width="100%" height={280}>
//             <BarChart data={cycleData}>
//               <XAxis
//                 dataKey="name"
//                 label={{ value: "Process", position: "bottom" }}
//               />
//               <YAxis
//                 label={{
//                   value: "Avg Cycle Time",
//                   angle: -90,
//                   position: "insideLeft",
//                 }}
//               />
//               <Tooltip />
//               <Bar dataKey="avgCycle" fill="#4664C2" barSize={60} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//       <div className="mt-6">{/* <OrderStatus /> */}</div>
//     </div>
//   );
// };

import React, { useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

const apiResponse = {
  message: "Current status overview fetched successfully",
  processId: "All",
  totalRecords: 12,
  data: [
    {
      orderType: "StockOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "79ddf5",
      partNumber: "aloo",
      scheduled: 2,
      actual: 1,
      scrap: 0,
      remaining: 1,
      targetPerHour: 2,
      efficiency: "50.0%",
      productivity: "50.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-04T12:58:36.056Z",
      deliveryDate: "2025-09-04T12:58:32.933Z",
      currentDate: "2025-09-05T09:35:09.610Z",
    },
    {
      orderType: "StockOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "071f12",
      partNumber: "product1",
      scheduled: 1,
      actual: 0,
      scrap: 0,
      remaining: 1,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-04T13:29:21.520Z",
      deliveryDate: "2025-09-04T13:29:16.157Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "StockOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "79ddf5",
      partNumber: "aloo",
      scheduled: 0,
      actual: 0,
      scrap: 4,
      remaining: 0,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-03T13:07:36.782Z",
      deliveryDate: "2025-09-03T13:07:34.803Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "CustomOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "65aacf",
      partNumber: "part1",
      scheduled: 2,
      actual: 0,
      scrap: 0,
      remaining: 2,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-05T09:34:58.149Z",
      deliveryDate: "2025-09-06T00:00:00.000Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "StockOrder",
      processId: "4f087e",
      processName: "cooking",
      partId: "c7191d",
      partNumber: "aloo paratha",
      scheduled: 1,
      actual: 0,
      scrap: 0,
      remaining: 1,
      targetPerHour: 1,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "1 hr",
      startDate: "2025-09-04T12:58:36.056Z",
      deliveryDate: "2025-09-04T12:58:32.933Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "StockOrder",
      processId: "4f087e",
      processName: "cooking",
      partId: "c7191d",
      partNumber: "aloo paratha",
      scheduled: 1,
      actual: 1,
      scrap: 0,
      remaining: 0,
      targetPerHour: 1,
      efficiency: "100.0%",
      productivity: "100.0%",
      avgCycleTime: "1 hr",
      startDate: "2025-09-03T12:51:24.150Z",
      deliveryDate: "2025-09-03T12:51:22.575Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "CustomOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "f6228678-fa7d-4995-8168-1e496d1c9dee",
      partNumber: "part3",
      scheduled: 2,
      actual: 0,
      scrap: 0,
      remaining: 2,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-05T09:34:58.149Z",
      deliveryDate: "2025-09-06T00:00:00.000Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "StockOrder",
      processId: "4f087e",
      processName: "cooking",
      partId: "c7191d",
      partNumber: "aloo paratha",
      scheduled: 1,
      actual: 1,
      scrap: 1,
      remaining: 0,
      targetPerHour: 1,
      efficiency: "100.0%",
      productivity: "100.0%",
      avgCycleTime: "1 hr",
      startDate: "2025-09-03T13:07:36.782Z",
      deliveryDate: "2025-09-03T13:07:34.803Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "StockOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "65aacf",
      partNumber: "part1",
      scheduled: 2,
      actual: 0,
      scrap: 0,
      remaining: 2,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-04T13:29:21.520Z",
      deliveryDate: "2025-09-04T13:29:16.157Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "StockOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "79ddf5",
      partNumber: "aloo",
      scheduled: 1,
      actual: 1,
      scrap: 1,
      remaining: 0,
      targetPerHour: 2,
      efficiency: "50.0%",
      productivity: "100.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-03T12:51:24.150Z",
      deliveryDate: "2025-09-03T12:51:22.575Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "CustomOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "071f12",
      partNumber: "product1",
      scheduled: 1,
      actual: 0,
      scrap: 0,
      remaining: 1,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-05T09:34:58.149Z",
      deliveryDate: "2025-09-06T00:00:00.000Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
    {
      orderType: "CustomOrder",
      processId: "06df10",
      processName: "boiling",
      partId: "58f203",
      partNumber: "gobi",
      scheduled: 2,
      actual: 0,
      scrap: 0,
      remaining: 2,
      targetPerHour: 2,
      efficiency: "0.0%",
      productivity: "0.0%",
      avgCycleTime: "30 min",
      startDate: "2025-09-05T09:34:58.149Z",
      deliveryDate: "2025-09-06T00:00:00.000Z",
      currentDate: "2025-09-05T09:35:09.611Z",
    },
  ],
};

// const Dive = () => {
//   const [selectedStation, setSelectedStation] = useState("boiling");
//   const [selectedEmployee, setSelectedEmployee] = useState("Jane Cooper");
//   const [dashboardData, setDashboardData] = useState({
//     totalActual: 0,
//     processMetrics: [],
//     stations: [],
//     partsCompleted: [],
//     avgCycleTime: [],
//   });
//   const BASE_URL = import.meta.env.VITE_SERVER_URL;

//   const getData = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/admin/dive-chart-data`);
//     } catch (error) {}
//   };
//   useEffect(() => {
//     // Process the API response to fit your dashboard structure
//     const processedData = processApiData(apiResponse.data);
//     setDashboardData(processedData);
//     getData();
//   }, []);

//   const processApiData = (data) => {
//     let totalActualCount = 0;
//     const processMap = new Map();
//     const uniqueStations = new Set();
//     const uniqueEmployees = new Set();
//     const partsTableData = [];

//     data.forEach((item) => {
//       totalActualCount += item.actual;
//       uniqueStations.add(item.processName);

//       if (item.employeeInfo) {
//         const fullName = `${item.employeeInfo.firstName} ${item.employeeInfo.lastName}`;
//         uniqueEmployees.add(fullName);
//       }

//       if (!processMap.has(item.processName)) {
//         processMap.set(item.processName, {
//           totalEfficiency: 0,
//           totalProductivity: 0,
//           count: 0,
//           cycleTimeValues: [],
//         });
//       }

//       const processEntry = processMap.get(item.processName);
//       processEntry.totalEfficiency += parseFloat(item.efficiency);
//       processEntry.totalProductivity += parseFloat(item.productivity);
//       processEntry.count++;
//       if (item.avgCycleTime) {
//         const [value, unit] = item.avgCycleTime.split(" ");
//         let minutes = parseFloat(value);
//         if (unit === "hr") minutes *= 60;
//         processEntry.cycleTimeValues.push(minutes);
//       }

//       partsTableData.push({
//         process: item.processName,
//         desc: item.partNumber,
//       });
//     });

//     const processMetrics = Array.from(processMap.entries()).map(
//       ([processName, metrics]) => {
//         const avgEfficiency = (metrics.totalEfficiency / metrics.count).toFixed(
//           2
//         );
//         const avgProductivity = (
//           metrics.totalProductivity / metrics.count
//         ).toFixed(2);
//         const totalCycleTimeMinutes = metrics.cycleTimeValues.reduce(
//           (sum, t) => sum + t,
//           0
//         );
//         const avgCycleTimeMinutes =
//           metrics.cycleTimeValues.length > 0
//             ? totalCycleTimeMinutes / metrics.cycleTimeValues.length
//             : 0;

//         return {
//           text: processName,
//           efficiency: `${avgEfficiency}%`,
//           productivity: `${avgProductivity}%`,
//           avgCycle: avgCycleTimeMinutes,
//         };
//       }
//     );

//     const avgCycleTimeChartData = processMetrics.map((p) => ({
//       name: p.text,
//       avgCycle: p.avgCycle,
//     }));

//     return {
//       totalActual: totalActualCount,
//       processMetrics,
//       stations: Array.from(uniqueStations),
//       employees: Array.from(uniqueEmployees),
//       partsCompleted: partsTableData,
//       avgCycleTime: avgCycleTimeChartData,
//     };
//   };

//   const handleSelectStation = (station: string) => {
//     setSelectedStation(station);
//   };

//   const handleSelectEmployee = (name: string) => {
//     setSelectedEmployee(name);
//   };

//   const data_1 = [
//     {
//       num: "1",
//       text: "shift",
//       shape: "/path/to/shape1.svg",
//       img: "/path/to/img1.svg",
//     },
//     {
//       num: dashboardData.totalActual,
//       text: "Actual",
//       shape: "/path/to/shape2.svg",
//       img: "/path/to/img2.svg",
//     },
//     // Add more top card data as needed
//   ];

//   // For demonstration, using hardcoded employee names as they are not in the JSON
//   const names = [
//     "Jane Cooper",
//     "John Smith",
//     "Emily Davis",
//     "Michael Johnson",
//     "Sarah Lee",
//     "Daniel Thompson",
//     "Olivia Martinez",
//     "James Wilson",
//   ];

//   // Filter process metrics based on selected station if needed
//   const filteredProcessMetrics = selectedStation
//     ? dashboardData.processMetrics.filter(
//         (metric) => metric.text === selectedStation
//       )
//     : dashboardData.processMetrics;

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row mt-2 gap-4 ">
//         {data_1.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center bg-white rounded-md w-60"
//           >
//             <div className="p-2">
//               <p className="font-bold text-2xl">{item.num}</p>
//               <p>{item.text}</p>
//             </div>
//             {/* Assuming shape and img are illustrative and not directly from your data */}
//             <div className="relative right-0">
//               {/* <img src={item.shape} alt="" /> */}
//               <div className="absolute right-4 top-6">
//                 {/* <img src={item.img} alt="" /> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between gap-4 flex-col md:flex-row mt-4">
//         <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 ">
//           {dashboardData.processMetrics.map((item, index) => (
//             <div key={index}>
//               <div className="bg-white p-4 rounded-md flex flex-col justify-center gap-4 px-8">
//                 <h1 className="text-center font-semibold">{item.text}</h1>
//                 <div className="flex justify-between">
//                   <div className="flex flex-col">
//                     <p className="font-bold">{item.efficiency}</p>
//                     <p className="text-[#525252] text-sm">Efficiency</p>
//                   </div>
//                   <div className="flex flex-col">
//                     <p className="font-bold">{item.productivity}</p>
//                     <p className="text-[#525252] text-sm">Productivity</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="md:w-[30%] bg-white p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Station</h2>
//           <div className="flex flex-col gap-3">
//             {dashboardData.stations.map((station, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => handleSelectStation(station)}
//               >
//                 <div
//                   className={`w-5 h-5 flex items-center justify-center border ${
//                     selectedStation === station ? "bg-[#0F2B36] text-black" : ""
//                   }`}
//                 >
//                   {selectedStation === station && (
//                     <span className="w-3 bg-white rounded-sm"></span>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     selectedStation === station
//                       ? " text-black"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {station}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="md:w-[30%] bg-white p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Full Name</h2>
//           <div className="flex flex-col gap-3">
//             {names.map((name, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => handleSelectEmployee(name)}
//               >
//                 <div
//                   className={`w-5 h-5 flex items-center justify-center border ${
//                     selectedEmployee === name ? "bg-[#0F2B36] text-black" : ""
//                   }`}
//                 >
//                   {selectedEmployee === name && (
//                     <span className="w-3 bg-white rounded-sm"></span>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     selectedEmployee === name ? " text-black" : "text-gray-700"
//                   }`}
//                 >
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 mt-6">
//         {/* Table */}
//         <div className="bg-white rounded-lg shadow-md p-4 md:w-[65%] overflow-x-auto">
//           <h2 className="text-lg font-semibold mb-4">Parts Completed</h2>
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600 text-sm whitespace-nowrap">
//                 <th className="py-2 px-4 text-left">Process Name</th>
//                 <th className="py-2 px-4 text-left">Part Desc</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dashboardData.partsCompleted.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-2 px-4 whitespace-nowrap">
//                     {item.process}
//                   </td>
//                   <td className="py-2 px-4 whitespace-nowrap">{item.desc}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-white rounded-lg shadow-md p-4 md:w-[35%]">
//           <h2 className="text-lg font-semibold mb-4">Avg Cycle Time</h2>
//           <ResponsiveContainer width="100%" height={280}>
//             <BarChart data={dashboardData.avgCycleTime}>
//               <XAxis
//                 dataKey="name"
//                 label={{ value: "Process", position: "bottom" }}
//               />
//               <YAxis
//                 label={{
//                   value: "Avg Cycle Time (minutes)", // Updated unit
//                   angle: -90,
//                   position: "insideLeft",
//                 }}
//               />
//               <Tooltip />
//               <Bar dataKey="avgCycle" fill="#4664C2" barSize={60} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//       <div className="mt-6">{/* <OrderStatus /> */}</div>
//     </div>
//   );
// };

// const Dive = () => {
//   const [selectedStation, setSelectedStation] = useState<string>("");
//   const [selectedEmployee, setSelectedEmployee] = useState<string>("");
//   const [productivity, setProductivity] = useState<string>("");
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [dashboardData, setDashboardData] = useState<any>({
//     totalActual: 0,
//     processMetrics: [],
//     stations: [],
//     employees: [],
//     partsCompleted: [],
//     avgCycleTime: [],
//   });
//   const BASE_URL = import.meta.env.VITE_SERVER_URL;

//   // 🔹 Fetch API data
//   // Fetch API data
//   const getData = async (processId?: string, employeeId?: string) => {
//     try {
//       let url = `${BASE_URL}/api/admin/dive-chart-data`;
//       const params = [];

//       if (processId) params.push(`processId=${processId}`);
//       if (employeeId) params.push(`employeeId=${employeeId}`);
//       if (startDate)
//         params.push(`startDate=${startDate.toISOString().slice(0, 10)}`);
//       if (endDate) params.push(`endDate=${endDate.toISOString().slice(0, 10)}`);

//       if (params.length > 0) {
//         url += "?" + params.join("&");
//       }

//       const res = await axios.get(url);

//       const processedData = processApiData(res.data.data);
//       setDashboardData(processedData);
//       setProductivity(res.data?.productivity);

//       if (!selectedStation && processedData.stations.length > 0) {
//         setSelectedStation(processedData.stations[0]);
//       }
//       if (!selectedEmployee && processedData.employees.length > 0) {
//         setSelectedEmployee(processedData.employees[0]);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getData(selectedStation, selectedEmployee);
//   }, [startDate, endDate]);

//   // 🔹 Process API data into UI-friendly structure
//   const processApiData = (data: any[]) => {
//     let totalActualCount = 0;
//     const processMap = new Map();
//     const uniqueStations = new Set();
//     const uniqueEmployees = new Set();
//     const partsTableData: any[] = [];

//     data.forEach((item) => {
//       totalActualCount += item.actual;
//       uniqueStations.add(item.processName);

//       if (item.employeeInfo) {
//         const fullName = `${item.employeeInfo.firstName} ${item.employeeInfo.lastName}`;
//         uniqueEmployees.add(fullName);
//       }

//       if (!processMap.has(item.processName)) {
//         processMap.set(item.processName, {
//           totalEfficiency: 0,
//           totalProductivity: 0,
//           count: 0,
//           cycleTimeValues: [] as number[],
//         });
//       }

//       const processEntry = processMap.get(item.processName);
//       processEntry.totalEfficiency += parseFloat(item.efficiency);
//       processEntry.totalProductivity += parseFloat(item.productivity);
//       processEntry.count++;

//       if (item.avgCycleTime) {
//         const [value, unit] = item.avgCycleTime.split(" ");
//         let minutes = parseFloat(value);
//         if (unit === "hr") minutes *= 60;
//         processEntry.cycleTimeValues.push(minutes);
//       }

//       partsTableData.push({
//         process: item.processName,
//         desc: item.partNumber,
//         employee: item.employeeInfo
//           ? `${item.employeeInfo.firstName} ${item.employeeInfo.lastName}`
//           : "Unassigned",
//       });
//     });

//     const processMetrics = Array.from(processMap.entries()).map(
//       ([processName, metrics]: any) => {
//         const avgEfficiency = (metrics.totalEfficiency / metrics.count).toFixed(
//           2
//         );
//         const avgProductivity = (
//           metrics.totalProductivity / metrics.count
//         ).toFixed(2);
//         const totalCycleTimeMinutes = metrics.cycleTimeValues.reduce(
//           (sum: number, t: number) => sum + t,
//           0
//         );
//         const avgCycleTimeMinutes =
//           metrics.cycleTimeValues.length > 0
//             ? totalCycleTimeMinutes / metrics.cycleTimeValues.length
//             : 0;

//         return {
//           text: processName,
//           efficiency: `${avgEfficiency}%`,
//           productivity: `${avgProductivity}%`,
//           avgCycle: avgCycleTimeMinutes,
//         };
//       }
//     );

//     const avgCycleTimeChartData = processMetrics.map((p) => ({
//       name: p.text,
//       avgCycle: p.avgCycle,
//     }));

//     return {
//       totalActual: totalActualCount,
//       processMetrics,
//       stations: Array.from(uniqueStations),
//       employees: Array.from(uniqueEmployees),
//       partsCompleted: partsTableData,
//       avgCycleTime: avgCycleTimeChartData,
//     };
//   };

//   // 🔹 Handlers
//   const handleSelectStation = (station: string) => {
//     setSelectedStation(station);
//   };

//   const handleSelectEmployee = (name: string) => {
//     setSelectedEmployee(name);
//   };

//   // 🔹 Filter data based on selected station & employee
//   const filteredProcessMetrics = dashboardData.processMetrics.map((metric) => ({
//     ...metric,
//     isSelected: metric.text === selectedStation,
//   }));

//   const filteredParts = dashboardData.partsCompleted.filter(
//     (p) =>
//       (!selectedStation || p.process === selectedStation) &&
//       (!selectedEmployee || p.employee === selectedEmployee)
//   );

//   console.log("filteredProcessMetricsfilteredProcessMetrics", productivity);

//   return (
//     <div>
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
//       {/* Process Metrics + Station + Employee */}
//       <div className="flex justify-between gap-4 flex-col md:flex-row mt-4">
//         <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 ">
//           {filteredProcessMetrics.map((item, index) => (
//             <div
//               key={index}
//               className={`bg-white p-4 rounded-md flex flex-col justify-center gap-4 px-8 ${
//                 item.isSelected ? "border-2 border-[#0F2B36]" : ""
//               }`}
//             >
//               <div className="bg-white p-4 rounded-md flex flex-col justify-center gap-4 px-8">
//                 <h1 className="text-center font-semibold">{item.text}</h1>
//                 <div className="flex justify-between">
//                   <div className="flex flex-col">
//                     <p className="font-bold">{item.efficiency}</p>
//                     <p className="text-[#525252] text-sm">Efficiency</p>
//                   </div>
//                   <div className="flex flex-col">
//                     <p className="font-bold">{item.productivity}</p>
//                     <p className="text-[#525252] text-sm">Productivity</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Station Tabs */}
//         <div className="md:w-[30%] bg-white p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Station</h2>
//           <div className="flex flex-col gap-3">
//             {dashboardData.stations.map((station: string, index: number) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => handleSelectStation(station)}
//               >
//                 <div
//                   className={`w-5 h-5 flex items-center justify-center border ${
//                     selectedStation === station ? "bg-[#0F2B36]" : ""
//                   }`}
//                 >
//                   {selectedStation === station && (
//                     <span className="w-3 h-3 bg-white rounded-sm"></span>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     selectedStation === station
//                       ? " text-black"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {station}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Employee Tabs */}
//         <div className="md:w-[30%] bg-white p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Employee</h2>
//           <div className="flex flex-col gap-3">
//             {dashboardData.employees.map((name: string, index: number) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => handleSelectEmployee(name)}
//               >
//                 <div
//                   className={`w-5 h-5 flex items-center justify-center border ${
//                     selectedEmployee === name ? "bg-[#0F2B36]" : ""
//                   }`}
//                 >
//                   {selectedEmployee === name && (
//                     <span className="w-3 h-3 bg-white rounded-sm"></span>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     selectedEmployee === name ? " text-black" : "text-gray-700"
//                   }`}
//                 >
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Table + Chart */}
//       <div className="flex flex-col md:flex-row gap-8 mt-6">
//         {/* Table */}
//         <div className="bg-white rounded-lg shadow-md p-4 md:w-[65%] overflow-x-auto">
//           <h2 className="text-lg font-semibold mb-4">Parts Completed</h2>
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600 text-sm whitespace-nowrap">
//                 <th className="py-2 px-4 text-left">Process</th>
//                 <th className="py-2 px-4 text-left">Part Desc</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredParts.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-2 px-4 whitespace-nowrap">
//                     {item.process}
//                   </td>
//                   <td className="py-2 px-4 whitespace-nowrap">{item.desc}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-white rounded-lg shadow-md p-4 md:w-[35%]">
//           <h2 className="text-lg font-semibold mb-4">Avg Cycle Time</h2>
//           <ResponsiveContainer width="100%" height={280}>
//             <BarChart data={dashboardData.avgCycleTime}>
//               <XAxis
//                 dataKey="name"
//                 label={{ value: "Process", position: "bottom" }}
//               />
//               <YAxis
//                 label={{
//                   value: "Avg Cycle Time (minutes)",
//                   angle: -90,
//                   position: "insideLeft",
//                 }}
//               />
//               <Tooltip />
//               <Bar dataKey="avgCycle" fill="#4664C2" barSize={60} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow-md p-4 md:w-[65%] overflow-x-auto mt-6">
//         <h2 className="text-lg font-semibold mb-4">Producitivity</h2>
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600 text-sm whitespace-nowrap">
//               <th className="py-2 px-4 text-left">Process Name</th>
//               <th className="py-2 px-4 text-left">Employee Name</th>
//               <th className="py-2 px-4 text-left">Cycle Time</th>
//               <th className="py-2 px-4 text-left">Qty</th>
//               <th className="py-2 px-4 text-left">Scrap</th>
//               <th className="py-2 px-4 text-left">Producitvity</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productivity?.length > 0 ? (
//               productivity.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-2 px-4">{item.processName}</td>
//                   <td className="py-2 px-4">{item.employeeName}</td>
//                   <td className="py-2 px-4">{item.CT}</td>
//                   <td className="py-2 px-4">{item.Qty}</td>
//                   <td className="py-2 px-4">{item.Scrap}</td>
//                   <td className="py-2 px-4">{item.Prod}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dive;

// const Dive = () => {
//   const [selectedStation, setSelectedStation] = useState<string>(""); // Ab ye machineName store karega
//   const [selectedEmployee, setSelectedEmployee] = useState<string>("");
//   const [productivityTable, setProductivityTable] = useState<any[]>([]);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [dashboardData, setDashboardData] = useState<any>({
//     processMetrics: [],
//     stations: [],
//     employees: [],
//     partsCompleted: [],
//     avgCycleTime: [],
//   });

//   const BASE_URL = import.meta.env.VITE_SERVER_URL;

//   const getData = async () => {
//     try {
//       let url = `${BASE_URL}/api/frontLine/dive-chart-data`;
//       const params = new URLSearchParams();

//       if (startDate) params.append("startDate", startDate.toISOString());
//       if (endDate) params.append("endDate", endDate.toISOString());

//       const res = await axios.get(`${url}?${params.toString()}`);
//       const rawData = res.data.data;

//       setProductivityTable(res.data.productivity || []);
//       const processed = processApiData(rawData);
//       setDashboardData(processed);

//       // Default selection machineName se hogi
//       if (!selectedStation && processed.stations.length > 0)
//         setSelectedStation(processed.stations[0]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [startDate, endDate]);

//   const processApiData = (data: any[]) => {
//     const uniqueMachines = new Set<string>();
//     const uniqueEmployees = new Set<string>();
//     const machineStats: any = {};

//     data.forEach((item) => {
//       const mName = item.machineName || item.processName; // Machine name ko priority di
//       uniqueMachines.add(mName);
//       if (item.employee) uniqueEmployees.add(item.employee);

//       if (!machineStats[mName]) {
//         machineStats[mName] = {
//           text: mName,
//           process: item.processName,
//           effTotal: 0,
//           prodTotal: 0,
//           ctTotal: 0,
//           count: 0,
//         };
//       }
//       machineStats[mName].effTotal += parseFloat(item.efficiency) || 0;
//       machineStats[mName].prodTotal += parseFloat(item.productivity) || 0;
//       machineStats[mName].ctTotal += parseFloat(item.avgCycleTime) || 0;
//       machineStats[mName].count++;
//     });

//     const processMetrics = Object.values(machineStats).map((s: any) => ({
//       text: s.text,
//       process: s.process,
//       efficiency: (s.effTotal / s.count).toFixed(1) + "%",
//       productivity: (s.prodTotal / s.count).toFixed(1) + "%",
//       avgCycle: (s.ctTotal / s.count).toFixed(2),
//     }));

//     return {
//       processMetrics,
//       stations: Array.from(uniqueMachines),
//       employees: Array.from(uniqueEmployees),
//       partsCompleted: data,
//       avgCycleTime: processMetrics.map((m) => ({
//         name: m.text,
//         avgCycle: parseFloat(m.avgCycle),
//       })),
//     };
//   };

//   // Filter logic updated to use machineName
//   const filteredParts = dashboardData.partsCompleted.filter(
//     (p: any) =>
//       (!selectedStation || p.machineName === selectedStation) &&
//       (!selectedEmployee || p.employee === selectedEmployee),
//   );

//   return (
//     <div className="p-4 space-y-6">
//       {/* Date Filters */}
//       <div className="flex items-center gap-2 justify-end mb-4 bg-white p-2 rounded shadow-sm">
//         <span className="text-sm font-medium">Filter:</span>
//         <DatePicker
//           selected={startDate}
//           onChange={(d) => setStartDate(d!)}
//           className="border p-1 rounded text-sm"
//         />
//         <span className="text-gray-400">to</span>
//         <DatePicker
//           selected={endDate}
//           onChange={(d) => setEndDate(d!)}
//           className="border p-1 rounded text-sm"
//         />
//       </div>

//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Metrics Cards */}
//         <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {dashboardData.processMetrics.map((item: any, i: number) => (
//             <div
//               key={i}
//               onClick={() => setSelectedStation(item.text)}
//               className={`p-4 bg-white rounded shadow-sm border-t-4 cursor-pointer transition-all ${
//                 selectedStation === item.text
//                   ? "border-blue-600 scale-[1.02] shadow-md"
//                   : "border-transparent"
//               }`}
//             >
//               <h3
//                 className="font-bold text-sm text-gray-700 truncate mb-2"
//                 title={item.text}
//               >
//                 {item.text}
//               </h3>
//               <div className="flex justify-between items-end">
//                 <div>
//                   <p className="text-[10px] uppercase text-gray-400 font-semibold">
//                     Efficiency
//                   </p>
//                   <p className="text-lg font-bold text-blue-600">
//                     {item.efficiency}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-[10px] uppercase text-gray-400 font-semibold">
//                     Productivity
//                   </p>
//                   <p className="text-lg font-bold text-green-600">
//                     {item.productivity}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stations/Machines List */}
//         <div className="md:w-[20%] bg-white p-4 rounded shadow-sm max-h-[300px] overflow-y-auto">
//           <h3 className="font-bold text-gray-700 mb-3 border-b pb-1">
//             Machines
//           </h3>
//           {dashboardData.stations.map((s: string) => (
//             <label
//               key={s}
//               className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
//             >
//               <input
//                 type="radio"
//                 name="station"
//                 className="w-4 h-4 text-blue-600"
//                 checked={selectedStation === s}
//                 onChange={() => setSelectedStation(s)}
//               />
//               <span className="text-xs font-medium text-gray-600 truncate">
//                 {s}
//               </span>
//             </label>
//           ))}
//         </div>

//         {/* Employees List */}
//         <div className="md:w-[20%] bg-white p-4 rounded shadow-sm max-h-[300px] overflow-y-auto">
//           <h3 className="font-bold text-gray-700 mb-3 border-b pb-1">
//             Employees
//           </h3>
//           <label className="flex items-center gap-2 mb-2 cursor-pointer">
//             <input
//               type="radio"
//               name="employee"
//               checked={selectedEmployee === ""}
//               onChange={() => setSelectedEmployee("")}
//             />
//             <span className="text-xs font-medium">All Employees</span>
//           </label>
//           {dashboardData.employees.map((e: string) => (
//             <label
//               key={e}
//               className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
//             >
//               <input
//                 type="radio"
//                 name="employee"
//                 checked={selectedEmployee === e}
//                 onChange={() => setSelectedEmployee(e)}
//               />
//               <span className="text-xs font-medium text-gray-600">{e}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Parts Completed Table */}
//         <div className="bg-white p-4 rounded shadow-sm">
//           <h3 className="font-bold text-gray-700 mb-4 flex justify-between">
//             Parts Completed
//             <span className="text-xs font-normal text-gray-400">
//               Showing: {selectedStation || "All"}
//             </span>
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="bg-gray-50 text-gray-600 text-left">
//                   <th className="p-2">Machine</th>
//                   <th className="p-2">Part Number</th>
//                   <th className="p-2">Employee</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredParts.length > 0 ? (
//                   filteredParts.map((p: any, i: number) => (
//                     <tr key={i} className="border-t hover:bg-gray-50">
//                       <td className="p-2 text-xs text-blue-600 font-medium">
//                         {p.machineName}
//                       </td>
//                       <td className="p-2 text-xs">{p.partNumber}</td>
//                       <td className="p-2 text-xs text-gray-500">
//                         {p.employee}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={3} className="p-4 text-center text-gray-400">
//                       No data available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Avg Cycle Time Chart */}
//         <div className="bg-white p-4 rounded shadow-sm">
//           <h3 className="font-bold text-gray-700 mb-4">
//             Avg Cycle Time by Machine (min)
//           </h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={dashboardData.avgCycleTime}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} />
//               <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
//               <YAxis tick={{ fontSize: 10 }} />
//               <Tooltip />
//               <Bar dataKey="avgCycle" fill="#4664C2" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Employee Wise Productivity Table */}
//       <div className="bg-white p-4 rounded shadow-sm overflow-x-auto">
//         <h3 className="font-bold text-gray-700 mb-4">
//           Employee Performance Detail
//         </h3>
//         <table className="w-full text-sm border-collapse">
//           <thead>
//             <tr className="bg-gray-800 text-white">
//               <th className="p-2">Process</th>
//               <th className="p-2">Employee</th>
//               <th className="p-2">Avg CT</th>
//               <th className="p-2">Qty</th>
//               <th className="p-2">Scrap</th>
//               <th className="p-2">Prod %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productivityTable.map((item, i) => (
//               <tr key={i} className="border-b text-center hover:bg-gray-50">
//                 <td className="p-2">{item.processName}</td>
//                 <td className="p-2 font-medium">{item.employeeName}</td>
//                 <td className="p-2">{item.CT} min</td>
//                 <td className="p-2 font-bold text-blue-600">{item.Qty}</td>
//                 <td className="p-2 text-red-500">{item.Scrap}</td>
//                 <td className="p-2 bg-green-50 font-bold">{item.Prod}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

import "react-datepicker/dist/react-datepicker.css";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const Dive = () => {
  const [selectedStation, setSelectedStation] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [productivityTable, setProductivityTable] = useState<any[]>([]);

  // 1. Naya state top performers ke liye
  const [topPerformers, setTopPerformers] = useState<any[]>([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dashboardData, setDashboardData] = useState<any>({
    processMetrics: [],
    stations: [],
    employees: [],
    partsCompleted: [],
    avgCycleTime: [],
  });
  const [parts, setParts] = useState<{ part_id: string; partNumber: string }[]>(
    [],
  );
  const [selected, setSelected] = useState<string>("");
  const [loadingParts, setLoadingParts] = useState(true);
  const BASE_URL = import.meta.env.VITE_SERVER_URL;
  const [sortOrder, setSortOrder] = useState<"highest" | "lowest">("highest"); // Naya State

  const sortedRanking = [...topPerformers].sort((a, b) => {
    if (sortOrder === "highest") {
      return b._sortEff - a._sortEff || b._sortProd - a._sortProd;
    } else {
      return a._sortEff - b._sortEff || a._sortProd - b._sortProd;
    }
  });

  const getData = async () => {
    try {
      let url = `${BASE_URL}/api/admin/dive-chart-data`;
      const params = new URLSearchParams();

      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        params.append(
          "startDate",
          start.toLocaleString("sv-SE").replace(" ", "T"),
        );
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        params.append("endDate", end.toLocaleString("sv-SE").replace(" ", "T"));
      }
      if (selected) params.append("partId", selected);

      const res = await axios.get(`${url}?${params.toString()}`);

      // 2. API se data set karna
      setProductivityTable(res.data.productivity || []);
      setTopPerformers(res.data.topPerformers || []); // Backend se sorted ranking data

      const processed = processApiData(res.data.data);
      setDashboardData(processed);

      if (!selectedStation && processed.stations.length > 0)
        setSelectedStation(processed.stations[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchParts = async () => {
    try {
      setLoadingParts(true);
      const res = await axios.get(`${BASE_URL}/api/admin/get-parts`);
      setParts(res.data);
    } catch (error) {
      console.error("Error fetching parts:", error);
    } finally {
      setLoadingParts(false);
    }
  };

  useEffect(() => {
    fetchParts();
    getData();
  }, [startDate, endDate, selected]);

  const processApiData = (data: any[]) => {
    const uniqueMachines = new Set<string>();
    const uniqueEmployees = new Set<string>();
    const machineStats: any = {};

    data.forEach((item) => {
      const mName = item.machineName || item.processName;
      uniqueMachines.add(mName);
      if (item.employee) uniqueEmployees.add(item.employee);

      if (!machineStats[mName]) {
        machineStats[mName] = {
          text: mName,
          process: item.processName,
          effTotal: 0,
          prodTotal: 0,
          ctTotal: 0,
          count: 0,
        };
      }
      machineStats[mName].effTotal += parseFloat(item.efficiency) || 0;
      machineStats[mName].prodTotal += parseFloat(item.productivity) || 0;
      machineStats[mName].ctTotal += parseFloat(item.avgCycleTime) || 0;
      machineStats[mName].count++;
    });

    const processMetrics = Object.values(machineStats).map((s: any) => ({
      text: s.text,
      process: s.process,
      efficiency: (s.effTotal / s.count).toFixed(1) + "%",
      productivity: (s.prodTotal / s.count).toFixed(1) + "%",
      avgCycle: (s.ctTotal / s.count).toFixed(2),
    }));

    return {
      processMetrics,
      stations: Array.from(uniqueMachines),
      employees: Array.from(uniqueEmployees),
      partsCompleted: data,
      avgCycleTime: processMetrics.map((m) => ({
        name: m.text,
        avgCycle: parseFloat(m.avgCycle),
      })),
    };
  };

  const filteredParts = dashboardData.partsCompleted.filter(
    (p: any) =>
      (!selectedStation || p.machineName === selectedStation) &&
      (!selectedEmployee || p.employee === selectedEmployee),
  );

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      {/* Date Filters */}
      <div className="flex flex-wrap items-center gap-4 justify-between mb-4 bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">Operational Dive</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Period:</span>
          <DatePicker
            selected={startDate}
            onChange={(d) => setStartDate(d!)}
            className="border p-1.5 rounded text-sm bg-gray-50"
          />
          <span className="text-gray-400">to</span>
          <DatePicker
            selected={endDate}
            onChange={(d) => setEndDate(d!)}
            className="border p-1.5 rounded text-sm bg-gray-50"
          />
        </div>
      </div>

      {/* Top Cards Grid */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Metrics Cards */}
        <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dashboardData.processMetrics.map((item: any, i: number) => (
            <div
              key={i}
              onClick={() => setSelectedStation(item.text)}
              className={`p-4 bg-white rounded shadow-sm border-t-4 cursor-pointer transition-all ${
                selectedStation === item.text
                  ? "border-blue-600 scale-[1.02] shadow-md"
                  : "border-transparent"
              }`}
            >
              <h3 className="font-bold text-sm text-gray-700 truncate mb-2">
                {item.text}
              </h3>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase text-gray-400 font-semibold">
                    Efficiency
                  </p>
                  <p className="text-lg font-bold text-blue-600">
                    {item.efficiency}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase text-gray-400 font-semibold">
                    Productivity
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    {item.productivity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Machines & Employees Selectors */}
        <div className="md:w-[20%] bg-white p-4 rounded shadow-sm max-h-[250px] overflow-y-auto">
          <h3 className="font-bold text-gray-700 mb-3 border-b pb-1">
            Machines
          </h3>
          {dashboardData.stations.map((s: string) => (
            <label
              key={s}
              className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              <input
                type="radio"
                name="station"
                checked={selectedStation === s}
                onChange={() => setSelectedStation(s)}
              />
              <span className="text-xs font-medium text-gray-600 truncate">
                {s}
              </span>
            </label>
          ))}
        </div>

        <div className="md:w-[20%] bg-white p-4 rounded shadow-sm max-h-[250px] overflow-y-auto">
          <h3 className="font-bold text-gray-700 mb-3 border-b pb-1">
            Employees
          </h3>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="employee"
              checked={selectedEmployee === ""}
              onChange={() => setSelectedEmployee("")}
            />
            <span className="text-xs font-medium">All Employees</span>
          </label>
          {dashboardData.employees.map((e: string) => (
            <label
              key={e}
              className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              <input
                type="radio"
                name="employee"
                checked={selectedEmployee === e}
                onChange={() => setSelectedEmployee(e)}
              />
              <span className="text-xs font-medium text-gray-600">{e}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Parts Completed */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-700">Parts Completed</h3>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="p-2 bg-gray-50 border border-gray-300 text-sm rounded-lg w-40"
            >
              <option value="">All Parts</option>
              {parts.map((part) => (
                <option key={part.part_id} value={part.part_id}>
                  {part.partNumber}
                </option>
              ))}
            </select>
          </div>
          <div className="overflow-y-auto max-h-[300px]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-white">
                <tr className="bg-gray-50 text-gray-600 text-left">
                  <th className="p-2">Machine</th>
                  <th className="p-2">Part Number</th>
                  <th className="p-2">Employee</th>
                </tr>
              </thead>
              <tbody>
                {filteredParts.map((p: any, i: number) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-2 text-xs text-blue-600 font-medium">
                      {p.machineName}
                    </td>
                    <td className="p-2 text-xs">{p.partNumber}</td>
                    <td className="p-2 text-xs text-gray-500">{p.employee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Avg Cycle Time Chart */}
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-bold text-gray-700 mb-4">
            Avg Cycle Time by Machine (min)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dashboardData.avgCycleTime}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="avgCycle" fill="#4664C2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-bold text-gray-700 mb-4 text-start ">
          Employee Performance Detail
        </h3>
        <div className="overflow-x-auto max-h-[300px]">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 z-10">
              <tr className="bg-gray-800 text-white">
                <th className="p-2">Process (Machine)</th>
                <th className="p-2">Employee</th>
                <th className="p-2">Avg CT</th>
                <th className="p-2">Qty</th>
                <th className="p-2">Scrap</th>
                <th className="p-2">Eff %</th>
                <th className="p-2">Prod %</th>
              </tr>
            </thead>
            <tbody>
              {productivityTable.map((item, i) => (
                <tr key={i} className="border-b text-center hover:bg-gray-50">
                  <td className="p-2 text-left">
                    {item.processName} ({item.machineName})
                  </td>
                  <td className="p-2 font-medium">{item.employeeName}</td>
                  <td className="p-2">{item.CT} min</td>
                  <td className="p-2 font-bold text-blue-600">{item.Qty}</td>
                  <td className="p-2 text-red-500">{item.Scrap}</td>
                  <td className="p-2 bg-blue-50 font-bold">{item.Eff}</td>
                  <td className="p-2 bg-green-50 font-bold">{item.Prod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* --- NEW: TOP PERFORMERS TABLE (RANKING) --- */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h3 className="font-bold text-gray-700 mb-4 text-start">
            Top Performance
          </h3>

          {/* Highest / Lowest Toggle Filter */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setSortOrder("highest")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                sortOrder === "highest"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FaSortAmountDown /> Highest First
            </button>
            <button
              onClick={() => setSortOrder("lowest")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                sortOrder === "lowest"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FaSortAmountUp /> Lowest First
            </button>
          </div>
        </div>

        <div className="overflow-x-auto border ">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className={` bg-gray-800 text-white`}>
                <th className="p-3 text-left">Employee Name</th>
                <th className="p-3 text-center">Total Efficiency</th>
                <th className="p-3 text-center">Total Productivity</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-center">Scrap</th>
              </tr>
            </thead>
            <tbody>
              {sortedRanking.length > 0 ? (
                sortedRanking.map((emp, i) => {
                  // Rank calculate logic based on order
                  const displayRank =
                    sortOrder === "highest" ? i + 1 : topPerformers.length - i;

                  return (
                    <tr
                      key={i}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 font-semibold text-gray-700">
                        {emp.employeeName}
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex flex-col items-center">
                          <span
                            className={`px-2 py-1 rounded text-xs font-bold ${
                              parseFloat(emp.totalEfficiency) >= 80
                                ? "bg-green-100 text-green-700"
                                : parseFloat(emp.totalEfficiency) >= 50
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {emp.totalEfficiency}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-center text-gray-600 font-medium">
                        {emp.totalProductivity}
                      </td>
                      <td className="p-3 text-center font-bold text-blue-600">
                        {emp.totalQty}
                      </td>
                      <td className="p-3 text-center text-red-500">
                        {emp.totalScrap}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-gray-400">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Process Wise Detail Table */}
    </div>
  );
};
export default Dive;
