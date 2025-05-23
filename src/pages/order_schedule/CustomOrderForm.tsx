import  { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "cortez-herring", label: "Cortez Herring" },
  { value: "john-doe", label: "John Doe" },
  { value: "jane-smith", label: "Jane Smith" },
];

const partOption = [
  { value: "cortez-herring", label: "Cortez Herring" },
  { value: "john-doe", label: "John Doe" },
  { value: "jane-smith", label: "Jane Smith" },
];
const processOption = [
  { value: "cortez-herring", label: "Cortez Herring" },
  { value: "john-doe", label: "John Doe" },
  { value: "jane-smith", label: "Jane Smith" },
];
const assignOption = [
  { value: "cortez-herring", label: "Cortez Herring" },
  { value: "john-doe", label: "John Doe" },
  { value: "jane-smith", label: "Jane Smith" },
];

const CustomOrderForm = () => {
  // const [formData, setFormData] = useState({
  //   orderNumber: "",
  //   orderDate: "2025-02-26",
  //   shipDate: "2025-02-26",
  //   customer: "Cortez Herring",
  //   customerName: "",
  //   customerEmail: "",
  //   customerPhone: "",
  //   productNumber: "",
  //   cost: "",
  //   quantity: "",
  //   description: "",
  //   file: null,
  //   partFamily: "Cortez Herring",
  //   partNumber: "",
  //   partDesc: "",
  //   partQuantity: "",
  //   partCost: "",
  //   time: "09:33 AM",
  //   process: "Cortez Herring",
  //   assignTo: "Cortez Herring",
  // });

   const [file, setFile] = useState<File | null>(null);
  
    const handleFileChange = (event :any) => {
      if (event.target.files.length > 0) {
        setFile(event.target.files[0]);
      }
    };

  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

  interface FormData {
    orderNumber: number;
    OrderDate: string;
    ShipDate: string;
    Name?: string;
    email?: string;
    mobile?: string;
    productNumber?: number;
    Cost?: number;
    ProductQuantity?: number;
    ProductDescription?: string;
    ProductDrawing?: File | null;
    partNumber?: number;
    PartDesc?: string;
    PartQuantity?: string;
    PartCost?: string;
    Time?: string;
  }

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-4 bg-white rounded-2xl border shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* Channel & Platform */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 ">
          <div>
            <label className="font-semibold">Order Number</label>
            <input
              {...register("orderNumber", {
                required: "Order Number required",
              })}
              type="number"
              placeholder="Enter Order Number"
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Order Date</label>
            <input
              {...register("OrderDate", { required: "Order Date is required" })}
              type="date"
              placeholder=""
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Ship Date </label>
            <input
              {...register("ShipDate", { required: "Ship Date  is required" })}
              type="date"
              placeholder=""
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-4 bg-white px-6 ">
          <div>
            <label className="font-semibold">Select Customer</label>
            <Select
              isMulti
              options={options}
              className="w-full "
              placeholder="Select People"
            />
          </div>

          <div>
            <label className="font-semibold">Customer Name</label>
            <input
              {...register("Name")}
              type="text"
              placeholder="Enter Customer Name "
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
          <div className="col-span-">
            <label className="font-semibold">Customer Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Customer Email"
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
          <div className="col-span-">
            <label className="font-semibold">Customer Phone</label>
            <input
              {...register("mobile")}
              type="number"
              placeholder="Enter Customer Phone  "
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
        </div>

        {/* Codes & Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-white px-6 ">
          <div>
            <label className="font-semibold">Product Number</label>
            <input
              {...register("productNumber")}
              type="number"
              placeholder="Enter Product No..."
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Cost</label>
            <input
              {...register("Cost")}
              type="number"
              placeholder="Enter Cost"
              className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>

          <div>
            <label className="font-semibold">Product Quantity</label>
            <input
              {...register("ProductQuantity", {})}
              type="number"
              placeholder="Enter Quantity"
              className="border py-3 px-4 rounded-md w-full  text-gray-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 bg-white px-6 ">
          <div className="col-span-2">
            <label className="font-semibold">Product Description</label>
            <input
              {...register("ProductDescription")}
              type="text"
              placeholder="Meta Description"
              className="border py-6 px-4 rounded-md w-full  placeholder-gray-600"
            />
          </div>

          <div>
          <label className="font-semibold">Product Drawing</label>
            
            <label className="font-semibold border py-3 px-4  rounded-md w-full  text-gray-600 block">
              <input
                {...register("ProductDrawing", {})}
                type="file"
                placeholder="CHOOSE  FILE"
                className=" hidden "
                onChange={handleFileChange}
              />

              {file ? (
                <span className="">{file.name}</span>
              ) : (
                <span className="text-sm">CHOOSE FILE</span>
              )}
            </label>
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-white px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-4 gap-4">
            <div>
              <label className="font-semibold">Select Part Family</label>
              <Select
                isMulti
                options={partOption}
                className="w-full "
                placeholder="Select part"
              ></Select>
            </div>

            <div>
              <label className="font-semibold">Part Number</label>

              <input
                {...register("partNumber")}
                type="number"
                placeholder="Enter part Number"
                className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
              />
            </div>

            <div>
              <label className="font-semibold">Part Desc</label>

              <input
                {...register("PartDesc")}
                type="text"
                placeholder="Enter part desc"
                className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
              />
            </div>

            <div>
              <label className="font-semibold">Part Quantity</label>
              <input
                {...register("PartQuantity")}
                type="text"
                placeholder="Enter part Quantity"
                className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
              />
            </div>

            <div>
              <label className="font-semibold">Part Cost</label>
              <input
                {...register("PartCost")}
                type="text"
                placeholder="Enter part Cost"
                className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
              />
            </div>
          </div>
        </div>
        <div className="bg-white px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4 items-center">
            <div>
              <label className="font-semibold">Time</label>
              <input
                {...register("Time")}
                type="date"
                placeholder="09:33 AM"
                className="border py-3 px-4 rounded-md w-full  placeholder-gray-600"
              />
            </div>
            <div>
              <label className="font-semibold">Select Process</label>
              <Select
                isMulti
                options={processOption}
                className="w-full "
                placeholder="Select part"
              ></Select>
            </div>
            <div className="flex gap-4 items-end ">
              {" "}
              <div className="">
                <label className="font-semibold">Assign To </label>
                <Select
                isMulti
                options={assignOption}
                className="w-full "
                placeholder="Select part"
              ></Select>
              </div>
              <div className="items-center justify-center  ">
                <p className="bg-brand text-white p-2  text-sm rounded-sm">
                  Add
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className=" mt-6">
          <button className="px-6 py-2 bg-brand text-white text-md  hover:bg-[#1a2e57] transition ml-6 ">
            Create Custom Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomOrderForm;
