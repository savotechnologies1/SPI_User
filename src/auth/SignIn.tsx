import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import signin from "../assets/signin.png";
import password from "../assets/password_icon'.png";
import visible from "../assets/visible_icon.png";
import { FC, useState } from "react";
import { loginApi } from "./https/authApis";
import { useAuth } from "../context/AuthContext";

interface LoginFormData {
  userName: string;
  password: string;
}
interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface LoginApiResponse {
  token: string;
  user: IUser;
  message?: string;
}
const SignIn: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginApi(data);
      if (response && response.status === 201 && response.data?.token) {
        console.log("90090909", response.data?.token);

        login(response.data.token);
        navigate("/", { replace: true });
      } else {
        setError("Login failed: Invalid response from server.");
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        "Invalid email or password. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-100">
        <img
          src={signin}
          alt="Containers"
          className="w-full h-full object-cover min-h-[50vh] lg:min-h-screen"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center py-8 lg:py-0 relative">
        <div className="absolute top-6 right-6 hidden lg:block">
          <img
            src={logo}
            alt="Logo"
            className="
    h-8 
    sm:h-10 
    md:h-12 
    lg:h-14 
    xl:h-16 
    2xl:h-20 
    w-auto 
    max-w-[120px] 
    sm:max-w-[150px] 
    md:max-w-[180px] 
    lg:max-w-[220px] 
    object-contain
  "
          />
        </div>
        <div className="absolute top-4 left-0 right-0 mx-auto lg:hidden">
          <img className="w-32 mx-auto" src={logo} alt="Company Logo" />
        </div>

        <div className="w-full max-w-md px-6 lg:px-8 mt-16 lg:mt-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4">
            Welcome back
          </h2>
          <p className="text-gray-600 text-center lg:text-left mb-8">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                {...register("userName", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className={`w-full p-3 rounded-lg border ${
                  errors.userName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#052C89]`}
                autoComplete="email"
              />
              {errors.userName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="••••••••"
                  className={`w-full p-3 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#052C89]`}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    className="w-6"
                    src={showPassword ? visible : password}
                    alt={showPassword ? "Hide password" : "Show password"}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                to="/forget-password"
                className="text-sm text-[#F2451C] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#213C70] hover:bg-[#1a315a] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
