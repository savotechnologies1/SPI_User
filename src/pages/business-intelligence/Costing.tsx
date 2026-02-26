import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../../assets/green.png";
import img3 from "../../assets/orange.png";
import scrap_1 from "../../assets/scrap_1.png";
import scrap_3 from "../../assets/scrap_3.png";
import scrap_cost from "../../assets/scrap_cost.png";
import supplier_return from "../../assets/supplier_return.png";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import DatePicker from "react-datepicker";

const formatDollar = (value: number) => `${value.toLocaleString()}`;

interface CardData {
  num: string;
  text: string;
  scrap_img: string;
  scrap: string;
  textColor: string;
  bgColor?: string;
}

interface CostingDataItem {
  name: string;
  part1: number;
  part2: number;
}

interface MonthlyCOGSItem {
  name: string;
  value: number;
}

const Costing = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [costingData, setCostingData] = useState<CostingDataItem[]>([]);
  const [monthlyCOGS, setMonthlyCOGS] = useState<MonthlyCOGSItem[]>([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Generate list of years dynamically
  const years = Array.from(
    { length: new Date().getFullYear() - 2020 + 1 },
    (_, i) => 2020 + i,
  );
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/admin/costing-data?year=${selectedYear}`,
        );
        const data = res.data;

        // Cards
        setCardsData([
          {
            num: formatDollar(data.totalYearCost || 0),
            text: "Total Year Cost",
            scrap_img: scrap_cost,
            scrap: scrap_1,
            textColor: "text-red-500",
          },
          {
            num: formatDollar(data.supplierReturn || 0),
            text: "Supplier Return",
            scrap_img: supplier_return,
            scrap: scrap_3,

            textColor: "text-green-500",
          },
        ]);

        // Vertical Bar Chart
        setCostingData([
          {
            name: "Cost",
            part1: data.part1Cost || 0,
            part2: data.part2Cost || 0,
          },
        ]);

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const cogs = data.monthlyCOGS || {};
        const chartData = months.map((month, index) => {
          const key = `${selectedYear}-${String(index + 1).padStart(2, "0")}`;
          return { name: month, value: cogs[key] || 0 };
        });
        setMonthlyCOGS(chartData);
      } catch (error) {
        console.error("Error fetching COGS:", error);
      }
    };

    fetchData();
  }, [selectedYear]);

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <label className="text-sm font-medium">Select Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border rounded-md p-1 text-sm"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="mt-6">
        <h1 className="font-semibold text-2xl mb-2">Costing</h1>
        <div className="flex flex-col md:flex-row gap-4">
          {cardsData.map((item) => (
            <div
              key={item.text}
              className={`flex flex-col justify-between bg-white rounded-md w-full p-2 gap-2 border ${item.bgColor || ""}`}
            >
              <div className="flex items-center gap-2">
                <img className="w-[40px]" src={item.scrap_img} alt="" />
                <div>
                  <p className="text-sm text-gray-600">{item.text}</p>
                  <p className="font-bold text-xl">{item.num}</p>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-4 mt-6">
        <h2 className="text-lg font-medium mb-2">Monthly COGS</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyCOGS}>
            <CartesianGrid stroke="#e0e0e0" />
            <XAxis dataKey="name" fontSize={10} />
            <YAxis />
            <Tooltip formatter={(value) => formatDollar(value)} />
            <Legend />
            <Line
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Costing;
