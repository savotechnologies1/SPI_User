import img1 from "../../assets/green.png";
import img3 from "../../assets/orange.png";
import scrap_1 from "../../assets/scrap_1.png";
import scrap_3 from "../../assets/scrap_3.png";
import scrap_cost from "../../assets/scrap_cost.png";
import supplier_return from "../../assets/supplier_return.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TooltipItem,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const Production = () => {
  const [chartData, setChartData] = useState<
    { processName: string; efficiency: number }[]
  >([]);
  const [totals, setTotals] = useState<{
    totalEfficiency: number;
    totalScrapCost: number;
    totalSupplierReturnCost: number;
  }>({ totalEfficiency: 0, totalScrapCost: 0, totalSupplierReturnCost: 0 });
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/admin/production-efficiency`,
        );
        setChartData(res.data.data);
        setTotals(res.data.totals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: chartData.map((item) => item.processName),
    datasets: [
      {
        label: "Production Efficiency (%)",
        data: chartData.map((item) => item.efficiency),
        borderColor: "#052C89",
        fill: true,
        backgroundColor: "rgba(5, 44, 137, 0.1)",
        yAxisID: "y1",
        pointBackgroundColor: "#052C89",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"line">) => {
            if (context.dataset.label === "Production Efficiency (%)") {
              return `${context.raw}%`;
            }
            return `₹${context.raw}`;
          },
        },
      },
      legend: { display: true },
    },
    scales: {
      y1: {
        type: "linear" as const,
        position: "left" as const,
        beginAtZero: true,
        max: 100,
        ticks: { callback: (value) => `${value}%` },
        title: { display: true, text: "Efficiency (%)" },
      },
    },
  };
  const totalsCards = [
    {
      text: "Total Efficiency",
      num: `${totals.totalEfficiency}%`,
      scrap_img: "/icons/efficiency.png",
    },
    {
      text: "Total Scrap Cost",
      num: `$${totals.totalScrapCost}`,
      scrap_img: "/icons/scrap.png",
    },
    {
      text: "Total Supplier Return",
      num: `$${totals.totalSupplierReturnCost}`,
      scrap_img: "/icons/return.png",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="font-semibold text-2xl mb-4">Production</h1>

      {/* Totals Cards */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {totalsCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white rounded-md w-full p-4 shadow-md"
          >
            <div className="flex items-center gap-2">
              <img className="w-10" src={item.scrap_img} alt="" />
              <div>
                <p className="text-sm text-gray-600">{item.text}</p>
                <p className="font-bold text-xl">{item.num}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg w-full">
        <h2 className="text-xl font-semibold mb-4">
          Production Efficiency by Process
        </h2>
        <div className="w-full h-64 md:h-80 lg:h-96">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Production;
