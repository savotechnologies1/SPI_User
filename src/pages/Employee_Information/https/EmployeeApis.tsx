import axiosInstance from "../../../utils/axiosInstance";

export const allTimeClock = async (
  page: Number,
  limit: Number,
  filter: string,
  search: string,
) => {
  try {
    const response = await axiosInstance.get(
      `/all-time-clock-list?page=${page}&limit=${limit}&filter=${filter}&search=${search}`,
    );
    console.log("response.dataresponse.data", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
