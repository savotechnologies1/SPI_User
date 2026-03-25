import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Period = "daily" | "weekly" | "monthly" | "yearly";

interface ChartItem {
  date: string;
  rawDate: string;
  cost: number;
}
const formatFullDate = (date: string | Date) =>
  new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

const formatXAxis = (dateStr: string, period: Period) => {
  const date = new Date(dateStr);
  if (period === "yearly") {
    return date.getFullYear().toString();
  }
  return new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
  }).format(date);
};

const Inventory = () => {
  const [period, setPeriod] = useState<Period>("daily");
  const [chartData, setChartData] = useState<ChartItem[]>([]);
  const [totalInventoryCost, setTotalInventoryCost] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  const fetchInventoryGraph = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${BASE_URL}/api/admin/inventory-data?period=${period}`,
      );

      const formatted: ChartItem[] = res.data.map((item: any) => ({
        date: formatXAxis(item.date, period),
        rawDate: item.date,
        cost: item.totalInventoryCost,
      }));

      setChartData(formatted);

      if (res.data.length > 0) {
        setTotalInventoryCost(res.data[res.data.length - 1].totalInventoryCost);
      } else {
        setTotalInventoryCost(0);
      }
    } catch (error) {
      console.error("Inventory graph error:", error);
      setChartData([]);
      setTotalInventoryCost(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventoryGraph();
  }, [period]);

  return (
    <div className="p-4">
      <h1 className="font-semibold text-2xl mb-4">Inventory</h1>
      <div className="mb-6 flex items-center gap-2">
        <label className="font-medium">Select Period:</label>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as Period)}
          className="border rounded px-3 py-1 bg-white"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* 🔹 KPI */}
      <div className="mb-6 p-4 border rounded-lg shadow bg-white">
        <h2 className="text-lg font-semibold">
          Total Inventory Cost: $
          {totalInventoryCost.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </h2>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-lg font-medium mb-3">
          Inventory Trend ({period.charAt(0).toUpperCase() + period.slice(1)})
        </h2>

        {loading ? (
          <p className="text-center py-10 text-gray-500">Loading graph...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e0e0e0"
              />
              <XAxis dataKey="date" fontSize={12} tickMargin={10} />
              <YAxis fontSize={12} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                labelFormatter={(label, payload) => {
                  if (payload?.[0]?.payload?.rawDate) {
                    return period === "yearly"
                      ? `Year: ${new Date(payload[0].payload.rawDate).getFullYear()}`
                      : `Date: ${formatFullDate(payload[0].payload.rawDate)}`;
                  }
                  return label;
                }}
              />
              <Legend />
              <Line
                name="Inventory Cost"
                type="monotone"
                dataKey="cost"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Inventory;
