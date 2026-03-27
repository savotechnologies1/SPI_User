// import React, { useEffect, useState } from "react";
// import edit from "../../assets/edit_icon.png";
// import { FaCircle, FaTrash } from "react-icons/fa";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import add from "../../assets/add.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import {
//   allScrapEntries,
//   deleteScrapEntry,
// } from "./https/productionResponseApi";
// import { format } from "date-fns";

// const AllScrapEntries: React.FC = () => {
//   const rowsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const navigate = useNavigate();
//   const handleEdit = (id: string) => {
//     navigate(`/edit-work-instruction/${id}`);
//   };
//   const [workData, setWorkData] = useState<[]>([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchVal, setSearchVal] = useState("");
//   const [selectedId, setSelectedId] = useState<string | null>(null);
//   const [selectedValue, setSelectedValue] = useState("all");
//   const debouncedSearchVal = useDebounce(searchVal, 500);
//   function useDebounce(value: unknown, delay: unknown) {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//       const handler = setTimeout(() => {
//         setDebouncedValue(value);
//       }, delay);

//       return () => {
//         clearTimeout(handler);
//       };
//     }, [value, delay]);

//     return debouncedValue;
//   }
//   const handleChange = (e) => {
//     try {
//       setSearchVal(e.target.value);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleSelectChange = (event) => {
//     const newValue = event.target.value;
//     setSelectedValue(newValue);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const fetchWorkInstructionList = async (
//     page = 1,
//     searchTerm = "",
//     type = "",
//   ) => {
//     try {
//       const response = await allScrapEntries(
//         page,
//         rowsPerPage,
//         selectedValue,
//         debouncedSearchVal,
//       );
//       setWorkData(response.data);
//       setTotalPages(response.pagination?.totalPages || 1);
//     } catch (error) {
//       console.error("Failed to fetch work instructions:", error);
//     }
//   };

//   useEffect(() => {
//     fetchWorkInstructionList(currentPage, selectedValue, debouncedSearchVal);
//   }, [currentPage, selectedValue, debouncedSearchVal]);

//   const handleDelete = async (id: string | null, type: string) => {
//     if (!id) return;
//     try {
//       await deleteScrapEntry(id);
//       await new Promise((r) => setTimeout(r, 500));
//       await fetchWorkInstructionList(
//         currentPage,
//         selectedValue,
//         debouncedSearchVal,
//       );
//     } catch (error: unknown) {
//       console.error("Error deleting process:", error);
//     }
//   };

//   const editWorkInstruction = (id, type) => {
//     if (type === "part") {
//       navigate(`/edit-part-scrap-entry/${id}`);
//     } else {
//       navigate(`/edit-product-scrap-entry/${id}`);
//     }
//   };
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen mt-5">
//       <div className="flex justify-between">
//         <h1 className="font-semibold text-[20px] md:text-[24px] text-black mb-2">
//           All Scrap Entries
//         </h1>

//         <div className="flex relative">
//           <button className="py-2 px-7 rounded-lg border-gray-100 bg-brand text-white flex gap-1 items-center h-fit hover:cursor-pointer">
//             <NavLink to="/scrap-entry">
//               <span className="">New Scrap Entry</span>
//             </NavLink>
//           </button>
//           <div className="absolute top-3 left-2">
//             <img src={add} alt="" className="w-4 h-4" />
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-2 items-center text-sm text-gray-500">
//         <NavLink to="/dashboardDetailes">Dashboard</NavLink>
//         <FaCircle className="text-[6px]" />
//         <span>scrap-entries</span>
//       </div>

//       <div className="bg-white p-4 mt-6 rounded-lg">
//         <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
//           <select
//             id="work-instruction-filter"
//             className="border w-full md:w-1/3 px-3 py-2 rounded-md"
//             value={selectedValue}
//             onChange={handleSelectChange}
//           >
//             <option value="all">All</option>
//             <option value="part">parts</option>
//             <option value="product">products</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border w-full md:w-2/3 px-3 py-2 rounded-md"
//             value={searchVal}
//             onChange={(e) => handleChange(e)}
//           />
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-3">Part Number</th>
//                 <th className="px-4 py-3">Supplier Name</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3">Defect Description</th>
//                 <th className="px-4 py-3">Submit By</th>
//                 <th className="px-4 py-3">Submit Date</th>
//                 <th className="px-4 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workData.map((item, index) => (
//                 <tr
//                   key={item.id}
//                   className="border-b hover:bg-gray-50 text-sm md:text-base"
//                 >
//                   {/* 1. Part Number */}
//                   <td className="px-4 py-3">
//                     {item.PartNumber?.partNumber || "N/A"}
//                   </td>

