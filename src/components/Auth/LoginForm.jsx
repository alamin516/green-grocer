import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { styles } from "../../utils/styles";
import { useLoginMutation } from "../../lib/features/auth/authApi";
import { Link, useLocation } from "react-router-dom";

// Validation Schema
const schema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .test("emailOrPhone", "Invalid email or phone number!", function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10,14}$/; // Simple phone regex (10-14 digits)
      return emailRegex.test(value) || phoneRegex.test(value);
    })
    .required("Please enter your email or phone number"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters"),
});

const LoginForm = ({ navigate, user }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { data, error, isSuccess }] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const from = location?.state?.from.pathname || '/'

  useEffect(() => {
    if (isSuccess && user) {
      toast.success("Login successfully!");
      setLoading(false);
      if (user?.role === "admin" || user?.role === "manager" || user?.role === "editor") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    }
    if (error) {
      setLoading(false);
      toast.error(error?.data?.message || "An error occurred.");
    }
  }, [isSuccess, error, data, navigate, from, user]);

  const formik = useFormik({
    initialValues: { emailOrPhone: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ emailOrPhone, password }) => {
      setLoading(true);
      await login({ emailOrPhone, password });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailOrPhone" className={`${styles.label}`}>
          Enter your email or phone number here
        </label>
        <input
          type="text"
          id="emailOrPhone"
          value={values.emailOrPhone}
          onChange={handleChange}
          placeholder="Enter email or phone number"
          className={`${
            errors.emailOrPhone && touched.emailOrPhone && "border-red-500"
          } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
        />
        {errors.emailOrPhone && touched.emailOrPhone && (
          <span className="text-red-500 p-2 block">{errors.emailOrPhone}</span>
        )}

        <div className="w-full mt-2 relative mb-1">
          <label htmlFor="password" className={`${styles.label}`}>
            Enter your password here
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="********"
            className={`${
              errors.password && touched.password && "border-red-500"
            } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
          />
          {showPassword ? (
            <Visibility
              className="absolute bottom-2 right-2 z-10 cursor-pointer dark:text-[#666]"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <VisibilityOff
              className="absolute bottom-2 right-2 z-10 cursor-pointer dark:text-[#666]"
              onClick={() => setShowPassword(true)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 p-2 block">{errors.password}</span>
          )}
        </div>

        <div className="w-full mt-2">
          <button
            type="submit"
            className="flex justify-center items-center px-6 rounded-md bg-[#fa9f00] text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer"
          >
            {loading ? (
              <span className="inline-block w-6 h-6 border-2 border-white rounded-full border-t-transparent border-double animate-spin transition-all duration-200"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div className="w-full mt-8 text-center">
          <Link to="/forget-password" className={`${styles.label} hover:text-green-700`}>Forget Password</Link>
        </div>

        {/* <div className="w-full mt-8 text-center">
          <p className={`${styles.label}`}>Or join with</p>
        </div>

        <div className="flex items-center justify-center my-3 gap-2">
          <Google className="cursor-pointer  text-[#666] bg-[#fa9f00] dark:bg-white p-2 rounded-full !w-10 !h-10" />
          <GitHub className="cursor-pointer text-[#666] bg-[#fa9f00] dark:bg-white p-2 rounded-full !w-10 !h-10" />
        </div> */}

        <div className="w-full mt-8 text-center">
          <p className={`${styles.label} text-[#666]`}>
            Not have an account?{" "}
            <span
              className="text-[#008459] cursor-pointer"
              onClick={() => navigate("/create-account")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
