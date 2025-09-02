import React, { useEffect, useState } from "react";
import edit from "../../assets/edit_icon.png";
import { FaCircle, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import add from "../../assets/add.png";
import { Trash2 } from "lucide-react";
import {
  deleteWorkInstruction,
  workInstructionList,
} from "../Work_Instrcution.tsx/https/workInstructionApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  deleteScheduleOrder,
  scheduleStockOrderListApi,
} from "./https/schedulingApis";
interface WorkInstructionItem {
  id: string;
  imageUrl: string;
  name: string;
  partDesc: string;
  stepNumber: string;
  description: string;
  submitDate: string;
  statusColor: string;
}

const mockData: WorkInstructionItem[] = [
  {
    id: "1",
    imageUrl: "/avatar1.jpg",
    name: "John Smith",
    partDesc: "Cut Trim",
    stepNumber: "Step 1",
    description: "Remove burn and sharp edges",
    submitDate: "18/09/2016",
    statusColor: "green",
  },
  {
    id: "2",
    imageUrl: "/avatar2.jpg",
    name: "Emily Johnson",
    partDesc: "Cut Trim",
    stepNumber: "Step 2",
    description: "Remove burn and sharp edges",
    submitDate: "12/06/2020",
    statusColor: "yellow",
  },
  {
    id: "3",
    imageUrl: "/avatar3.jpg",
    name: "Michael Brown",
    partDesc: "Cut Trim",
    stepNumber: "Step 3",
    description: "Remove burn and sharp edges",
    submitDate: "15/08/2017",
    statusColor: "red",
  },
  {
    id: "4",
    imageUrl: "/avatar4.jpg",
    name: "Sarah Wilson",
    partDesc: "Cut Trim",
    stepNumber: "Step 4",
    description: "Remove burn and sharp edges",
    submitDate: "07/05/2016",
    statusColor: "gray",
  },
  {
    id: "5",
    imageUrl: "/avatar5.jpg",
    name: "David Lee",
    partDesc: "Cut Trim",
    stepNumber: "Step 5",
    description: "Remove burn and sharp edges",
    submitDate: "28/10/2012",
    statusColor: "green",
  },
];

const StockOrderScheduleList: React.FC = () => {
  const [workData, setWorkData] = useState<any[]>([]); // Use any[] for now for simplicity
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [selectedType, setSelectedType] = useState("all"); // Filter state
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const rowsPerPage = 10;
  const debouncedSearchVal = useDebounce(searchVal, 500);

  // Custom Debounce Hook (your implementation is fine)
  function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
  }

  // Fetcher function
  const fetchScheduleList = async (page = 1, type = "all", searchTerm = "") => {
    try {
      // Pass all parameters to the API call
      const response = await scheduleStockOrderListApi(
        page,
        rowsPerPage,
        type,
        searchTerm
      );

      setWorkData(response.data.data || []);
      setTotalPages(response.data.pagination?.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch schedule list:", error);
    }
  };

  // Effect to fetch data when page, filter, or debounced search changes
  useEffect(() => {
    fetchScheduleList(currentPage, selectedType, debouncedSearchVal);
  }, [currentPage, selectedType, debouncedSearchVal]);

  // Handlers for UI changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new filter
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = async (id: string) => {
    if (!id) return;
    try {
      await deleteScheduleOrder(id);
      // Refetch data for the current page after deletion
      fetchScheduleList(currentPage, selectedType, debouncedSearchVal);
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-GB"); // DD/MM/YYYY
    } catch (error) {
      return "Invalid Date";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-5">
      <div className="flex justify-between">
        <h1 className="font-semibold text-[20px] md:text-[24px] text-black mb-2">
          All Schedule Orders
        </h1>

        <div className="flex relative">
          {/* <button className="py-2 px-7 rounded-lg border-gray-100 bg-brand text-white flex gap-1 items-center h-fit hover:cursor-pointer">
            <NavLink to="/add-work-instruction">
              <span className="">New Work Instruction</span>
            </NavLink>
          </button> */}
          <div className="absolute top-3 left-2">
            <img src={add} alt="" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center text-sm text-gray-500">
        <NavLink to="/dashboardDetailes">Dashboard</NavLink>
        <FaCircle className="text-[6px]" />
        <span>Order Schedule</span>
        <FaCircle className="text-[6px]" />
        <span>Schedule Order List</span>
      </div>

      <div className="bg-white p-4 mt-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <select
            id="work-instruction-filter"
            className="border w-full md:w-1/3 px-3 py-2 rounded-md"
            value={selectedType}
            onChange={handleSelectChange}
          >
            <option value="all">All Order Types</option>
            <option value="StockOrder">Stock Order</option>
            <option value="CustomOrder">Custom Order</option>
          </select>
          <input
            type="text"
            placeholder="Search by Order #, Part #, or Status..."
            className="border w-full md:w-2/3 px-3 py-2 rounded-md"
            value={searchVal}
            onChange={handleSearchChange}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3">order number</th>
                <th className="px-4 py-3">Product Number</th>
                <th className="px-4 py-3">Part Number</th>
                {/* <th className="px-4 py-3">Process </th> */}
                <th className="px-4 py-3">OrderDate</th>
                <th className="px-4 py-3">Delivery Date</th>
                <th className="px-4 py-3">Completed Date</th>
                <th className="px-4 py-3">Completed By</th>
                <th className="px-4 py-3">Employee Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  {/* SAFELY access order data */}
                  <td className="px-4 py-3">
                    {item.order?.orderNumber || "N/A"}
                  </td>

                  {/* SAFELY access the main product's part number */}
                  <td className="px-4 py-3">
                    {item.order?.part?.partNumber ||
                      item.order?.product?.partNumber ||
                      "N/A"}
                  </td>

                  {/* This is the part for this specific schedule line */}
                  <td className="px-4 py-3">
                    {item.part?.partNumber || "N/A"}
                  </td>

                  {/* SAFELY format the order date */}
                  <td className="px-4 py-3">
                    {formatDate(item.order?.orderDate)}
                  </td>

                  {/* Format the delivery date */}
                  <td className="px-4 py-3">
                    {formatDate(item.delivery_date)}
                  </td>
                  <td className="px-4 py-3">
                    {formatDate(item.completed_date)}
                  </td>
                  <td className="px-4 py-3">
                    {item.completed_by === null
                      ? "Not Available"
                      : item.completed_by}
                  </td>
                  <td className="px-4 py-3">
                    {item?.employee?.firstName} {item?.employee?.lastName}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {item.status || "Unknown"}
                    </span>
                  </td>

                  <td className="px-2 py-3 md:px-3 md:py-4">
                    <FaTrash
                      className="text-red-500 cursor-pointer h-5 w-5"
                      onClick={() => setSelectedId(item.id)}
                    />

                    {/* Your delete confirmation modal is fine */}

                    {selectedId === item.id && (
                      <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                          <h2 className="text-lg font-semibold mb-4">
                            Are you sure?
                          </h2>
                          <p className="mb-4">
                            Do you really want to delete this schedule order.
                          </p>
                          <div className="flex justify-end space-x-3">
                            <button
                              className="px-4 py-2 bg-gray-300 rounded"
                              onClick={() => setSelectedId(null)}
                            >
                              Cancel
                            </button>
                            <button
                              className="px-4 py-2 bg-red-500 text-white rounded"
                              onClick={() => {
                                handleDelete(selectedId);
                                setSelectedId(null);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-between items-center bg-white py-2 px-2 md:px-4 gap-2 ">
          <p className="text-xs md:text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex gap-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`p-1 md:p-2 rounded ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-1 md:p-2 rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockOrderScheduleList;
