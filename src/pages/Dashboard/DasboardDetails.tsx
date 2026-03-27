// import Chart from "./Chart";
// import OrderStatus from "./OrderStatus";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProfile } from "../../redux/profileSlice";
// import { useNavigate } from "react-router-dom";
// import { dashBoardData } from "./https/dashboardApi";
// import Productivity from "./Productivity";
// import DashboardCards from "./DashboardCards";

// const DasboardDetails = () => {
//   const [photo, setPhoto] = useState(null);
//   const [dashboardDetails, setDashboardDetails] = useState(null);
//   const [profileImg, setProfileImg] = useState(null);
//   const [selectedMonthForApi, setSelectedMonthForApi] = useState("");
//   const dispatch = useDispatch();
//   const profile = useSelector((state) => state.profile.data);
//   const navigate = useNavigate();
//   const apiUrl = import.meta.env.VITE_SERVER_URL;
//   useEffect(() => {
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   const dashboardApi = async (month) => {
//     try {
//       const data = await dashBoardData(month);
//       setDashboardDetails(data);
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//     }
//   };

//   useEffect(() => {
//     dashboardApi(selectedMonthForApi);
//     if (profile?.profileImg) {
//       const imageUrl = `${apiUrl}/uploads/profileImg/${profile.profileImg}`;
//       setPhoto(imageUrl);
//       setProfileImg(profile.profileImg);
//     }
//   }, [profile, selectedMonthForApi]);

//   const handleMonthChangeFromChild = (month) => {
//     setSelectedMonthForApi(month);
//   };

//   if (!dashboardDetails) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 mt-5">
//       <h1 className="text-xl font-semibold mt-4">Welcome back,Frontline👋</h1>
//       <DashboardCards dashboardDetails={dashboardDetails} />
//       <div className="py-4">
//         <div className=" mt-8 bg-gray-100 w-full">
//           <Chart />
//         </div>

//         <div className="py-8  "></div>
//         <Productivity productivity={dashboardDetails.productivityData} />
//         <div className="py-4">
//           <OrderStatus
//             orders={dashboardDetails}
//             onMonthChange={handleMonthChangeFromChild}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DasboardDetails;
import Chart from "./Chart";
import OrderStatus from "./OrderStatus";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/profileSlice";
import { dashBoardData } from "./https/dashboardApi";
import Productivity from "./Productivity";
import DashboardCards from "./DashboardCards";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

// --- 1. Interfaces Define Karein ---

interface Profile {
  profileImg?: string;
  employeeProfileImg?: string; // Dashboard aur Navbar ke mismatch ko handle karne ke liye
}

interface RootState {
  profile: {
    data: Profile | null;
  };
}

// Yeh interface waisa hi hona chahiye jaisa API data bhej rahi hai
// Aur isme wo properties honi chahiye jo DashboardCards aur OrderStatus expect kar rahe hain
interface DashboardData {
  productivityData: any;
  // Agar OrderStatus ko 'orders' ya 'status' chahiye, toh wo yahan define karein
  // [key: string]: any; lagane se "no properties in common" wala error khatam ho jata hai
  [key: string]: any;
}

const DasboardDetails = () => {
  // --- 2. States with Types ---
  const [photo, setPhoto] = useState<string | null>(null);
  const [dashboardDetails, setDashboardDetails] =
    useState<DashboardData | null>(null);
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [selectedMonthForApi, setSelectedMonthForApi] = useState<string>("");

  // Redux Dispatch with Thunk support
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

  // Selector with State Type
  const profile = useSelector((state: RootState) => state.profile.data);

  const apiUrl = import.meta.env.VITE_SERVER_URL;

  // Initial Profile Fetch
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  // Dashboard API Call
  const dashboardApi = async (month: string) => {
    try {
      const data = await dashBoardData(month);
      setDashboardDetails(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  // Sync Profile Image Logic
  useEffect(() => {
    if (profile?.profileImg || profile?.employeeProfileImg) {
      const imgName = profile.profileImg || profile.employeeProfileImg;
      const imageUrl = `${apiUrl}/uploads/profileImg/${imgName}`;
      setPhoto(imageUrl);
      setProfileImg(imgName || null);
    }
  }, [profile, apiUrl]);

  // Fetch Dashboard on Month Change
  useEffect(() => {
    dashboardApi(selectedMonthForApi);
  }, [selectedMonthForApi]);

  const handleMonthChangeFromChild = (month: string) => {
    setSelectedMonthForApi(month);
  };

  // Loading State
  if (!dashboardDetails) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-4 mt-5">
      <h1 className="text-xl font-semibold mt-4">Welcome back, Frontline 👋</h1>

      {/* Cards Display */}
      <DashboardCards dashboardDetails={dashboardDetails} />

      <div className="py-4">
        <div className="mt-8 bg-gray-100 w-full">
          <Chart />
        </div>

        <div className="py-8"></div>

        {/* Productivity Section */}
        <Productivity productivity={dashboardDetails.productivityData} />

        <div className="py-4">
          {/* 
            'as any' ka use karne se "no properties in common" wala error resolve ho jayega.
            Yeh tab zaroori hota hai jab Parent aur Child ki interface definitions bilkul alag hon.
          */}
          <OrderStatus
            orders={dashboardDetails as any}
            onMonthChange={handleMonthChangeFromChild}
          />
        </div>
      </div>
    </div>
  );
};

export default DasboardDetails;
