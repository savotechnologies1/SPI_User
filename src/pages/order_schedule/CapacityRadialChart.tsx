// import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// interface ProcessCompletion {
//   completionPercentage: string;
//   processName: string;
// }

// interface CapacityRadialChartProps {
//   processCompletion: ProcessCompletion[];
//   overallAverage?: string;
// }

// const CapacityRadialChart = ({
//   processCompletion,
//   overallAverage,
// }: CapacityRadialChartProps) => {
//   if (!processCompletion || processCompletion.length === 0) return null;

//   const series = processCompletion.map((p) =>
//     parseFloat(p.completionPercentage),
//   );
//   const labels = processCompletion.map((p) => p.processName);

//   const palette = [
//     "#1abc9c",
//     "#3498db",
//     "#9b59b6",
//     "#e67e22",
//     "#e74c3c",
//     "#f1c40f",
//     "#2ecc71",
//     "#34495e",
//     "#d35400",
//     "#8e44ad",
//   ];

//   const colors = processCompletion.map(
//     (_, index) => palette[index % palette.length],
//   );

//   const options: ApexOptions = {
//     chart: { type: "radialBar" as const },
//     plotOptions: {
//       radialBar: {
//         hollow: { size: "50%" as const },
//         dataLabels: {
//           name: { fontSize: "14px", color: "#666", fontWeight: "600" as const },
//           value: {
//             fontSize: "20px",
//             color: "#000",
//             fontWeight: "bold" as const,
//             offsetY: 10,
//           },
//           total: {
//             show: true,
//             label: "Average",
//             formatter: () => {
//               return parseFloat(overallAverage || 0).toFixed(2) + "%";
//             },
//           },
//         },
//         track: { background: "#f0f0f0" },
//       },
//     },
//     labels,
//     colors,
//     legend: {
//       show: true,
//       position: "bottom" as const,
//       markers: { size: 10 },
//       itemMargin: { horizontal: 10, vertical: 5 },
//     },
//   };

//   return (
//     <div className="p-6 bg-white rounded-md shadow-md h-full">
//       <h2 className="text-lg font-semibold mb-4">
//         Status By Process ( Schedule Orders Process )
//       </h2>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="radialBar"
//         height={350}
//       />
//     </div>
//   );
// };

// export default CapacityRadialChart;
// import ReactApexChart from "react-apexcharts";
// const CapacityRadialChart = ({ processCompletion, overallAverage }) => {
//   if (!processCompletion || processCompletion.length === 0) return null;

//   const series = processCompletion.map((p) =>
//     parseFloat(p.completionPercentage),
//   );
//   const labels = processCompletion.map((p) => p.processName);

//   const palette = [
//     "#1abc9c",
//     "#3498db",
//     "#9b59b6",
//     "#e67e22",
//     "#e74c3c",
//     "#f1c40f",
//     "#2ecc71",
//     "#34495e",
//     "#d35400",
//     "#8e44ad",
//   ];

//   const colors = processCompletion.map(
//     (_, index) => palette[index % palette.length],
//   );

//   const options = {
//     chart: { type: "radialBar" },
//     plotOptions: {
//       radialBar: {
//         hollow: { size: "50%" },
//         dataLabels: {
//           name: { fontSize: "14px", color: "#666", fontWeight: "600" },
//           value: {
//             fontSize: "20px",
//             color: "#000",
//             fontWeight: "bold",
//             offsetY: 10,
//           },
//           total: {
//             show: true,
//             label: "Average",
//             formatter: () => {
//               return parseFloat(overallAverage || 0).toFixed(2) + "%";
//             },
//           },
//         },
//         track: { background: "#f0f0f0" },
//       },
//     },
//     labels,
//     colors,
//     legend: {
//       show: true,
//       position: "bottom",
//       markers: { size: 10 },
//       itemMargin: { horizontal: 10, vertical: 5 },
//     },
//   };

//   return (
//     <div className="p-6 bg-white rounded-md shadow-md h-full">
//       <h2 className="text-lg font-semibold mb-4">
//         Status By Process ( Schedule Orders Process )
//       </h2>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="radialBar"
//         height={350}
//       />
//     </div>
//   );
// };

// export default CapacityRadialChart;
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// 1. Define the shape of the individual process items
interface ProcessCompletionItem {
  processName: string;
  completionPercentage: string | number;
}

// 2. Define the component props
interface CapacityRadialChartProps {
  processCompletion: ProcessCompletionItem[] | null | undefined;
  overallAverage: string | number;
}

const CapacityRadialChart: React.FC<CapacityRadialChartProps> = ({
  processCompletion,
  overallAverage,
}) => {
  // Guard clause
  if (!processCompletion || processCompletion.length === 0) return null;

  // 3. Explicitly type arrays
  const series: number[] = processCompletion.map((p) =>
    parseFloat(String(p.completionPercentage)),
  );

  const labels: string[] = processCompletion.map((p) => p.processName);

  const palette = [
    "#1abc9c",
    "#3498db",
    "#9b59b6",
    "#e67e22",
    "#e74c3c",
    "#f1c40f",
    "#2ecc71",
    "#34495e",
    "#d35400",
    "#8e44ad",
  ];

  const colors = processCompletion.map(
    (_, index) => palette[index % palette.length],
  );

  // 4. Use ApexOptions type for strict configuration checking
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "50%" },
        dataLabels: {
          name: {
            fontSize: "14px",
            color: "#666",
            fontWeight: "600",
          },
          value: {
            fontSize: "20px",
            color: "#000",
            fontWeight: "bold",
            offsetY: 10,
          },
          total: {
            show: true,
            label: "Average",
            formatter: () => {
              // Ensure we convert overallAverage to string then float safely
              return parseFloat(String(overallAverage || 0)).toFixed(2) + "%";
            },
          },
        },
        track: { background: "#f0f0f0" },
      },
    },
    labels,
    colors,
    legend: {
      show: true,
      position: "bottom",
      markers: { size: 10 },
      itemMargin: { horizontal: 10, vertical: 5 },
    },
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4">
        Status By Process ( Schedule Orders Process )
      </h2>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default CapacityRadialChart;
