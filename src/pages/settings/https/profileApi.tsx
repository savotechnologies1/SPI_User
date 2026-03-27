import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

export const updateProfile = async (
  data: object,
  employeeProfileImg: File | string | null,
  file: boolean,
) => {
  try {
    let payload: any;

    if (file === true && employeeProfileImg) {
      // Handle file upload with FormData
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (employeeProfileImg instanceof File) {
        formData.append("employeeProfileImg", employeeProfileImg);
      } else if (typeof employeeProfileImg === "string") {
        formData.append("employeeProfileImg", employeeProfileImg);
      }
      payload = formData;
    } else {
      // Handle regular data update without file
      payload = {
        ...data,
        employeeProfileImg:
          typeof employeeProfileImg === "string" ? employeeProfileImg : "",
      };
    }

    const response = await axiosInstance.put(
      "/profile-update",
      payload,
      file === true
        ? {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        : {
            headers: {
              "Content-Type": "application/json",
            },
          },
    );
    if (response.status === 200) {
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile-detail");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProfile = async () => {
  try {
    const response = await axiosInstance.put("/delete-profile-image");
    if (response.status === 200) {
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error:any) {
    toast.error(error.response.data.message);
  }
};
