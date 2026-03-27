// import { useEffect, useRef, useState } from "react";
// import flag1 from "../assets/flag1.png";
// import flag2 from "../assets/flag2.png";
// import flag3 from "../assets/flag3.png";
// import NotificationList, {
//   getAllStationNotification,
// } from "./NotificationList";
// import Account from "./Account";
// import { getProfile } from "../pages/settings/https/profileApi";
// import profile from "../assets/profile.png";
// import { FaBell } from "react-icons/fa";

// // --- 1. Interface ko sahi karein (JSX ke matching) ---
// interface Profile {
//   employeeProfileImg?: string; // profileImg ki jagah employeeProfileImg
//   firstName?: string;
//   lastName?: string;
//   email?: string;
// }

// // Notification API ka response type define karein
// interface NotificationRes {
//   counts: {
//     unread: number;
//   };
// }

// const Navbar = () => {
//   // Setters ke naam standard rakhein (setIsLanguage etc)
//   const [isLanguage, setIsLanguage] = useState(false);
//   const [isNotification, setIsNotification] = useState(false);
//   const [isProfile, setIsProfile] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0);

//   const languageRef = useRef<HTMLDivElement>(null);
//   const notificationRef = useRef<HTMLDivElement>(null);
//   const BASE_URL = import.meta.env.VITE_SERVER_URL;

//   const [profileDetail, setProfileDetail] = useState<Profile | null>(null);

//   // --- 2. Notification count fetching with typing ---
//   const fetchUnreadNotificationCount = async () => {
//     try {
//       const res: NotificationRes = await getAllStationNotification(false);
//       setUnreadCount(res.counts?.unread || 0);
//     } catch (error) {
//       console.error("Notification Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUnreadNotificationCount();
//   }, []);

//   // --- 3. Click Outside Logic (Refined) ---
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       // Language dropdown close logic
//       if (
//         isLanguage &&
//         languageRef.current &&
//         !languageRef.current.contains(event.target as Node)
//       ) {
//         setIsLanguage(false);
//       }
//       // Notification list close logic
//       if (
//         isNotification &&
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target as Node)
//       ) {
//         setIsNotification(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isLanguage, isNotification]);

//   // --- 4. Profile API fetching ---
//   const getProfileApi = async () => {
//     try {
//       const response = await getProfile();
//       if (response?.data) {
//         setProfileDetail(response.data);
//       }
//     } catch (error) {
//       console.error("Profile Fetch Error:", error);
//     }
//   };

//   useEffect(() => {
//     getProfileApi();
//   }, []);

//   return (
//     <div className="fixed top-0 right-0 w-full z-30 items-center">
//       <div className="flex items-center justify-end bg-white p-4 shadow w-full">
//         <div className="flex items-center space-x-4 justify-between relative">
//           {/* Notification Icon */}
//           <div className="flex space-x-4 relative">
//             <FaBell
//               size={27}
//               className="cursor-pointer text-blue-900/30"
//               onClick={() => {
//                 setIsNotification(true);
//                 fetchUnreadNotificationCount();
//               }}
//             />

//             {unreadCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow-md">
//                 {unreadCount}
//               </span>
//             )}
//           </div>

//           {/* Profile Image */}
//           <div className="flex space-x-4">
//             <img
//               src={
//                 profileDetail?.employeeProfileImg
//                   ? `${BASE_URL}/uploads/employeeProfileImg/${profileDetail.employeeProfileImg}`
//                   : profile
//               }
//               alt="Profile"
//               onClick={() => setIsProfile(true)}
//               className="w-[50px] h-[50px] rounded-full border-2 border-green-400 cursor-pointer object-cover shadow-md hover:scale-105 transition-transform duration-200"
//             />
//           </div>
//         </div>

//         {/* Language Dropdown */}
//         {isLanguage && (
//           <div
//             ref={languageRef}
//             className="flex flex-col gap-4 absolute top-16 right-12 z-10 p-4 bg-white shadow-xl rounded-md"
//           >
//             <div className="flex flex-col gap-2">
//               {[
//                 { flag: flag1, lang: "English" },
//                 { flag: flag2, lang: "French" },
//                 { flag: flag3, lang: "German" },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex gap-2 hover:bg-gray-100 items-center cursor-pointer px-6 py-2"
//                 >
//                   <img src={item.flag} alt={item.lang} className="w-5" />
//                   <p>{item.lang}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Notification Side Panel */}
//         {isNotification && (
//           <>
//             <div
//               className="fixed inset-0 bg-black/30 z-10"
//               onClick={() => setIsNotification(false)}
//             />
//             <div
//               ref={notificationRef}
//               className="absolute right-0 top-0 z-20 h-screen bg-white"
//             >
//               <NotificationList
//                 onClose={() => {
//                   setIsNotification(false);
//                   fetchUnreadNotificationCount();
//                 }}
//                 onNotificationAction={fetchUnreadNotificationCount}
//               />
//             </div>
//           </>
//         )}

