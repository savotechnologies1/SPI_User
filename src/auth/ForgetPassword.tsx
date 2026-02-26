import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import signin from "../assets/signin.png";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { forgetPassword } from "./https/authApis";

interface FormData {
  email: string;
}

const ForgetPassword = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await forgetPassword(data);
      console.log("(response(response", response);

      if (response.status === 200) {
        navigate("/otp-verify");
      }
    } catch (error) {
      console.error("Error during forgetPassword:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden xl:block md:w-1/2 bg-gray-100 ">
        <img
          src={signin}
          alt="Containers"
          className="w-full h-full object-cover md:h-full md:min-h-screen"
        />
      </div>

      <div className="w-full xl:w-1/2 bg-white flex items-center justify-center py-10 md:py-0">
        <div className="absolute top-6 right-0 xl:right-6 hidden lg:block">
          <img
            className="w-1/2 xl:w-full max-w-[150px]"
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="w-full sm:max-w-xl xl:max-w-md px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-2">
            Forget Password
          </h2>
          <p className="text-[#89868D] text-sm md:text-base mb-6 text-center md:text-left">
            Enter your email for the verification process, we will send 4 digits
            code to your email.
          </p>

          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-[#F6F7FA] border border-[#F6F7FA] focus:outline-none focus:ring-2 focus:ring-[#052C89] focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {String(errors.email.message)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#052C89] text-white p-3 rounded-lg font-medium hover:bg-[#041E66] transition-colors mt-4"
              >
                Send OTP
              </button>
            </form>
          </Tabs>

          <div className="text-center text-sm mt-2">
            Remember Password?
            <Link
              to="/sign-in"
              className="text-[#4AA6BB] hover:underline font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
