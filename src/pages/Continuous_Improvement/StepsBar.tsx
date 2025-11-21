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
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StepsBar = ({ partId }: { partId: string }) => {
  const [chartData, setChartData] = useState<any>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  // 🔄 screen width listener for responsive chart
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔄 Fetch data
  useEffect(() => {
    if (partId) fetchCycleTimeData(partId);
  }, [partId]);

  const fetchCycleTimeData = async (partId: string) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/frontLine/cycle-time-comparision-data?startDate=2025-09-01&endDate=2025-09-12&partId=${partId}`
      );

      const stepData = res.data.data.stepWiseCT.stepAverages || [];

      setChartData({
        labels: stepData.map((item: any) => `Step ${item.stepNumber}`),
        datasets: [
          {
            label: "Average Duration (mins)",
            data: stepData.map((item: any) => item.averageDuration),
            backgroundColor: "rgba(5, 44, 137, 0.8)",
            borderColor: "rgba(5, 44, 137, 1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching cycle time data:", error);
    }
  };

  // 🔧 Responsive chart options using screenWidth state
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: screenWidth < 768 ? "bottom" : "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: screenWidth < 768 ? 10 : 12 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${context.raw.toFixed(2)} mins`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: screenWidth < 768 ? 10 : 12 },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: screenWidth < 768 ? 10 : 12 },
        },
        title: {
          display: true,
          text: "Cycle Time (mins)",
          font: { size: screenWidth < 768 ? 12 : 14 },
        },
      },
    },
  };

  return (
    <div className="mx-auto p-3 sm:p-4 bg-white rounded-lg shadow-sm mt-6 w-[100%]">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
        Process Step Analysis
      </h1>

      <div className=" h-[300px] sm:h-[350px] md:h-[420px]">
        {chartData ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p className="text-center text-gray-500">Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default StepsBar;