//                   {/* 2. Supplier Company Name */}
//                   <td className="px-4 py-3">
//                     {item.PartNumber?.supplier?.companyName || "N/A"}
//                   </td>

//                   {/* 3. Scrap Status */}
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${item.scrapStatus ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//                     >
//                       {item.scrapStatus ? "Yes" : "No"}
//                     </span>
//                   </td>

//                   {/* 4. Defect Description */}
//                   <td className="px-4 py-3">
//                     {item.defectDesc || "No description"}
//                   </td>

//                   {/* 5. Created By (Employee or Admin) */}
//                   <td className="px-4 py-3">
//                     {item.createdByEmployee
//                       ? `${item.createdByEmployee.firstName} ${item.createdByEmployee.lastName}`
//                       : item.createdByAdmin?.name
//                         ? item.createdByAdmin.name
//                         : "Not Available"}
//                   </td>

//                   {/* 6. Date */}
//                   <td className="px-4 py-3">
//                     <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-600">
//                       {item.createdAt
//                         ? format(new Date(item.createdAt), "MM/dd/yyyy")
//                         : "N/A"}
//                     </span>
//                   </td>

//                   {/* 7. Actions */}
//                   <td className="px-2 py-3 md:px-3 md:py-4 flex gap-2 md:gap-4 items-center">
//                     <button
//                       className="text-brand hover:underline"
//                       onClick={() => editWorkInstruction(item.id, item.type)}
//                     >
//                       <img
//                         src={edit}
//                         alt="Edit"
//                         className="w-4 h-4 md:w-5 md:h-5"
//                       />
//                     </button>

//                     <FaTrash
//                       className="text-red-500 cursor-pointer h-5 w-5 hover:text-red-700"
//                       onClick={() => setSelectedId(item.id)}
//                     />

//                     {/* Delete Confirmation Modal */}
//                     {selectedId === item.id && (
//                       <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//                         <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
//                           <h2 className="text-lg font-semibold mb-2">
//                             Are you sure?
//                           </h2>
//                           <p className="mb-6 text-gray-600 text-sm">
//                             Do you really want to delete this scrap entry for{" "}
//                             <b>{item.PartNumber?.partNumber}</b>?
//                           </p>
//                           <div className="flex justify-end space-x-3">
//                             <button
//                               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//                               onClick={() => setSelectedId(null)}
//                             >
//                               Cancel
//                             </button>
//                             <button
//                               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                               onClick={() => {
//                                 handleDelete(selectedId, item.type);
//                                 setSelectedId(null);
//                               }}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-row justify-between items-center bg-white py-2 px-2 md:px-4 gap-2 ">
//           <p className="text-xs md:text-sm text-gray-600">
//             Page {currentPage} of {totalPages}
//           </p>

//           <div className="flex gap-2">
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               className={`p-1 md:p-2 rounded ${
//                 currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               <FontAwesomeIcon icon={faArrowLeft} />
//             </button>

//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`p-1 md:p-2 rounded ${
//                 currentPage === totalPages
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-gray-300"
//               }`}
//             >
//               <FontAwesomeIcon icon={faArrowRight} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllScrapEntries;
// import React, { useEffect, useState } from "react";
// import edit from "../../assets/edit_icon.png";
// import { FaCircle, FaTrash } from "react-icons/fa";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import add from "../../assets/add.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import {
//   allScrapEntries,
//   deleteScrapEntry,
// } from "./https/productionResponseApi";
// import { format } from "date-fns";

// const AllScrapEntries: React.FC = () => {
//   const rowsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const handleEdit = (id: string) => {
//     navigate(`/edit-work-instruction/${id}`);
//   };
//   const [workData, setWorkData] = useState<[]>([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchVal, setSearchVal] = useState("");
//   const [selectedId, setSelectedId] = useState<string | null>(null);
//   const [selectedValue, setSelectedValue] = useState("all");
//   const debouncedSearchVal = useDebounce(searchVal, 500);
//   function useDebounce(value, delay) {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//       const handler = setTimeout(() => {
//         setDebouncedValue(value);
//       }, delay);

//       return () => {
//         clearTimeout(handler);
//       };
//     }, [value, delay]);

//     return debouncedValue;
//   }
//   const handleChange = (e) => {
//     try {
//       setSearchVal(e.target.value);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleSelectChange = (event) => {
//     const newValue = event.target.value;
//     setSelectedValue(newValue);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const fetchWorkInstructionList = async (
//     page = 1,
//     searchTerm = "",
//     type = "",
//   ) => {
//     try {
//       const response = await allScrapEntries(
//         page,
//         rowsPerPage,
//         selectedValue,
//         debouncedSearchVal,
//       );
//       setWorkData(response.data);
//       setTotalPages(response.pagination?.totalPages || 1);
//     } catch (error) {
//       console.error("Failed to fetch work instructions:", error);
//     }
//   };

//   useEffect(() => {
//     fetchWorkInstructionList(currentPage, selectedValue, debouncedSearchVal);
//   }, [currentPage, selectedValue, debouncedSearchVal]);

//   const handleDelete = async (id: string | null, type: string) => {
//     if (!id) return;
//     try {
//       await deleteScrapEntry(id);
//       await new Promise((r) => setTimeout(r, 500));
//       await fetchWorkInstructionList(
//         currentPage,
//         selectedValue,
//         debouncedSearchVal,
//       );
//     } catch (error: unknown) {
//       console.error("Error deleting process:", error);
//     }
//   };

//   const editWorkInstruction = (id, type) => {
//     if (type === "part") {
//       navigate(`/edit-part-scrap-entry/${id}`);
//     } else {
//       navigate(`/edit-product-scrap-entry/${id}`);
//     }
//   };
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen mt-5">
//       <div className="flex justify-between">
//         <h1 className="font-semibold text-[20px] md:text-[24px] text-black mb-2">
//           All Scrap Entries
//         </h1>

//         <div className="flex relative">
//           <button className="py-2 px-7 rounded-lg border-gray-100 bg-brand text-white flex gap-1 items-center h-fit hover:cursor-pointer">
//             <NavLink to="/scrap-entry">
//               <span className="">New Scrap Entry</span>
//             </NavLink>
//           </button>
//           <div className="absolute top-3 left-2">
//             <img src={add} alt="" className="w-4 h-4" />
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-2 items-center text-sm text-gray-500">
//         <NavLink to="/dashboardDetailes">Dashboard</NavLink>
//         <FaCircle className="text-[6px]" />
//         <span>scrap-entries</span>
//       </div>

//       <div className="bg-white p-4 mt-6 rounded-lg">
//         <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
//           <select
//             id="work-instruction-filter"
//             className="border w-full md:w-1/3 px-3 py-2 rounded-md"
//             value={selectedValue}
//             onChange={handleSelectChange}
//           >
//             <option value="all">All</option>
//             <option value="part">parts</option>
//             <option value="product">products</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border w-full md:w-2/3 px-3 py-2 rounded-md"
//             value={searchVal}
//             onChange={(e) => handleChange(e)}
//           />
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-3">Part Number</th>
//                 <th className="px-4 py-3">Supplier Name</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3">Defect Description</th>
//                 <th className="px-4 py-3">Submit By</th>
//                 <th className="px-4 py-3">Submit Date</th>
//                 <th className="px-4 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workData.map((item, index) => (
//                 <tr
//                   key={item.id}
//                   className="border-b hover:bg-gray-50 text-sm md:text-base"
//                 >
//                   {/* 1. Part Number */}
//                   <td className="px-4 py-3">
//                     {item.PartNumber?.partNumber || "N/A"}
//                   </td>

//                   {/* 2. Supplier Company Name */}
//                   <td className="px-4 py-3">
//                     {item.PartNumber?.supplier?.companyName || "N/A"}
//                   </td>

//                   {/* 3. Scrap Status */}
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${item.scrapStatus ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//                     >
//                       {item.scrapStatus ? "Yes" : "No"}
//                     </span>
//                   </td>

//                   <td className="px-4 py-3">
//                     {item.defectDesc || "No description"}
//                   </td>

//                   <td className="px-4 py-3">
//                     {item.createdByEmployee
//                       ? `${item.createdByEmployee.firstName} ${item.createdByEmployee.lastName}`
//                       : item.createdByAdmin?.name
//                         ? item.createdByAdmin.name
//                         : "Not Available"}
//                   </td>

//                   <td className="px-4 py-3">
//                     <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-600">
//                       {item.createdAt
//                         ? format(new Date(item.createdAt), "MM/dd/yyyy")
//                         : "N/A"}
//                     </span>
//                   </td>
//                   <td className="px-2 py-3 md:px-3 md:py-4 flex gap-2 md:gap-4 items-center">
//                     <button
//                       className="text-brand hover:underline"
//                       onClick={() => editWorkInstruction(item.id, item.type)}
//                     >
//                       <img
//                         src={edit}
//                         alt="Edit"
//                         className="w-4 h-4 md:w-5 md:h-5"
//                       />
//                     </button>

//                     <FaTrash
//                       className="text-red-500 cursor-pointer h-5 w-5 hover:text-red-700"
//                       onClick={() => setSelectedId(item.id)}
//                     />

//                     {selectedId === item.id && (
//                       <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//                         <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
//                           <h2 className="text-lg font-semibold mb-2">
//                             Are you sure?
//                           </h2>
//                           <p className="mb-6 text-gray-600 text-sm">
//                             Do you really want to delete this scrap entry for{" "}
//                             <b>{item.PartNumber?.partNumber}</b>?
//                           </p>
//                           <div className="flex justify-end space-x-3">
//                             <button
//                               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//                               onClick={() => setSelectedId(null)}
//                             >
//                               Cancel
//                             </button>
//                             <button
//                               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                               onClick={() => {
//                                 handleDelete(selectedId, item.type);
//                                 setSelectedId(null);
//                               }}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-row justify-between items-center bg-white py-2 px-2 md:px-4 gap-2 ">
//           <p className="text-xs md:text-sm text-gray-600">
//             Page {currentPage} of {totalPages}
//           </p>

//           <div className="flex gap-2">
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               className={`p-1 md:p-2 rounded ${
//                 currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               <FontAwesomeIcon icon={faArrowLeft} />
//             </button>

//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`p-1 md:p-2 rounded ${
//                 currentPage === totalPages
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-gray-300"
//               }`}
//             >
//               <FontAwesomeIcon icon={faArrowRight} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllScrapEntries;
import React, { useEffect, useState, ChangeEvent } from "react";
import edit from "../../assets/edit_icon.png";
import { FaCircle, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import add from "../../assets/add.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  allScrapEntries,
  deleteScrapEntry,
} from "./https/productionResponseApi";
import { format } from "date-fns";

// 1. Define Data Interfaces
interface ScrapEntry {
  id: string;
  type: string;
  PartNumber?: {
    partNumber: string;
    supplier?: {
      companyName: string;
    };
  };
  scrapStatus: boolean;
  defectDesc: string;
  createdAt: string;
  createdByEmployee?: {
    firstName: string;
    lastName: string;
  };
  createdByAdmin?: {
    name: string;
  };
}

interface ScrapListResponse {
  data: ScrapEntry[];
  pagination?: {
    totalPages: number;
  };
}

// 2. Move useDebounce outside or to a separate utility file
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const AllScrapEntries: React.FC = () => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const [workData, setWorkData] = useState<ScrapEntry[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState("all");

  const debouncedSearchVal = useDebounce(searchVal, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const fetchWorkInstructionList = async (page = 1) => {
    try {
      const response = (await allScrapEntries(
        page,
        rowsPerPage,
        selectedValue,
        debouncedSearchVal,
      )) as ScrapListResponse;

      setWorkData(response.data || []);
      setTotalPages(response.pagination?.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch scrap entries:", error);
    }
  };

  useEffect(() => {
    fetchWorkInstructionList(currentPage);
  }, [currentPage, selectedValue, debouncedSearchVal]);

  const handleDelete = async (id: string | null) => {
    if (!id) return;
    try {
      await deleteScrapEntry(id);
      await fetchWorkInstructionList(currentPage);
    } catch (error: unknown) {
      console.error("Error deleting scrap entry:", error);
    }
  };

  const editWorkInstruction = (id: string, type: string) => {
    if (type === "part") {
      navigate(`/edit-part-scrap-entry/${id}`);
    } else {
      navigate(`/edit-product-scrap-entry/${id}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-[20px] md:text-[24px] text-black mb-2">
          All Scrap Entries
        </h1>

        <div className="flex relative">
          <NavLink
            to="/scrap-entry"
            className="py-2 pl-10 pr-7 rounded-lg border-gray-100 bg-brand text-white flex items-center h-fit"
          >
            <img src={add} alt="" className="absolute left-4 w-4 h-4" />
            <span>New Scrap Entry</span>
          </NavLink>
        </div>
      </div>

      <div className="flex gap-2 items-center text-sm text-gray-500 mt-2">
        <NavLink to="/dashboardDetailes" className="hover:underline">
          Dashboard
        </NavLink>
        <FaCircle className="text-[6px]" />
        <span className="text-gray-400">Scrap Entries</span>
      </div>

      <div className="bg-white p-4 mt-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <select
            className="border w-full md:w-1/3 px-3 py-2 rounded-md outline-none"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="all">All Types</option>
            <option value="part">Parts</option>
            <option value="product">Products</option>
          </select>
          <input
            type="text"
            placeholder="Search by part number..."
            className="border w-full md:w-2/3 px-3 py-2 rounded-md outline-none"
            value={searchVal}
            onChange={handleChange}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold">
              <tr>
                <th className="px-4 py-3">Part Number</th>
                <th className="px-4 py-3">Supplier</th>
                <th className="px-4 py-3">Scrapped</th>
                <th className="px-4 py-3">Defect</th>
                <th className="px-4 py-3">Submitted By</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {workData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">
                    {item.PartNumber?.partNumber || "N/A"}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {item.PartNumber?.supplier?.companyName || "N/A"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.scrapStatus ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                    >
                      {item.scrapStatus ? "YES" : "NO"}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-w-[200px] truncate">
                    {item.defectDesc || "-"}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.createdByEmployee
                      ? `${item.createdByEmployee.firstName} ${item.createdByEmployee.lastName}`
                      : item.createdByAdmin?.name || "System"}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {item.createdAt
                      ? format(new Date(item.createdAt), "MM/dd/yyyy")
                      : "-"}
                  </td>
                  <td className="px-4 py-3 text-right flex gap-3 justify-end items-center">
                    <button
                      onClick={() => editWorkInstruction(item.id, item.type)}
                    >
                      <img
                        src={edit}
                        alt="Edit"
                        className="w-5 h-5 opacity-70 hover:opacity-100"
                      />
                    </button>
                    <button onClick={() => setSelectedId(item.id)}>
                      <FaTrash className="text-red-400 hover:text-red-600 cursor-pointer" />
                    </button>

                    {selectedId === item.id && (
                      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
                          <h2 className="text-lg font-bold mb-2">
                            Confirm Delete
                          </h2>
                          <p className="mb-6 text-gray-600 text-sm">
                            Are you sure you want to delete this scrap entry?
                            This action is permanent.
                          </p>
                          <div className="flex justify-end space-x-3">
                            <button
                              className="px-4 py-2 text-gray-500"
                              onClick={() => setSelectedId(null)}
                            >
                              Cancel
                            </button>
                            <button
                              className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold"
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

        <div className="flex justify-between items-center py-4 px-4 bg-white border-t mt-4">
          <p className="text-xs text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="p-2 border rounded-md disabled:opacity-30"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 border rounded-md disabled:opacity-30"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllScrapEntries;
