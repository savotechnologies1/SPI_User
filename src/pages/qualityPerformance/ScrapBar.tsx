// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ScrapBar = ({ qualityData }) => {
//   const data = {
//     labels: qualityData.map((item) => item.part.process.processName),
//     datasets: [
//       {
//         label: "Manual ",
//         data: qualityData.map((item) => item.scrapQuantity),
//         backgroundColor: "rgba(214, 69, 80, 1)",
//         borderColor: "rgba(214, 69, 80, 1)",
//         borderWidth: 1,
//         maxBarThickness: 90,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position:
//           window.innerWidth < 768 ? ("bottom" as const) : ("top" as const),
//         labels: {
//           usePointStyle: true,
//           boxWidth: 8,
//           padding: 10,
//           font: {
//             size: window.innerWidth < 768 ? 10 : 12,
//           },
//         },
//       },
//       title: {
//         display: false,
//       },
//       tooltip: {
//         bodyFont: {
//           size: window.innerWidth < 768 ? 10 : 12,
//         },
//         titleFont: {
//           size: window.innerWidth < 768 ? 12 : 14,
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: window.innerWidth < 768 ? 10 : 12,
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           font: {
//             size: window.innerWidth < 768 ? 10 : 12,
//           },
//           stepSize: 2,
//         },
//         title: {
//           display: true,
//           text: "Qty",
//           font: {
//             size: window.innerWidth < 768 ? 12 : 14,
//           },
//         },
//       },
//     },
//     barPercentage: window.innerWidth < 768 ? 0.6 : 0.8,
//     categoryPercentage: window.innerWidth < 768 ? 0.7 : 0.9,
//   };

//   return (
//     <div className="w-full mx-auto p-2 md:p-4 bg-white rounded-lg shadow-sm">
//       <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">
//         Scrap Chart
//       </h1>
//       <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default ScrapBar;

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ScrapBar = ({ qualityData }) => {
  // Filter data to show only items that have scrap (optional, but looks better)
  const chartDataEntries = qualityData.filter((item) => item.scrapQuantity > 0);

  const data = {
    // FIX: Changed from item?.part?.process?.processName to item.partNumber
    labels: chartDataEntries.map((item) =>
      item.partNumber ? item.partDescription : item.partNumber,
    ),
    datasets: [
      {
        label: "Scrap Quantity",
        data: chartDataEntries.map((item) => item.scrapQuantity),
        backgroundColor: "rgba(214, 69, 80, 1)",
        borderColor: "rgba(214, 69, 80, 1)",
        borderWidth: 1,
        maxBarThickness: 90,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: window.innerWidth < 768 ? "bottom" : "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          // Adds description to tooltip for better UX
          afterLabel: (context) => {
            const item = chartDataEntries[context.dataIndex];
            return item.partDescription ? `Desc: ${item.partDescription}` : "";
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        title: { display: true, text: "Part Number" },
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
        title: {
          display: true,
          text: "Qty",
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto p-2 md:p-4 bg-white rounded-lg shadow-sm">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">
        Scrap Analysis by Part
      </h1>
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
        {chartDataEntries.length > 0 ? (
          <Bar data={data} options={options} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No scrap data available for selected dates
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrapBar;