//         {/* Profile/Account Side Panel */}
//         {isProfile && (
//           <>
//             <div
//               className="fixed inset-0 bg-black/30 z-10"
//               onClick={() => setIsProfile(false)}
//             />
//             <div className="absolute right-0 top-0 z-20 h-screen bg-white">
//               <Account
//                 onClose={() => setIsProfile(false)}
//                 profileDetail={profileDetail}
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useEffect, useRef, useState } from "react";
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";
import NotificationList, {
  getAllStationNotification,
} from "./NotificationList";
import Account from "./Account";
import { getProfile } from "../pages/settings/https/profileApi";
import profile from "../assets/profile.png";
import { FaBell } from "react-icons/fa";

// --- 1. Interfaces ---
interface Profile {
  employeeProfileImg?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

// NotificationList file mein jo interface banayi thi uske saath match hona chahiye
interface NotificationApiResponse {
  counts: {
    unread: number;
    all: number;
    archived: number;
  };
  data: any[];
  message?: string;
}

const Navbar = () => {
  const [isLanguage, setIsLanguage] = useState<boolean>(false);
  const [isNotification, setIsNotification] = useState<boolean>(false);
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [profileDetail, setProfileDetail] = useState<Profile | undefined>(
    undefined,
  );

  const languageRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // TypeScript ko batane ke liye ki meta env exist karta hai
  const BASE_URL = (import.meta as any).env.VITE_SERVER_URL;

  // --- 2. Notification fetching ---
  const fetchUnreadNotificationCount = async () => {
    try {
      // API call mein generic type pass karein agar possible ho,
      // warna 'as' keyword use karein
      const res = (await getAllStationNotification(
        false,
      )) as NotificationApiResponse;
      setUnreadCount(res.counts?.unread || 0);
    } catch (error) {
      console.error("Notification Error:", error);
    }
  };

  useEffect(() => {
    fetchUnreadNotificationCount();
  }, []);

  // --- 3. Click Outside Logic ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isLanguage &&
        languageRef.current &&
        !languageRef.current.contains(target)
      ) {
        setIsLanguage(false);
      }

      // Note: Notification list ke case mein background overlay bhi
      // toggle handle kar raha hai, but safety ke liye ye theek hai
      if (
        isNotification &&
        notificationRef.current &&
        !notificationRef.current.contains(target)
      ) {
        // Sirf tab close karein agar click overlay par na ho
        // (kyunki overlay khud close handle kar raha hai)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguage, isNotification]);

  // --- 4. Profile API ---
  const getProfileApi = async () => {
    try {
      const response = await getProfile();
      if (response && response.data) {
        setProfileDetail(response.data);
      }
    } catch (error) {
      console.error("Profile Fetch Error:", error);
    }
  };

  useEffect(() => {
    getProfileApi();
  }, []);

  return (
    <div className="fixed top-0 right-0 w-full z-30 items-center">
      <div className="flex items-center justify-end bg-white p-4 shadow w-full">
        <div className="flex items-center space-x-4 justify-between relative">
          {/* Notification Icon */}
          <div className="flex space-x-4 relative">
            <button
              type="button"
              className="relative p-1"
              onClick={() => {
                setIsNotification(true);
                fetchUnreadNotificationCount();
              }}
            >
              <FaBell size={27} className="cursor-pointer text-blue-900/30" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex space-x-4">
            <img
              src={
                profileDetail?.employeeProfileImg
                  ? `${BASE_URL}/uploads/employeeProfileImg/${profileDetail.employeeProfileImg}`
                  : profile
              }
              alt="Profile"
              onClick={() => setIsProfile(true)}
              className="w-[50px] h-[50px] rounded-full border-2 border-green-400 cursor-pointer object-cover shadow-md hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Language Dropdown */}
        {isLanguage && (
          <div
            ref={languageRef}
            className="flex flex-col gap-4 absolute top-16 right-12 z-10 p-4 bg-white shadow-xl rounded-md border"
          >
            <div className="flex flex-col gap-2">
              {[
                { flag: flag1, lang: "English" },
                { flag: flag2, lang: "French" },
                { flag: flag3, lang: "German" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 hover:bg-gray-100 items-center cursor-pointer px-6 py-2 rounded"
                >
                  <img src={item.flag} alt={item.lang} className="w-5" />
                  <p className="text-sm font-medium">{item.lang}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notification Side Panel */}
        {isNotification && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-10"
              onClick={() => setIsNotification(false)}
            />
            <div
              ref={notificationRef}
              className="absolute right-0 top-0 z-20 h-screen bg-white shadow-2xl"
            >
              <NotificationList
                onClose={() => {
                  setIsNotification(false);
                  fetchUnreadNotificationCount();
                }}
                onNotificationAction={fetchUnreadNotificationCount}
              />
            </div>
          </>
        )}

        {/* Profile/Account Side Panel */}
        {isProfile && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-10"
              onClick={() => setIsProfile(false)}
            />
            <div className="absolute right-0 top-0 z-20 h-screen bg-white shadow-2xl">
              <Account
                onClose={() => setIsProfile(false)}
                profileDetail={profileDetail}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
