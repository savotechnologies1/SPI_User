// import React from "react";

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

// interface DataTableProps {
//   manualData: ManualItem[];
//   monitorData: MonitorItem[];
//   productionScrapData: ProductionItem[];
// }

// const DataTable: React.FC<DataTableProps> = ({
//   manualData,
//   monitorData,
//   productionScrapData,
// }) => {
//   return (
//     <div className="space-y-10 bg-white rounded-2xl p-4 w-full ">
//       <div>
//         <h2 className="text-lg font-semibold mb-3">Manual</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-3 py-2 border">Process</th>
//                 <th className="px-3 py-2 border">Part Desc.</th>
//                 <th className="px-3 py-2 border">Qty</th>
//                 <th className="px-3 py-2 border">Scrap</th>
//               </tr>
//             </thead>
//             <tbody>
//               {manualData.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-50">
//                   <td className="px-3 py-2 border">{item.process}</td>
//                   <td className="px-3 py-2 border">{item.part}</td>
//                   <td className="px-3 py-2 border">{item.qty}</td>
//                   <td className="px-3 py-2 border">{item.scrap}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-lg font-semibold mb-3">Part to Monitor</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-3 py-2 border">Process</th>
//                 <th className="px-3 py-2 border">Part Desc.</th>
//                 <th className="px-3 py-2 border">Cycle Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {monitorData.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-50">
//                   <td className="px-3 py-2 border">{item.process}</td>
//                   <td className="px-3 py-2 border">{item.part}</td>
//                   <td className="px-3 py-2 border">
//                     {item.cycleTime ? item.cycleTime : "00"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-lg font-semibold mb-3">Scrap Parts</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-3 py-2 border">Process</th>
//                 <th className="px-3 py-2 border">Part Desc.</th>
//                 <th className="px-3 py-2 border">Scrap</th>
//               </tr>
//             </thead>
//             <tbody>
//               {productionScrapData.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-50">
//                   <td className="px-3 py-2 border">{item.process}</td>
//                   <td className="px-3 py-2 border">{item.part}</td>
//                   <td className="px-3 py-2 border">{item.scrap}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
// // import React from "react";

// // interface ManualItem {
// //   processId: string;
// //   processName: string;
// //   processDesc: string;
// //   part: string;
// //   totalQuantity: number;
// //   totalCompleted: number;
// //   totalScrap: number;
// // }

// // interface MonitorItem {
// //   process: string;
// //   processDesc: string;
// //   part: string;
// //   cycleTime: string;
// //   qty: string;
// //   scrap: number;
// // }
// // interface ProductionItem {
// //   processName: string;
// //   processDesc: string;
// //   part: string;
// //   scrap: number;
// // }

// // interface DataTableProps {
// //   manualData: ManualItem[];
// //   monitorData: MonitorItem[];
// //   productionScrapData: ProductionItem[];
// // }

// // const DataTable: React.FC<DataTableProps> = ({
// //   manualData,
// //   monitorData,
// //   productionScrapData,
// // }) => {
// //   return (
// //     <div className="space-y-10 bg-white rounded-2xl p-4 w-full ">
// //       <div>
// //         <h2 className="text-lg font-semibold mb-3">Manual</h2>
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-sm text-left border border-gray-200">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="px-3 py-2 border">Process</th>
// //                 <th className="px-3 py-2 border">Part Desc.</th>
// //                 <th className="px-3 py-2 border">Qty</th>
// //                 <th className="px-3 py-2 border">Scrap</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {manualData.map((item, index) => (
// //                 <tr key={index} className="even:bg-gray-50">
// //                   <td className="px-3 py-2 border">{item.process}</td>
// //                   <td className="px-3 py-2 border">{item.part}</td>
// //                   <td className="px-3 py-2 border">{item.qty}</td>
// //                   <td className="px-3 py-2 border">{item.scrap}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       <div>
// //         <h2 className="text-lg font-semibold mb-3">Part to Monitor</h2>
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-sm text-left border border-gray-200">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="px-3 py-2 border">Process</th>
// //                 <th className="px-3 py-2 border">Part Desc.</th>
// //                 <th className="px-3 py-2 border">Cycle Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {monitorData.map((item, index) => (
// //                 <tr key={index} className="even:bg-gray-50">
// //                   <td className="px-3 py-2 border">{item.process}</td>
// //                   <td className="px-3 py-2 border">{item.part}</td>
// //                   <td className="px-3 py-2 border">
// //                     {item.cycleTime ? item.cycleTime : "00"}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       <div>
// //         <h2 className="text-lg font-semibold mb-3">Scrap Parts</h2>
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-sm text-left border border-gray-200">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="px-3 py-2 border">Process</th>
// //                 <th className="px-3 py-2 border">Part Desc.</th>
// //                 <th className="px-3 py-2 border">Scrap</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {productionScrapData.map((item, index) => (
// //                 <tr key={index} className="even:bg-gray-50">
// //                   <td className="px-3 py-2 border">{item.process}</td>
// //                   <td className="px-3 py-2 border">{item.part}</td>
// //                   <td className="px-3 py-2 border">{item.scrap}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DataTable;
// import React from "react";

