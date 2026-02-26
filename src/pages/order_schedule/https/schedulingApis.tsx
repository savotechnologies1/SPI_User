import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const handleAxiosError = (error: unknown, defaultMessage: string) => {
  const axiosError = error as AxiosError<{ message: string }>;
  if (axiosError.response?.data?.message) {
    toast.error(axiosError.response.data.message);
  } else {
    toast.error(defaultMessage);
  }
};

export const addStockOrder = async (apiData: object) => {
  try {
    const response = await axiosInstance.post("/create-stock-order", apiData);

    if (response.status === 201) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: unknown) {
    handleAxiosError(error, "Failed to create stock order.");
  }
};

export const getProductParts = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/product-parts/${id}`);
    const data = response.data?.data ?? response.data ?? [];
    return Array.isArray(data) ? data : [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Failed to fetch part numbers.");
    }
    return [];
  }
};
export const selectCustomer = async () => {
  try {
    const response = await axiosInstance.get(
      `/select-customer-for-stock-order`,
    );
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Failed to fetch customers.");
    }
    return [];
  }
};

export const selectProductNumber = async () => {
  try {
    const response = await axiosInstance.get(
      `/select-product-number-for-stock`,
    );
    return response.data.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
    }
    return [];
  }
};

export const selectPartNumber = async () => {
  try {
    const response = await axiosInstance.get(
      `/select-part-number-for-custom-order`,
    );
    return response.data.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Failed to fetch part numbers.");
    }
    return [];
  }
};

export const selectProcess = async () => {
  try {
    const response = await axiosInstance.get(`/select-process`);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Failed to fetch processes.");
    }
    return [];
  }
};

export const addCustomOrder = async (apiData: object) => {
  try {
    const response = await axiosInstance.post("/add-custom-orders", apiData);
    if (response.status === 201) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: unknown) {
    handleAxiosError(error, "Failed to add custom order.");
    return null;
  }
};

export const searchStockOrder = async (searchParams: object) => {
  try {
    const response = await axiosInstance.get("/search-stock-order", {
      params: searchParams,
    });
    return response.data || [];
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("An error occurred while searching for stock orders.");
    }
    return [];
  }
};

export const searchCustomOrder = async (searchParams: object) => {
  try {
    const response = await axiosInstance.get("/search-custom-order", {
      params: searchParams,
    });
    return response.data || [];
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("An error occurred while searching for stock orders.");
    }
    return [];
  }
};
export const scheduleStockOrder = async (apiData: object) => {
  try {
    const response = await axiosInstance.post("/stock-order-schedule", apiData);

    return response;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};

export const scheduleCustomOrder = async (apiData: object) => {
  try {
    const response = await axiosInstance.post(
      "/custom-order-schedule",
      apiData,
    );
    if (response.status === 201) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};

export const scheduleStockOrderListApi = async (
  page = 1,
  limit = 5,
  type: string,
  searchTerm: string,
) => {
  try {
    const response = await axiosInstance.get(
      `/stock-order-schedule-list?page=${page}&limit=${limit}&order_type=${type}&search=${searchTerm}`,
    );
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("An error occurred while searching for stock orders.");
    }
    return [];
  }
};
export const validateQty = async (productId: string, quantity: number) => {
  try {
    const res = await fetch(`${BASE_URL}/api/validate-stock-quantity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, quantity }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Something went wrong.");
  }
};

export const deleteEmployee = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/delete-employee/${id}`);
    if (response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: unknown) {
    handleAxiosError(error, "Failed to delete employee.");
    return null;
  }
};

export const deleteScheduleOrder = async (id: string, orderId: string) => {
  try {
    const response = await axiosInstance.delete(
      `/delete-schedule-order/${id}?orderId=${orderId}`,
    );
    toast.success(response.data.message);

    if (response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: unknown) {
    handleAxiosError(error, "Failed to delete schedule order.");
  }
};