// interface ManualItem {
//   processId: string;
//   processName: string; // Used this instead of .process
//   processDesc: string;
//   part: string;
//   qty: number; // Used this instead of .qty
//   totalCompleted: number;
//   scrap: number; // Used this instead of .scrap
//   process: string;
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
//   processName: string; // Used this instead of .process
//   process: string;
//   processDesc: string;
//   part: string;
//   scrap: number;
// }

// interface DataTableProps {
//   manualData: ManualItem[];
//   monitorData: MonitorItem[];
//   productionScrapData: ProductionItem[];
// }

// const DataTable: React.FC<DataTableProps> = ({
//   manualData,
//   monitorData,
//   productionScrapData,
// }) => {
//   return (
//     <div className="space-y-10 bg-white rounded-2xl p-4 w-full ">
//       {/* Manual Table */}
//       <div>
//         <h2 className="text-lg font-semibold mb-3">Manual</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-3 py-2 border">Process</th>
//                 <th className="px-3 py-2 border">Part Desc.</th>
//                 <th className="px-3 py-2 border">Qty</th>
//                 <th className="px-3 py-2 border">Scrap</th>
//               </tr>
//             </thead>
//             <tbody>
//               {manualData.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-50">
//                   {/* Matches ManualItem interface */}
//                   <td className="px-3 py-2 border">{item.process}</td>
//                   <td className="px-3 py-2 border">{item.part}</td>
//                   <td className="px-3 py-2 border">{item.qty}</td>
//                   <td className="px-3 py-2 border">{item.scrap}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Part to Monitor Table */}
//       <div>
//         <h2 className="text-lg font-semibold mb-3">Part to Monitor</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-3 py-2 border">Process</th>
//                 <th className="px-3 py-2 border">Part Desc.</th>
//                 <th className="px-3 py-2 border">Cycle Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {monitorData.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-50">
//                   {/* Matches MonitorItem interface */}
//                   <td className="px-3 py-2 border">{item.process}</td>
//                   <td className="px-3 py-2 border">{item.part}</td>
//                   <td className="px-3 py-2 border">
//                     {item.cycleTime ? item.cycleTime : "00"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Scrap Parts Table */}
//       <div>
//         <h2 className="text-lg font-semibold mb-3">Scrap Parts</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-3 py-2 border">Process</th>
//                 <th className="px-3 py-2 border">Part Desc.</th>
//                 <th className="px-3 py-2 border">Scrap</th>
//               </tr>
//             </thead>
//             <tbody>
//               {productionScrapData.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-50">
//                   {/* Matches ProductionItem interface */}
//                   <td className="px-3 py-2 border">{item.process}</td>
//                   <td className="px-3 py-2 border">{item.part}</td>
//                   <td className="px-3 py-2 border">{item.scrap}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
import React from "react";

export interface ManualItem {
  process: string;
  part: string;
  qty: number | string;
  scrap: number;
}

export interface MonitorItem {
  process: string;
  part: string;
  cycleTime: string;
}

export interface ProductionItem {
  process: string;
  part: string;
  scrap: number;
}

interface DataTableProps {
  manualData: ManualItem[];
  monitorData: MonitorItem[];
  productionScrapData: ProductionItem[];
}

const DataTable: React.FC<DataTableProps> = ({
  manualData,
  monitorData,
  productionScrapData,
}) => {
  console.log("manualDatamanualData", manualData);
  return (
    <div className="space-y-10 bg-white rounded-2xl p-4 w-full ">
      {/* Manual Table */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Manual</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border">Process</th>
                <th className="px-3 py-2 border">Part Desc.</th>
                <th className="px-3 py-2 border">Qty</th>
                <th className="px-3 py-2 border">Scrap</th>
              </tr>
            </thead>
            <tbody>
              {manualData.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-3 py-2 border">{item.process}</td>
                  <td className="px-3 py-2 border">{item.part}</td>
                  <td className="px-3 py-2 border">{item.qty}</td>
                  <td className="px-3 py-2 border">{item.scrap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part to Monitor Table */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Part to Monitor</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border">Process</th>
                <th className="px-3 py-2 border">Part Desc.</th>
                <th className="px-3 py-2 border">Cycle Time</th>
              </tr>
            </thead>
            <tbody>
              {monitorData.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-3 py-2 border">{item.process}</td>
                  <td className="px-3 py-2 border">{item.part}</td>
                  <td className="px-3 py-2 border">
                    {item.cycleTime ? item.cycleTime : "00"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scrap Parts Table */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Scrap Parts</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border">Process</th>
                <th className="px-3 py-2 border">Part Desc.</th>
                <th className="px-3 py-2 border">Scrap</th>
              </tr>
            </thead>
            <tbody>
              {productionScrapData.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-3 py-2 border">{item.process}</td>
                  <td className="px-3 py-2 border">{item.part}</td>
                  <td className="px-3 py-2 border">{item.scrap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
